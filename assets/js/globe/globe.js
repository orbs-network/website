import { globeConfig } from "./config.js";
import "https://chancejs.com/chance.min.js";

import "https://unpkg.com/globe.gl";
import "https://unpkg.com/three";
import {
  generatePathData,
  getPointCoordinates,
  getRandomPointLatLng,
} from "./util.js";

export class GlobeController {
  globe = null;
  params = null;
  points = [];
  cssPoints = [];
  labelRenderer;
  constructor(params) {
    this.params = params;
    this.createGlobe();
  }
  async createGlobe() {
    const { container } = this.params;
    this.points = getRandomPointLatLng(35);

    const newGlobe = Globe()(container);

    this.globe = newGlobe;
    this.setGlobeBaseConfig();
    // this.setPathData();
    // await this.setPoligons();

    this.startGlobeAutoRotation();
    this.resizeListener();
    this.setGlobePoints(this.params);
    return this.globe;
  }

  resizeListener = () => {
    window.addEventListener("resize", (event) => {
      const width = event.target.innerWidth + globeConfig.additionalWidth;
      const height = event.target.innerHeight + globeConfig.additionalHeight;
      this.resizeGlobe(width, height);
    });
  };

  resizeGlobe(width, height) {
    this.globe.width([width]);
    this.globe.height([height]);
  }

  setGlobeBaseConfig = () => {
    this.globe
      .onGlobeReady((e) => {
        const points = this.globe.customLayerData();
        this.params.onGlobeReady(points);
      })
      .backgroundColor(globeConfig.backgroundColor)
      .globeImageUrl(
        "https://unpkg.com/three-globe@2.18.0/example/img/earth-night.jpg"
      )
      .lineHoverPrecision(0.000001)
      .width(this.globe.width() + globeConfig.additionalWidth)
      .height(this.globe.height() + globeConfig.additionalHeight);
  };

  startGlobeAutoRotation() {
    this.globe.controls().autoRotateSpeed = globeConfig.rotationSpeed;
    setTimeout(() => {
      this.globe.controls().autoRotate = true;
    }, 200);
  }

  stopGlobeAutoRotation() {
    this.globe.controls().autoRotate = false;
  }

  setPoligons = () => {
    // this.globe
    //   .hexPolygonsData(geo.features)
    //   .hexPolygonResolution(3)
    //   .hexPolygonMargin(0.7)
    //   .hexPolygonColor(() => globeConfig.orbsMainColor);
  };

  createMesh(d) {
    // const group = new THREE.Mesh();
    // const mesh = new THREE.Mesh(
    //   new THREE.SphereBufferGeometry(d.radius),
    //   new THREE.MeshLambertMaterial({ color: globeConfig.orbsMainColor })
    // );
    // return mesh;
  }

  moveSpheres = () => {
    this.globe.customLayerData().forEach((point) => {
      const mesh = point.__threeObj;
      if (!mesh) return;
      mesh.rotation.x = Date.now() * 0.0002;
      mesh.rotation.y = Date.now() * 0.001;
    });

    const scene = this.globe.scene();
    const camera = this.globe.camera();
    const renderer = this.globe.renderer();
    renderer.render(scene, camera);
    requestAnimationFrame(this.moveSpheres);
  };
  // setGlobePoints = () => {
  //   this.globe

  //     .customLayerData(this.points)
  //     .customThreeObject((d) => this.createMesh(d))

  //     .customThreeObjectUpdate((obj, d) => {
  //       Object.assign(
  //         obj.position,
  //         this.globe.getCoords(d.lat, d.lng, d.alt, d.radius)
  //       );
  //     })
  //     .onCustomLayerHover((point) => this.handleHover(point));

  //   this.moveSpheres();
  // };

  setGlobePoints = () => {
    this.globe

      .pointsData(this.points)
      .pointAltitude(0.001)
      .pointRadius(0.8)
      .pointColor(() => "white")
      .onPointHover((point) => this.handleHover(point));

    this.moveSpheres();
  };

  onClick = (point, event) => {
    this.params.handlePointClick(point, event);
    this.startGlobeAutoRotation();
  };
  handleHover(point) {
    try {
      this.params.onPointHover(point ? true : false);
      if (point) {
        return this.stopGlobeAutoRotation();
      }
      return this.startGlobeAutoRotation();
    } catch (error) {
      console.log(error);
    }
  }

  // setGlobePoints = () => {
  //   const globeContainer = document.createElement("div");
  //   globeContainer.classList.add("home-globe");
  //   const points = getRandomPointLatLng(30);
  //   this.globe

  //     .pointsData(points)
  //     .pointAltitude(0.005)
  //     .pointColor(() => globeConfig.orbsMainColor)
  //     .onPointClick((point, event) => {
  //       this.startGlobeAutoRotation();
  //       this.params.handlePointClick(point, event);
  //     })

  //     .pointRadius(0.5)(globeContainer);
  //   const body = getElement("body");
  //   body.appendChild(globeContainer);
  // };

  getViewPort() {
    return {
      width: this.globe.width(),
      height: this.globe.height(),
    };
  }

  getCameraAndRenderer() {
    return {
      camera: this.globe.camera(),
      renderer: this.globe.renderer(),
      scene: this.globe.scene(),
    };
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

  getPoints() {
    return this.globe.pointsData();
  }
}
