let interval;
let timeout;
const globeController = new (class GlobeClass {
  points = [];
  globe = undefined;
  selectedPointIndex = 0;
  selectedPoint;

  async createGlobe(globeContainer) {
    const pointsJson = await fetch("../assets/globe/globe-data/points.json");
    this.points = await pointsJson.json();
    const pathData = generatePathData();

    this.globe = Globe()
      .globeImageUrl(config.img)
      .pathsData(pathData)
      .pathColor(() => config.pathColors)
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
      const globeContainer = getElement("#globeViz");
      this.createGlobe(globeContainer);
    } catch (error) {
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
  }, config.changePositionTimeout);
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
    }, config.changePositionInterval);
  } catch (error) {
    console.log("error in setting up globe interval");
  }
};

const generatePathData = () => {
  const gData = [...Array(config.N_PATHS).keys()].map(() => {
    let lat = (Math.random() - 0.5) * 90;
    let lng = (Math.random() - 0.5) * 360;
    let alt = 0;

    return [
      [lat, lng, alt],
      ...[
        ...Array(Math.round(Math.random() * config.MAX_POINTS_PER_LINE)).keys(),
      ].map(() => {
        lat += (Math.random() * 2 - 1) * config.MAX_STEP_DEG;
        lng += (Math.random() * 2 - 1) * config.MAX_STEP_DEG;
        alt += (Math.random() * 2 - 1) * config.MAX_STEP_ALT;
        alt = Math.max(0, alt);

        return [lat, lng, alt];
      }),
    ];
  });
  return gData;
};
