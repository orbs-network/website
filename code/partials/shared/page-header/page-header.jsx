import React from "react";
import Img from "../Img";

const PageHaeder = ({ video, title, _relativeURL, _ID, subTitle, poster }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const hideMedia = !video && !poster;
  return (
    <div className="page-header">
      {!hideMedia && (
        <figure className="page-header-media absolute">
          <aside className="page-header-gradient absolute" />
          {video && (
            <video
              autoPlay
              muted
              loop
              poster={generateUrl(poster)}
              className="page-header-media-video absolute"
            >
              <source src={generateUrl(video)} type="video/mp4" />
              <source src={generateUrl(video)} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}
          {poster && (
            <Img
              src={generateUrl(poster)}
              className="page-header-media-image absolute"
              alt="header video poster"
            />
          )}
          <aside className="page-header-overlay absolute" />
        </figure>
      )}
      <div className="page-header-text main-grid">
        {title}
        {subTitle}
      </div>
    </div>
  );
};

export default PageHaeder;
