import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../shared/Img";

const ListSection = ({ _body, title, img, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="universe-first-flex-section" data-aos={animations.fadeTop}>
      <div className="flex-start universe-first-flex-section-top">
        <Img src={generateUrl(img)} />
        <h4>{title}</h4>
      </div>
      {_body}
    </div>
  );
};

export default ListSection;
