import React from "react";
import { cardsWeights } from "../../../../assets/js/consts/consts";
import Img from "../../common/Img";
import CardTitle from "./components/card-title";

const BlogPost = (props) => {
  const {
    text,
    date,
    _body,
    title,
    image,
    _ID,
    _relativeURL,
    category,
    blogUrl,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div
      className="globe-card blog-post flex-column"
      data-weight={cardsWeights.blogPosts}
    >
      <h5 className="card-top-subtitle">{category}</h5>
      <CardTitle title={title} oneLine={true} />
      <div className="card-date flex-center">
        <p>{text.publishedOn}</p>
        <p>{date}</p>
      </div>
      <figure className="blog-post-img">
        <Img src={generateUrl(image)} />
      </figure>
      <div className="card-text blog-pos-text">{_body}</div>
      <a href={blogUrl} className="card-link-btn blog-post-link">
        {text.link}
      </a>
    </div>
  );
};

export default BlogPost;
