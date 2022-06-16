import React from "react";

function FlexSection({ _body }) {
  return (
    <div className="network-section network-section-first">
      <div className="network-section-grid">
      <div className="network-section-left network-section-text">{_body}</div>
      <img className="network-section-image" src="../../../assets/img/network/image1.png" />
      </div>
    </div>
  );
}

export default FlexSection;
