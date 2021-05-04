import { addListenersToFooter } from "./footer/index.js";
import { addListenersToNavbar } from "./navbar/index.js";
import { getElement, handleOnScroll, scrollToTop } from "./common.js";
import { initSubscribeForm } from "./components/subscribe.js";
import gdpr from "./services/gdpr.js";
export const init = () => {
  addListenersToNavbar();
  addListenersToFooter();
  handleOnScroll();
  AOS.init({ once: true });
  initSubscribeForm();
  gdpr.init();
  hideLoader();
  scrollToTop();
};

const hideLoader = () => {
  const body = getElement("body");
  const loader = getElement(".app-loader");
  loader.style.opacity = 0;
  const appWrapper = getElement(".app-wrapper");
  appWrapper.style.opacity = 1;
  setTimeout(() => {
    body.removeChild(loader);
  }, 1000);
};
