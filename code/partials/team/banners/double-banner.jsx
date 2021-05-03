import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Img from "../../shared/Img";
import BannerVideo from "./banner-video";

const DoubleBanner = ({ image1, image2, _relativeURL, _ID, videoUrl }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="banner-double banner" data-aos={animations.fadeIn}>
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <React.Fragment>
          <Img src={generateUrl(image1)} alt="first banner" />
          <Img src={generateUrl(image2)} alt="second banner" />
        </React.Fragment>
      )}
    </section>
  );
};

export default DoubleBanner;
