import { getElement, getElements, init } from "../common.js";

window.onload = () => {
  init();
  getBlogHeaderBreadcrumb();
};

export const getBlogHeaderBreadcrumb = () => {
  const texts = getElements(".blog-card-content-text p");
  const textContainer = getElement(".blog-bread-crumbs-text");
  let string = "";
  texts.forEach((t) => {
    string += ` ${t.innerText}`;
  });
  textContainer.innerText = string;
};
