import React from "react";

const BlogsList = (props) => {
  const { list, title } = props;

  return (
    <div className="footer-blogs">
      <section className="footer-section-title">
        <h4>{title}</h4>
      </section>
      <ul className="footer-blog-list">{list}</ul>
    </div>
  );
};

export default BlogsList;
