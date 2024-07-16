import React from "react";

const Section = ({ children }) => {
  return <div className="ecosystem-grid-section  list-item">{children}</div>;
};

const Categories = (props) => {
  const { first_section, second_section, third_section } = props;

  return (
    <div className="ecosystem-grid flex-start">
      <Section>{first_section}</Section>
      <Section>{second_section}</Section>
      <Section>{third_section}</Section>
    </div>
  );
};

export default Categories;
