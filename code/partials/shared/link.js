import React from "react";

const Link = ({ _body, url, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="link" href={generateUrl(url)}>
      {_body}
    </a>
  );
};

export default Link;
