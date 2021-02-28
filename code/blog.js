import React from "react";
import BlogCard from "./blog-components/BlogCard";

const Faq = ({ text, _relativeURL, _ID, tags, blogs }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <html>
      <head>
        <script
          type="module"
          src={generateUrl("../assets/js/blog/blog.js")}
        ></script>
      </head>
      <body className="blog-page grid-page">
        <div className="blog">
          <h3 className="blog-title">{text.title}</h3>
          <p className="blog-sub-title">{text.sub_title}</p>
          <ul className="flex-start blog-tags">
            {tags.map((tag) => {
              return <li>{`#${tag}`}</li>;
            })}
          </ul>
          <div className="blog-list">
            {blogs.map((blog) => {
              return <BlogCard blog={blog} text={text} />;
            })}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Faq;
