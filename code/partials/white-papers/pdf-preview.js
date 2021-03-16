import React from "react";
import { images } from "../../../assets/js/images";

const WhitePaperPdf = ({ _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="white-paper-pdf">
      <section className="white-paper-pdf-overlay"></section>

      <div className="white-paper-pdf-iframe">
        <button className="white-paper-pdf-close">
          <img src={generateUrl(images.common.close)} />
        </button>
        <iframe src=""></iframe>
      </div>
    </div>
  );
};

export default WhitePaperPdf;
