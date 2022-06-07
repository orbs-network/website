import React from "react";

const About = ({ page_header, first_section, second_section, third_section, products }) => {
  return (
    <main className="about">
        {page_header}
        {first_section}
        {second_section}
        {third_section}
        {products}
    </main>
  );
};

export default About;
