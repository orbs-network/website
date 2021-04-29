import React from "react";
import { images } from "../../../assets/js/images";
import { daysFromDate } from "../../util/date";
import Img from "../shared/Img";
import InnerLinks from "../shared/inner-links";

const Blog = (props) => {
  const {
    content,
    image,
    _relativeURL,
    _ID,
    authorImage,
    authorUrl,
    authorName,

    title,
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
    <React.Fragment>
      <div className="single-blog-header">
        {title}
        <div className="single-blog-header-author">
          <div className="single-blog-header-author-details">
            <figure className="single-blog-header-author-avatar">
              <Img src={generateUrl(authorImage)} />
            </figure>
            <a className="single-blog-header-author-name" href={authorUrl}>
              {authorName}
            </a>
            <p>|</p>
            <p>{`${daysFromDate(date)} ${daysAgo}`}</p>
          </div>

          <InnerLinks
            links={links}
            section={images.socials}
            generateUrl={generateUrl}
          />
        </div>
      </div>
      <figure className="single-blog-bg">
        <Img src={generateUrl(image)} />
      </figure>
      <div className="single-blog-body">
        <div className="single-blog-body-grid">{content}</div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
