import React from "react";

function FlexSection({ _body }) {
  return (
    <div className="about-section about-section-third">
      <div className="about-section-grid">
      <img src="../../../assets/img/about/section-3-left.png" className="about-section-image" />
        <div className="about-section-right about-section-text">{_body}</div>
      </div>
    </div>
  );
}

export default FlexSection;
