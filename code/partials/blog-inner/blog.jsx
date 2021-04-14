import React from "react";
import Img from "../common/Img";
import BlogHeader from "./blog-header";

const SingleBlog = (props) => {
  const { _body, _ID, _relativeURL, image } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="single-blog">
      <BlogHeader {...props} />
      <div className="single-blog-body">
        <Img src={generateUrl(image)} className="single-blog-body-bg" />
        {_body}
      </div>
    </div>
  );
};

export default SingleBlog;
