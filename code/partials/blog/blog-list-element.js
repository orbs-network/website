import React from "react";
import { setBlogAttributes } from "../../util/blog";
import { formatBlogDate } from "../../util/date";
import { handleUrl } from "../../util/link";
import { getBlogUrl } from "../../util/mappers";

const BlogListElement = (props) => {
  const {
    author,
    date,
    _relativeURL,
    _ID,
    blogUrl,
    title,
    short_description,
  } = props;
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  const url = getBlogUrl(_ID, blogUrl);
  const dateToDisplay = formatBlogDate(date);
  return (
    <li
      className="blog-list-blog list-item blog-element"
      {...setBlogAttributes(props)}
      style={{ display: "none" }}
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
            <p>{dateToDisplay}</p>
          </React.Fragment>
        )}
      </div>
    </li>
  );
};

export default BlogListElement;
