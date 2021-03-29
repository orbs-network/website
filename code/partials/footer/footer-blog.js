import React from "react";
import Img from "../common/Img";

const FooterPost = (props) => {
  const { blogUrl, _body, date, text, image, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="footer-blog flex-start" href={generateUrl(blogUrl)}>
      <figure>
        <Img src={generateUrl(image)} />
      </figure>
      <section className="flex-column footer-blog-content">
        <p className="footer-overflow-text footer-text">{_body}</p>
        <span className="footer-blog-date">
          <small>{text.on}</small>
          <small>{date}</small>
        </span>
      </section>
    </a>
  );
};

export default FooterPost;
