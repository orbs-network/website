import React from "react";
import { daysFromDate } from "../../util/date";
import Img from "../shared/Img";
import InnerLinks from "../shared/inner-links";
import { images } from "../../../assets/js/images";
const BlogHeader = (props) => {
  const {
    authorImage,
    authorName,
    title,
    _relativeURL,
    _ID,
    authorUrl,
    telegram,
    twitter,
    date,
    daysAgo,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  const links = {
    twitter,
    telegram,
  };
  return (
    <div className="single-blog-header">
      <h1 className="single-blog-header-title">{title}</h1>
      <div className="single-blog-header-author">
        <figure className="single-blog-header-author-avatar">
          <Img src={generateUrl(authorImage)} />
        </figure>
        <div className="single-blog-header-author-flex flex-start">
          <div className="single-blog-header-author-details flex-start">
            <a className="single-blog-header-author-name" href={authorUrl}>
              {authorName}
            </a>
            <p>|</p>
          </div>
          <p>{`${daysFromDate(date)} ${daysAgo}`}</p>
        </div>

        <InnerLinks
          links={links}
          section={images.socials}
          generateUrl={generateUrl}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
