import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="blog-tags">
      {tags.map((tag, index) => {
        return (
          <a
            key={index}
            href={`#${tag}`}
            className="blog-tags-tag"
            data-type={tag}
          >
            #{tag}
          </a>
        );
      })}
    </div>
  );
};

export default Tags;
