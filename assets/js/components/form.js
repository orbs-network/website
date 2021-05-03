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

export const addEventsToInputs = (inputs, formClassName) => {
  inputs.forEach((input) => {
    addEvent(input, "focus", (e) => onFocus(e, formClassName));
    addEvent(input, "blur", (e) => onBlur(e, formClassName));
  });
};

const onBlur = (e, formClassName) => {
  inputValidation(e.target, formClassName);
};

const inputValidation = (input, location) => {
  const isRequired = getElementAttribute(input, "data-required");
  const isEmpty = !input.value;
  if (isEmpty && isRequired) {
    const error = handleEmptyInput(input, location);
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
    const validationError = handleValidationFailure(input, location);
    return validationError;
  }
};

const handleValidationFailure = (input, location) => {
  const className = input.classList.value;
  const validationError = getElement(
    `${location} .${className}-validation-error`
  );
  if (!validationError) return;
  showError(validationError);
  return validationError;
};

const handleEmptyInput = (input, location) => {
  const className = input.classList.value;
  const error = getElement(`${location} .${className}-error`);
  if (!error) return;
  showError(error);
  return error;
};

const onFocus = (input, formClassName) => {
  hideErrorOnFocus(input, formClassName);
  hideValidationErrorOnFocus(input, formClassName);
};

const hideErrorOnFocus = (input, formClassName) => {
  const className = input.target.classList.value;
  const error = getElement(`${formClassName} .${className}-error`);
  hideError(error);
};

const hideValidationErrorOnFocus = (input, formClassName) => {
  const className = input.target.classList.value;
  const error = getElement(`${formClassName} .${className}-validation-error`);
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

export const validateInputsOnSubmit = (inputClassName, formClassName) => {
  const errors = [];
  const inputs = getElements(inputClassName);
  inputs.forEach((input) => {
    const error = inputValidation(input, formClassName);
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

export const handleSuccess = (formClassName) => {
  const submitContainer = getElement(".form-success");
  submitContainer.style.display = "flex";
  const form = getElement(formClassName);
  form.classList.add("form-submitted");
};

export const hideSuccess = (formClassName) => {
  const form = getElement(formClassName);
  form.classList.remove("form-submitted");
};

export const handleLoading = (formClassName) => {
  const submitBtn = getElement(`${formClassName} .form-submit`);
  const loader = getElement(`${formClassName} .loader`);
  submitBtn.style.display = "none";
  loader.style.display = "block";
};

export const hideLoading = (formClassName) => {
  const submitBtn = getElement(`${formClassName} .form-submit`);
  const loader = getElement(`${formClassName} .loader`);
  submitBtn.style.display = "block";
  loader.style.display = "none";
};
