export const getAttributeDataFromElement = (card) => {
  const obj = {};
  obj.component = card;
  obj.countryCode = card.getAttribute("data-countrycode");
  obj.lat = card.getAttribute("data-lat");
  obj.lng = card.getAttribute("data-lng");
  obj.title = card.getAttribute("data-title");
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
