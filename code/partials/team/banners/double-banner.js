import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { handleUrl } from "../../../util/link";
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
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <section className="banner-double banner" data-aos={animations.fadeIn}>
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <React.Fragment>
          <div className="banner-double-container">
            <Img src={generateUrl(image1)} alt="first banner" />
            {copyright}
          </div>
          <div className="banner-double-container">
            <Img src={generateUrl(image2)} alt="second banner" />
            {copyright}
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default DoubleBanner;
