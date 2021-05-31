import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Copyright from "../../shared/copyright";
import BannerVideo from "./banner-video";

const SingleSmallBanner = ({
  image,
  copyright,
  _relativeURL,
  _ID,
  videoUrl,
}) => {
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
      <Copyright text={copyright} />
    </section>
  );
};

export default SingleSmallBanner;
