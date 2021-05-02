import React from "react";
import Img from "../shared/Img";
import BlogHeader from "./blog-header";

const Blog = (props) => {
  const { content, image, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <React.Fragment>
      <BlogHeader {...props} />
      <figure className="single-blog-bg">
        <Img src={generateUrl(image)} />
      </figure>
      <div className="single-blog-body">
        <div className="single-blog-body-grid">{content}</div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
