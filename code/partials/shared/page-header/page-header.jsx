import React from "react";

const PageHaeder = ({ image, video, title, _relativeURL, _ID, subTitle }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="page-header">
      <figure className="flex-center">
        {video ? (
          <iframe
            class="b-hero_image lazy"
            src={video}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            muted
            playsinline
          ></iframe>
        ) : image ? (
          <img src={generateUrl(image)} />
        ) : null}
        {title}
      </figure>
      {subTitle}
    </div>
  );
};

export default PageHaeder;
