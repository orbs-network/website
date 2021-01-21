class GlobeClass {
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
      .pathDashAnimateTime(200000)
      .pathPointAlt(0.1)
      .pointsData(this.points)
      .pointAltitude(0.001)
      .pointColor(() => "#5fffd2")
      .onPointClick(onPointClick)
      .onGlobeClick(hidePointContainer)
      .pathStroke(0.5)
      .pointRadius(1.2)(globeContainer);
    setTimeout(() => {
      hideLoader();
    }, 1000);
    setTimeout(() => {
      const firstPoint = this.points[0];
      this.changeGlobePosition(firstPoint, 1000);

      setGlobeInterval();
    }, 1500);
    setTimeout(() => {
      this.globe
        .pathPointAlt((pnt) => pnt[2]) // set altitude accessor
        .pathTransitionDuration(1500);
    }, 3500);
  }

  setSelectedPoint = (point) => {
    this.selectedPoint = point;
    if (point) {
      this.changeGlobePosition(point, 500);
    }
  };
  setSelectedPointIndex(index) {
    this.selectedPointIndex = index;
  }

  getNextPoint() {
    const index = this.selectedPointIndex % this.points.length;
    return this.points[index];
  }

  changeGlobePosition(point, duration) {
    const { lat, lng } = point;
    hidePointContainer();
    this.globe.pointOfView({ lat, lng, altitude: 2.5 }, duration);
    const index = this.points.findIndex((p) => p.lng === point.lng);
    this.setSelectedPointIndex(index + 1);
    this.selectedPoint = point;
    this.globe.pointColor((p) =>
      p.name === point.name ? "#AE01FF" : "#5fffd2"
    );
    setTimeout(() => {
      handlePointContainerData(point);
    }, duration);
  }
}

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
