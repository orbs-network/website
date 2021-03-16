import React from "react";

const FooterTweets = ({ text, tweets }) => {
  return (
    <section className="footer-section footer-tweets">
      <h5 className="footer-section-title">{text.tweets}</h5>
      <div> {tweets}</div>
    </section>
  );
};

export default FooterTweets;
