import React from "react";
import { animations } from "../../../../assets/js/consts/consts";

const ImagesGrid = ({ title, images, border }) => {
  const parentStyle = {
    borderBottom: border ? "1px solid #707070" : "none",
  };
  return (
    <div
      className="images-grid "
      data-aos={animations.fadeTop}
      style={parentStyle}
    >
      {title && <h3 className="images-grid-title">{title}</h3>}
      <ul className="images-grid-list">{images}</ul>
    </div>
  );
};

export default ImagesGrid;
