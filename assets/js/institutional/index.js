import { init } from "../index.js";
import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.17/+esm";

window.onload = () => {
  init();
  initFeaturesTabs();
  initStatsAnimation();
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

// Stats section — when the section scrolls into view, animate each
// badge cell in with a scale-overshoot + opacity entrance, then
// count up the number from 0 to its target. Staggered 150ms per cell.
function initStatsAnimation() {
  const section = document.querySelector(".institutional-stats");
  if (!section) return;

  const cells = Array.from(section.querySelectorAll(".institutional-stats-cell"));
  if (!cells.length) return;

  // Capture each cell's target value before we touch the DOM, so
  // count-up has a target to animate toward. Hide the cell + its
  // number while we wait for in-view.
  const targets = cells.map((cell) => {
    const valueEl = cell.querySelector(".institutional-stats-value");
    const parsed = valueEl ? parseTarget(valueEl.textContent) : null;
    if (valueEl && parsed) valueEl.textContent = parsed.prefix + "0" + parsed.suffix;
    cell.style.opacity = "0";
    cell.style.transform = "scale(0.3)";
    return { cell, valueEl, parsed };
  });

  inView(section, () => {
    targets.forEach(({ cell, valueEl, parsed }, i) => {
      const cellDelay = i * 0.15;

      // Badge enters with scale overshoot. Cubic-bezier emulates a
      // spring without subscribing to Motion's spring options.
      animate(
        cell,
        { opacity: [0, 1], transform: ["scale(0.3)", "scale(1.06)", "scale(1)"] },
        {
          duration: 0.75,
          delay: cellDelay,
          easing: [0.34, 1.56, 0.64, 1],
        }
      );

      // Count-up starts shortly after the badge starts entering,
      // overlapping for a unified feel.
      if (valueEl && parsed) {
        animate(0, parsed.target, {
          duration: 1.4,
          delay: cellDelay + 0.35,
          easing: "ease-out",
          onUpdate: (current) => {
            valueEl.textContent =
              parsed.prefix + formatValue(current, parsed.isFloat) + parsed.suffix;
          },
          onComplete: () => {
            // Snap to the canonical text in case rounding drifted.
            valueEl.textContent = parsed.prefix + formatValue(parsed.target, parsed.isFloat) + parsed.suffix;
          },
        });
      }
    });
  }, { amount: 0.3 });
}

// Parse strings like "$2.5B+", "10+", "30+" into { prefix, target,
// suffix, isFloat } so we can animate the numeric portion only.
function parseTarget(text) {
  const m = String(text).trim().match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!m) return null;
  const target = parseFloat(m[2]);
  if (!Number.isFinite(target)) return null;
  return {
    prefix: m[1],
    target,
    suffix: m[3],
    isFloat: !Number.isInteger(target),
  };
}

function formatValue(n, isFloat) {
  return isFloat ? n.toFixed(1) : Math.floor(n).toString();
}
