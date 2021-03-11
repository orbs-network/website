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

export const showElement = (element, transform) => {
  element.style.display = "flex";
  if (transform) {
    element.style.transform = transform;
  }
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
    if (!isClickInside && opacity) {
      callback();
    }
  });
};

const onScrollEvent = () => {
  const navbar = getElement(".main-navbar");
  document.addEventListener(
    "scroll",
    () => {
      const offsetTop = window.pageYOffset;
      if (offsetTop >= 80) {
        navbar.classList.add("scrolled-navbar");
      } else {
        navbar.classList.remove("scrolled-navbar");
      }
    },
    { passive: true }
  );
};

export const addListenersToNavbar = () => {
  const hamburger = getElement(".navbar-burger-open");
  addEvent(hamburger, "click", showMenu);
  const closeMenu = getElement(".navbar-burger-close");
  addEvent(closeMenu, "click", hideMenu);
  onScrollEvent();
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

export const setToggleTextEvent = () => {
  const elements = getElements(".expend-btn");
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
      event.target.innerText = event.target.dataset.close;
      return node.classList.remove(limitedClassName);
    }
    event.target.innerText = event.target.dataset.open;
    return node.classList.add(limitedClassName);
  });
};

export const getElementAttribute = (element, attr) => {
  if (!element) return;
  return element.getAttribute(attr);
};
