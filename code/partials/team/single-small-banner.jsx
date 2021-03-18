import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const SingleSmallBanner = ({ image, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <figure
      className="banner-single-small banner"
      data-aos={animations.fadeTop}
    >
      <img src={generateUrl(image)} />
    </figure>
  );
};

export default SingleSmallBanner;
