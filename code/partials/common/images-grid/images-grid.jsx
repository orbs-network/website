import React from "react";
import { animations } from "../../../../assets/js/consts/consts";

const ImagesGrid = ({ title, images, imagesPerLine = 3, border }) => {
  const parentStyle = {
    borderBottom: border ? "1px solid #707070" : "none",
  };
  const className = `flex-start images-grid-list grid-${imagesPerLine}`;
  return (
    <div
      className="images-grid"
      data-aos={animations.fadeTop}
      style={parentStyle}
    >
      {title && <h4 className="images-grid-title">{title}</h4>}
      <ul className={className}>{images}</ul>
    </div>
  );
};

export default ImagesGrid;
