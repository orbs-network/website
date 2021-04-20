import { getElement, removeClass, addClass } from "../common.js";

export const showMenu = () => {
  const menu = getElement(".nav-menu");
  addClass(menu, "nav-menu-show");
};

export const hideMenu = () => {
  const menu = getElement(".nav-menu");
  removeClass(menu, "nav-menu-show");
};

export const showSubscribePopup = (e) => {
  const popup = getElement(".subscribe-popup");
  popup.classList.add("subscribe-popup-active");
};

export const hideSubscribePopup = () => {
  const popup = getElement(".subscribe-popup");
  popup.classList.remove("subscribe-popup-active");
};

export const navbarMenuOutsideClick = () => {
  document.addEventListener("click", function (event) {
    const overlay = getElement(".nav-menu-content-flex");
    const btn = getElement(".menu-burger");
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
