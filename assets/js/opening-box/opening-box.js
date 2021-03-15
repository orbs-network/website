import { getElements, addEvent } from "../common.js";

const faqNodeEventFn = (e) => {
  const nodes = e.target.parentNode.childNodes;
  const node = getNode(nodes);
  setFaqNodeStyle(node);
};

export const setFaqNodesEvent = () => {
  const elements = getElements(".opening-box");

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
    if (nodes[i].className === "opening-box-text") {
      return nodes[i];
    }
  }
};
