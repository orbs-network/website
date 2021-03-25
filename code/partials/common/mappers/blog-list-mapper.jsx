import React from "react";
import BlogList from "../../blog/blog-list";
import CardsContainer from "../../home/cards/cards-container";

const BlogListMapper = (props) => {
  const { _ID } = props;
  switch (_ID) {
    case ".":
      return <CardsContainer {...props} />;

    default:
      return <BlogList {...props} />;
  }
};

export default BlogListMapper;
