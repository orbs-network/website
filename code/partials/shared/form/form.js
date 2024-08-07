import React from "react";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../util/link";
import Img from "../Img";
import Loader from "../loader";
import FormInput from "./form-input";

const Form = (props) => {
  const {
    data,
    success,
    subTitle,
    submit,
    title,
    formClassName,
    closeBtn,
    _relativeURL,
    _ID,
  } = props;
  const className = formClassName ? `${formClassName} form` : "form";

  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <form className={className}>
      {closeBtn && (
        <button type="button" className="form-close-btn" aria-label="Close">
          <Img src={generateUrl(images.common.close)} alt="close" />
        </button>
      )}
      <header className="header">
        <h1>{title}</h1>
      </header>
      <div className="form-content flex-column">
        {success}
        <h4 className="form-sub-title">{subTitle}</h4>
        <div className="form-inputs flex-between">
          {data &&
            data.map((input, index) => {
              const {
                name,
                placeholder,
                propertyName,
                error,
                type,
                isRequired,
                validationText,
              } = input;
              const inputClassName = `form-input-${propertyName}`;

              return (
                <FormInput
                  key={index}
                  isRequired={isRequired}
                  validationText={validationText}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className={inputClassName}
                  error={error}
                />
              );
            })}
        </div>

        <div className="form-submit-container">
          <input type="submit" value={submit} className="form-submit" />
          <Loader />
        </div>
      </div>
    </form>
  );
};

export default Form;
