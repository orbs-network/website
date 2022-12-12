import React from "react";
import { handleUrl } from "../../../util/link";

function Example({ _body, _relativeURL, _ID }) {
   const generateUrl = (url) => {
     return handleUrl(url, _relativeURL, _ID);
   };
  return (
    <div className="contribute-example">
      <div className="contribute-example-body">{_body}</div>
      <div className="contribute-example-hero">
        <a
          href="https://github.com/open-defi-notification-protocol/projects#example---low-health-notification-for-aave"
          target="_blank"
        >
          <img
            src={generateUrl(
              "../../../../assets/img/notifications-protocol/contribute/code.png"
            )}
            alt="hero"
          />
        </a>
      </div>
    </div>
  );
}

export default Example;
