import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../shared/Img";

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
    <div className="white-papers-box" data-aos={animations.fadeTop}>
      <div className="white-papers-box-flex flex-start">
        <div className="flex-column white-papers-box-c">
          <h4 className="white-papers-box-title">{title}</h4>
          {published && date && (
            <p className="white-papers-box-c-date">{`${published} ${date}`}</p>
          )}
          <figure className="white-papers-box-mobile">
            <Img src={generateUrl(image)} alt="mobile-pdf-preview" />
          </figure>
          <div className="white-papers-box-c-text">{_body}</div>
          <a
            href={generateUrl(url)}
            className="white-papers-box-btn"
          >{`+ ${readPaperBtn}`}</a>
        </div>
        <figure className="white-papers-box-preview">
          <Img src={generateUrl(image)} alt="pdf-preview" />
        </figure>
      </div>
    </div>
  );
};

export default WhitePaperBox;
