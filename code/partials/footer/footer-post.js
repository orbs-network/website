import React from "react";
import Img from "../common/Img";

const FooterPost = ({
  blogUrl,
  _body,
  date,
  text,
  image,
  _relativeURL,
  _ID,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="footer-post flex-start" href={generateUrl(blogUrl)}>
      <figure>
        <Img src={generateUrl(image)} />
      </figure>
      <section className="flex-column footer-post-content">
        <p className="footer-overflow-text footer-text">{_body}</p>
        <span className="footer-post-date">
          <small>{text.on}</small>
          <small>{date}</small>
        </span>
      </section>
    </a>
  );
};

export default FooterPost;
