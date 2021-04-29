import React from "react";

const Section = ({ children, category }) => {
  const className = `footer-navigation-section footer-navigation-${category}`;
  return <div className={className}>{children}</div>;
};

const FooterNavigation = ({ about, overview, resources }) => {
  return (
    <section className="footer-navigation">
      <div className="main-grid flex-start">
        <Section category="overview">{overview}</Section>
        <Section category="resources"> {resources}</Section>
        <Section category="about">{about}</Section>
      </div>
    </section>
  );
};

export default FooterNavigation;
