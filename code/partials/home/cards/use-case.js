import React from "react";
import { cardsWeights } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";
import CardTitle from "./components/card-title";

const UseCaseFlexElement = ({ text, img }) => {
  return (
    <div className="u-card-flex-element">
      <h5>{text}</h5>
      <figure>
        <Img src={img} alt="" alt="" />
      </figure>
    </div>
  );
};

const UseCase = ({
  text,
  _body,
  category,
  _ID,
  _relativeURL,
  linkUrl,
  title,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div
      className="globe-card u-card flex-column"
      data-weight={cardsWeights.useCases}
    >
      <h5 className="card-top-subtitle">{category}</h5>
      <CardTitle title={title} />
      <section className="u-card-flex flex-between">
        <UseCaseFlexElement
          text={text.firstSection}
          img={generateUrl(images.globe.useCases.firstImg)}
        />
        <UseCaseFlexElement
          text={text.secondSection}
          img={generateUrl(images.globe.useCases.secondImg)}
        />
        <UseCaseFlexElement
          text={text.firstSection}
          img={generateUrl(images.globe.useCases.thirdImg)}
        />
      </section>
      <div className="card-text u-card-text">{_body}</div>
      <a
        href={linkUrl}
        target="_blank"
        className="card-link-btn blog-post-link"
      >
        {text.link}
      </a>
    </div>
  );
};

export default UseCase;
