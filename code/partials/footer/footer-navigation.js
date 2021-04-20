import React from "react";

const Section = ({ children }) => {
  return <div className="footer-navigation-section">{children}</div>;
};

const FooterNavigation = ({ title, links, resourcesTitle, resources }) => {
  return (
    <section className="footer-section footer-navigation">
      <Section>
        <h5 className="footer-section-title">{title}</h5>
        <div className="footer-navigation-links">{links}</div>
      </Section>
      <Section>
        <h5 className="footer-navigation-subtitle">{resourcesTitle}</h5>
        <div className="footer-navigation-links">{resources}</div>
      </Section>
    </section>
  );
};

export default FooterNavigation;
