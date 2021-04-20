import React from "react";
const Form = ({
  title,
  firstName,
  firstNamePlaceholder,
  lastName,
  lastNamePlaceholder,
  email,
  emailPlaceholder,
  message,
  messagePlaceholder,
  submit,
  phonePlaceholder,
  phone,
  incorrentEmail,
  incorrentPhone,
  emptyInputError,
  subTitle,
}) => {
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
      name: lastName,
      placeholder: lastNamePlaceholder,
      className: "last-name",
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
    {
      name: phone,
      placeholder: phonePlaceholder,
      className: "phone",
      type: "phone",
      error: emptyInputError,
      validationText: incorrentPhone,
    },
    {
      name: message,
      placeholder: messagePlaceholder,
      className: "message",
      error: emptyInputError,
    },
  ];

  return (
    <form className="contact-form flex-column">
      {title}
      <h3 className="contact-form-sub-title">{subTitle}</h3>
      <div className="contact-form-inputs flex-between">
        {data.map((input, index) => {
          const {
            name,
            placeholder,
            className,
            error,
            type,
            isRequired,
            validationText,
          } = input;
          return (
            <section key={index} className="contact-form-inputs-section">
              <label htmlFor={name}>{name}</label>
              <input
                data-type={type}
                data-required={isRequired}
                type="text"
                placeholder={placeholder}
                name={name}
                className={className}
              />
              {isRequired && (
                <aside className={`${className}-error form-error`}>
                  {error}
                </aside>
              )}

              {validationText && (
                <aside className={`${className}-validation-error form-error`}>
                  {validationText}
                </aside>
              )}
            </section>
          );
        })}
      </div>

      <input type="submit" value={submit} className="contact-form-submit" />
    </form>
  );
};

export default Form;
