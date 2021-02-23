import {
  getElement,
  getElements,
  hideElement,
  onOutsideEvent,
  onMouseEnterAndLeaveEvent,
  showElement,
  addListenersToNavbar,
} from "../common.js";
import { globePositions, globeImages } from "./consts.js";
import { globeConfig } from "./config.js";
import { points } from "./points.js";

let interval;
let timeout;
export const globeController = new (class GlobeClass {
  points = [];
  globe = undefined;
  selectedPointIndex = 0;
  selectedPoint;

  async createGlobe() {
    const globeContainer = getElement("#globeViz");

    this.points = points;
    const pathData = generatePathData();

    this.globe = Globe()
      .globeImageUrl(globeConfig.img)
      .pathsData(pathData)
      .pathColor(() => globeConfig.pathColors)
      .pathDashLength(0.01)
      .pathDashGap(0.004)
      .pathDashAnimateTime(100000)
      .pathPointAlt(0.1)
      .pointsData(this.points)
      .pointAltitude(0.001)
      .pointColor(() => "#5fffd2")
      .onPointClick(this.handlePointClick)
      .pathStroke(0.5)
      .pathPointAlt((pnt) => pnt[2])
      .pathTransitionDuration(1500)
      .onTileHover(() => console.log("hovered"))
      .pointRadius(1.2)(globeContainer);
    setTimeout(() => {
      hideLoader();
    }, 1000);

    this.startGlobeRotation();
  }

  changeGlobeImage = (src) => {
    this.globe.globeImageUrl(src);
  };

  setSelectedPoint = (point, duration, timeout) => {
    this.setSelectedPointIndex(point);
    this.changeGlobePosition(point, duration, timeout);
  };

  setSelectedPointIndex(point) {
    const index = this.points.findIndex((p) => p.guardian === point.guardian);
    if (index < 0) return;
    this.selectedPointIndex = index;
  }

  getNextPoint() {
    const nextIndex = this.selectedPointIndex + 1;
    const index = nextIndex % this.points.length;
    return this.points[index];
  }

  changeGlobePosition(point, duration) {
    hideAllCardsIfPresent();
    const { lat, lng } = point;
    this.globe.pointOfView({ lat, lng, altitude: 2.5 }, duration);
    setTimeout(() => {
      showCard(point);
    }, duration);
  }

  init() {
    try {
      this.createGlobe();
      addEventsToCards();
      onlyForDev();
    } catch (error) {
      console.log(error);
      console.log("could not find globe container");
    }
  }

  startGlobeRotation() {
    setGlobeInterval();
  }

  stopGlobeRotation() {
    clearGlobeInterval();
  }

  startGlobeRotationWithDelay() {
    startGlobeIntervalWithDelay();
  }

  onGlobeCardClose() {
    handleRotationAfterCardClose();
  }

  handlePointClick = (point) => {
    this.stopGlobeRotation();
    this.setSelectedPoint(point, 500);
  };
})();

const startGlobeIntervalWithDelay = () => {
  timeout = setTimeout(() => {
    setGlobeInterval();
  }, globeConfig.changePositionTimeout);
};
const hideLoader = () => {
  const loader = getElement(".globe-loader");
  hideElement(loader);
};
const handleRotationAfterCardClose = () => {
  clearGlobeInterval();
  startGlobeIntervalWithDelay();
};

const clearGlobeInterval = () => {
  console.log("cleared");
  clearTimeout(timeout);
  clearInterval(interval);
};

const setGlobeInterval = () => {
  try {
    interval = setInterval(() => {
      const point = globeController.getNextPoint();
      globeController.setSelectedPoint(point, 1500);
    }, globeConfig.changePositionInterval);
  } catch (error) {
    console.log("error in setting up globe interval");
  }
};
const onlyForDev = () => {
  loadBnts(globeImages);
  const input = getElement(".addImgInput input");
  input.addEventListener("change", (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    globeController.changeGlobeImage(url);
    addImage(url);
  });
};

const generatePathData = () => {
  const gData = [...Array(globeConfig.N_PATHS).keys()].map(() => {
    let lat = (Math.random() - 0.5) * 90;
    let lng = (Math.random() - 0.5) * 360;
    let alt = 0;

    return [
      [lat, lng, alt],
      ...[
        ...Array(
          Math.round(Math.random() * globeConfig.MAX_POINTS_PER_LINE)
        ).keys(),
      ].map(() => {
        lat += (Math.random() * 2 - 1) * globeConfig.MAX_STEP_DEG;
        lng += (Math.random() * 2 - 1) * globeConfig.MAX_STEP_DEG;
        alt += (Math.random() * 2 - 1) * globeConfig.MAX_STEP_ALT;
        alt = Math.max(0, alt);

        return [lat, lng, alt];
      }),
    ];
  });
  return gData;
};

const showCard = (point) => {
  if (!point) return;
  const { position } = point;
  switch (position) {
    case globePositions.delegator:
      const delegatorCard = getElement(".d-card");
      showElement(delegatorCard);
      break;
    case globePositions.guardian:
      const guardianCard = getElement(".g-card");
      showElement(guardianCard);
      break;
    case globePositions.contributor:
      const contributorCard = getElement(".c-card");
      showElement(contributorCard);
      break;
    default:
      break;
  }
};

const addEventsToCards = () => {
  const guardianCard = getElement(".g-card");
  const delegatorCard = getElement(".d-card");
  const contributorCard = getElement(".c-card");
  const elemets = [guardianCard, delegatorCard, contributorCard];
  elemets.forEach((element) => {
    onOutsideEvent(element, () => onCardClose(element));
    onMouseEnterAndLeaveEvent(
      element,
      globeController.stopGlobeRotation,
      globeController.startGlobeRotationWithDelay
    );
  });
};

const onCardClose = (element) => {
  hideElement(element);
  globeController.onGlobeCardClose();
};

const hideAllCardsIfPresent = () => {
  const cards = getElements(".globe-card");
  cards.forEach((card) => {
    hideElement(card);
  });
};

export const addImage = (src) => {
  const newImages = [...globeImages];
  const img = {
    name: `img${newImages.length}`,
    src,
  };
  newImages.push(img);
  loadBnts(newImages);
};

export const loadBnts = (images) => {
  const container = getElement(".btns-container-list");
  container.innerHTML = "";
  images.forEach(({ name, src }) => {
    const element = document.createElement("li");
    element.innerHTML = name;
    element.addEventListener("click", () => {
      globeController.changeGlobeImage(src);
    });
    container.appendChild(element);
  });
};

window.onload = () => {
  addListenersToNavbar();
  globeController.init();
};
