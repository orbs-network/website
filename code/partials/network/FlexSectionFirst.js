import React from "react";
import MainGrid from "../shared/MainGrid";

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-first">
      <MainGrid>
        <div className="network-section-left network-section-text">{_body}</div>
        <img
          className="network-section-image"
          src="../../../assets/img/network/image1.png"
        />
      </MainGrid>
    </div>
  );
}

export default FlexSection;
