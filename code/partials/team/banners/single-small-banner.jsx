import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import BannerVideo from "./banner-video";

const SingleSmallBanner = ({ image, _relativeURL, _ID, videoUrl }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section
      className="banner-single-small banner"
      data-aos={animations.fadeIn}
    >
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <img src={generateUrl(image)} />
      )}
    </section>
  );
};

export default SingleSmallBanner;
