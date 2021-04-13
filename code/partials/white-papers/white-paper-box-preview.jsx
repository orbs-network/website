import React from "react";
import Img from "../common/Img";

const WhitePaperBoxPreview = ({ image, _relativeURL, _ID, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <figure className="white-paper-box-preview">
      <Img src={generateUrl(image)} />
      {_body}
    </figure>
  );
};

export default WhitePaperBoxPreview;
