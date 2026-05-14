import { init } from "../index.js";

window.onload = () => {
  init();
  initFeaturesTabs();
};

// Features section — click a tab in the left list, panel text on
// the right swaps to that feature's body content. Markup is rendered
// server-side by code/partials/institutional/Features.js with each
// tab carrying its body in a data-body attribute.
function initFeaturesTabs() {
  const tabs = document.querySelectorAll(".institutional-features-item");
  const panelText = document.querySelector(".institutional-features-panel-text");
  if (!tabs.length || !panelText) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const body = tab.getAttribute("data-body");
      if (!body) return;

      tabs.forEach((t) => {
        t.classList.remove("institutional-features-item-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("institutional-features-item-active");
      tab.setAttribute("aria-selected", "true");

      panelText.textContent = body;
    });
  });
}
