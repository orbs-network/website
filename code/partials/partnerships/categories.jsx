import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../common/Img";

const Categories = (props) => {
  const {
    exchange,
    staking,
    fiatOnRamps,
    transparencyAndData,
    socialImpact,
    partnerships,
    cloudMirrorImage,
    wallets,
    media,
    oracles,
    defi,
    _relativeURL,
    _ID,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="partnerships-grid flex-start">
      <div className="partnerships-grid-section">
        {exchange}
        {staking}
        {fiatOnRamps}
        {transparencyAndData}
        {socialImpact}
      </div>
      <div className="partnerships-grid-section">
        {partnerships}
        <section className="partnerships-grid-section-figure">
          <Img src={generateUrl(images.common.logo)} />
        </section>
        {cloudMirrorImage}
      </div>
      <div className="partnerships-grid-section">
        {wallets}
        {media}
        {oracles}
        {defi}
      </div>
    </div>
  );
};

export default Categories;
