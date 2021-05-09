import React from "react";

const FormInput = ({
  isRequired,
  validationText,
  name,
  type,
  placeholder,
  className,
  error,
  inputClassName,
}) => {
  return (
    <section className="form-input">
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
        <aside className={`${className}-error form-error`}>{error}</aside>
      )}

      {validationText && (
        <aside className={`${className}-validation-error form-error`}>
          {validationText}
        </aside>
      )}
    </section>
  );
};

export default FormInput;
