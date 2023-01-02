import React from "react";
import SmallGrid from "../shared/SmallGrid";

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-first">
      <SmallGrid>
        <div className="network-section-left network-section-text">{_body}</div>
        <img
          className="network-section-image"
          src="../../../assets/img/network/image1.png"
        />
      </SmallGrid>
    </div>
  );
}

export default FlexSection;
