import { showSubscribePopup } from "../components/subscribe.js";
import {
  getElements,
  addEvent,
  getElementAttribute,
  getElement,
} from "../heplers.js";
const subscribeBtn = document.querySelector(".footer .subscribe-btn");

function isDate(dateStr) {
  return !isNaN(new Date(dateStr));
}

const handleMobileClick = (e) => {
  const activeClass = "footer-navigation-mobile-list-active";
  const list = e.querySelector(".footer-navigation-mobile-list");
  const isActive = list.classList.contains(activeClass);
  if (isActive) {
    return list.classList.remove(activeClass);
  }
  return list.classList.add(activeClass);
};
const addMobileClickEvents = () => {
  const mobileNavigations = getElements(".footer-navigation-mobile");
  mobileNavigations.forEach((element) => {
    addEvent(element, "click", () => handleMobileClick(element));
  });
};
const handleBlogs = () => {
  const list = getElement(".footer-blog-list");
  const blogs = getElements(".footer-blog-list .blog-element");
  blogs.forEach((blog) => {
    const publish_at = getElementAttribute(blog, "data-publish-at");
    if (!publish_at || (isDate(publish_at) && Date.now() > new Date(publish_at).getTime())) {
      const footerBlog = buildBlog(blog);
      list.removeChild(blog);
      list.appendChild(footerBlog);
    }
  });
};

const buildBlog = (blog) => {
  const { imageSrc, blogUrl, prefix, date, title } = getBlogAttributes(blog);
  const {
    container,
    titleText,
    image,
    prefixText,
    dateText,
    dateContainer,
    rightSide,
    leftSide,
  } = createBlogElements();
  titleText.innerText = title;
  prefixText.innerText = `${prefix}:`;
  dateText.innerText = date;
  container.setAttribute("href", blogUrl);
  image.setAttribute("src", imageSrc);
  dateContainer.appendChild(prefixText);
  dateContainer.appendChild(dateText);
  rightSide.appendChild(titleText);
  rightSide.appendChild(dateContainer);
  leftSide.appendChild(image);
  container.appendChild(leftSide);
  container.appendChild(rightSide);
  return container;
};

const createBlogElements = () => {
  const container = document.createElement("a");
  container.classList.add("footer-blog");
  const titleText = document.createElement("p");
  titleText.classList.add("footer-blog-title");
  const image = document.createElement("img");
  image.classList.add("footer-blog-image");
  const prefixText = document.createElement("p");
  prefixText.classList.add("footer-blog-prefix");
  const dateText = document.createElement("p");
  dateText.classList.add("footer-blog-date");
  const dateContainer = document.createElement("fdiv");
  dateContainer.classList.add("footer-blog-right-flex");
  const rightSide = document.createElement("div");
  rightSide.classList.add("footer-blog-right");
  const leftSide = document.createElement("div");
  leftSide.classList.add("footer-blog-left");
  return {
    container,
    titleText,
    image,
    prefixText,
    dateText,
    dateContainer,
    rightSide,
    leftSide,
  };
};

const getBlogAttributes = (blog) => {
  const imageSrc = getElementAttribute(blog, "data-image");
  const blogUrl = getElementAttribute(blog, "data-url");
  const prefix = getElementAttribute(blog, "data-prefix");
  const date = getElementAttribute(blog, "data-date");
  const title = getElementAttribute(blog, "data-title");

  return { imageSrc, blogUrl, prefix, date, title };
};

export const init = () => {
  addMobileClickEvents();
  handleBlogs();
  if (subscribeBtn) subscribeBtn.addEventListener("click", showSubscribePopup);
};

export default {
  init,
};
