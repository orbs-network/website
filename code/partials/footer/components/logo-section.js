import React from "react";

const LogoSection = ({ image, _body, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="footer-logo-section">
      <img src={generateUrl(image)} className="footer-logo" />
      {_body}
    </section>
  );
};

export default LogoSection;
