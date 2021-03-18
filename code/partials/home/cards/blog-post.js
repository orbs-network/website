import React from "react";
import CardTitle from "./components/card-title";

const BlogPosts = ({
  text,
  date,
  _body,
  link,
  image,
  _ID,
  _relativeURL,
  weight,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card blog-post flex-column" data-weight={weight}>
      <h5 className="card-top-subtitle">{text.subTitle}</h5>
      <CardTitle title={text.title} />
      <div className="blog-post-date flex-center">
        <p className="blog-post-date-text">{text.publishedOn}:</p>
        <p>{date}</p>
      </div>
      <figure className="blog-post-img">
        <img src={generateUrl(image)} />
      </figure>
      <div className="card-text blog-pos-text">{_body}</div>
      <a href={link} target="_blank" className="card-link-btn blog-post-link">
        {text.link}
      </a>
    </div>
  );
};

export default BlogPosts;
