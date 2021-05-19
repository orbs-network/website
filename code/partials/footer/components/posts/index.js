import React from "react";

const PostsList = ({ posts, title }) => {
  return (
    <div className="footer-posts">
      <section className="footer-section-title">
        <h4>{title}</h4>
      </section>
      <div className="footer-posts-list">{posts}</div>
    </div>
  );
};

export default PostsList;
