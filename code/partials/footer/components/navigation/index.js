import React from "react";

const Section = ({ children, category }) => {
  const className = `footer-navigation-section footer-navigation-${category}`;
  return <div className={className}>{children}</div>;
};

const FooterNavigation = ({ protocols, overview, resources, community }) => {
  return (
    <section className="footer-navigation">
      <div className="main-grid flex-start">
        <Section category="overview">{overview}</Section>
        <Section category="protocols">{protocols}</Section>
        <Section category="community">{community}</Section>

        <Section category="resources"> {resources}</Section>
      </div>
    </section>
  );
};

export default FooterNavigation;
