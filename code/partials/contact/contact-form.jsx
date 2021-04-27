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

  const customClassName = "contact-form";
  const data = [
    {
      name: firstName,
      placeholder: firstNamePlaceholder,
      className: `${customClassName}-first-name`,
      error: emptyInputError,
      type: "text",
      isRequired: true,
    },
    {
      name: lastName,
      placeholder: lastNamePlaceholder,
      className: `${customClassName}-last-name`,
      error: emptyInputError,
      type: "text",
      isRequired: true,
    },
    {
      name: email,
      placeholder: emailPlaceholder,
      className: `${customClassName}-email`,
      error: emptyInputError,
      type: "email",
      isRequired: true,
      validationText: incorrentEmail,
    },
    {
      name: phone,
      placeholder: phonePlaceholder,
      className: `${customClassName}-phone`,
      type: "phone",
      error: emptyInputError,
      validationText: incorrentPhone,
    },
    {
      name: message,
      placeholder: messagePlaceholder,
      className: `${customClassName}-mesage`,
      error: emptyInputError,
    },
  ];

  return (
    <div className="contact-container">
      <Form {...props} data={data} customClassName={customClassName} />
    </div>
  );
};

export default ContactForm;
