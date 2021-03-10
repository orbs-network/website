import React from "react";

const BlogPosts = ({ text, date, _body, link, image, _ID, _relativeURL }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card blog-post flex-column">
      <h5 className="blog-post-small-title">{text.proof}</h5>
      <h3 className="blog-post-name">{text.title}</h3>
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
