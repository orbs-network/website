import { addEvent, getElements } from "../heplers.js";
const activeClassName = "expending-box-active";

const showMoreText = (element) => {
  element.classList.add(activeClassName);
};

const hideMoreText = (element) => {
  return element.classList.remove(activeClassName);
};

export const setToggleTextEvent = () => {
  const elements = getElements(".expending-box");
  elements.forEach((element) => {
    const readMoreBtn = element.querySelector(".read-more-btn");
    const readLessBtn = element.querySelector(".read-less-btn");
    addEvent(readMoreBtn, "click", () => showMoreText(element));
    addEvent(readLessBtn, "click", () => hideMoreText(element));
  });
};
