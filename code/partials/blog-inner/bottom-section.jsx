import React from "react";
import Img from "../common/Img";

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
  whitePapersImage,
  githubImage,
  documentationImage,
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
          src={generateUrl(whitePapersImage)}
          title={whitePapersTitle}
          btnText={whitePapersButton}
        />

        <Section
          src={generateUrl(githubImage)}
          title={githubTitle}
          btnText={githubButton}
        />
        <Section
          src={generateUrl(documentationImage)}
          title={documentationTitle}
          btnText={documentationButton}
        />
      </div>
    </div>
  );
};

export default BlogGetInvloved;
