import React from "react";

const LinkBtn = ({ text, url, left, right, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const className = left
    ? "link-btn link-btn-left"
    : right
    ? "link-btn link-btn-right"
    : "link-btn";
  return (
    <a href={generateUrl(url)} className={className} rel="noopener">
      <p> {text}</p>
      <aside className="link-btn-arrow"></aside>
    </a>
  );
};

export default LinkBtn;
