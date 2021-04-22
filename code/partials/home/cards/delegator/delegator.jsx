import React from "react";
import { cardsWeights } from "../../../../../assets/js/consts/consts";
import { images } from "../../../../../assets/js/images";
import Img from "../../../shared/Img";
import InnerLinks from "../../../shared/inner-links";
import { Border } from "../components/border";
import CardTitle from "../components/card-title";
import CardTooltip from "../components/card-tooltip";
import Interests from "./interests";

const Delegator = ({
  _relativeURL,
  _ID,
  image,
  location,
  website,
  twitter,
  telegram,
  name,
  _body,
  type,
  favorite,
  firstWallet,
  secondWallet,
  interestsList,
  interestsTitle,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const links = { website, twitter, telegram };
  return (
    <div className="globe-card d-card" data-weight={cardsWeights.delegator}>
      <figure className="card-avatar">
        <CardTooltip
          img={generateUrl(images.globe.delegator.figure)}
          type={type}
        />
        {image && <Img src={generateUrl(image)} className="card-avatar-img" />}
      </figure>
      <div className="card-data flex-column">
        <CardTitle title={name} />
        <span className="flex-center card-location">
          <img src="" />
          <p>{location}</p>
        </span>
        <InnerLinks
          links={links}
          section={images.globe.delegator}
          generateUrl={generateUrl}
        />
        <Border />
        <div className="d-card-bottom">
          <section className="flex-center d-card-wallets">
            <h5>{favorite}</h5>
            <figure>
              <Img src={generateUrl(firstWallet)} />
            </figure>
            <figure>
              <Img src={generateUrl(secondWallet)} />
            </figure>
          </section>
          <Interests
            interestsTitle={interestsTitle}
            interestsList={interestsList}
          />
          <section className="card-text">
            <aside className="card-quotes card-quotes-left">"</aside>
            {_body}
            <aside className="card-quotes card-quotes-right">"</aside>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Delegator;
