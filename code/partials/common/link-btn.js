import React from "react";

const LinkBtn = ({ text, url, back }) => {
  const className = back ? "link-btn link-btn-back" : "link-btn";
  return (
    <a href={url} className={className}>
      <p> {text}</p>
      <aside className="link-btn-arrow"></aside>
    </a>
  );
};

export default LinkBtn;
