export const getElement = (element) => {
  try {
    return document.querySelector(element);
  } catch (error) {
    console.error("couldnt find element");
  }
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
    const Hidden = element.style.display == "none";
    if (!isClickInside && opacity) {
      callback();
    }
  });
};

export const navbarMenuOutsideClick = () => {
  const overlay = getElement(".nav-menu-overlay");
  addEvent(overlay, "click", hideMenu);
};

const onScrollEvent = () => {
  const navbar = getElement(".main-header");
  document.addEventListener(
    "scroll",
    () => {
      const offsetTop = window.pageYOffset;
      if (offsetTop >= 30) {
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
  navbarMenuOutsideClick();
  const subscribeBtn = getElement(".subscribe-btn");
  addEvent(subscribeBtn, "click", showSubscribePopup);
  const overlay = getElement(".subscribe-popup-overlay");
  addEvent(overlay, "click", hideSubscribePopup);
};

const showSubscribePopup = (e) => {
  const popup = getElement(".subscribe-popup");
  popup.classList.add("subscribe-popup-active");
};

const hideSubscribePopup = () => {
  const popup = getElement(".subscribe-popup");

  popup.classList.remove("subscribe-popup-active");
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
  return str.toLowerCase().split(" ").join(char);
};

export const init = () => {
  addListenersToNavbar();
  addListenersToFooter();
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

export const checkIfIncludesInUrl = (currentPath) => {
  const url = window.location.pathname;
  return url.indexOf(currentPath) > -1;
};

const addListenersToFooter = () => {
  const form = getElement(".footer-bottom-form");
  addEvent(form, "submit", submitFooterForm);
};

const submitFooterForm = (e) => {
  e.preventDefault();
  const inputValue = getElement(".footer-bottom-form-input").value;
  alert(`youre email is: ${inputValue}`);
};
