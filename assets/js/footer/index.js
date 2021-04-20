import { getElement, addEvent } from "../common.js";
export const addListenersToFooter = () => {
  const form = getElement(".footer-bottom-form");
  addEvent(form, "submit", submitFooterForm);
};

const submitFooterForm = (e) => {
  e.preventDefault();
  const inputValue = getElement(".footer-bottom-form-input").value;
  alert(`youre email is: ${inputValue}`);
};
