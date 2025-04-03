import React from "react";
import { setBlogAttributes } from "../../util/blog";
import { handleUrl } from "../../util/link";

import Img from "../shared/Img";
import BlogHeader from "./blog-header";

const Blog = (props) => {
  const { _body, image, _relativeURL, _ID } = props;
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="blog-element" {...setBlogAttributes(props)}>
      <BlogHeader {...props} />
      {image && (
        <figure className="single-blog-bg">
          <Img src={generateUrl(image)} alt="blog" />
        </figure>
      )}
      <div className="single-blog-body">
        <div className="single-blog-body-grid">{_body}</div>
      </div>
    </div>
  );
};

export default Blog;
