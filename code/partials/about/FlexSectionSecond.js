import React from "react";

function FlexSection({_body}) {
  return (
    <div className="about-section about-section-second">
      <div className="about-section-grid">
      <div className="about-section-images">
        <img src="../../../assets/img/about/section-2-img-1.png" />
        <img src="../../../assets/img/about/section-2-img-2.png" />
        <img src="../../../assets/img/about/section-2-img-3.png" />
      </div>
      <div className="about-section-right about-section-text">
       {_body}
      </div>
      </div>
    </div>
  );
}

export default FlexSection;
