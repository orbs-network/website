import React from "react";
import Img from "../shared/Img";
import BlogHeader from "./blog-header";

const Blog = (props) => {
  const { _body, image, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <React.Fragment>
      <BlogHeader {...props} />
      <figure className="single-blog-bg">
        <Img src={generateUrl(image)} alt="blog" />
      </figure>
      <div className="single-blog-body">
        <div className="single-blog-body-grid">{_body}</div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
