import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../common/Img";

const WhitePaperBox = ({
  _relativeURL,
  _ID,
  _body,
  image,
  readPaperBtn,
  date,
  title,
  url,
  published,
  preview,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <div className="white-paper-box" data-aos={animations.fadeTop}>
      <h4 className="white-paper-box-title">{title}</h4>
      <div className="white-paper-box-flex flex-start">
        <div className="flex-column white-paper-box-c">
          {published && date && (
            <p className="white-paper-box-c-date">{`${published} ${date}`}</p>
          )}
          <figure className="white-paper-box-mobile">
            <Img src={generateUrl(image)} />
          </figure>
          <div className="white-paper-box-c-text">{_body}</div>
          <a
            href={generateUrl(url)}
            className="white-paper-box-btn"
          >{`+ ${readPaperBtn}`}</a>
        </div>
        {preview}
      </div>
    </div>
  );
};

export default WhitePaperBox;
