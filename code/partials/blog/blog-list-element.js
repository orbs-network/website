import React from "react";
import { formatBlogDate } from "../../util/date";
import { getBlogUrl } from "../../util/mappers";
import Img from "../shared/Img";

const BlogListElement = (props) => {
  const {
    author,
    image,
    date,
    _relativeURL,
    _ID,
    blogUrl,
    type,
    title,
    short_description,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const url = getBlogUrl(_ID, blogUrl);

  return (
    <li
      className="blog-list-blog list-item"
      data-type={type}
      style={{ display: "none" }}
      data-image={generateUrl(image)}
    >
      <a
        href={generateUrl(url)}
        className="blog-list-blog-wrapper"
        rel="noopener"
      >
        <figure className="blog-list-blog-img"></figure>
        <h4 className="blog-list-blog-title">{title}</h4>
      </a>
      <div className="blog-list-blog-author flex-start">
        {author}
        {date && (
          <React.Fragment>
            <small>|</small>
            <p>{formatBlogDate(date)}</p>
          </React.Fragment>
        )}
      </div>
    </li>
  );
};

export default BlogListElement;
