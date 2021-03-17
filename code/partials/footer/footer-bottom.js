import React from "react";

const FooterBottom = ({ socials, text }) => {
  return (
    <div className="footer-bottom flex-between">
      <section className="footer-bottom-policy">{text.policy}</section>
      <section className="flex-center footer-bottom-form-wrapper">
        {socials}
        <form className="footer-bottom-form flex-between">
          <input
            type="text"
            placeholder={text.placeholder}
            className="footer-bottom-form-input"
          />
          <input
            type="submit"
            value="+"
            className="footer-bottom-form-submit"
          />
        </form>
      </section>
    </div>
  );
};

export default FooterBottom;
