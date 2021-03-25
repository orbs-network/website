import { getElement, hideElement, init } from "../common.js";
import { globeConfig } from "./config.js";

import { GlobeController } from "./globe.js";
let pointSelectInterval = null;
let pointHideTimeout = null;
let cardOutTimeout = null;
let globe = null;

const closeCardIfVisibleAndShowSelected = () => {
  const cards = document.querySelectorAll(".globe-card");
  cards.forEach((card) => {
    if (card.style.opacity == 1) {
      hideElement(card);
    }
  });
};
const startInterval = () => {
  if (pointSelectInterval) return;
  console.log("inerval started");
  closeCardIfVisibleAndShowSelected();
  pointSelectInterval = setInterval(() => {
    globe.selectPoint();
    setAutoHideTimeout();
  }, globeConfig.showCardInterval);
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
