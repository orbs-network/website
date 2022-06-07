import React from "react";

function FlexSection({ _body }) {
  return (
    <div className="about-section about-section-first">
      <div className="about-section-grid">
      <div className="about-section-left about-section-text">{_body}</div>
      <img className="about-section-image" src="../../../assets/img/about/image1.png" />
      </div>
    </div>
  );
}

export default FlexSection;
