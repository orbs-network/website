import React from "react";
import { handleUrl } from "../../../util/link";

function KoBlog({ _relativeURL, _ID, url, img, _body, prefix, date }) {
  return (
    <a
      className="footer-blog"
      href={handleUrl(url, _relativeURL, _ID)}
      target="_blank"
    >
      <div className="footer-blog-left">
        <img
          className="footer-blog-image"
          src={handleUrl(img, _relativeURL, _ID)}
        />
      </div>
      <div className="footer-blog-right">
        <p className="footer-blog-title">{_body}</p>
        <div className="footer-blog-right-flex">
          <p className="footer-blog-prefix">{prefix}</p>
          <p className="footer-blog-date">{date}</p>
        </div>
      </div>
    </a>
  );
}

export default KoBlog;
