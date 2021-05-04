import {
  getElement,
  removeClass,
  addClass,
  addEvent,
  hideBodyOverflow,
} from "../common.js";
import { showSubscribePopup } from "../components/subscribe.js";

let menuIsOpen;
export const showMenu = () => {
  const menu = getElement(".navbar-menu");
  addClass(menu, "navbar-menu-show");
  hideBodyOverflow(true);
  menuIsOpen = true;
};

export const hideMenu = () => {
  if (!menuIsOpen) return;
  const menu = getElement(".navbar-menu");
  removeClass(menu, "navbar-menu-show");
  hideBodyOverflow(false);
  menuIsOpen = false;
};

export const navbarMenuOutsideClick = () => {
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

export const handleNavbarScroll = () => {
  const navbar = getElement(".navbar");
  const offsetTop = window.pageYOffset;
  if (offsetTop >= 30) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
};

export const addListenersToNavbar = () => {
  const mobileSubscribe = getElement(".mobile-subscribe");
  const subscribeBtn = getElement(".subscribe-btn");
  addEvent(subscribeBtn, "click", showSubscribePopup);
  addEvent(mobileSubscribe, "click", handleMobileSubscribeClick);
  const hamburger = getElement(".navbar-burger-open");
  addEvent(hamburger, "click", showMenu);
  const closeMenu = getElement(".navbar-burger-close");
  addEvent(closeMenu, "click", hideMenu);
  navbarMenuOutsideClick();

  setTimeout(() => {
    onNavbarLoad();
  }, 200);
};
const handleMobileSubscribeClick = () => {
  hideMenu();
  setTimeout(() => {
    showSubscribePopup();
  }, 200);
};

const onNavbarLoad = () => {
  const menu = getElement(".navbar-menu");
  const subscribe = getElement(".subscribe");
  menu.style.display = "flex";
  subscribe.style.display = "flex";
};
