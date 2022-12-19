import { init } from "../index.js";

const keys = {
  apiFlavor: "apiFlavor",
  clientLibrary: "clientLibrary",
  network: "network",
};

let exampleSelection = {
  [keys.apiFlavor]: "toncenter-http-api-v2",
  [keys.clientLibrary]: "npm-ton",
  [keys.network]: "mainnet",
};
const cards = document.querySelectorAll(".ton-gateway-cards-card");

let jsonConfig;
let codeSnippet;
const selectors = document.querySelectorAll(".selectbox");
const clientLibrarySelector = document.querySelector(
  `[data-key="${keys.clientLibrary}"]`
);
let selectedLibrary = undefined;
const copyButton = document.querySelector(".ton-gateway-example-copy button");
const copyTooltip = document.querySelector(".ton-gateway-example-copy-tooltip");
const onLoad = async () => {
  // addCardsEvents()
  init();
  const response = await fetch("/assets/datasets/gateway-snippets.json");
  jsonConfig = await response.json();
  addEventsToSelectboxes();
  triggerInitialselect();
  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(codeSnippet);
    copyTooltip.classList.add("active");
    setTimeout(() => {
      copyTooltip.classList.remove("active");
    }, 4000);
  });
};

const triggerInitialselect = () => {
  selectors.forEach((selector) => {
    selector.querySelector(".selectbox-list-item").click();
  });
};

const addEventsToSelectboxes = () => {
  selectors.forEach((selector, index) => {
    selector.classList.add(`${index}`);
    const selectedContainer = selector.querySelector(".selectbox-selected");
    const selectedContainerValue = selector.querySelector(
      ".selectbox-selected-value"
    );

    const selectorItems = selector.querySelectorAll(".selectbox-list-item");
    const key = selector.getAttribute("data-key");

    selectorItems.forEach((selectorItem) => {
      selectorItem.addEventListener("click", () => {
        selector.classList.remove("selectbox-open");
        const isLibrary = key === keys.clientLibrary;
        if (isLibrary) {
          console.log(selectorItem);
          selectedLibrary = selectorItem;
        }
        exampleSelection[key] = selectorItem.getAttribute("data-value");
        generateExample(exampleSelection);
        const isApiFlavor = key === keys.apiFlavor;
        isApiFlavor && hideNotSupportedWallets(selectorItem);
        selectedContainerValue.innerHTML =
          selectorItem.getAttribute("data-selected");
      });

      const links = selectorItem.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.stopPropagation();
        });
      });
    });

    // close all other selectboxes and open the clicked one
    selectedContainer.addEventListener("click", () => {
      const isOpen = selector.classList.contains("selectbox-open");
      selectors.forEach((s) => {
        s.classList.remove("selectbox-open");
      });
      isOpen
        ? selector.classList.remove("selectbox-open")
        : selector.classList.add("selectbox-open");
    });

    //close select box on click outside
    window.addEventListener("click", (event) => {
      if (event.target.contains(selector) && event.target !== selector) {
        selector.classList.remove("selectbox-open");
      }
    });
  });
};

const hideNotSupportedWallets = (selectorItem) => {
  const supportedLibraries = selectorItem
    .getAttribute("data-supported")
    .split(",");

  const items = clientLibrarySelector.querySelectorAll(".selectbox-list-item");

  const isSelectedItemSupported =
    selectedLibrary &&
    supportedLibraries.includes(selectedLibrary.getAttribute("data-value"));

  items.forEach((item) => {
    const value = item.getAttribute("data-value");
    if (supportedLibraries.includes(value)) {
      item.classList.remove("selectbox-list-item-hidden");
    } else {
      item.classList.add("selectbox-list-item-hidden");
    }
  });

  if (!isSelectedItemSupported) {
    clientLibrarySelector
      .querySelectorAll("li:not(.selectbox-list-item-hidden)")[0]
      .click();
  }
};

const generateExample = ({ apiFlavor, clientLibrary, network }) => {
  console.log(apiFlavor, clientLibrary, network);
  try {
    const name = `${apiFlavor}.${clientLibrary}.${network}`;
    codeSnippet = jsonConfig[name];
    const container = document.querySelector(".ton-gateway-hljs");
    container.innerHTML = codeSnippet;

    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  } catch (error) {
    console.log(error);
  }
};

const addCardsEvents = () => {
  cards.forEach((card) => {
    const button = card.querySelector(".card-button");
    button.addEventListener("click", () => {
      clearCards();
      card.classList.add("active-card");
    });
  });
};

const clearCards = () => {
  cards.forEach((card) => {
    card.classList.remove("active-card");
  });
};

onLoad();
