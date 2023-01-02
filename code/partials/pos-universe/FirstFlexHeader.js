import React from "react";
import Img from "../shared/Img";

const SectionHeader = ({
  title,
  img,
  _relativeURL,
  _ID,
  subtitle,
  linkText,
  linkUrl,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="universe-first-flex-section-header">
      <Img src={generateUrl(img)} alt="delegator icon" />
      <h4 className="universe-first-flex-section-header-title">{title}</h4>
      <p className="universe-first-flex-section-header-subtitle">{subtitle}</p>
      <a className="white-button" target="_blank" href={linkUrl}>
        {linkText}
      </a>
    </div>
  );
};

export default SectionHeader;
