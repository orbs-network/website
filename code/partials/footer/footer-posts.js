import React from "react";

const FooterPosts = ({ posts, title }) => {
  return (
    <section className="footer-section footer-posts">
      <h5 className="footer-section-title">{title}</h5>
      <div> {posts}</div>
    </section>
  );
};

export default FooterPosts;
