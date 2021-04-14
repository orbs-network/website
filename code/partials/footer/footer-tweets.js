import React from "react";

const FooterTweets = ({ title, tweets }) => {
  return (
    <section className="footer-section footer-tweets">
      <h5 className="footer-section-title">{title}</h5>
      <div> {tweets}</div>
    </section>
  );
};

export default FooterTweets;
