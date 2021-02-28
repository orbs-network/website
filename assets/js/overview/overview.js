import { init, getElements, addEvent } from "../common.js";

window.onload = () => {
  init();
  setEvents();
};

const setEvents = () => {
  const elements = getElements(".text-box-base-expend");
  elements.forEach((element) => {
    addEvent(element, "click", toggleTextBox);
  });
};

const toggleTextBox = (event) => {
  const nodes = event.target.parentNode.childNodes;
  const limitedClassName = "limited-lines";
  const textClassName = "text-box-base-text";
  nodes.forEach((node) => {
    if (!node.classList.contains(textClassName)) {
      return;
    }
    if (node.classList.contains(limitedClassName)) {
      event.target.innerText = "Read less";
      return node.classList.remove(limitedClassName);
    }
    event.target.innerText = "Read more";
    return node.classList.add(limitedClassName);
  });
};
