import { getElement } from "../heplers.js";

let lastRenderedElementIndex = 0;
const pageSize = 12;

const loadMore = (container, blogsList) => {
  blogsList.forEach((blog, index) => {
    const renderElement =
      index >= lastRenderedElementIndex &&
      index < lastRenderedElementIndex + pageSize;
    if (renderElement) {
      return container.appendChild(blog);
    }
  });
  lastRenderedElementIndex += pageSize;
};

const handleScroll = (container, blogsList) => {
  const footer = getElement(".footer");
  const extraOffset = 280;
  window.addEventListener(
    "scroll",
    () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      const isLoadMore =
        scrollTop + clientHeight >
        scrollHeight - footer.offsetHeight - extraOffset;
      if (isLoadMore) {
        loadMore(container, blogsList);
      }
    },
    {
      passive: true,
    }
  );
};

export const initInfiniteScrolling = (container, blogsList) => {
  loadMore(container, blogsList);
  setTimeout(() => {
    handleScroll(container, blogsList);
  }, 1000);
};
