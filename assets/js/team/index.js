import { init } from "../index.js";

import "https://unpkg.com/swiper/swiper-bundle.min.js";
import { addEvent, getElements } from "../heplers.js";
window.onload = () => {
  init();
  initSlider();
};

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
const addClickListenerToMember = () => {
  const members = getElements(".team-member");
  if (!members) return;
  members.forEach((member) => {
    addEvent(member, "click", () => showMemberPopup(member));
  });
};

const showMemberPopup = (element) => {
  const popup = element.querySelector(".team-member-popup");
  const body = document.querySelector("body");
  var bodyPopup = popup.cloneNode(true);

  const overlay = bodyPopup.querySelector(".team-member-popup-overlay");
  const closeBtn = bodyPopup.querySelector(".team-member-popup-c-close");
  bodyPopup.classList.add("team-member-popup-active");
  addEvent(overlay, "click", hideMemberPopup);
  addEvent(closeBtn, "click", hideMemberPopup);
  body.appendChild(bodyPopup);
  setTimeout(() => {
    bodyPopup.classList.add("team-member-popup-active-animation");
  }, 50);
};

const hideMemberPopup = () => {
  const body = document.querySelector("body");
  const child = body.querySelector(".team-member-popup-active");
  child.classList.remove("team-member-popup-active-animation");
  setTimeout(() => {
    body.removeChild(child);
  }, 200);
};
