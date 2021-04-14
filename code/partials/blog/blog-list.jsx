import React from "react";

const BlogList = (props) => {
  const { list } = props;
  return <ul className="blog-list">{list}</ul>;
};

export default BlogList;
