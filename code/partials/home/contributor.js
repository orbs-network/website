import React from "react";
import { images } from "../../../assets/js/images";
import { Border } from "./border";
import Interests from "./interests";
const Contributor = ({
  _body,
  _relativeURL,
  _ID,
  name,
  title,
  image,
  weight,
  text,
  joindDate,
  location,
  email,
  github,
  website,
  firstRepositoryTitle,
  firstRepositoryText,
  firstRepositoryLanguage,
  secondRepositoryTitle,
  secondRepositoryText,
  secondRepositoryLanguage,
  interests,
  type,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card c-card" data-weight={weight}>
      <figure className="card-avatar">
        <aside className="card-type">{type}</aside>
        <img src={generateUrl(image)} />
      </figure>
      <div className="card-data">
        <span className="flex-center card-date">
          <p>{`${text.joind}: ${joindDate}`}</p>
        </span>
        <h3 className="card-name">{weight}</h3>
        <p className="card-nickname">@{title}</p>
        <span className="flex-center card-location">
          <img src="" />
          <p>{location}</p>
        </span>
        <section className="card-links flex-center">
          <a href={email} target="_blank" className="flex-center">
            <img src={generateUrl(images.globe.contributor.email)} />
          </a>
          <a href={github} target="_blank" className="flex-center">
            <img src={generateUrl(images.globe.contributor.github)} />
          </a>
          <a href={website} target="_blank" className="flex-center">
            <img src={generateUrl(images.globe.contributor.link)} />
          </a>
        </section>

        <Border />
        <section className="flex-between c-card-repos">
          <div className="c-card-repos-top flex-center">
            <img src={generateUrl(images.globe.repository)} />
            <p>{text.repositories}</p>
          </div>
          <span className="c-card-repos-ts">
            <h5>{firstRepositoryTitle}</h5>
            <p>{firstRepositoryText}</p>
            <aside>{firstRepositoryLanguage}</aside>
          </span>
          <span className="c-card-repos-js">
            <h5>{secondRepositoryTitle}</h5>
            <p>{secondRepositoryText}</p>
            <aside>{secondRepositoryLanguage}</aside>
          </span>
        </section>
        <Interests interests={interests} text={text} />
      </div>
    </div>
  );
};

export default Contributor;
