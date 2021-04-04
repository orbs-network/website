import React from "react";
import { cardsWeights } from "../../../../../assets/js/consts/consts";
import { images } from "../../../../../assets/js/images";
import Img from "../../../common/Img";
import InnerLinks from "../../../common/inner-links";
import { Border } from "../components/border";
import CardTitle from "../components/card-title";
import CardTooltip from "../components/card-tooltip";
import Interests from "./interests";
import Repos from "./repos";
const Contributor = (props) => {
  const {
    _relativeURL,
    _ID,
    nickname,
    image,
    date,
    location,
    email,
    github,
    website,
    interestsList,
    type,
    name,
    joind,
    interestsTitle,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const links = { email, github, website };
  return (
    <div className="globe-card c-card" data-weight={cardsWeights.contributor}>
      <figure className="card-avatar">
        <CardTooltip
          img={generateUrl(images.globe.contributor.figure)}
          type={type}
        />
        <Img src={generateUrl(image)} className="card-avatar-img" />
      </figure>
      <div className="card-data">
        <CardTitle title={name} />
        <p className="c-card-nickname">@{nickname}</p>
        <span className="flex-center card-location">
          <Img src={generateUrl(images.globe.contributor.location)} />
          <p>{location}</p>
        </span>
        <InnerLinks
          links={links}
          section={images.globe.contributor}
          generateUrl={generateUrl}
        />

        <Border />
        <div className="c-card-bottom">
          <span className="flex-center card-date">
            <p>{`${joind}: ${date}`}</p>
          </span>

          <Repos {...props} generateUrl={generateUrl} />
          <Interests interests={interestsList} title={interestsTitle} />
        </div>
      </div>
    </div>
  );
};

export default Contributor;
