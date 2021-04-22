import React from "react";

const FooterBottom = ({ socials, text }) => {
  return (
    <div className="footer-bottom flex-between main-grid">
      <section className="footer-bottom-policy">{text.policy}</section>
      <section className="flex-center footer-bottom-form-wrapper">
        {socials}
      </section>
    </div>
  );
};

export default FooterBottom;
