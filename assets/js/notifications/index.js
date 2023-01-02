import { init } from "../index.js";

init();



const onLoad = async () => {
  const response = await fetch("/assets/datasets/notification-snippets.json");
  const result = await response.json();
  const container = document.querySelector(".hljs");
  const value = hljs.highlight(result.main_snippet, {
    language: "javascript",
  }).value;
  container.innerHTML = value;

  const element = document.querySelector("#notifications-copy");
  const tooltip = element.querySelector(".copy-tooltip");
  if (!element || !tooltip) return;
  element.addEventListener("click", async () => {
    await navigator.clipboard.writeText(result.main_snippet);
    tooltip.classList.add("active");
    setTimeout(() => {
      tooltip.classList.remove("active");
    }, 4000);
  });
};

onLoad();
