import { getElement, removeClass, addClass, addEvent } from "../heplers.js";
import { showSubscribePopup } from "../components/subscribe.js";
import { toggleWindowScroll } from "../ui/ui.js";
const shadow = document.querySelector(".overlay");

const showMenuButton = document.querySelector(".show-menu");
const hideMenuButton = document.querySelector(".hide-menu");

const mobileSubscribe = getElement(".mobile-subscribe");

let scrollPos = 0;

export const showMenu = () => {
  shadow.classList.add("overlay-active");
  const menu = getElement(".navbar-menu");
  setTimeout(() => {
    addClass(menu, "navbar-menu-active");
    toggleWindowScroll(true);
  }, 50);
};
const isVisible = (elem) =>
  !!elem &&
  !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

function hideOnClickOutside() {
  const element = document.querySelector(".navbar-menu");
  const outsideClickListener = (event) => {
    if (
      !element.contains(event.target) &&
      isVisible(element) &&
      element.classList.contains("navbar-menu-active")
    ) {
      hideMenu();
    }
  };

  document.addEventListener("click", outsideClickListener);
}

export const hideMenu = () => {
  shadow.classList.remove("overlay-active");

  const menu = getElement(".navbar-menu");
  removeClass(menu, "navbar-menu-active");
  toggleWindowScroll(false);
};

export const navbarMenuOutsideClickListener = () => {
  document.addEventListener("click", function (event) {
    const overlay = getElement(".navbar-menu-content");
    const btn = getElement(".menu-burger-toggle");
    if (!overlay || !hideMenuButton || hideMenuButton.contains(event.target))
      return;
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

export const addEventsToNavbar = () => {
  addEvent(mobileSubscribe, "click", handleMobileSubscribeClick);
  addEvent(showMenuButton, "click", showMenu);
  addEvent(hideMenuButton, "click", hideMenu);
};

export const init = () => {
  addEventsToNavbar();
  handleNavbarBackground();
  hideOnClickOutside();
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
