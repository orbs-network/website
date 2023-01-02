import React from "react";

const FooterBottom = ({ socials, policy }) => {
  return (
    <div className="footer-bottom-wrapper">
      <div className="footer-bottom flex-between main-grid">
        <section className="footer-bottom-policy">{policy}</section>
        <section className="flex-center footer-bottom-form-wrapper">
          {socials}
        </section>
      </div>
    </div>
  );
};

export default FooterBottom;
