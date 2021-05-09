import { addEvent, getElement, getElements } from "../heplers.js";
import { init } from "../index.js";
import {
  validateInputsOnSubmit,
  addEventsToInputs,
  handleLoading,
  handleSuccess,
} from "../components/form.js";
import userPost from "../services/user-post.js";
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

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateInputsOnSubmit(inputClassName, formClassName);
  if (errors.length > 0) {
    return;
  }
  const className = `${formClassName} .form-input`;
  const first_name = getElement(`${className}-first-name`).value;
  const last_name = getElement(`${className}-last-name`).value;
  const email = getElement(`${className}-email`).value;
  const phone = getElement(`${className}-phone`);
  const message = getElement(`${className}-mesage`);
  const body = {
    first_name,
    last_name,
    email,
    message: message ? message.value : "",
    phone: phone ? phone.value : "",
  };
  handleLoading(formClassName);
  try {
    await userPost.contact(body);
    handleSuccess(formClassName, inputs);
  } catch (error) {
    handleSuccess(formClassName, inputs);
    console.log(error);
  }
};
