import React from "react";

const ResearchPaper = ({
  text,
  date,
  _body,
  previewUrl,
  image,
  _ID,
  _relativeURL,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card r-paper flex-column">
      <h3 className="card-name">{text.title}</h3>
      <h5 className="r-paper-sub-title">{text.subTitle}</h5>
      <div className="r-paper-date flex-center">
        <h5>{text.publishedOn}:</h5>
        <p>{date}</p>
      </div>
      <figure className="r-paper-img">
        <img src={generateUrl(image)} />
      </figure>
      <div className="card-text r-paper-text">{_body}</div>
      <a
        href={previewUrl}
        target="_blank"
        className="card-link-btn r-paper-link"
      >
        {text.linkText}
      </a>
    </div>
  );
};

export default ResearchPaper;
