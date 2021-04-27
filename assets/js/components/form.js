import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../common.js";

const errors = {};

export const validatePhone = (value) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const isValid = re.test(String(value).toLowerCase());
  return isValid;
};

export const validateEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = re.test(String(value).toLowerCase());
  return isValidEmail;
};

export const addEventsToInputs = () => {
  const inputs = getElements(".form-input input");
  inputs.forEach((input) => {
    addEvent(input, "focus", onFocus);
    addEvent(input, "blur", onBlur);
  });
};

const onBlur = (e) => {
  inputValidation(e.target);
};

const inputValidation = (input) => {
  const isRequired = getElementAttribute(input, "data-required");
  const isEmpty = !input.value;
  if (isEmpty && isRequired) {
    const error = handleEmptyInput(input);
    return error;
  }
  const type = getElementAttribute(input, "data-type");
  let isValid = true;
  switch (type) {
    case "email":
      isValid = validateEmail(input.value);
      break;
    case "phone":
      isValid = validatePhone(input.value);
      break;
    default:
      break;
  }
  if (!isValid && !isEmpty) {
    const validationError = handleValidationFailure(input);
    return validationError;
  }
};

const handleValidationFailure = (input) => {
  const className = input.classList.value;
  const validationError = getElement(`.${className}-validation-error`);
  if (!validationError) return;
  showError(validationError);
  return validationError;
};

const handleEmptyInput = (input) => {
  const className = input.classList.value;
  const error = getElement(`.${className}-error`);
  if (!error) return;
  showError(error);
  return error;
};

const onFocus = (input) => {
  hideErrorOnFocus(input);
  hideValidationErrorOnFocus(input);
};

const hideErrorOnFocus = (input) => {
  const className = input.target.classList.value;
  const error = getElement(`.${className}-error`);
  hideError(error);
};

const hideValidationErrorOnFocus = (input) => {
  const className = input.target.classList.value;
  const error = getElement(`.${className}-validation-error`);
  hideError(error);
};
const showError = (input) => {
  if (!input) return;
  input.classList.add("actve-error");
};
const hideError = (input) => {
  if (!input) return;
  input.classList.remove("actve-error");
};

export const validateInputsOnSubmit = () => {
  const errors = [];
  const inputs = getElements(".form-input input");
  inputs.forEach((input) => {
    const error = inputValidation(input);
    if (error) {
      errors.push(error);
    }
  });
  return errors;
};

export const addPopupSuccessListeners = () => {
  const overlay = getElement(".success-popup-overlay");
  addEvent(overlay, "click", handleSuccessPopupClose);
  const closeBtn = getElement(".success-popup-btn");
  addEvent(closeBtn, "click", handleSuccessPopupClose);
};

const hidePopup = () => {
  const popup = getElement(".success-popup");
  popup.classList.remove("active-popup");
};

const handleSuccess = () => {
  const form = getElement(".form");
  form.classList.add("form-submitted");
};

const handleLoading = () => {
  const submitBtn = getElement(".form-submit");
  const loader = getElement(".loader");
  submitBtn.style.display = "none";
  loader.style.display = "block";
};

const handleSuccessPopupClose = () => {
  hidePopup();
  const inputs = getElements(".form-input input");
  inputs.forEach((input) => {
    input.value = "";
  });
};
