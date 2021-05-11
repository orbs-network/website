import React from "react";

const BlogList = ({ list }) => {
  return (
    <div className="blog-list-wrapper">
      <ul className="blog-list" id="blogs-container">
        {list}
      </ul>
      <div className="pagination-container"></div>
    </div>
  );
};

export default BlogList;
