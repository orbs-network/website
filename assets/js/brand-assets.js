import { init } from "./index.js";
window.onload = () => {
  init();
};

const downloadAllButton = document.querySelector(".brand-assets-download-all");
const downloadButtons = document.querySelectorAll(".brand-asset-download");

const donwloadAllEvent = () => {
  downloadAllButton.addEventListener("click", () => {
    downloadButtons.forEach((btn) => {
      btn.click();
    });
  });
};
donwloadAllEvent();
