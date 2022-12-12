import React from "react";
import { handleUrl } from "../../util/link";

const Hero = ({ _body, _relativeURL, _ID }) => {
    const generateUrl = (url) => {
      return handleUrl(url, _relativeURL, _ID);
    };
  return (
    <div className="hero">
      <div className="hero-description">{_body}</div>
      <img
        src={generateUrl(
          "../../../assets/img/notifications-protocol/hero/mobile-device.png"
        )}
        className="hero-image"
      />
    </div>
  );
};

export default Hero;
