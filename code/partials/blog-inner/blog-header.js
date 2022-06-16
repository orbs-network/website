import React from "react";
import { daysFromDate } from "../../util/date";
import Img from "../shared/Img";
import { images } from "../../../assets/js/images";
import { baseUrl } from "../../consts";
import ShareBtn from "../shared/share-btn";
import { handleUrl } from "../../util/link";
const BlogHeader = (props) => {
  const { _relativeURL, _ID, author, blogUrl, date, title } = props;
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="single-blog-header header">
      <h1 className="single-blog-header-title">{title}</h1>
      <div className="single-blog-header-author-flex">
        <div className="single-blog-header-author flex-start">
          {author}
          {date && (
            <React.Fragment>
              <small>|</small>
              <p className="blog-hedaer-date">{daysFromDate(date, _ID)}</p>
            </React.Fragment>
          )}
        </div>
        <div className="blog-share flex-start">
          <ShareBtn
            url={`https://t.me/share/url?url=${baseUrl}/${blogUrl}`}
            src={generateUrl(images.socials.telegram)}
          />
          <ShareBtn
            url={`http://twitter.com/share?url=${baseUrl}/${blogUrl}`}
            src={generateUrl(images.socials.twitter)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
