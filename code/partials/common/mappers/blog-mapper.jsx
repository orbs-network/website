import React from "react";
import BlogCard from "../../blog/blog-card";
import BlogPost from "../../home/cards/blog-post";

const BlogMapper = (props) => {
  const { _ID } = props;
  switch (_ID) {
    case ".":
      return <BlogPost {...props} />;

    default:
      return <BlogCard {...props} />;
  }
};

export default BlogMapper;
