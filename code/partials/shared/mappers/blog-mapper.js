import React from "react";
import { isBlogPage, isRoot } from "../../../util/mappers";
import Blog from "../../blog-inner/blog";
import BlogListElement from "../../blog/blog-list-element";

const BlogMapper = (props) => {
  const { _ID } = props;
  const root = isRoot(_ID);
  const isBlogInnerPage = isBlogPage(_ID);
  // if (root) {
  //   return <BlogPost {...props} />;
  // }
  if (isBlogInnerPage) {
    return <Blog {...props} />;
  }
  return <BlogListElement {...props} />;
};

export default BlogMapper;
