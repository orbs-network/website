import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../common/Img";

const DoubleBanner = ({ image1, image2, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <figure className="banner-double banner" data-aos={animations.fadeTop}>
      <Img src={generateUrl(image1)} />
      <Img src={generateUrl(image2)} />
    </figure>
  );
};

export default DoubleBanner;
