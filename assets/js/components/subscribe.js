import {
  addEvent,
  appendChild,
  getElement,
  getElements,
  removeChild,
} from "../heplers.js";
import { toggleWindowScroll } from "../ui/ui.js";
import {
  addEventsToInputs,
  handleLoading,
  handleSuccess,
  validateInputsOnSubmit,
  hideSuccess,
  hideLoading,
} from "./form.js";
let inputs = [];
let subscribeElement;
const formClassName = ".subscribe-form";
const inputClassName = ".subscribe-form .form-input input";

const getElemenets = () => {
  const form = getElement(formClassName);
  const formInputs = getElements(inputClassName) || [];
  const close = getElement(".form-close-btn");
  const subscribe = getElement(".subscribe");

  return {
    form,
    formInputs,
    close,
    subscribe,
  };
};
const init = () => {
  const { form, formInputs, close, subscribe } = getElemenets();
  addEvent(form, "submit", handleSubmit);
  inputs = formInputs;
  addEventsToInputs(inputs, formClassName);
  addEvent(close, "click", closeForm);
  subscribeElement = subscribe;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateInputsOnSubmit(inputClassName, formClassName);
  if (errors.length > 0) {
    return;
  }
  const className = `${formClassName} .form-input`;
  const firstName = getElement(`${className}-first-name`).value;
  const email = getElement(`${className}-email`).value;
  const body = {
    firstName,
    email,
  };
  handleLoading(formClassName);

  setTimeout(() => {
    handleFormSubmitted();
  }, 2000);
};

const closeForm = () => {
  hideSubscribePopup();
};

export const showSubscribePopup = () => {
  subscribeElement.style.display = "flex";
  setTimeout(() => {
    subscribeElement.classList.add("subscribe-active");
  }, 0);
  toggleWindowScroll(true);
};

export const hideSubscribePopup = () => {
  subscribeElement.classList.remove("subscribe-active");
  setTimeout(() => {
    subscribeElement.style.display = "none";
  }, 200);
  toggleWindowScroll(false);
};

const handleFormSubmitted = () => {
  handleSuccess(formClassName, inputs);
  setTimeout(() => {
    inputs.forEach((input) => {
      input.value = "";
    });
    hideSuccess(formClassName);
    hideLoading(formClassName);
  }, 6000);
};

export default {
  init,
};
