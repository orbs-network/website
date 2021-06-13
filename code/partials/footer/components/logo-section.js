import React from "react";
import { handleUrl } from "../../../util/link";

const LogoSection = ({ image, _body, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <section className="footer-logo-section">
      <img src={generateUrl(image)} className="footer-logo" />
      {_body}
    </section>
  );
};

export default LogoSection;
