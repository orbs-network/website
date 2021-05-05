import { getElementAttribute, getElements } from "../heplers.js";

export const generateArcData = (data, colors) => {
  return data.map((currentPoint, index) => {
    const nextPoint = getNextElementInArray(index, data);
    return {
      startLat: currentPoint.lat,
      startLng: currentPoint.lng,
      endLat: nextPoint.lat,
      endLng: nextPoint.lng,
      color: [getRadomColor(colors), getRadomColor(colors)],
    };
  });
};

export const generatePathData = (globeConfig) => {
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

export const getRadomColor = (colors) => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export const getGlobeCardsAndWeights = () => {
  try {
    const weights = [];
    const cards = [];
    const cardNodes = getElements(".globe-card");
    cardNodes.forEach((card, i) => {
      card.setAttribute("id", `card-${i}`);
      const weight = getElementAttribute(card, "data-weight") || 0;
      weights.push(Number(weight));
      cards.push(card);
    });
    return { cards, weights };
  } catch (error) {
    console.log("couldnt get cards and weights");
  }
};

export const getRandomCardByWeight = (cards, weights, currentCard) => {
  try {
    while (true) {
      const newCard = chance.weighted(cards, weights);
      const stop = !isTheSameCard(newCard, currentCard);
      if (stop) {
        return newCard;
      }

      return getRandomCardByWeight(cards, weights, currentCard);
    }
  } catch (error) {
    console.error("error in getting randon card");
  }
};

export const getRandomGlobePoint = (points) => {
  try {
    if (!points) return;
    const limit = points.length;
    const number = Math.floor(Math.random() * limit);
    return points[number];
  } catch (error) {
    console.error("error in getting random globe point");
  }
};

export const getRandomPointLatLng = (numOfPoints) => {
  let points = [];
  const from = -180;
  const to = 180;
  const fixed = 3;
  for (let i = 0; i < numOfPoints; i++) {
    const lat = (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    const lng = (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    const radius = 1.4;
    const alt = 0.002;
    const point = { lat, lng, radius, alt };
    points.push(point);
  }
  return points;
};

const isTheSameCard = (newCard, currentCard) => {
  if (!currentCard) return false;
  const newCardId = getElementAttribute(newCard, "id");
  const currentCardId = getElementAttribute(currentCard, "id");
  return newCardId === currentCardId;
};

export const getPointCoordinates = (point, globe) => {
  try {
    const mesh = point.__threeObj;
    var vector = new THREE.Vector3();
    const { camera, renderer } = globe.getCameraAndRenderer();
    var widthHalf = 0.5 * renderer.getContext().canvas.width;
    var heightHalf = 0.5 * renderer.getContext().canvas.height;
    mesh.updateMatrixWorld();
    vector.setFromMatrixPosition(mesh.matrixWorld);
    vector.project(camera);

    vector.x = vector.x * widthHalf + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;

    return {
      x: vector.x,
      y: vector.y,
    };
  } catch (error) {
    console.error("error in getting point coordinates");
  }
};

export const showCard = (element) => {
  element.style.opacity = 1;

  element.classList.add("globe-card-active");
};

export const hideCard = (element) => {
  try {
    element.style.opacity = 0;
    setTimeout(() => {
      element.classList.remove("globe-card-active");
    }, 200);
  } catch (error) {
    console.error("error in hiding selected card");
  }
};

export const onOutsideCardEvent = (element, callback) => {
  if (!element) return;
  document.addEventListener("click", function (event) {
    const isClickInside = element.contains(event.target);
    const isActive = element.classList.contains("globe-card-active");
    if (!isClickInside && isActive) {
      callback();
    }
  });
};
