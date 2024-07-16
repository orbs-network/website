import React from "react";
import { handleUrl } from "../../../util/link";

export const makeElipsisAddress = (address, padding = 6) => {
  if (!address) return "";
  return `${address.substring(0, padding)}...${address.substring(
    address.length - padding
  )}`;
};

function Partner({ img, url, _body, address, _relativeURL, _ID, dns }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <a className="ton-vote-partner" href={url} target="_blank">
      <img src={generateUrl(img)} className="ton-vote-partner-avatar" />
      <h4 className="ton-vote-partner-name">{_body}</h4>
      <div className="ton-vote-partner-address">
        {dns ? <p>{dns}</p> : <p>{makeElipsisAddress(address)}</p>}
      </div>
    </a>
  );
}

export default Partner;
