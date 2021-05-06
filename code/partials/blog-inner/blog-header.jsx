import React from "react";
import { daysFromDate } from "../../util/date";
import Img from "../shared/Img";
import InnerLinks from "../shared/inner-links";
import { images } from "../../../assets/js/images";
const BlogHeader = (props) => {
  const { _relativeURL, _ID, author, telegram, twitter, date, title } = props;
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
      <div className="single-blog-header-author-flex">
        <div className="single-blog-header-author flex-start">
          {author}
          <small>|</small>
          <p className="blog-hedaer-date">{daysFromDate(date, _ID)}</p>
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
