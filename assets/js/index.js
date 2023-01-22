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
  hljs.highlightAll();

  analytics.init();
  if (!keepLoader) {
    ui.hideAppLoader();
  }
  // handleResponsiveProductHeader();
};

const handleResponsiveProductHeader = () => {
  const element = document.querySelector(".product-header");
  if (!element) return;
  const onResize = () => {
    const width = window.innerWidth;
    let zoom = 1;
   
    if (width <= 1300) {
      zoom = width / 1310;
    }
    if (width < 800) {
      zoom = 1;
    }

    element.style.zoom = zoom;
  };

  window.addEventListener("resize", onResize);
  onResize();
};
