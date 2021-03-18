import React from "react";
import Img from "../../common/Img";
import CardTitle from "./components/card-title";

const UseCaseFlexElement = ({ text, img }) => {
  return (
    <div className="u-card-flex-element">
      <h5>{text}</h5>
      <figure>
        <Img src={img} alt="" />
      </figure>
    </div>
  );
};

const UseCase = ({
  text,
  _body,
  link,
  firstImg,
  secondImg,
  thirdImg,
  _ID,
  _relativeURL,
  weight,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card u-card flex-column" data-weight={weight}>
      <h5 className="card-top-subtitle">{text.subTitle}</h5>
      <CardTitle title={text.title} />
      <section className="u-card-flex flex-between">
        <UseCaseFlexElement
          text={text.firstSectionText}
          img={generateUrl(firstImg)}
        />
        <UseCaseFlexElement
          text={text.secondSectionText}
          img={generateUrl(secondImg)}
        />
        <UseCaseFlexElement
          text={text.firstSectionText}
          img={generateUrl(thirdImg)}
        />
      </section>
      <div className="card-text u-card-text">{_body}</div>
      <a href={link} target="_blank" className="card-link-btn blog-post-link">
        {text.link}
      </a>
    </div>
  );
};

export default UseCase;
