import React from "react";
import { isRoot } from "../../../util/mappers";
import BlogList from "../../blog/blog-list";

const BlogListMapper = (props) => {
  return <BlogList {...props} />;
  // switch (isRoot(_ID)) {
  //   case true:
  //     return <CardsContainer {...props} />;

  //   default:
  //     return <BlogList {...props} />;
  // }
};

export default BlogListMapper;
