import React from "react";
import { handleUrl } from "../../../../util/link";

const Link = ({ image, url, text, _relativeURL, _ID }) => {
  return (
    <a href={url} className="card-link" target="_blank">
      {image && <img src={handleUrl(image, _relativeURL, _ID)} />}
      <p className="card-link-text">{text}</p>
    </a>
  );
};

export default Link;
