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
      <div className="single-blog-body main-grid">
        <Img src={generateUrl(image)} className="single-blog-body-bg" />
        {_body}
      </div>
    </React.Fragment>
  );
};

export default Blog;
