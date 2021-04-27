import React from "react";
import Form from "./form/form";

const SubscribePopup = (props) => {
  const {
    firstName,
    firstNamePlaceholder,
    email,
    emailPlaceholder,
    incorrentEmail,
    emptyInputError,
  } = props;
  const data = [
    {
      name: firstName,
      placeholder: firstNamePlaceholder,
      className: "first-name",
      error: emptyInputError,
      type: "text",
      isRequired: true,
    },
    {
      name: email,
      placeholder: emailPlaceholder,
      className: "email",
      error: emptyInputError,
      type: "email",
      isRequired: true,
      validationText: incorrentEmail,
    },
  ];

  return (
    <div className="subscribe">
      <section className="subscribe-overlay"></section>
      <Form {...props} data={data} customClassName="subscribe-form" />
    </div>
  );
};

export default SubscribePopup;
