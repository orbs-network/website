import { init } from "../index.js";
import "https://unpkg.com/swiper/swiper-bundle.min.js";
import { addEvent, getElementAttribute, getElements } from "../heplers.js";
window.onload = () => {
  init();
  initSlider();
  addEventsToMembers();
};
let popups = {};
let currentPopup;

const initSlider = () => {
  new Swiper(".swiper-container", {
    // Optional parameters
    speed: 600,
    autoplay: {
      delay: 5000,

      disableOnInteraction: false,
    },
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};

const addEventsToMembers = () => {
  const list = getElements(".team-member");
  list.forEach((member) => {
    addEvent(member, "click", handleMemberSelect);
    const popup = member.querySelector(".member-popup");
    const overlay = member.querySelector(".member-popup-overlay");
    const closeButton = member.querySelector(".member-popup-close");
    addEvent(overlay, "click", hidePopup);
    addEvent(closeButton, "click", hidePopup);
    const name = getElementAttribute(popup, "data-name");
    popups[name] = popup;
    member.removeChild(popup);
  });
};

const handleMemberSelect = (e) => {
  e.stopPropagation();
  const name = getElementAttribute(e.target, "data-name");
  const popup = popups[name];
  if (!popup) return;
  if (currentPopup) {
    hidePopup();
  }
  showPopup(popup);
};

const showPopup = (popup) => {
  document.body.appendChild(popup);
  document.body.style.overflow = "hidden";
  currentPopup = popup;
  setTimeout(() => {
    popup.classList.add("member-popup-active");
  }, 0);
};

const hidePopup = () => {
  currentPopup.classList.remove("member-popup-active");
  document.body.style.overflow = "auto";
  setTimeout(() => {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }, 200);
};
