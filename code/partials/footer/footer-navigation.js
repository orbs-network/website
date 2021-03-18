import React from "react";

const FooterNavigation = ({ navigation, text, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="footer-section">
      <h5 className="footer-section-title">{text.navigation}</h5>
      <div className="footer-navigation">{navigation}</div>
    </section>
  );
};

export default FooterNavigation;
