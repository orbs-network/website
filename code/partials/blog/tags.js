import React from "react";
import { animations } from "../../../assets/js/consts/consts";

const Tags = ({ tags }) => {
  return (
    <div className="blog-tags" data-aos={animations.fadeIn}>
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
