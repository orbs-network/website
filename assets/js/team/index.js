import { init } from "../index.js";
import "https://unpkg.com/swiper/swiper-bundle.min.js";
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
