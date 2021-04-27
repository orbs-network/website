import { getElement, removeClass, addClass, addEvent } from "../common.js";

export const showMenu = () => {
  const menu = getElement(".nav-menu");
  addClass(menu, "nav-menu-show");
};

export const hideMenu = () => {
  const menu = getElement(".nav-menu");
  removeClass(menu, "nav-menu-show");
};

export const navbarMenuOutsideClick = () => {
  document.addEventListener("click", function (event) {
    const overlay = getElement(".nav-menu-content-flex");
    const btn = getElement(".menu-burger-toggle");
    if (!overlay || !btn || btn.contains(event.target)) return;
    const isClickInside = overlay.contains(event.target);
    if (!isClickInside) {
      hideMenu();
    }
  });
};

export const handleNavbarScroll = () => {
  const navbar = getElement(".main-header");
  const offsetTop = window.pageYOffset;
  if (offsetTop >= 30) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
};

export const addListenersToNavbar = () => {
  const hamburger = getElement(".navbar-burger-open");
  addEvent(hamburger, "click", showMenu);
  const closeMenu = getElement(".navbar-burger-close");
  addEvent(closeMenu, "click", hideMenu);
  navbarMenuOutsideClick();

  setTimeout(() => {
    onNavbarLoad();
  }, 200);
};

const onNavbarLoad = () => {
  const menu = getElement(".nav-menu");
  const subscribe = getElement(".subscribe");
  menu.style.display = "flex";
  subscribe.style.display = "flex";
};
