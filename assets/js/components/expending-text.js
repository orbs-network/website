import { addEvent, getElements } from "../heplers.js";

const toggleTextBox = (event, element) => {
  event.stopPropagation();
  const limitedClassName = "limited-lines";
  const isOpen = element.querySelector(`.${limitedClassName}`);
  const limitedLinesText = element.querySelector(`.expending-box-text`);
  const isOpenText = event.target.dataset.open;
  const isClosedText = event.target.dataset.close;
  if (isOpen) {
    event.target.innerText = isClosedText;
    return limitedLinesText.classList.remove(limitedClassName);
  }
  event.target.innerText = isOpenText;
  return limitedLinesText.classList.add(limitedClassName);
};

export const setToggleTextEvent = () => {
  const elements = getElements(".expending-box");
  elements.forEach((element) => {
    const button = element.querySelector(".expend-btn");
    addEvent(button, "click", (e) => toggleTextBox(e, element));
  });
};
