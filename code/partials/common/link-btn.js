import React from "react";

const LinkBtn = ({ text, url, forward }) => {
  const className = forward
    ? "link-btn-arrow link-btn-forward"
    : "link-btn-arrow";
  return (
    <a href={url} className="link-btn">
      <p> {text}</p>
      <aside className="link-btn-arrow"></aside>
    </a>
  );
};

export default LinkBtn;
