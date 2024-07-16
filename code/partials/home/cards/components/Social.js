import React from "react";
import { handleUrl } from "../../../../util/link";

function Social({ image, url, _relativeURL, _ID }) {
  return (
    <a href={url} target="_blank" className="card-socials-item">
      <img src={handleUrl(image, _relativeURL, _ID)} />
    </a>
  );
}

export default Social;
