import React from "react";

const LinkBtn = ({ _body, url, left, right, _relativeURL, _ID, blank, outer }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const className = left
    ? "link-btn link-btn-left"
    : right
    ? "link-btn link-btn-right"
    : "link-btn";
  return (
    <a target={blank ? '_blank' :''} href={outer ? url : generateUrl(url)} className={className} rel="noopener">
      {_body}
      <aside className="link-btn-arrow"></aside>
    </a>
  );
};

export default LinkBtn;
