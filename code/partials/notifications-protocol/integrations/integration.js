import React from "react";
import { handleUrl } from "../../../util/link";

function Integration({ image, _body, url, _relativeURL, _ID }) {
   const generateUrl = (url) => {
     return handleUrl(url, _relativeURL, _ID);
   };
  return (
    <li className="integration">
      <img src={generateUrl(image)} className="integration-image" />
      {_body}
      <a href={url} target="_blank" className="integration-link">
        <img
          src={generateUrl(
            "/assets/img/notifications-protocol/github.svg"
          )}
          alt="github"
        />
      </a>
    </li>
  );
}

export default Integration;
