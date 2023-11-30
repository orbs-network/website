import { init } from "../index.js";

const mapValues = async () => {
  const response = await fetch("/assets/datasets/ecosystem.json");
  const ecosystem = await response.json();

  Object.keys(ecosystem).forEach(function (key, index) {
    const items = ecosystem[key].map((it) => {
      return createItem(it);
    });
    addItemsToContainer(key, items);
  });
};

const addItemsToContainer = (containerId, items) => {
  const container = document
    .getElementById(containerId)
    .querySelector(".ecosystem-category-list");
  items.forEach((item) => {
    container.appendChild(item);
  });
};

const createItem = (item) => {
  const container = document.createElement("div");
  container.classList.add("ecosystem-category-list-item");

  const imgElement = () => {
    if (!item.logo) {
      return `<p class="ecosystem-category-list-item-name">${item.name}</p>`;
    }
    if (item.withName) {
      return `<div class='ecosystem-category-list-item-flex'>
      <img src=${item.logo} />
      <p class='ecosystem-category-list-item-name'>${item.name}</p>
      </div>`;
    }
    return `<img src=${item.logo} />`;
  };

  container.innerHTML = `<a href=${item.url} target="_blank">
         ${imgElement()}
       </a>`;

  return container;
};

window.onload = () => {
  init();
  mapValues();
};
