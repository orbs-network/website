export const getElement = (element) => {
  return document.querySelector(element);
};

export const getElements = (element) => {
  return document.querySelectorAll(element);
};

export const addClass = (element, className) => {
  if (!element) return;
  element.classList.add(className);
};
export const removeClass = (element, className) => {
  if (!element) return;
  element.classList.remove(className);
};

export const hideElement = (element) => {
  if (!element) return;
  element.style.opacity = 0;
  element.style.pointerEvents = "none";
  setTimeout(() => {
    element.style.display = "none";
  }, 200);
};

export const showElement = (element) => {
  element.style.display = "flex";
  setTimeout(() => {
    element.style.opacity = 1;
    element.style.pointerEvents = "all";
  }, 200);
};

export const onMouseEnterAndLeaveEvent = (
  element,
  enterCallback,
  leaveCallback
) => {
  element.addEventListener("mouseenter", function (event) {
    enterCallback();
  });
  element.addEventListener("mouseleave", function (event) {
    leaveCallback();
  });
};

export const onOutsideEvent = (element, callback) => {
  if (!element) return;
  document.addEventListener("click", function (event) {
    const isClickInside = element.contains(event.target);
    if (element.style.opacity == "0") return;
    if (!isClickInside) {
      callback();
    }
  });
};

export const addListenersToNavbar = () => {
  const hamburger = getElement(".hamburger");
  addEvent(hamburger, "click", showMenu);
  const closeMenu = getElement(".nav-menu-close");
  addEvent(closeMenu, "click", hideMenu);
};

export const showMenu = () => {
  const menu = getElement(".nav-menu");
  menu.style.pointerEvent = "all";

  addClass(menu, "nav-menu-show");
};

export const hideMenu = () => {
  const menu = getElement(".nav-menu");
  menu.style.pointerEvent = "none";
  removeClass(menu, "nav-menu-show");
};

export const addEvent = (element, eventType, customEvent) => {
  if (!element || !customEvent || !eventType) return;
  element.addEventListener(eventType, (e) => customEvent(e));
};

export const handleText = (text) => {
  return text || "";
};

export const removeSpaces = (str, char) => {
  return str.split(" ").join(char);
};

export const init = () => {
  addListenersToNavbar();
  AOS.init({ once: true });
};
