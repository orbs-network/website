import {
  getElements,
  init,
  addEvent,
  getElement,
  getElementAttribute,
} from "../common.js";
window.onload = () => {
  init();
  setEventsToPdfBtn();
};

const setEventsToPdfBtn = () => {
  const closeBtn = getElement(".white-paper-pdf-close");
  addEvent(closeBtn, "click", closeIframe);
  const btns = getElements(".white-paper-box-btn");
  if (!btns) return;
  btns.forEach((btn) => {
    addEvent(btn, "click", () => openPdfIframe(btn));
  });
};
const openPdfIframe = (e) => {
  const attar = getElementAttribute(e, "data-url");
  const previewContainer = getElement(".white-paper-pdf");
  const iframeContainer = getElement(".white-paper-pdf-iframe");
  const iframeOverlay = getElement(".white-paper-pdf-overlay");
  const iframe = getElement(".white-paper-pdf-iframe iframe");
  iframe.setAttribute("src", attar);
  previewContainer.classList.add("white-paper-pdf-active");
  iframeOverlay.classList.add("white-paper-pdf-overlay-active");
  setTimeout(() => {
    iframeContainer.classList.add("white-paper-pdf-iframe-active");
  }, 200);
};

const closeIframe = () => {
  const previewContainer = getElement(".white-paper-pdf");
  const iframeContainer = getElement(".white-paper-pdf-iframe");
  const iframeOverlay = getElement(".white-paper-pdf-overlay");
  const iframe = getElement(".white-paper-pdf-iframe iframe");
  iframeContainer.classList.remove("white-paper-pdf-iframe-active");
  iframeOverlay.classList.remove("white-paper-pdf-overlay-active");
  setTimeout(() => {
    previewContainer.classList.remove("white-paper-pdf-active");
    iframe.setAttribute("src", "");
  }, 200);
};
