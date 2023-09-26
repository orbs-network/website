import React from "react";
import { handleUrl } from "../../util/link";
import SmallGrid from "../shared/SmallGrid";

function Apps({ title, _body, google, apple, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  
  return (
    <div className="apps">
      <SmallGrid>
        <h3 className="apps-title">{title}</h3>
        <div className="apps-body">{_body}</div>
        <div className="apps-links">
          <a href={google} target="_blank">
            <img
              src={generateUrl(
                "../../../assets/img/notifications-protocol/apps/google.svg"
              )}
            />
          </a>
          <a href={apple} target="_blank">
            <img
              src={generateUrl(
                "../../../assets/img/notifications-protocol/apps/apple.svg"
              )}
            />
          </a>
        </div>
      </SmallGrid>
    </div>
  );
}

export default Apps;
