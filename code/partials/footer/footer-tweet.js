import React from "react";
import Img from "../common/Img";

const FooterTweet = ({ _body, _relativeURL, image, _ID, time }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="footer-tweet flex-start">
      <figure>
        <Img src={generateUrl(image)} />
      </figure>
      <section className="flex-column footer-tweet-content">
        <p className="footer-overflow-text footer-text">{_body}</p>
        <small>{time}</small>
      </section>
    </div>
  );
};

export default FooterTweet;
