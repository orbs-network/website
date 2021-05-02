import {
  addEvent,
  getElement,
  getElements,
  hideBodyOverflow,
} from "../common.js";
import {
  addEventsToInputs,
  handleLoading,
  handleSuccess,
  validateInputsOnSubmit,
  hideSuccess,
  hideLoading,
} from "./form.js";
let inputs = [];
const formClassName = ".subscribe-form";
const inputClassName = ".subscribe-form .form-input input";
export const initSubscribeForm = () => {
  const form = getElement(formClassName);
  addEvent(form, "submit", handleSubmit);
  inputs = getElements(inputClassName) || [];
  addEventsToInputs(inputs, formClassName);
  const close = getElement(".form-close-btn");
  addEvent(close, "click", closeForm);
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
  const popup = getElement(".subscribe");
  popup.classList.add("subscribe-active");
  hideBodyOverflow(true);
};

export const hideSubscribePopup = () => {
  const popup = getElement(".subscribe");
  popup.classList.remove("subscribe-active");
  hideBodyOverflow(false);
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
