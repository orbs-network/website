import { getElement, removeClass, addClass, addEvent } from "../heplers.js";
import { showSubscribePopup } from "../components/subscribe.js";
import { toggleWindowScroll } from "../ui/ui.js";

let scrollPos = 0;

export const showMenu = () => {
  const menu = getElement(".navbar-menu");
  menu.style.display = "flex";
  setTimeout(() => {
    addClass(menu, "navbar-menu-active");
    toggleWindowScroll(true);
  }, 0);
};

export const hideMenu = () => {
  const menu = getElement(".navbar-menu");
  removeClass(menu, "navbar-menu-active");
  toggleWindowScroll(false);
  setTimeout(() => {
    menu.style.display = "none";
  }, 300);
};

export const navbarMenuOutsideClickListener = () => {
  document.addEventListener("click", function (event) {
    const overlay = getElement(".navbar-menu-content");
    const btn = getElement(".menu-burger-toggle");
    if (!overlay || !btn || btn.contains(event.target)) return;
    const isClickInside = overlay.contains(event.target);
    if (!isClickInside) {
      hideMenu();
    }
  });
};

const handleNavbarBackground = () => {
  const navbar = getElement(".navbar");

  const offsetTop = window.pageYOffset;
  if (offsetTop >= 30) {
    navbar.classList.add("active-navbar");
  } else {
    navbar.classList.remove("active-navbar");
  }
};

const handleNavbarTransform = () => {
  const navbar = getElement(".navbar");

  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -100) {
      navbar.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};
export const handleNavbarScroll = () => {
  handleNavbarBackground();
  handleNavbarTransform();
};

const getNabarElements = () => {
  const mobileSubscribe = getElement(".mobile-subscribe");
  const subscribeBtn = getElement(".subscribe-btn");
  const hamburger = getElement(".navbar-burger-open");
  const closeMenu = getElement(".navbar-burger-close");
  return {
    mobileSubscribe,
    subscribeBtn,
    hamburger,
    closeMenu,
  };
};

export const addEventsToNavbar = () => {
  const {
    mobileSubscribe,
    subscribeBtn,
    hamburger,
    closeMenu,
  } = getNabarElements();
  addEvent(subscribeBtn, "click", showSubscribePopup);
  addEvent(mobileSubscribe, "click", handleMobileSubscribeClick);
  addEvent(hamburger, "click", showMenu);
  addEvent(closeMenu, "click", hideMenu);
};

export const init = () => {
  addEventsToNavbar();
  navbarMenuOutsideClickListener();
  handleNavbarBackground();
};

const handleMobileSubscribeClick = () => {
  hideMenu();
  setTimeout(() => {
    showSubscribePopup();
  }, 200);
};

export default {
  init,
};
