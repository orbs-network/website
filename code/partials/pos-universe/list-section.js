import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const ListSection = ({ _body, title, img, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div
      className="universe-first-sections-section"
      data-aos={animations.fadeTop}
    >
      <span className="flex-start">
        <img src={generateUrl(img)} />
        <h4>{title}</h4>
      </span>
      {_body}
    </div>
  );
};

export default ListSection;
