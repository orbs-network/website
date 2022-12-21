import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "../shared/MainGrid";

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
      </div>
    </MainGrid>
  );
};

export default Hero;
