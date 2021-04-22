import React from "react";

const Section = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const FooterNavigation = ({ about, overview, resources }) => {
  return (
    <section className="footer-navigation ">
      <div className="main-grid flex-start">
        <Section className="footer-navigation-overview">{overview}</Section>
        <Section className="footer-navigation-resources"> {resources}</Section>
        <Section className="footer-navigation-about">{about}</Section>
      </div>
    </section>
  );
};

export default FooterNavigation;
