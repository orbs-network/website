import React from "react";
import { handleUrl } from "../../util/link";
import Img from "../shared/Img";

const CategoryItem = ({ image, url, _relativeURL, _ID, full_width }) => {
  const className = full_width
    ? "ecosystem-category-list-item ecosystem-category-list-item-big"
    : "ecosystem-category-list-item";
  return (
    <div className={className}>
      <a href={url ? handleUrl(url, _relativeURL, _ID) : null} target="_blank">
        <Img src={handleUrl(image, _relativeURL, _ID)} />
      </a>
    </div>
  );
};

export default CategoryItem;
