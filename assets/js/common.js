import { addListenersToFooter } from "./footer/index.js";
import { handleNavbarScroll, addListenersToNavbar } from "./navbar/index.js";
export const getElement = (element) => {
  try {
    return document.querySelector(element);
  } catch (error) {
    console.error("couldnt find element");
  }
};

export const getElements = (element) => {
  return document.querySelectorAll(element) || [];
};

export const addClass = (element, className) => {
  if (!element) return;
  element.classList.add(className);
};
export const removeClass = (element, className) => {
  if (!element) return;
  element.classList.remove(className);
};

export const hideElement = (element, transform) => {
  if (!element) return;
  if (transform) {
    element.style.transform = transform;
  }
  element.style.opacity = 0;
  element.style.pointerEvents = "none";
  setTimeout(() => {
    element.style.display = "none";
  }, 200);
};

export const onMouseEnterAndLeaveEvent = (
  element,
  enterCallback,
  leaveCallback
) => {
  element.addEventListener("mouseenter", function () {
    enterCallback();
  });
  element.addEventListener("mouseleave", function () {
    leaveCallback();
  });
};

export const onOutsideEvent = (element, callback) => {
  if (!element) return;
  document.addEventListener("click", function (event) {
    const isClickInside = element.contains(event.target);
    const opacity = element.style.opacity == 1;
    const Hidden = element.style.display == "none";
    if (!isClickInside && opacity) {
      callback();
    }
  });
};

const handleOnScroll = () => {
  document.addEventListener(
    "scroll",
    () => {
      handleNavbarScroll();
    },
    { passive: true }
  );
};

export const addEvent = (element, eventType, customEvent) => {
  if (!element || !customEvent || !eventType) return;
  element.addEventListener(eventType, (e) => customEvent(e));
};

export const removeSpaces = (str, char) => {
  return str.toLowerCase().split(" ").join(char);
};

export const init = () => {
  addListenersToNavbar();
  addListenersToFooter();
  handleOnScroll();
  AOS.init({ once: true });
  handleNavbarScroll();
};

export const getElementAttribute = (element, attr) => {
  if (!element) return;
  return element.getAttribute(attr);
};
