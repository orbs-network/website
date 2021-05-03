import { addListenersToFooter } from "./footer/index.js";
import { addListenersToNavbar } from "./navbar/index.js";
import { handleOnScroll } from "./common.js";
import { initSubscribeForm } from "./components/subscribe.js";
import gdpr from "./services/gdpr.js";
export const init = () => {
  addListenersToNavbar();
  addListenersToFooter();
  handleOnScroll();
  AOS.init({ once: true });
  initSubscribeForm();
  gdpr.init();
};
