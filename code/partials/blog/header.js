import React from "react";

const Header = ({ subTitle, title, sections }) => {
  return (
    <div className="blog-header" data-aos="fade-up">
      {title}
      {subTitle}
      <ul className="blog-header-list">
        {sections.map((section) => {
          return <li>{`#${section}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
