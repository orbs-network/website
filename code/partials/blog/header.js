import React from "react";

const Header = ({ _body, title, sections }) => {
  return (
    <div className="blog-header" data-aos="fade-up">
      <h1>{title}</h1>
      <section className="blog-header-subtitle">{_body}</section>
      <ul className="blog-header-list">
        {sections.map((section) => {
          return <li>{`#${section}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
