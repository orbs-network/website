import {
  getElement,
  hideElement,
  init,
  onMouseEnterAndLeaveEvent,
} from "../common.js";
import { globeConfig } from "./config.js";

import { GlobeController } from "./globe.js";
import {
  getRandomCardByWeight,
  hideCard,
  showCard,
  getGlobeCardsAndWeights,
  onOutsideCardEvent,
  getPointCoordinates,
  getRandomGlobePoint,
} from "./util.js";
let pointSelectInterval = null;
let pointHideTimeout = null;
let cardOutTimeout = null;
let globe = null;
let selected = null;
let cardsList = [];
let weightsList = [];
let allowClick = false;
const closeCardIfVisible = () => {
  const cards = document.querySelectorAll(".globe-card-active");
  cards.forEach((card) => {
    hideCard(card);
  });
};

const startInterval = () => {
  if (pointSelectInterval) return;
  pointSelectInterval = setInterval(() => {
    // const points = globe.getPoints();
    // console.log(points);
    // globe.selectPoint(points);
    handleAutoPointSelect();
  }, globeConfig.showCardInterval);
};

const startIntervalWithDelay = () => {
  cardOutTimeout = setTimeout(() => {
    startInterval();
  }, 4000);
};

const stopInterval = () => {
  window.clearInterval(pointSelectInterval);
  window.clearTimeout(pointHideTimeout);
  window.clearTimeout(cardOutTimeout);
  pointSelectInterval = null;
  pointHideTimeout = null;
  cardOutTimeout = null;
};

const setAutoHideTimeout = () => {
  pointHideTimeout = setTimeout(() => {
    hideCard(selected);
  }, globeConfig.hideCardTimeout);
};

const resetInterval = () => {
  stopInterval();
  startInterval();
};

const onPointHover = (value) => {
  const body = document.querySelector("body");
  allowClick = value;

  if (value) {
    return (body.style.cursor = "pointer");
  }
  return (body.style.cursor = "default");
};

const onGlobeReady = () => {
  const { cards, weights } = getGlobeCardsAndWeights();
  addEventsToCards(cards);
  cardsList = cards;
  weightsList = weights;
  addListenerToCanvas();
  setTimeout(() => {
    const loader = getElement(".globe-loader");
    hideElement(loader);
    startInterval();
  }, 3000);
};

const setupGlobe = async () => {
  const container = document.createElement("div");
  container.classList.add("home-globe");
  const body = document.querySelector(".home");
  body.appendChild(container);
  const globeParams = {
    handlePointClick,
    onPointHover,
    onGlobeReady,
    container,
  };
  try {
    globe = await new GlobeController(globeParams);
  } catch (error) {
    console.error(error);
  }
};

const addEventsToCards = (cards) => {
  cards.forEach((card) => {
    onOutsideCardEvent(card, handleOutSideClick);
    onMouseEnterAndLeaveEvent(card, stopInterval, startIntervalWithDelay);
  });
};

const handlePointClick = ({ lat, lng }, event) => {
  const { clientX, clientY } = event;
  resetInterval();
  try {
    selectCard(clientX, clientY);
  } catch (error) {
    console.error("error in selecting card");
  }
};

const checkIfPointInView = (points) => {
  const { camera, scene } = globe.getCameraAndRenderer();
  scene.updateMatrixWorld(true);
  let arr = [];
  arr = points.filter((point) => {
    const worldPosition = new THREE.Vector3();

    const mesh = point.__threeObj;
    const world = mesh.getWorldPosition(worldPosition);
    return world.y > 0;
  });
  return arr;
};

const handleAutoPointSelect = () => {
  closeCardIfVisible();
  const points = globe.getPoints();
  const inViewPoints = checkIfPointInView(points);

  const point = getRandomGlobePoint(inViewPoints);
  // Your 3d point to check
  const { x, y } = getPointCoordinates(point, globe);
  selectCard(x, y);
  setAutoHideTimeout();
};

const selectCard = (x, y) => {
  selected = getRandomCardByWeight(cardsList, weightsList, selected);
  if (!selected) return;
  selected.style.left = `${x}px`;
  selected.style.top = `${y}px`;
  checkCardPosition(selected);

  setTimeout(() => {
    showCard(selected);
  }, 50);
};

const checkCardPosition = (card) => {
  try {
    card.classList.add("globe-card-position-test");
    const { top, right, left, width, height } = card.getBoundingClientRect();
    //if card overflows from top, push to bottom
    if (top < 30) {
      card.style.top = `${height / 2 + 10}px`;
    }
    //if card overflows from bottom, push to top
    if (top + height > window.innerHeight) {
      card.style.top = `${window.innerHeight - height / 2 - 20}px`;
    }
    //if card overflows from right, push to left

    if (right > window.innerWidth) {
      card.style.left = `calc(100% - ${width / 2 + 10}px)`;
    }
    //if card overflows from left, push to right
    if (left < 0) {
      card.style.left = `0px`;
    }
    card.classList.remove("globe-card-position-test");
  } catch (error) {
    console.log("error in checking card position");
  }
};

const handleOutSideClick = () => {
  hideCard(selected);
  resetInterval();
};

window.onload = () => {
  init();
  setupGlobe();
};

const addListenerToCanvas = () => {
  const canvas = document.querySelector("canvas");
  canvas.addEventListener("click", (event) => {
    var x = event.clientX;
    var y = event.clientY;
    const test = document.querySelector(".globe-card-active");
    if (test || !allowClick) return;
    selectCard(x, y);
  });
};
