import React from "react";
import { handleUrl, isOutherLink } from "../../util/link";
import Img from "../shared/Img";

const CategoryItem = ({ image, url, _relativeURL, _ID, full_width }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  const className = full_width
    ? "ecosystem-category-list-item ecosystem-category-list-item-big"
    : "ecosystem-category-list-item";
  return (
    <div className={className}>
      <a href={url ? generateUrl(url) : null} target="_blank">
        <Img src={generateUrl(image)} />
      </a>
    </div>
  );
};

export default CategoryItem;
