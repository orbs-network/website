import React from "react";
import { images } from "../../../assets/js/images";
import SplittedLinesText from "../common/splitted-lines-text";
import FooterPost from "../footer/footer-blog";

const BlogComponent = (props) => {
  const {
    authorName,
    authorImage,
    image,
    date,
    _relativeURL,
    _ID,
    blogUrl,
    authorUrl,
    category,
    title,
    text,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="blog-card-flex" data-aos="fade-up">
      <a href={generateUrl(`${blogUrl}`)}>
        <section className="blog-card-content">
          <div className="blog-card-content-type">
            <section>
              <img src={generateUrl(images.blog.category)} />
              <p>{category}</p>
            </section>
            <section>
              <img src={generateUrl(images.blog.calendar)} />

              <p>{date}</p>
            </section>
          </div>
          <div className="blog-card-content-text">
            <SplittedLinesText text={title} />
          </div>
          <figure className="blog-card-content-img">
            <img src={generateUrl(image)} />
          </figure>
          <div className="blog-card-content-author flex-start">
            <p>{text.by}</p>
            <a href={authorUrl} className="blog-card-content-author-link">
              {authorName}
            </a>
          </div>
        </section>
      </a>
      <a
        href={authorUrl}
        target="_blank"
        className="blog-card-author flex-start"
      >
        <figure>{authorImage && <img src={authorImage} alt="" />}</figure>
        <p>{authorName}</p>
        <small />
        <p>{date}</p>
      </a>
    </div>
  );
};

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <BlogComponent {...props} />
      <FooterPost {...props} />
    </div>
  );
};

export default BlogCard;
