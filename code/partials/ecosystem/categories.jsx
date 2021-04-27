import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const Section = ({ children }) => {
  return <div className="ecosystem-grid-section">{children}</div>;
};

const Categories = (props) => {
  const {
    exchange,
    staking,
    transparencyAndData,
    partnerships,
    cloudMirrorImage,
    wallets,
    media,
    oracles,
    defi,
    _relativeURL,
    socialImpact,
    _ID,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="ecosystem-grid flex-start">
      <Section>
        {exchange}
        {transparencyAndData}
        {socialImpact}
      </Section>
      <Section>
        {partnerships}
        <section className="ecosystem-grid-section-figure">
          <Img src={generateUrl(images.ecosystem.logo)} />
        </section>
        {cloudMirrorImage}
      </Section>
      <Section>
        {wallets}

        {defi}
        {media}
        {staking}
        {oracles}
      </Section>
    </div>
  );
};

export default Categories;
