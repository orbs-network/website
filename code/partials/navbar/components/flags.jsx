import React from "react";
import Img from "../../shared/Img";

const Flags = ({ flags, generateUrl, customClassName }) => {
  const className = `${customClassName} flex-start`;
  return (
    <ul className={className}>
      {flags.map((lng, index) => {
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

export default Flags;
