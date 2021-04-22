import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="blog-tags flex-center">
      {tags.map((tag, index) => {
        return (
          <li key={index} className="blog-tags-tag" data-type={tag}>
            #{tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
