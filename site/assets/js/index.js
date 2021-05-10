import footer from "./footer/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./components/subscribe.js";
import gdpr from "./services/gdpr.js";
import ui from "./ui/ui.js";
import analytics from "./services/analytics.js";
import localStorage from "./services/local-storage.js";
import { GDPR_ACCEPTED } from "./keys.js";

ui.showAppLoader();

export const init = () => {
  navbar.init();
  footer.init();
  subscribe.init();
  ui.init();
  gdpr.init();
  AOS.init({ once: true });
  setAnalytics(false);
};

export const setAnalytics = (allowed) => {
  const isAllowed = allowed || localStorage.get(GDPR_ACCEPTED);
  if (isAllowed) {
    analytics.init();
  }
};
