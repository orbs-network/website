import {
  getElement,
  hideElement,
  onMouseEnterAndLeaveEvent,
  onOutsideEvent,
  showElement,
} from "../common.js";
import { globeConfig } from "./config.js";
import { points } from "./points.js";
import {
  generatePathData,
  getGlobeCardsAndWeights,
  getRandomPointByWeight,
} from "./util.js";

export class GlobeController {
  globe = null;
  cards = [];
  weights = [];
  clickTriggerd = false;
  selectedCard = null;
  params = null;
  constructor(params) {
    this.params = params;
    this.createGlobe();
  }
  async createGlobe() {
    console.log("tests");
    const { cards, weights } = getGlobeCardsAndWeights();
    this.cards = cards;
    this.weights = weights;
    const newGlobe = Globe();
    this.globe = newGlobe;
    this.setGlobeBaseConfig();
    this.setPathData();
    await this.setPoligons();
    this.setGlobePoints(this.params);
    this.startGlobeAutoRotation();

    this.resizeListener();
    this.addEventsToCards();
    return this.globe;
  }

  addEventsToCards = () => {
    this.cards.forEach((card) => {
      onOutsideEvent(card, this.handleOutSideClick);
      onMouseEnterAndLeaveEvent(card, this.params.stopInterval, () => {});
    });
  };

  handleOutSideClick = () => {
    this.clickTriggerd = false;
    this.hideSelectedCard();
    this.params.stopInterval();
    this.params.startInterval();
  };

  resizeListener = () => {
    window.addEventListener("resize", (event) => {
      this.globe.width([event.target.innerWidth]);
      this.globe.height([event.target.innerHeight]);
    });
  };

  setGlobeBaseConfig = () => {
    this.globe
      .backgroundColor(globeConfig.backgroundColor)
      .globeImageUrl(globeConfig.img);
    const globeMaterial = this.globe.globeMaterial();

    globeMaterial.fog = false;
  };

  startGlobeAutoRotation = () => {
    this.globe.controls().autoRotate = true;
    this.globe.controls().autoRotateSpeed = globeConfig.rotationSpeed;
  };

  stopGlobeAutoRotation = () => {
    this.globe.controls().autoRotate = false;
  };

  setPoligons = () => {
    fetch("assets/js/globe/geo.geojson")
      .then((res) => res.json())
      .then((countries) => {
        this.globe
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .hexPolygonColor(() => globeConfig.orbsMainColor);
      });
  };

  setGlobePoints = () => {
    const globeContainer = getElement("#globeViz");
    this.globe
      .pointsData(points)
      .pointAltitude(0.003)
      .pointColor(() => globeConfig.orbsMainColor)
      .onPointClick(this.handlePointClick)
      .pointsTransitionDuration(300)
      .onPointHover((point) => {
        if (point) {
          this.params.stopInterval();
          return this.stopGlobeAutoRotation();
        }
        if (!this.clickTriggerd) {
          this.params.startInterval();
        }
        return this.startGlobeAutoRotation();
      })
      .pointRadius(0.7)(globeContainer);
  };

  setPathData = () => {
    const pathData = generatePathData(globeConfig);

    this.globe
      .pathsData(pathData)
      .pathColor(() => ["rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"])
      .pathDashLength(0.01)
      .pathDashGap(0.004)
      .pathDashAnimateTime(100000)
      .pathPointAlt((pnt) => pnt[2]); // set altitude accessor
  };

  handlePointClick = () => {
    this.params.stopInterval();

    this.clickTriggerd = true;
    this.selectPoint();
    setTimeout(() => {
      this.startGlobeAutoRotation();
    }, 200);
  };

  selectPoint() {
    const card = getRandomPointByWeight(
      this.cards,
      this.weights,
      this.selectedCard
    );

    this.selectedCard = card;
    let x = chance.floating({ min: -65, max: -35 });
    let y = chance.floating({ min: -65, max: -35 });

    const transform = `scale(1) translate(${x}%, ${y}% )`;
    showElement(card, transform);
  }

  hideSelectedCard = () => {
    if (!this.selectedCard) return;
    hideElement(this.selectedCard);
  };
}

//   setArcData = (globElem) => {
//     const arcsData = generateArcData(this.points, globeConfig.colors);
//     globElem
//       .arcsData(arcsData)
//       .arcColor("color")
//       .arcDashLength(() => 1)
//       .arcDashGap(() => Math.random())
//       .arcDashAnimateTime(() => Math.random() * 4000 + 500);
//   };
