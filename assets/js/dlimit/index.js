import { init } from "../index.js";
import "https://unpkg.com/swiper/swiper-bundle.min.js";

let snippets;
let selectedName

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

const updateSnippet = (name) => {
    selectedName = name
  const container = document.querySelector(".hljs");
  console.log(snippets);
  const value = hljs.highlight(snippets[name], {
    language: "javascript",
  }).value;
  container.innerHTML = value;
};

const contentItems = document.querySelectorAll(".content-body");
const options = document.querySelectorAll(".option");
const addCodeExampleEvents = () => {
  updateSnippet(options[0].getAttribute("data-name"));

  options[0].classList.add("option-active");
  contentItems[0].classList.add("content-body-active");
  options.forEach((option) => {
    const name = option.getAttribute("data-name");
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("option-active");
      });
      option.classList.add("option-active");
      contentItems.forEach((item) => {
        item.classList.remove("content-body-active");
      });
      const contentItem = document.querySelector(`.${name}-body`);
      contentItem.classList.add("content-body-active");
      updateSnippet(name);
    });
  });
};

const addCopyEvent = () => {
  const element = document.querySelector(".copy");
  const tooltip = element.querySelector(".copy-tooltip");
  if (!element || !tooltip) return;
  element.addEventListener("click", async () => {
    await navigator.clipboard.writeText(snippets[selectedName]);
    tooltip.classList.add("active");
    setTimeout(() => {
      tooltip.classList.remove("active");
    }, 4000);
  });
};

const fetchSnippets = async () => {
  const response = await fetch("/assets/datasets/dlimit-snippets.json");
  snippets = await response.json();
};

const onLoad = async () => {
  await fetchSnippets();
  addCodeExampleEvents();
  addCopyEvent();
};

init();
initSlider();
onLoad();
