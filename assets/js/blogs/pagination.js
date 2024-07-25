import { addEvent, getElement, getElementAttribute } from "../heplers.js";

const pageSize = 15;
let paginationButtons = [];
const paginate = (container, blogs, page_number) => {
  handleSelectedPage(page_number);
  container.innerHTML = "";
  const start = (page_number - 1) * pageSize;
  const end = page_number * pageSize;
  blogs.forEach((blog, index) => {
    if (index >= start && index < end) {
      return container.appendChild(blog);
    }
  });
};

const handleSelectedPage = (selectedPage) => {
  paginationButtons.forEach((button) => {
    const value = getElementAttribute(button, "data-id");
    if (value == selectedPage) {
      return button.classList.add("pagination-selected");
    }
    return button.classList.remove("pagination-selected");
  });
};

export const initPagination = (container, blogsList) => {
  paginate(container, blogsList, 1);
  createPaginationBtns(container, blogsList);
};

const createPaginationBtns = (container, blogs) => {
  const paginationContainer = getElement(".pagination-container");
  const pagesNumber = blogs.length / pageSize;
  for (let i = 0; i <= pagesNumber; i++) {
    const paginationButton = document.createElement("button");
    const value = i + 1;
    paginationButton.setAttribute("data-id", value);
    paginationButton.innerText = value;
    addEvent(paginationButton, "click", () =>
      handlePaginationBtnClick(container, blogs, value)
    );
    handleSelectedPage(1);
    paginationContainer.appendChild(paginationButton);
    paginationButtons.push(paginationButton);
  }
};

const handlePaginationBtnClick = (container, blogs, value) => {
  window.scrollTo(0, 0);
  setTimeout(() => {
    paginate(container, blogs, value);
  }, 200);
};
