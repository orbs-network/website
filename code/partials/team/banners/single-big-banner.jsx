import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Img from "../../common/Img";
import BannerVideo from "./banner-video";

const SingleBigBanner = ({ image, _relativeURL, _ID, videoUrl }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="banner-big-single banner" data-aos={animations.fadeTop}>
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <Img src={generateUrl(image)} />
      )}
    </section>
  );
};

export default SingleBigBanner;
