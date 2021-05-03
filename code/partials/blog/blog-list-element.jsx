import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import { formatBlogDate } from "../../util/date";
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
    _body,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li
      className="blog-list-blog list-item"
      data-type={type}
      data-aos={animations.fadeTop}
    >
      <a
        href={generateUrl(blogUrl)}
        className="blog-list-blog-wrapper"
        rel="noopener"
      >
        <figure className="blog-list-blog-img">
          <Img src={generateUrl(image)} alt="blog" />
        </figure>
        <h5 className="blog-list-blog-title">{title}</h5>
        {_body}
        <div className="blog-list-blog-author flex-start">
          <Img src={generateUrl(authorImage)} alt="author avatar" />
          <p>{authorName}</p>
          <small>|</small>
          <p>{formatBlogDate(date)}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogListElement;
