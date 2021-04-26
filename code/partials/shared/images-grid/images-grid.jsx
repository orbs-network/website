import React from "react";
import { animations } from "../../../../assets/js/consts/consts";

const ImagesGrid = ({ title, images, border }) => {
  const parentStyle = {
    borderBottom: border ? "1px solid #707070" : "none",
  };
  const className = `flex-start images-grid-list grid`;
  return (
    <div
      className="images-grid"
      data-aos={animations.fadeTop}
      style={parentStyle}
    >
      {title && <h3 className="images-grid-title">{title}</h3>}
      <ul className={className}>{images}</ul>
    </div>
  );
};

export default ImagesGrid;
