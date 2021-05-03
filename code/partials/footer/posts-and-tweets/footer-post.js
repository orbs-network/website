import React from "react";
import Img from "../../shared/Img";

const FooterPost = (props) => {
  const { postUrl, _body, date, image, _relativeURL, _ID, on } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <a className="footer-post flex-start" href={generateUrl(postUrl)}>
      <Img className="footer-post-image" src={generateUrl(image)} alt="post" />
      <section className="flex-column footer-post-content">
        <div className="footer-post-text">{_body}</div>
        <span className="footer-post-date flex-start">
          <small>{on}</small>
          <p>{date}</p>
        </span>
      </section>
    </a>
  );
};

export default FooterPost;
