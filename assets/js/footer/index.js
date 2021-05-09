import { getElements, addEvent } from "../heplers.js";

export const init = () => {
  const mobileNavigations = getElements(".footer-navigation-mobile");
  mobileNavigations.forEach((element) => {
    addEvent(element, "click", () => handleClick(element));
  });
};

const handleClick = (e) => {
  const activeClass = "footer-navigation-mobile-list-active";
  const list = e.querySelector(".footer-navigation-mobile-list");
  const isActive = list.classList.contains(activeClass);
  if (isActive) {
    return list.classList.remove(activeClass);
  }
  return list.classList.add(activeClass);
};

export default {
  init,
};
