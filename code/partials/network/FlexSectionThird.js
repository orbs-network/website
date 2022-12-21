import React from "react";
import { handleUrl } from "../../util/link";
import MainGrid from "../shared/MainGrid";

function FlexSection({ _body, image, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="network-section network-section-third">
      <MainGrid>
        <img
          src="../../../assets/img/network/section-3-left.png"
          className="network-section-image"
        />
        <div className="network-section-right">
          <div className="network-section-text">{_body}</div>
          <img src={generateUrl(image)} />
        </div>
      </MainGrid>
    </div>
  );
}

export default FlexSection;
