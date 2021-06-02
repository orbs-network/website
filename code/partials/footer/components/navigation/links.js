import React from "react";

const Links = ({ title, links, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <React.Fragment>
      <div className="footer-navigation-desktop-links">
        <h3 className="footer-navigation-links-title">{title}</h3>
        <div className="footer-navigation-links-list">{links}</div>
      </div>
      <div className="footer-navigation-mobile">
        <h3 className="footer-navigation-mobile-title">{title}</h3>
        <div className="footer-navigation-mobile-list">{links}</div>
      </div>
    </React.Fragment>
  );
};

export default Links;
