import { getElement, hideElement, init } from "../common.js";
import { globeConfig } from "./config.js";

import { GlobeController } from "./globe.js";
import { getRandomCardByWeight, getRandomGlobePoint } from "./util.js";
let pointSelectInterval = null;
let pointHideTimeout = null;
let cardOutTimeout = null;
let globe = null;

const closeCardIfVisible = () => {
  const cards = document.querySelectorAll(".globe-card");
  cards.forEach((card) => {
    if (card.style.opacity == 1) {
      hideElement(card);
    }
  });
};

const selectPoint = () => {
  const points = globe.getPoints();
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
};

const startInterval = () => {
  // if (pointSelectInterval) return;
  // console.log("inerval started");
  // closeCardIfVisible();
  // pointSelectInterval = setInterval(() => {
  //   const points = globe.getPoints();
  //   console.log(points);
  //   globe.selectPoint(points);
  //   setAutoHideTimeout();
  // }, globeConfig.showCardInterval);
};

const startIntervalWithDelay = () => {
  cardOutTimeout = setTimeout(() => {
    startInterval();
  }, 4000);
};

const stopInterval = () => {
  console.log("interval stopped");
  window.clearInterval(pointSelectInterval);
  window.clearTimeout(pointHideTimeout);
  window.clearTimeout(cardOutTimeout);
  pointSelectInterval = null;
  pointHideTimeout = null;
  cardOutTimeout = null;
};

const setAutoHideTimeout = () => {
  pointHideTimeout = setTimeout(() => {
    globe.hideSelectedCard();
  }, globeConfig.hideCardTimeout);
};

const resetInterval = () => {
  stopInterval();
  startInterval();
};
const setupGlobe = async () => {
  const globeParams = {
    stopInterval,
    startInterval,
    resetInterval,
    startIntervalWithDelay,
  };
  try {
    globe = await new GlobeController(globeParams);

    setTimeout(() => {
      const loader = getElement(".globe-loader");
      hideElement(loader);
      startInterval();
    }, 3000);
  } catch (error) {
    console.error("error in creating globe");
  }
};

window.onload = async () => {
  init();
  await setupGlobe();
};

export const getPointCoordinates = (point) => {
  const mesh = point.__threeObj;
  var vector = new THREE.Vector3();
  const { camera, renderer } = globe.getCamera();
  var widthHalf = 0.5 * renderer.context.canvas.width;
  var heightHalf = 0.5 * renderer.context.canvas.height;
  mesh.updateMatrixWorld();
  vector.setFromMatrixPosition(mesh.matrixWorld);
  vector.project(camera);

  vector.x = vector.x * widthHalf + widthHalf;
  vector.y = -(vector.y * heightHalf) + heightHalf;

  return {
    x: vector.x,
    y: vector.y,
  };
};
