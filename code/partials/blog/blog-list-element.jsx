import React from "react";
import Img from "../common/Img";

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
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="blog-list-blog">
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
