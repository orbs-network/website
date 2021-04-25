import React from "react";
import Img from "../shared/Img";

const Blog = (props) => {
  const {
    _body,
    image,
    _relativeURL,
    _ID,
    authorImage,
    by,
    authorUrl,
    authorName,
    inThe,
    projectName,
    title,
    projectUrl,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <React.Fragment>
      <div className="single-blog-header">
        {title}
        <div className="single-blog-header-author">
          <figure className="single-blog-header-author-avatar">
            <Img src={generateUrl(authorImage)} />
          </figure>
          <p>{by}</p>
          <a href={authorUrl}>{authorName}</a>
          <p>{inThe}</p>
          <a href={projectUrl}>{projectName}</a>
        </div>
      </div>
      <figure className="single-blog-bg">
        <Img src={generateUrl(image)} />
      </figure>
      <div className="single-blog-body">
        <div className="single-blog-body-grid">{_body}</div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
