import React from "react";
import { handleUrl } from "../../../util/link";

function Arrow({ text, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-powered-arrow">
      <p>{text}</p>
      <img src={generateUrl("/assets/img/ton-gateway/arrow.svg")} />
    </div>
  );
}

export default Arrow;
