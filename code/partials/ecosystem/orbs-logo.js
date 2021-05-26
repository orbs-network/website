import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const OrbsLogo = ({ _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="ecosystem-grid-section-figure">
      <Img src={generateUrl(images.ecosystem.logo)} alt="orbs logo" />
    </section>
  );
};

export default OrbsLogo;
