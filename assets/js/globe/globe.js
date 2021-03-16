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
let pointSelectInterval = null;
let pointHideTimeout = null;
let handleMouseOutTimeout;

export const globeController = new (class GlobeClass {
  cards = [];
  weights = [];
  globe = null;
  selectedCard;
  clickTriggerd;
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
    this.setGlobePoints(newGlobe);
    this.startGlobeAutoRotation(newGlobe);
    this.globe = newGlobe;

    setTimeout(() => {
      const loader = getElement(".globe-loader");
      hideElement(loader);
      startInterval();
    }, 2000);
  }

  setPoligons(globElem) {
    fetch("assets/js/globe/geo.geojson")
      .then((res) => res.json())
      .then((countries) => {
        globElem
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .hexPolygonColor(() => globeConfig.orbsMainColor);
      });
  }

  setGlobeBaseConfig(globElem) {
    globElem
      .backgroundColor(globeConfig.backgroundColor)
      .globeImageUrl(globeConfig.img);
    const globeMaterial = globElem.globeMaterial();

    globeMaterial.fog = false;
  }

  setGlobePoints(globElem) {
    const globeContainer = getElement("#globeViz");
    globElem
      .pointsData(this.points)
      .pointAltitude(0.003)
      .pointColor(() => globeConfig.orbsMainColor)
      .onPointClick(this.handlePointClick)
      .pointsTransitionDuration(300)

      .onPointHover((point) => {
        if (point) {
          stopInterval();
          return this.stopGlobeAutoRotation(globElem);
        }
        if (!this.clickTriggerd) {
          startInterval();
        }
        return this.startGlobeAutoRotation(globElem);
      })
      .pointRadius(0.7)(globeContainer);
  }

  startGlobeAutoRotation = (globElem) => {
    globElem.controls().autoRotate = true;
    globElem.controls().autoRotateSpeed = globeConfig.rotationSpeed;
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

  handlePointClick = () => {
    stopInterval();

    this.clickTriggerd = true;
    setTimeout(() => {
      this.selectPoint();
    }, 50);
  };

  selectPoint() {
    const card = getRandomPointByWeight(
      this.cards,
      this.weights,
      this.selectedCard
    );

    let x = chance.floating({ min: -65, max: -35 });
    let y = chance.floating({ min: -65, max: -35 });

    const transform = `scale(1) translate(${x}%, ${y}% )`;
    showElement(card, transform);
    this.selectedCard = card;
  }

  changeGlobePosition(point, duration) {
    const { lat, lng } = point;
    this.globe.pointOfView({ lat, lng, altitude: 2.5 }, duration);
  }

  addEventsToCards = (cards) => {
    cards.forEach((card) => {
      onOutsideEvent(card, this.handleOutSideClick);
      onMouseEnterAndLeaveEvent(card, stopInterval, () => {});
    });
  };

  handleMouseOut = () => {};

  handleOutSideClick = () => {
    this.clickTriggerd = false;
    stopInterval();
    startInterval();

    this.hideSelectedCard();
  };

  hideSelectedCard = () => {
    if (!this.selectedCard) return;
    hideElement(this.selectedCard);
  };

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
})();

window.onload = async () => {
  init();
  globeController.init();
};

const restartInterval = () => {
  stopInterval();
  setTimeout(() => {
    startInterval();
  }, 1000);
};

const startInterval = () => {
  console.log("interval started");
  pointSelectInterval = setInterval(() => {
    globeController.selectPoint();
    setAutoHideTimeout();
  }, globeConfig.showCardInterval);
};

const setAutoHideTimeout = () => {
  pointHideTimeout = setTimeout(() => {
    globeController.hideSelectedCard();
  }, globeConfig.hideCardTimeout);
};

const stopInterval = () => {
  console.log("interval stopped");
  if (!pointSelectInterval) return;
  window.clearTimeout(handleMouseOutTimeout);
  window.clearInterval(pointSelectInterval);
  window.clearTimeout(pointHideTimeout);
};
