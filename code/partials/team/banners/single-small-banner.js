import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { handleUrl } from "../../../util/link";
import BannerVideo from "./banner-video";

const SingleSmallBanner = ({
  image,
  copyright,
  _relativeURL,
  _ID,
  videoUrl,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
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
      {copyright}
    </section>
  );
};

export default SingleSmallBanner;
