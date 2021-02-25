import { getElements, addEvent } from "../common.js";
import { init } from "../common.js";

window.onload = () => {
  setFaqNodesEvent();
  init();
  addLinks();
};

const faqNodeEventFn = (e) => {
  const nodes = e.target.parentNode.childNodes;
  const node = getNode(nodes);
  setFaqNodeStyle(node);
};

const setFaqNodesEvent = () => {
  const elements = getElements(".faq-element");

  elements.forEach((element) => {
    addEvent(element, "click", faqNodeEventFn);
  });
};

const hideFaq = (node) => {
  node.style.height = "0";
  node.style.opacity = 0;
  node.style.padding = 0;
};

const showFaq = (node) => {
  node.style.height = "auto";
  node.style.opacity = 1;
  node.style.padding = "5px 0px 10px 0px";
};

const setFaqNodeStyle = (node) => {
  const isInView = node.style.height === "auto";
  if (isInView) {
    return hideFaq(node);
  }
  showFaq(node);
};

const getNode = (nodes) => {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].className === "faq-element-text") {
      return nodes[i];
    }
  }
};

const addLinks = () => {
  const elements = getElements(".faq-desc-links-link");
  elements.forEach((element) => {
    console.log(element);
  });
};
