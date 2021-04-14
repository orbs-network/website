import React from "react";

const FooterNavigation = ({ title, links, resourcesTitle, resources }) => {
  return (
    <section className="footer-section footer-navigation">
      <h5 className="footer-section-title">{title}</h5>
      <div className="footer-navigation-links">{links}</div>
      <h5 className="footer-navigation-subtitle">{resourcesTitle}</h5>
      <div className="footer-navigation-links">{resources}</div>
    </section>
  );
};

export default FooterNavigation;
