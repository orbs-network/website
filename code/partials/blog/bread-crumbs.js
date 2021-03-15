import React from "react";

const BreadCrumbs = ({ linkText, linkUrl }) => {
  return (
    <div className="blog-bread-crumbs flex-start">
      <a href={linkUrl}>{linkText}</a>
      <small>{">"}</small>
      <p className="blog-bread-crumbs-text"></p>
    </div>
  );
};

export default BreadCrumbs;
