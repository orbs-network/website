const getElement = (element) => {
  return document.querySelector(element);
};
const createElement = (element) => {
  return document.createElement(element);
};

const getElements = (element) => {
  return document.querySelectorAll(element);
};

const showMenu = () => {
  const menu = getElement(".navbar-menu");
  menu.classList.add("navbar-menu-show");
};
const hideMenu = () => {
  const menu = getElement(".navbar-menu");
  menu.classList.remove("navbar-menu-show");
};
const appendEventsToNavbar = () => {
  //   const hamburger = getElement(".hamburger");
  //   hamburger.addEventListener("click", () => {
  //     showMenu();
  //   });
  //   const closeMenu = getElement(".navbar-menu-close");
  //   closeMenu.addEventListener("click", () => {
  //     hideMenu();
  //   });
};
