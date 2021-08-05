import React from "react";
import { cardsWeights } from "../../../../../assets/js/consts/consts";
import CardTitle from "../components/card-title";

const WhitePaperCard = ({
  text,
  date,
  _body,
  url,
  image,
  _ID,
  _relativeURL,
  category,
  title,
  type,
  on,
  published,
  button,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div
      className="globe-card paper-card flex-column"
      data-weight={cardsWeights.researchPapers}
    >
      <CardTitle title={type} />
      <h3 className="paper-card-category">{category}</h3>
      <h5 className="paper-card-sub-title text-overflow">{title}</h5>
      <div className="card-date flex-center">
        <h5>{`${published} ${on}`}</h5>
        <p>{date}</p>
      </div>
      <figure className="paper-card-img">
        <img src={generateUrl(image)} />
      </figure>
      <div className="card-text paper-card-text">{_body}</div>
      <a
        href={generateUrl(url)}
        className="card-link-btn paper-card-link flex-center"
      >
        {button}
      </a>
    </div>
  );
};

export default WhitePaperCard;
