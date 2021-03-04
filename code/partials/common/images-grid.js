import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const ImagesGrid = ({ title, images, imagesPerLine = 3 }) => {
  const style = { width: `calc(100% / ${imagesPerLine}  - 20px)` };
  return (
    <div className="images-grid" data-aos={animations.fadeTop}>
      {title && <h4 className="images-grid-title">{title}</h4>}
      <ul className="flex-start images-grid-list">
        {images.map((image, i) => {
          const { src, text } = image;
          return (
            <li className="flex-column" style={style}>
              <figure className="images-grid-list-img">
                {src && <img src={src} />}
              </figure>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImagesGrid;
