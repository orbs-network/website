import {
  getElement,
  hideElement,
  onOutsideEvent,
  onMouseEnterAndLeaveEvent,
  showElement,
  init,
} from "../common.js";
import { globeConfig } from "./config.js";
import {
  getRandomPointByWeight,
  generatePathData,
  generateArcData,
  getGlobeCardsAndWeights,
} from "./util.js";
import { points } from "./points.js";
export const globeController = new (class GlobeClass {
  cards = [];
  weights = [];
  globe = null;
  selectedCard;
  async createGlobe() {
    this.points = points;
    const { cards, weights } = getGlobeCardsAndWeights();
    this.cards = cards;
    this.weights = weights;
    const newGlobe = Globe();
    this.setGlobeBaseConfig(newGlobe);
    this.setPathData(newGlobe);
    await this.setPoligons(newGlobe);
    //this.setArcData(newGlobe);
    this.startGlobeAutoRotation(newGlobe);
    this.globe = newGlobe;
    setTimeout(() => {
      const loader = getElement(".globe-loader");
      hideElement(loader);
    }, 2000);
  }

  setPoligons(globElem) {
    fetch("assets/js/globe/geo.geojson")
      .then((res) => res.json())
      .then((countries) => {
        globElem
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.6)
          .hexPolygonColor(() => globeConfig.orbsMainColor);
      });
  }

  setGlobeBaseConfig(globElem) {
    const globeContainer = getElement("#globeViz");

    globElem
      .globeImageUrl(globeConfig.img)
      .backgroundColor("#121822")
      .pointsData(this.points)
      .pointAltitude(0.003)
      .pointColor(() => globeConfig.orbsMainColor)
      .onPointClick(() => this.selectPoint())
      .pointsTransitionDuration(300)
      .pointLabel((e) => {
        return null;
      })
      .onPointHover((point) => {
        if (point) {
          return this.stopGlobeAutoRotation(globElem);
        }
        return this.startGlobeAutoRotation(globElem);
      })
      .pointRadius(1)(globeContainer);
    const globeMaterial = globElem.globeMaterial();

    globeMaterial.fog = false;
  }

  startGlobeAutoRotation = (globElem) => {
    // globElem.controls().autoRotate = true;
    // globElem.controls().autoRotateSpeed = globeConfig.rotationSpeed;
  };

  stopGlobeAutoRotation = (globElem) => {
    globElem.controls().autoRotate = false;
  };

  setPathData = (globElem) => {
    const pathData = generatePathData(globeConfig);

    globElem
      .pathsData(pathData)
      .pathColor(() => ["rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"])
      .pathDashLength(0.01)
      .pathDashGap(0.004)
      .pathDashAnimateTime(100000)
      .pathPointAlt((pnt) => pnt[2]); // set altitude accessor
  };

  setArcData = (globElem) => {
    const arcsData = generateArcData(this.points, globeConfig.colors);
    globElem
      .arcsData(arcsData)
      .arcColor("color")
      .arcDashLength(() => 1)
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 4000 + 500);
  };

  changeGlobeImage = (src) => {
    this.globe.globeImageUrl(src);
  };

  selectPoint() {
    const card = getRandomPointByWeight(
      this.cards,
      this.weights,
      this.selectedCard
    );
    showElement(card);
    this.selectedCard = card;
  }

  changeGlobePosition(point, duration) {
    const { lat, lng } = point;
    this.globe.pointOfView({ lat, lng, altitude: 2.5 }, duration);
  }

  init() {
    try {
      this.createGlobe();
      window.addEventListener("resize", (event) => {
        this.globe.width([event.target.innerWidth]);
        this.globe.height([event.target.innerHeight]);
      });
      this.addEventsToCards(this.cards);
    } catch (error) {
      console.log("could not find globe container");
    }
  }

  addEventsToCards = (cards) => {
    cards.forEach((card) => {
      onOutsideEvent(card, () => this.onCardClose(card));
      //stop animation if mouse inside
      // onMouseEnterAndLeaveEvent(
      //   card,
      //   this.stopGlobeRotation,
      //   this.startGlobeRotationWithDelay
      // );
    });
  };

  onCardClose = () => {
    this.hideSelectedPoint();
  };

  hideSelectedPoint() {
    if (!this.selectedCard) return;
    hideElement(this.selectedCard);
  }
})();

window.onload = async () => {
  init();
  globeController.init();
};
