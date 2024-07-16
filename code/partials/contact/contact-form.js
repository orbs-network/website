import React from "react";
import Form from "../shared/form/form";

const ContactForm = (props) => {
  const {
    firstName,
    firstNamePlaceholder,
    lastName,
    lastNamePlaceholder,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    phonePlaceholder,
    phone,
    incorrentEmail,
    incorrentPhone,
    emptyInputError,
  } = props;

  const formClassName = "contact-form";
  const data = [
    {
      name: firstName,
      placeholder: firstNamePlaceholder,
      propertyName: `first-name`,
      error: emptyInputError,
      type: "text",
      isRequired: true,
    },
    {
      name: lastName,
      placeholder: lastNamePlaceholder,
      propertyName: `last-name`,
      error: emptyInputError,
      type: "text",
      isRequired: true,
    },
    {
      name: email,
      placeholder: emailPlaceholder,
      propertyName: `email`,
      error: emptyInputError,
      type: "email",
      isRequired: true,
      validationText: incorrentEmail,
    },
    {
      name: phone,
      placeholder: phonePlaceholder,
      propertyName: `phone`,
      type: "phone",
      error: emptyInputError,
      validationText: incorrentPhone,
    },
    {
      name: message,
      placeholder: messagePlaceholder,
      propertyName: `mesage`,
      error: emptyInputError,
    },
  ];

  return (
    <div className="contact-container">
      <Form {...props} data={data} formClassName={formClassName} />
    </div>
  );
};

export default ContactForm;
