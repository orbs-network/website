import React from "react";

const Header = ({ subTitle, title }) => {
  return (
    <div className="blog-header" data-aos="fade-up">
      {title}
      {subTitle}
    </div>
  );
};

export default Header;
