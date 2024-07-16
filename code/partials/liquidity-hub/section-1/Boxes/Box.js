import React from "react";
import { handleUrl } from "../../../../util/link";

function Box({ _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return <div className="liquidity-hub-section-1-box">{_body}</div>;
}

export default Box;
