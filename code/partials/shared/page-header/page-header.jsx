import React from "react";

const PageHaeder = ({ video, title, _relativeURL, _ID, subTitle, poster }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="page-header">
      <figure className="flex-center">
        {video && (
          <video autoPlay muted loop poster={generateUrl(poster)}>
            <source src={generateUrl(video)} type="video/mp4" />
            <source src={generateUrl(video)} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}
        <aside className="page-header-gradient" />
      </figure>
      <div className="page-header-text main-grid">
        {title}
        {subTitle}
      </div>
    </div>
  );
};

export default PageHaeder;
