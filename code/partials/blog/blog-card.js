import React from "react";

const BlogCard = ({
  _body,
  authorName,
  authorImage,
  image,
  date,
  _relativeURL,
  _ID,
  blogUrl,
  authorUrl,
  type,
  typeImg,
  dateImg,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="blog-card" data-aos="fade-up">
      <a href={generateUrl(`${blogUrl}`)}>
        <section className="blog-card-content">
          <div className="blog-card-content-type">
            <section>
              <img src={generateUrl(dateImg)} />
              <p>{type}</p>
            </section>
            <section>
              <img src={generateUrl(typeImg)} />

              <p>{date}</p>
            </section>
          </div>
          <div className="blog-card-content-text">{_body}</div>
          <figure className="blog-card-content-img">
            <img src={generateUrl(image)} />
          </figure>
          <div className="blog-card-content-author flex-start">
            <p>By:</p>
            <a href={authorUrl} className="blog-card-content-author-link">
              {authorName}
            </a>
          </div>
        </section>
      </a>
      <section className="blog-card-author flex-start">
        <figure>{authorImage && <img src={authorImage} alt="" />}</figure>
        <p>{authorName}</p>
        <small></small>
        <p>{date}</p>
      </section>
    </div>
  );
};

export default BlogCard;
