import React from "react";
import Img from "../shared/Img";

const BlogHeader = (props) => {
  const {
    image,
    authorImage,
    projectName,
    projectUrl,
    authorName,
    by,
    title,
    _relativeURL,
    _ID,
    authorUrl,
    inThe,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="single-blog-header">
      <Img src={generateUrl(image)} className="single-blog-header-bg" />
      <div className="single-blog-header-content  page-grid">
        {title}
        <div className="single-blog-header-author">
          <Img
            src={generateUrl(authorImage)}
            className="single-blog-header-author-img"
          />
          <div className="flex-start single-blog-header-author-details">
            <p>{by}</p>
            <a href={authorUrl}>{authorName}</a>
            <p>{inThe}</p>
            <a href={projectUrl}>{projectName}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
