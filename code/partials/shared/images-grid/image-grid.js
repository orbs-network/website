import React from "react";
import { handleUrl } from "../../../util/link";
import Img from "../Img";

const ImageGrid = ({ _relativeURL, _ID, _body, image }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <li className="flex-column">
      <figure className="images-grid-list-img">
        <Img src={generateUrl(image)} alt="grid image" />
      </figure>
      {_body}
    </li>
  );
};

export default ImageGrid;
