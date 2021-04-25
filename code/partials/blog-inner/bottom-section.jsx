import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const Section = ({ src, title, btnText }) => {
  return (
    <div className="single-blog-bottom-flex-item flex-column">
      <Img src={src} />
      <h4>{title}</h4>
      <button>{btnText}</button>
    </div>
  );
};

const BlogGetInvloved = ({
  whitePapersTitle,
  whitePapersButton,
  githubTitle,
  githubButton,
  documentationTitle,
  documentationButton,
  _relativeURL,
  _ID,
  title,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="single-blog-bottom">
      <h3 className="single-blog-bottom-title">{title}</h3>
      <div className="single-blog-bottom-flex flex-between">
        <Section
          src={generateUrl(images.blog.logo)}
          title={whitePapersTitle}
          btnText={whitePapersButton}
        />

        <Section
          src={generateUrl(images.blog.github)}
          title={githubTitle}
          btnText={githubButton}
        />
        <Section
          src={generateUrl(images.blog.documents)}
          title={documentationTitle}
          btnText={documentationButton}
        />
      </div>
    </div>
  );
};

export default BlogGetInvloved;
