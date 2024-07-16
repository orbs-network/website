import React from "react";
import Img from "../../shared/Img";

const MobileFlags = ({ languages, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <ul className="mobile-flags">
      {languages.map((lng, index) => {
        return (
          <li key={index}>
            <a href={generateUrl(lng.link)} rel="noopener">
              <Img src={generateUrl(lng.img)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileFlags;
