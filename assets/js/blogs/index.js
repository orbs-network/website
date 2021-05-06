import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../heplers.js";
import { init } from "../index.js";

let selected;
let blogs = [];
window.onload = () => {
  init();
  addEventsToTags();
  blogs = getElements(".blog-list-blog");
};

const hideBlog = (elem) => {
  try {
    const container = getElement(".blog-list");
    container.removeChild(elem);
  } catch (error) {}
};

const showBlog = (elem) => {
  const container = getElement(".blog-list");
  container.appendChild(elem);
};

const filterPage = (type) => {
  blogs.forEach((blog) => {
    const blogType = getElementAttribute(blog, "data-type");
    if (!type) {
      return showBlog(blog);
    }
    if (blogType !== type) {
      return hideBlog(blog);
    }
    return showBlog(blog);
  });
};

const toggleActiveSelector = (selector, isActive) => {
  const selectors = getElements(".blog-tags-tag");
  selectors.forEach((tag) => {
    return tag.classList.remove("active-tag");
  });
  if (isActive) {
    return selector.classList.add("active-tag");
  }
  return selector.classList.remove("active-tag");
};

const selectFilter = (element) => {
  const type = getElementAttribute(element, "data-type");
  const formatted = type.toLowerCase();
  if (formatted === selected) {
    selected = null;
    toggleActiveSelector(element);
    return filterPage();
  }
  selected = formatted;
  toggleActiveSelector(element, true);
  return filterPage(formatted);
};

const addEventsToTags = () => {
  const tags = getElements(".blog-tags-tag");
  tags.forEach((element) => {
    addEvent(element, "click", () => selectFilter(element));
  });
};
