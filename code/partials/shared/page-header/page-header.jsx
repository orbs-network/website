import React from "react";

const PageHaeder = ({ image, video, title, _relativeURL, _ID, subTitle }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="page-header">
      <figure className="flex-center">
        {video ? (
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        ) : image ? (
          <img src={generateUrl(image)} />
        ) : null}
        {title}
        <aside className="page-header-gradient" />
      </figure>
      {subTitle}
    </div>
  );
};

export default PageHaeder;
