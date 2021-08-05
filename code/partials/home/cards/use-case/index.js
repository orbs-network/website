import React from "react";
import { cardsWeights } from "../../../../../assets/js/consts/consts";
import { images } from "../../../../../assets/js/images";
import Img from "../../../shared/Img";
import CardTitle from "../components/card-title";

const UseCaseFlexElement = ({ text, img }) => {
  return (
    <div className="use-case-card-flex-element">
      <h5>{text}</h5>
      <figure>
        <Img src={img} alt="" alt="" />
      </figure>
    </div>
  );
};

const UseCase = ({
  link,
  _body,
  category,
  _ID,
  _relativeURL,
  linkUrl,
  title,
  firstSection,
  secondSection,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div
      className="globe-card use-case-card flex-column"
      data-weight={cardsWeights.useCases}
    >
      <h5 className="card-top-subtitle">{category}</h5>
      <CardTitle title={title} />
      <section className="use-case-card-flex flex-between">
        <UseCaseFlexElement
          text={firstSection}
          img={generateUrl(images.globe.useCases.firstImg)}
        />
        <UseCaseFlexElement
          text={secondSection}
          img={generateUrl(images.globe.useCases.secondImg)}
        />
        <UseCaseFlexElement
          text={firstSection}
          img={generateUrl(images.globe.useCases.thirdImg)}
        />
      </section>
      <div className="card-text use-case-card-text">{_body}</div>
      <a
        href={linkUrl}
        target="_blank"
        className="card-link-btn blog-post-link"
      >
        {link}
      </a>
    </div>
  );
};

export default UseCase;
