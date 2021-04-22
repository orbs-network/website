import React from "react";

const SuccessPopup = ({ title, _body, btnText }) => {
  return (
    <div className="contact-success-popup">
      <section className="contact-success-popup-overlay"></section>
      <div className="contact-success-popup-content">
        <h4>{title}</h4>
        {_body}
        <button className="btn contact-success-popup-btn">{btnText}</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
