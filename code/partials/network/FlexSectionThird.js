import React from "react";

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-third">
      <div className="network-section-grid">
        <img
          src="../../../assets/img/network/section-3-left.png"
          className="network-section-image"
        />
        <div className="network-section-right">
          <div className="network-section-text">{_body}</div>
          <img src="../../../assets/img/network/section-3-right.png" />
        </div>
      </div>
    </div>
  );
}

export default FlexSection;
