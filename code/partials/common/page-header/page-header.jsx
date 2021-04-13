import React from "react";

const PageHaeder = ({ image, title, _relativeURL, _ID, subTitle }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="page-header">
      <figure className="flex-center">
        <img src={generateUrl(image)} />
        {title}
      </figure>
      {subTitle}
    </div>
  );
};

export default PageHaeder;
