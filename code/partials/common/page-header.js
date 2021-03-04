import React from "react";

const PageHaeder = ({ image, title, _relativeURL, _ID, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="page-header">
      <figure>
        <img src={generateUrl(image)} />
      </figure>
      <h1>{title}</h1>
      {_body}
    </div>
  );
};

export default PageHaeder;
