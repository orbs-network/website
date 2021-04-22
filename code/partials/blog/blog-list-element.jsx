import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../shared/Img";

const BlogListElement = (props) => {
  const {
    authorName,
    authorImage,
    image,
    date,
    _relativeURL,
    _ID,
    blogUrl,
    title,
    type,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li
      className="blog-list-blog"
      data-type={type}
      data-aos={animations.fadeTop}
    >
      <a href={generateUrl(blogUrl)} className="blog-list-blog-flex">
        <Img src={generateUrl(image)} className="blog-list-blog-bg" />
        <div className="blog-list-blog-content flex-column">
          {title}
          <div className="blog-list-blog-content-author flex-start">
            <Img src={generateUrl(authorImage)} />
            <p>{authorName}</p>
            <small>|</small>
            <p>{date}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogListElement;
