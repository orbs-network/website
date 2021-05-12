import { getElement, getElementAttribute, getElements } from "../heplers.js";
import { init } from "../index.js";
import { initInfiniteScrolling } from "./infinite-sctoll.js";
import { initPagination } from "./pagination.js";
import { addEventsToTags } from "./tags.js";
let blogsList = [];
let blogsContainer;
window.onload = () => {
  init();
  // addEventsToTags();
  handleBlogListOnLoad();
};

const handleBlogListOnLoad = () => {
  const list = getElements(".blog-list-blog");
  blogsList = list;
  blogsContainer = getElement(".blog-list");
  blogsContainer.innerHTML = "";
  list.forEach((blog) => {
    const linkElement = blog.querySelector(".blog-list-blog-wrapper");
    const src = getElementAttribute(linkElement, "href");
    const newSrc = src;
    linkElement.setAttribute("href", newSrc);
    console.log(src);
    blog.style.display = "flex";
  });
  initInfiniteScrolling(blogsContainer, blogsList);
  //initPagination(blogsContainer, blogsList);
};
