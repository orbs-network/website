import { addEvent, getElement, getElements, init } from "../common.js";
import { setOpeningBoxEvents } from "../components/opening-box.js";

window.onload = () => {
  init();
  setOpeningBoxEvents();
  addEventsToMobile();
};

const addEventsToMobile = () => {
  const selectedConteiner = getElement(".faq-mobile-menu-selected");
  if (!selectedConteiner) return;
  addEvent(selectedConteiner, "click", toggleMenu);
  const mobileLinks = getElements(".faq-mobile-menu-link");
  mobileLinks.forEach((link) => {
    addEvent(link, "click", () => handleLinkClicked(link));
  });
};

const handleLinkClicked = (link) => {
  const selectedElement = getElement(".faq-mobile-menu-selected");
  selectedElement.textContent = link.textContent;
  toggleMenu();
};

const toggleMenu = () => {
  const menu = getElement(".faq-mobile-menu-list");
  const isActive = menu.classList.contains("faq-mobile-menu-list-active");
  if (!isActive) {
    return menu.classList.add("faq-mobile-menu-list-active");
  }
  menu.classList.remove("faq-mobile-menu-list-active");
};
