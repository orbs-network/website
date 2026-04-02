import { init } from "../index.js";

window.onload = () => {
  init();

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".ai-quickstart-copy");
    if (!btn) return;
    var text = btn.getAttribute("data-copy");
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      btn.textContent = "Copied!";
      setTimeout(function () {
        btn.textContent = "Copy";
      }, 2000);
    });
  });
};
