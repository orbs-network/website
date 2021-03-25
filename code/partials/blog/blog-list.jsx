import React from "react";

const BlogList = (props) => {
  const { list } = props;
  return <div className="blog-list">{list}</div>;
};

export default BlogList;
