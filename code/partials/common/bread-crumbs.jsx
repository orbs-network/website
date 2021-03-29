import React from "react";

const BreadCrumbs = (props) => {
  const { linkName, url, title, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <div className="bread-crumbs flex-start">
      <a href={generateUrl(url)}>{linkName}</a>
      <small>{">"}</small>
      <p className="bread-crumbs-text">{title}</p>
    </div>
  );
};

export default BreadCrumbs;
