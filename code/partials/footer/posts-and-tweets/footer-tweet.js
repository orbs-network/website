import React from "react";
const FooterTweet = ({ _body, time, url }) => {
  return (
    <div className="footer-tweet flex-column">
      <a href={url} target="_blank" rel="noopener">
        <p className="footer-tweet-text">{_body}</p>
        <p className="footer-tweet-date">{time}</p>
      </a>
    </div>
  );
};

export default FooterTweet;
