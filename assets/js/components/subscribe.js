// import {
//   addEventsToForm,
//   handleFormLoading,
//   handleSuccess,
//   validateInputsOnSubmit,
// } from "./form.js";

// const formClassName = ".subscribe .form";
// const inputClassName = ".subscribe .form input";

// export const initSubscribeForm = () => {
//   addEventsToForm(formClassName, inputClassName, handleSubmit);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const errors = validateInputsOnSubmit(inputClassName);
//   console.log(errors);
//   if (errors.length > 0) {
//     return;
//   }

//   const firstName = getElement(".first-name").value;
//   const email = getElement(".email").value;
//   const body = {
//     firstName,
//     email,
//   };
//   handleFormLoading(formClassName);
//   setTimeout(() => {
//     handleSuccess(formClassName);
//   }, 2000);
// };
