import { addEvent, getElement, init } from "../common.js";
import {
  validateInputsOnSubmit,
  addEventsToInputs,
} from "../components/form.js";

window.onload = () => {
  init();
  addEventsToContactForm();
};

export const addEventsToContactForm = () => {
  const form = getElement(".contact form");
  addEvent(form, "submit", handleSubmit);
  addEventsToInputs();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateInputsOnSubmit();
  if (errors.length > 0) {
    return;
  }

  const firstName = getElement(".first-name").value;
  const lastName = getElement(".last-name").value;
  const email = getElement(".email").value;
  const phone = getElement(".phone");
  const comment = getElement(".comment");
  const body = {
    firstName,
    lastName,
    email,
    phone: phone && phone.value,
    comment: comment && comment.value,
  };
  handleLoading();
  setTimeout(() => {
    handleSuccess();
  }, 2000);
};
