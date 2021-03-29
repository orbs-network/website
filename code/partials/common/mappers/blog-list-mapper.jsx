import React from "react";
import { isRoot } from "../../../util/mappers";
import BlogList from "../../blog/blog-list";
import CardsContainer from "../../home/cards/cards-container";

const BlogListMapper = (props) => {
  const { _ID } = props;
  switch (isRoot(_ID)) {
    case true:
      return <CardsContainer {...props} />;

    default:
      return <BlogList {...props} />;
  }
};

export default BlogListMapper;
