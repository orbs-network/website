import React from "react";
import { handleUrl } from "../../../util/link";

function OrbsValidatorNode({ title, _relativeURL, _ID, arrow }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="orbs-validator ton-gateway-powered-section">
      {arrow}
      <h4>{title}</h4>
      <img src={generateUrl("/assets/img/ton-gateway/orbs-validator.svg")} className='main-img' />
    </div>
  );
}

export default OrbsValidatorNode;
