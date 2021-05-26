import { getElements } from "../heplers.js";

const handleOpeningBoxClick = (e, element) => {
  e.stopPropagation();
  toggleBoxHiddenText(element);
};

export const setOpeningBoxEvents = () => {
  const elements = getElements(".opening-box");
  elements.forEach((element) => {
    const title = element.querySelector(".opening-box-title");
    title.addEventListener("click", (e) => handleOpeningBoxClick(e, element));
  });
};

const toggleBoxHiddenText = (node) => {
  const isActive = node.classList.contains("opening-box-active");
  if (isActive) {
    return node.classList.remove("opening-box-active");
  }
  return node.classList.add("opening-box-active");
};
