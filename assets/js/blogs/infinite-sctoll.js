import { getElement } from "../heplers.js";

let lastRenderedElementIndex = 0;
let listLoading = false;
const pageSize = 9;

const loadMore = (container, blogsList) => {
  listLoading = true;
  blogsList.forEach((blog, index) => {
    const renderElement =
      index >= lastRenderedElementIndex &&
      index < lastRenderedElementIndex + pageSize;
    if (renderElement) {
      return container.appendChild(blog);
    }
  });
  lastRenderedElementIndex += pageSize;
  listLoading = false;
};

const handleScroll = (container, blogsList) => {
  const footer = getElement(".footer");
  const extraOffset = 150;
  window.addEventListener(
    "scroll",
    () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (
        scrollTop + clientHeight >=
        scrollHeight - footer.offsetHeight - extraOffset
      ) {
        if (listLoading) return;
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
