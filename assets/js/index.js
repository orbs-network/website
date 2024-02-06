import footer from "./footer/index.js";
import navbar from "./navbar/index.js";
import subscribe from "./components/subscribe.js";
import gdpr from "./services/gd.js";
import ui from "./ui/ui.js";
import analytics from "./services/an/index.js";

ui.showAppLoader();

export const init = async (keepLoader) => {
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

  try {
    const res = await fetch("http://ip-api.com/json", {
      method: "GET",
    }).then((res) => res.json());

    if (res.countryCode === "IL") {

      const script = document.createElement("script");
      script.src = "/assets/js/dependencies/negishim.js";
    
      document.head.appendChild(script);
      document.querySelector(".footer-bottom-policy a:last-child").style.display = "unset";
    }
  } catch (error) {}
};
