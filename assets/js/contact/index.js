import { addEvent, getElement, getElements } from "../heplers.js";
import { init } from "../index.js";

import {
  validateInputsOnSubmit,
  addEventsToInputs,
  handleLoading,
  handleSuccess,
} from "../components/form.js";
let inputs = [];
window.onload = () => {
  init();
  addEventsToContactForm();
};
const formClassName = ".contact-form";
const inputClassName = ".contact-form .form-input input";
export const addEventsToContactForm = () => {
  const form = getElement(formClassName);
  addEvent(form, "submit", handleSubmit);
  inputs = getElements(inputClassName) || [];

  addEventsToInputs(inputs, formClassName);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateInputsOnSubmit(inputClassName, formClassName);
  if (errors.length > 0) {
    return;
  }
  const className = `${formClassName} .form-input`;
  const firstName = getElement(`${className}-first-name`).value;

  const lastName = getElement(`${className}-last-name`).value;
  const email = getElement(`${className}-email`).value;
  const phone = getElement(`${className}-phone`);
  const comment = getElement(`${className}-comment`);
  const body = {
    firstName,
    lastName,
    email,
    phone: phone && phone.value,
    comment: comment && comment.value,
  };

  // api request
  handleLoading(formClassName);
  setTimeout(() => {
    handleSuccess(formClassName, inputs);
  }, 2000);
};
