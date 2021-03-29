import { getElementAttribute, getElements } from "../common.js";

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
  console.log(index);
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
    console.log("couldnt get cards");
  }
};

export const getRandomPointByWeight = (cards, weights, currentCard) => {
  while (true) {
    const newCard = chance.weighted(cards, weights);
    const stop = !isTheSameCard(newCard, currentCard);
    if (stop) {
      return newCard;
    }

    return getRandomPointByWeight(cards, weights, currentCard);
  }
};

const isTheSameCard = (newCard, currentCard) => {
  if (!currentCard) return false;
  const newCardId = getElementAttribute(newCard, "id");
  const currentCardId = getElementAttribute(currentCard, "id");
  return newCardId === currentCardId;
};

export const getGlobeBackGroundImage = (imgName) => {
  const url = window.location.pathname;
  const isNotEn = url.split("/").length > 2;
  if (isNotEn) {
    return `../assets/img/globe/${imgName}`;
  }
  return `assets/img/globe/${imgName}`;
};
