import React from "react";
import { images } from "../../../assets/js/images";

const LogoSection = ({ image, _body, email, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="footer-section footer-logo-section">
      <img src={generateUrl(image)} className="footer-logo" />
      {_body}
    </section>
  );
};

export default LogoSection;
