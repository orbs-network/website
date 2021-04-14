import React from "react";
import Img from "../common/Img";

const FooterPost = (props) => {
  const { postUrl, _body, on, date, image, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="footer-post flex-start" href={generateUrl(postUrl)}>
      <figure className="footer-post-image">
        <Img src={generateUrl(image)} />
      </figure>
      <section className="flex-column footer-post-content">
        <p className="footer-overflow-text footer-content-text">{_body}</p>
        <span className="footer-post-content-date">
          <p>{on}</p>
          <p>{date}</p>
        </span>
      </section>
    </a>
  );
};

export default FooterPost;
