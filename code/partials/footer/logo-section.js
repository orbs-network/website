import React from "react";
import { images } from "../../../assets/js/images";

const LogoSection = ({ image, _body, email, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="footer-section footer-logo-section">
      <img src={generateUrl(image)} className="footer-logo" />
      <p className="footer-text">{_body}</p>
      <a
        href={`mailto:${email}`}
        className="footer-logo-section-email footer-text"
      >
        {email}
      </a>
    </section>
  );
};

export default LogoSection;
