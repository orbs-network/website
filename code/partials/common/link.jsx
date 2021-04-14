import React from "react";

const Link = ({ title, url, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="link" href={generateUrl(url)}>
      {title}
    </a>
  );
};

export default Link;
