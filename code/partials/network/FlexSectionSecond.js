import React from "react";
import MainGrid from "../shared/MainGrid";

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-second">
      <img
        className="network-section-second-top"
        src="../../../assets/img/network/section-2-top.png"
      />
      <MainGrid>
        <img
          className="network-section-image"
          src="../../../assets/img/network/section-2.png"
        />

        <div className="network-section-right network-section-text">
          {_body}
        </div>
      </MainGrid>
    </div>
  );
}

export default FlexSection;
