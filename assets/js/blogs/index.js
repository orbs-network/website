import { addEvent, getElementAttribute, getElements, init } from "../common.js";

let selected;
window.onload = () => {
  init();
  addEventsToFilter();
};

const hideBlog = (elem) => {
  const isHidden = elem.classList.contains("hidden-blog");
  if (isHidden) return;
  elem.classList.add("hidden-blog");
};

const showBlog = (elem) => {
  const isHidden = elem.classList.contains("hidden-blog");
  if (!isHidden) return;
  elem.classList.remove("hidden-blog");
};

const filterPage = (type) => {
  const elements = getElements(".blog-list-blog");
  elements.forEach((blog) => {
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

const addEventsToFilter = () => {
  const filters = getElements(".blog-tags-tag");
  filters.forEach((element) => {
    addEvent(element, "click", () => selectFilter(element));
  });
};
