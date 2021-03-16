import React from "react";

const FooterPosts = ({ posts, text }) => {
  return (
    <section className="footer-section footer-posts">
      <h5 className="footer-section-title">{text.posts}</h5>
      <div> {posts}</div>
    </section>
  );
};

export default FooterPosts;
