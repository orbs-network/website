import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const Section = ({ src, title, btnText, alt }) => {
  return (
    <div className="single-blog-bottom-flex-item flex-column">
      <Img src={src} alt={alt} />
      <h4>{title}</h4>
      <button aria-label="link">{btnText}</button>
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
          alt="orbs logo"
        />

        <Section
          src={generateUrl(images.blog.github)}
          title={githubTitle}
          btnText={githubButton}
          alt="github icon"
        />
        <Section
          src={generateUrl(images.blog.documents)}
          title={documentationTitle}
          btnText={documentationButton}
          alt="document icon"
        />
      </div>
    </div>
  );
};

export default BlogGetInvloved;
