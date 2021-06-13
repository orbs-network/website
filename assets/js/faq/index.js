import { getElement, getElements } from "../heplers.js";
import { setOpeningBoxEvents } from "../components/opening-box.js";
import { init } from "../index.js";

window.onload = () => {
  init();
  setOpeningBoxEvents();
  removeListFromSideMenu();
};

const removeListFromSideMenu = () => {
  const container = getElement(".faq-side-menu-links");
  const links = document.createElement("div");
  links.classList.add("faq-side-menu-links-flex");
  const categories = getElements(".side-menu .faq-lists-category");
  categories.forEach((category) => {
    const categoryName = category.querySelector(".faq-lists-category small")
      .innerText;
    console.log(categoryName);
    const link = document.createElement("a");
    link.setAttribute("href", `#${categoryName}`);
    link.innerText = categoryName;
    links.appendChild(link);
    container.removeChild(category);
  });
  container.prepend(links);
};
