import React from "react";

const Links = ({ title, links, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <React.Fragment>
      <div className="footer-navigation-desktop-links">
        <h3 className="footer-navigation-links-title">{title}</h3>
        <div className="footer-navigation-links-list">
          {links.map(({ name, url }) => {
            return (
              <a href={url} key={name} rel="noopener" target="_blank">
                {name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-navigation-mobile">
        <h3 className="footer-navigation-mobile-title">{title}</h3>
        <div className="footer-navigation-mobile-list">
          {links.map(({ name, url }) => {
            return (
              <a href={generateUrl(url)} key={name} rel="noopener">
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Links;
