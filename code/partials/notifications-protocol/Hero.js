import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "../shared/MainGrid";
const PoweredImg = "/assets/img/powered.svg";

const Hero = ({ _body, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <MainGrid>
      <div className="hero">
        <div className="hero-description header">{_body}</div>
        <img
          src={generateUrl(
            "../../../assets/img/notifications-protocol/hero/mobile-device.png"
          )}
          className="hero-image"
        />
        <img src={generateUrl(PoweredImg)} className="hero-powered" />
      </div>
    </MainGrid>
  );
};

export default Hero;
