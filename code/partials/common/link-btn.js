import React from "react";

const LinkBtn = ({ text, url, left, right }) => {
  const className = left
    ? "link-btn link-btn-left"
    : right
    ? "link-btn link-btn-right"
    : "link-btn";
  return (
    <a href={url} className={className}>
      <p> {text}</p>
      <aside className="link-btn-arrow"></aside>
    </a>
  );
};

export default LinkBtn;
