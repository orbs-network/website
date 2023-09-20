import React from "react";
import { handleUrl } from "../../../../util/link";
import Img from "../../../shared/Img";

const Tweets = ({ title, title_img, _relativeURL, _ID, twitterUrl }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="footer-tweets">
      <section className="footer-section-title">
        <Img src={generateUrl(title_img)} />
        <h4>{title}</h4>
      </section>
      <div className="footer-tweets-content">
        <a
          className="twitter-timeline"
          href="https://twitter.com/orbs_network?ref_src=twsrc%5Etfw"
        ></a>{" "}
      </div>
    </div>
  );
};

export default Tweets;
