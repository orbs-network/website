import React from "react";
import { isRoot } from "../../../util/mappers";
import Blog from "../../blog/blog";
import BlogPost from "../../home/cards/blog-post";

const BlogMapper = (props) => {
  const { _ID } = props;

  switch (isRoot(_ID)) {
    case true:
      return <BlogPost {...props} />;

    default:
      return <Blog {...props} />;
  }
};

export default BlogMapper;
