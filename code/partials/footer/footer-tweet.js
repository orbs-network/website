import React from "react";
import Img from "../common/Img";
import { images } from "../../../assets/js/images";
const FooterTweet = ({ _body, _relativeURL, _ID, time }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="footer-post footer-tweet flex-start">
      <figure className="footer-tweet-image">
        <Img src={generateUrl(images.socials.twitter)} />
      </figure>
      <section className="flex-column footer-post-content">
        <p className="footer-overflow-text footer-content-text">{_body}</p>
        <span className="footer-tweet-content-date">
          <p>{time}</p>
        </span>
      </section>
    </div>
  );
};

export default FooterTweet;
