import { init } from "../index.js";
import "https://unpkg.com/swiper/swiper-bundle.min.js";


const initSlider = () => {
  new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
};

const onLoad = () => {
  init();
  initSlider();
};

onLoad();
