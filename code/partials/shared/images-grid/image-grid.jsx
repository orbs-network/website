import React from "react";
import Img from "../Img";

const ImageGrid = ({ _relativeURL, _ID, _body, image, size }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  const className = size ? `is-${size}` : "";
  return (
    <li className={`${className} column flex-column`}>
      <figure className="images-grid-list-img">
        <Img src={generateUrl(image)} />
      </figure>
      {_body}
    </li>
  );
};

export default ImageGrid;
