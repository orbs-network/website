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
  if (typeof AOS !== 'undefined') AOS.init({ once: true });
  if (typeof hljs !== 'undefined') hljs.highlightAll();

  analytics.init();
  if (!keepLoader) {
    ui.hideAppLoader();
  }

  if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Jerusalem') {
    var s = document.createElement('script');
    s.src = '/assets/js/dependencies/jquery-negishim.js';
    document.head.appendChild(s);
    s.onload = function() {
      var n = document.createElement('script');
      n.src = '/assets/js/dependencies/negishim.js';
      document.head.appendChild(n);
      var link = document.querySelector('.footer-bottom-policy a:last-child');
      if (link) link.style.display = 'unset';
    };
  }

};
