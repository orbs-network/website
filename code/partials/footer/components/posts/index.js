import React from "react";
import CommonButton from "../../../shared/CommonButton";

const BlogsList = (props) => {
  const { list, title, subscribeBtn, subscribe } = props;

  return (
    <div className="footer-blogs">
      <div className="footer-blogs-subscribe">
        <section className="footer-section-title">
          <h4>{subscribe}</h4>
        </section>
        <button className="subscribe-btn pink-button">{subscribeBtn}</button>
      </div>
      <section className="footer-section-title">
        <h4>{title}</h4>
      </section>
      <ul className="footer-blog-list">{list}</ul>
    </div>
  );
};

export default BlogsList;
