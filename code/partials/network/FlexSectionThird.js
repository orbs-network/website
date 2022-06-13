import React from "react";
import { handleUrl } from "../../util/link";

function FlexSection({ _body, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="network-section network-section-third">
      <div className="network-section-grid">
        <img
          src="../../../assets/img/network/section-3-left.png"
          className="network-section-image"
        />
        <div className="network-section-right">
          <div className="network-section-text">{_body}</div>
          <img src={generateUrl(image)} />
        </div>
      </div>
    </div>
  );
}

export default FlexSection;
