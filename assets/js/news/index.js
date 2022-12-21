import { validateEmail } from "../components/form.js";
import { init } from "../index.js";
import analytics from "../services/an/index.js";
import userPost from "../services/user-post.js";
let posts = [];
let lastLoadedIndex = 0;
let bottomContainer = document.querySelector("#news-posts-bottom");
let topContainer = document.querySelector("#news-posts-top");
let trendingContainer = document.querySelector(".news-trending-flex-posts");

const errorTypes = {
  empty: "empty",
  validation: "validation",
};

window.onload = () => {
  init();
  addEventsToLoadMoreButton();
  getPosts();
  addEventsToSubscribe();
  createPostsOnload(trendingContainer);
};

const addAnalyticsClickEventToPost = (post, url) => {
  post.addEventListener("click", () => {
    analytics.sendAmplitudeAnalyticsEvent(analytics.events.newsClicked, { name: url });
  });
};

const createPostsOnload = (container) => {
  const elements = container.querySelectorAll(".news-post-hidden");
  elements.forEach((hiddenPost) => {
    container.removeChild(hiddenPost);
    const component = createItem(hiddenPost);
    container.appendChild(component);
  });
};

const getPosts = () => {
  const elements = topContainer.querySelectorAll(".news-post-hidden");
  elements.forEach((hiddenPost, index) => {
    hiddenPost.id = index;
    posts.push(hiddenPost);
    topContainer.removeChild(hiddenPost);
  });
  loadMore(12);
};

const hideLoadMorebtn = () => {
  const btn = document.querySelector("#load-more-posts");
  btn.style.display = "none";
};

const loadMore = (amount) => {
  const elements = posts.slice(lastLoadedIndex, lastLoadedIndex + amount);
  elements.forEach((element) => {
    const component = createItem(element);
    if (element.id <= 5) {
      topContainer.appendChild(component);
    } else {
      bottomContainer.appendChild(component);
    }
  });
  lastLoadedIndex += amount;
  if (lastLoadedIndex >= posts.length) {
    hideLoadMorebtn();
  }
};


const createItem = (element) => {
  const props = JSON.parse(element.getAttribute("data-component"));
  try {
    const { date, image, url, body, logo } = props;
    const post = document.createElement("li");
    post.classList.add("news-post");
    post.id = element.id;

    const html = `
    <a href='${url}' class='news-post-link' target='_blank'>
        <img src=${image} class='news-post-img' />
        <div class='news-post-content'>
          <div class='news-post-content-flex'>
          <div  class='news-post-logo'>
          <img src="${logo}" />
          </div>
          <div class='news-post-date'>
          ${date}
          </div>
          </div>
        <div class='news-post-body'>${body}</div>
       
        </div>
    </a>`;
    addAnalyticsClickEventToPost(post, url);
    post.innerHTML = html;
    return post;
  } catch (error) {
    console.log(element.id, props);
  }
};

const addEventsToLoadMoreButton = () => {
  const btn = document.querySelector("#load-more-posts");
  btn.addEventListener("click", loadMore.bind(null, 6));
};

const addEventsToSubscribe = () => {
  const submitButton = document.querySelector(".news-subscribe-submit");
  const input = document.querySelector(".news-subscribe-input");
  input.addEventListener("focus", setError);
  submitButton.addEventListener("click", validateAndSubmit);
};

const validateAndSubmit = async () => {
  const input = document.querySelector(".news-subscribe-input");
  const { value } = input;
  if (!value) {
    return setError(errorTypes.empty);
  }
  if (!validateEmail(value)) {
    return setError(errorTypes.validation);
  }
  const body = {
    fisrtName: "",
    email: value,
  };
  setSubscribeLoading(true);
  await userPost.subscribe(body);
  setSubscribeLoading(false);
  input.value = "";
};

const setError = (type) => {
  switch (type) {
    case errorTypes.empty:
      const emptyElement = document.querySelector(".news-subscribe-empty");
      emptyElement.style.display = "block";
      break;
    case errorTypes.validation:
      const validationElement = document.querySelector(
        ".news-subscribe-invalid"
      );
      validationElement.style.display = "block";
      break;

    default:
      const errors = document.querySelectorAll(".news-subscribe-error");
      errors.forEach((err) => {
        err.style.display = "none";
      });
      break;
  }
};

const setSubscribeLoading = (loading) => {
  const submitButton = document.querySelector(".news-subscribe-submit");
  const loader = document.querySelector(".news-subscribe-submit .loader");
  loader.style.display = loading ? "block" : "none";
  submitButton.style.color = loading ? "transparent" : "";
};
