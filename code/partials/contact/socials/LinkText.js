import React from "react";
import { handleUrl } from "../../../util/link";

function LinkText({ text, url, linkText, _relativeURL, _ID }) {
  return (
    <section className="contact-socials-section-link">
      <p>{text}</p>
      <a target="_blank" href={handleUrl(url, _relativeURL, _ID)}>
        {linkText}
      </a>
    </section>
  );
}

export default LinkText;
