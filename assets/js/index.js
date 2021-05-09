import footer from "./footer/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./components/subscribe.js";
import gdpr from "./services/gdpr.js";
import ui from "./ui/ui.js";

ui.showAppLoader();

export const init = () => {
  navbar.init();
  footer.init();
  subscribe.init();
  ui.init();
  gdpr.init();
  AOS.init({ once: true });
};
