import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import Copyright from "../../shared/copyright";
import Img from "../../shared/Img";
import BannerVideo from "./banner-video";

const DoubleBanner = ({
  image1,
  copyright,
  image2,
  _relativeURL,
  _ID,
  videoUrl,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="banner-double banner" data-aos={animations.fadeIn}>
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <React.Fragment>
          <div className="banner-double-container">
            <Img src={generateUrl(image1)} alt="first banner" />
            <Copyright text={copyright} />
          </div>
          <div className="banner-double-container">
            <Img src={generateUrl(image2)} alt="second banner" />
            <Copyright text={copyright} />
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default DoubleBanner;
