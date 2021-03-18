import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const SingleBigBanner = ({ image, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <figure className="banner-big-single banner" data-aos={animations.fadeTop}>
      <img src={generateUrl(image)} />
    </figure>
  );
};

export default SingleBigBanner;
