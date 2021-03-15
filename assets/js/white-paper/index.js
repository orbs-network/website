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
  setCloseIframeListener();
};

const setEventsToPdfBtn = () => {
  const btns = getElements(".white-paper-box-btn");
  if (!btns) return;
  btns.forEach((btn) => {
    addEvent(btn, "click", () => setPdfIntoIframe(btn));
    addEvent(btn, "click", () => togglePdfPreview(true));
  });
};

const setCloseIframeListener = () => {
  const closeBtn = getElement(".white-paper-pdf-close");
  addEvent(closeBtn, "click", () => togglePdfPreview(false));
};

const setPdfIntoIframe = (e) => {
  const attar = getElementAttribute(e, "data-url");
  const iframe = getElement(".white-paper-pdf-iframe");
  iframe.setAttribute("src", attar);
};

const clearPdfIframe = (e) => {
  const iframe = getElement(".white-paper-pdf-iframe");
  iframe.setAttribute("src", "");
};

const togglePdfPreview = (show) => {
  const previewContainer = getElement(".white-paper-pdf");
  if (show) {
    return previewContainer.classList.add("white-paper-pdf-active");
  }
  setTimeout(() => {
    clearPdfIframe();
  }, 500);
  return previewContainer.classList.remove("white-paper-pdf-active");
};
