import {
  getElement,
  hideElement,
  onMouseEnterAndLeaveEvent,
  onOutsideEvent,
  showElement,
} from "../common.js";
import { globeConfig } from "./config.js";
import {
  generatePathData,
  getGlobeBackGroundImage,
  getGlobeCardsAndWeights,
  getRandomCardByWeight,
  getRandomGlobePoint,
  getRandomPointLatLng,
} from "./util.js";
import { geo } from "./geo.js";
import { getPointCoordinates } from "./index.js";
export class GlobeController {
  globe = null;
  cards = [];
  weights = [];
  selectedCard = null;
  params = null;
  constructor(params) {
    this.params = params;
    this.createGlobe();
  }
  async createGlobe() {
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
      onMouseEnterAndLeaveEvent(
        card,
        this.params.stopInterval,
        this.params.startIntervalWithDelay
      );
    });
  };

  handleOutSideClick = () => {
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
      .globeImageUrl(getGlobeBackGroundImage(globeConfig.img));
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
    this.globe
      .hexPolygonsData(geo.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => globeConfig.orbsMainColor);
  };

  setGlobePoints = () => {
    const globeContainer = document.createElement("div");
    globeContainer.classList.add("home-globe");
    const points = getRandomPointLatLng(30);
    this.globe

      .pointsData(points)
      .pointAltitude(0.003)
      .pointColor(() => globeConfig.orbsMainColor)
      .onPointClick(this.handlePointClick)
      .pointsTransitionDuration(300)
      .onPointHover((point) => {
        if (point) {
          return this.stopGlobeAutoRotation();
        }
        return this.startGlobeAutoRotation();
      })
      .pointRadius(0.7)(globeContainer);
    const body = getElement("body");
    body.appendChild(globeContainer);
  };

  getViewPort() {
    return {
      width: this.globe.width(),
      height: this.globe.height(),
    };
  }

  getCamera() {
    return { camera: this.globe.camera(), renderer: this.globe.renderer() };
  }

  setPathData = () => {
    const pathData = generatePathData(globeConfig);

    this.globe
      .pathsData(pathData)
      .pathColor(() => ["rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"])
      .pathDashLength(0.01)
      .pathDashGap(0.004)
      .pathDashAnimateTime(100000)
      .pathPointAlt((pnt) => pnt[2]);
  };

  handlePointClick = ({ lat, lng }, event) => {
    const { clientX, clientY } = event;
    this.selectPoint(true);
    this.params.stopInterval();
    this.params.startInterval();
    this.commonCardSelect(clientX, clientY);
  };

  getPoints() {
    return this.globe.pointsData();
  }

  commonCardSelect(x, y) {
    const card = getRandomCardByWeight(
      this.cards,
      this.weights,
      this.selectedCard
    );
    if (!card) return;
    this.selectedCard = card;
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    showCard(card);
  }

  selectPoint(points) {
    const card = getRandomCardByWeight(
      this.cards,
      this.weights,
      this.selectedCard
    );
    const globePoint = getRandomGlobePoint(points);
    if (!globePoint) return;
    const { x, y } = getPointCoordinates(globePoint);
    this.selectedCard = card;
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    showCard(card);
  }

  hideSelectedCard = () => {
    hideCard(this.selectedCard);
  };
}

const showCard = (element) => {
  element.style.display = "flex";

  setTimeout(() => {
    element.classList.add("globe-card-active");
    element.style.left = `50%`;
    element.style.top = `50%`;
    element.style.opacity = 1;
  }, 200);
};

const hideCard = (element) => {
  console.log(element);
  element.style.opacity = "0";

  setTimeout(() => {
    element.style.display = "none";
    element.classList.remove("globe-card-active");
    element.style.transform = `translate(-50%, -50%)`;
  }, 200);
};
