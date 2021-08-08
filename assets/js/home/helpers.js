export const getAttributeDataFromElement = (card) => {
  const maximum = 60;
  const minimum = 20;
  const lat = Math.random() * (maximum - minimum + 1) + minimum;
  const lng = Math.random() * (maximum - minimum + 1) + minimum;
  const obj = {};
  obj.component = card;
  obj.countryCode = "PL";
  obj.lat = lat;
  obj.lng = lng;
  return obj;
};

export const getCardDataByType = (card, index) => {
  let cardObj;
  cardObj = getAttributeDataFromElement(card);
  if (cardObj) {
    cardObj.id = index;
  }
  return cardObj;
};
