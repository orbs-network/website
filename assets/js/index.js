import footer from "./footer/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./components/subscribe.js";
import gdpr from "./services/gd.js";
import ui from "./ui/ui.js";
import analytics from "./services/an/index.js";

ui.showAppLoader();

export const init = (keepLoader) => {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  navbar.init();
  footer.init();
  subscribe.init();
  ui.init();
  gdpr.init();
  AOS.init({ once: true });
  analytics.init();
  if (!keepLoader) {
    ui.hideAppLoader();
  }
};
