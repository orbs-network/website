import React from "react";
const FooterTweet = ({ _body, time }) => {
  return (
    <div className="footer-tweet flex-column">
      <p className="footer-tweet-text">{_body}</p>
      <p className="footer-tweet-date">{time}</p>
    </div>
  );
};

export default FooterTweet;
