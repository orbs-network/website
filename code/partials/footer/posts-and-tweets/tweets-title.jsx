import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";

const TweetsTitle = ({ title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="footer-sub-title">
      <Img src={generateUrl(images.footer.twitter)} />
      <h4>{title}</h4>
    </div>
  );
};

export default TweetsTitle;
