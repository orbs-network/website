import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const Section = ({ children }) => {
  return <div className="ecosystem-grid-section  list-item">{children}</div>;
};

const Categories = (props) => {
  const {
    exchange,
    staking,
    transparency_and_data,
    partnerships,
    cloud_mirror_image,
    wallets,
    media,
    explorers,
    defi,
    _relativeURL,
    social_impact,
    _ID,
    fiat_on_ramps,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="ecosystem-grid flex-start">
      <Section>
        {exchange}
        {transparency_and_data}
        {social_impact}
      </Section>
      <Section>
        {partnerships}
        <section className="ecosystem-grid-section-figure">
          <Img src={generateUrl(images.ecosystem.logo)} alt="orbs logo" />
        </section>
        {cloud_mirror_image}
        {explorers}
        {fiat_on_ramps}
      </Section>
      <Section>
        {wallets}

        {defi}
        {media}
        {staking}
      </Section>
    </div>
  );
};

export default Categories;
