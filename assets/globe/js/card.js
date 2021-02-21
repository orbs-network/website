const showCard = (point) => {
  if (!point) return;
  const { position } = point;
  switch (position) {
    case positions.delegator:
      const delegatorCard = getElement(".d-card");
      showElement(delegatorCard);
      break;
    case positions.guardian:
      const guardianCard = getElement(".g-card");
      showElement(guardianCard);
      break;
    case positions.contributor:
      const contributorCard = getElement(".c-card");
      showElement(contributorCard);
      break;
    default:
      break;
  }
};

const handleEmptyPoint = () => {};

const addEventsToCards = () => {
  const guardianCard = getElement(".g-card");
  const delegatorCard = getElement(".d-card");
  const contributorCard = getElement(".c-card");
  const elemets = [guardianCard, delegatorCard, contributorCard];
  elemets.forEach((element) => {
    useClickOutside(element, () => onCardClose(element));
    onMouseEnterAndLeaveEvent(
      element,
      globeController.stopGlobeRotation,
      globeController.startGlobeRotationWithDelay
    );
  });
};

const onCardClose = (element) => {
  hideElement(element);
  globeController.onGlobeCardClose();
};

const hideAllCardsIfPresent = () => {
  const cards = getElements(".card");
  cards.forEach((card) => {
    hideElement(card);
  });
};
