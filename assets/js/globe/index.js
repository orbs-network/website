import { getElement, hideElement, init } from "../common.js";
import { globeConfig } from "./config.js";

import { GlobeController } from "./globe.js";
let pointSelectInterval = null;
let pointHideTimeout = null;
let globe = null;

const startInterval = () => {
  pointSelectInterval = setInterval(() => {
    globe.selectPoint();
    setAutoHideTimeout();
  }, globeConfig.showCardInterval);
};

const stopInterval = () => {
  if (!pointSelectInterval) return;
  window.clearInterval(pointSelectInterval);
  window.clearTimeout(pointHideTimeout);
};

const setupGlobe = async () => {
  const globeParams = {
    stopInterval,
    startInterval,
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

const setAutoHideTimeout = () => {
  pointHideTimeout = setTimeout(() => {
    globe.hideSelectedCard();
  }, globeConfig.hideCardTimeout);
};
