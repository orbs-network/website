import { getElement, getElements } from "../heplers.js";
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
  list.forEach((element) => {
    element.style.display = "flex";
  });
  initInfiniteScrolling(blogsContainer, blogsList);
  //initPagination(blogsContainer, blogsList);
};
