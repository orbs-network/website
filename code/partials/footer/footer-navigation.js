import React from "react";

const FooterNavigation = ({ navigation, text, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="footer-section">
      <h5 className="footer-section-title">{text.navigation}</h5>
      <ul className="footer-navigation">
        {navigation.map((link) => {
          return (
            <li>
              <a href={generateUrl(link.url)}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FooterNavigation;
