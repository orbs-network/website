import React from "react";
import { isBlogPage } from "../../../util/mappers";
import Blog from "../../blog-inner/blog";
import BlogListElement from "../../blog/blog-list-element";

const BlogMapper = (props) => {
  const { _ID } = props;
  const isBlogInnerPage = isBlogPage(_ID);

  if (isBlogInnerPage) {
    return <Blog {...props} />;
  }
  return <BlogListElement {...props} />;
};

export default BlogMapper;
