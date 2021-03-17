import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../common/Img";

const BoxWithImage = ({
  _relativeURL,
  _ID,
  _body,
  image,
  readPaperBtn,
  publishDate,
  title,
  pdfPath,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <div className="white-paper-box flex-start" data-aos={animations.fadeTop}>
      <div className="flex-column white-paper-box-c">
        <h4 className="white-paper-box-c-title">{title}</h4>

        <p className="white-paper-box-c-date">{publishDate}</p>
        <figure className="white-paper-box-mobile">
          <Img src={generateUrl(image)} />
        </figure>
        <div className="white-paper-box-c-text">{_body}</div>
        <button
          data-url={generateUrl(pdfPath)}
          className="white-paper-box-btn"
        >{`+ ${readPaperBtn}`}</button>
      </div>
      <figure className="white-paper-box-preview">
        <Img src={generateUrl(image)} />
      </figure>
    </div>
  );
};

export default BoxWithImage;
