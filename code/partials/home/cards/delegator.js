import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";
import { Border } from "./components/border";
import CardTitle from "./components/card-title";
import CardTooltip from "./components/card-tooltip";

const Delegator = ({
  _relativeURL,
  _ID,
  image,
  weight,
  location,
  website,
  twitter,
  telegram,
  text,
  _body,
  giveawayUrl,
  type,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card d-card" data-weight={weight}>
      <figure className="card-avatar">
        <CardTooltip
          img={generateUrl(images.globe.delegator.figure)}
          type={type}
        />
        <Img src={generateUrl(image)} className="card-avatar-img" />
      </figure>
      <div className="card-data flex-column">
        <CardTitle title={text.title} />
        <span className="flex-center card-location">
          <img src="" />
          <p>{location}</p>
        </span>
        <section className="card-links flex-center">
          <a href={website} target="_blank" className="flex-center">
            <Img src={generateUrl(images.globe.delegator.link)} />
          </a>
          <a href={twitter} target="_blank" className="flex-center">
            <Img src={generateUrl(images.globe.delegator.twitter)} />
          </a>
          <a href={telegram} target="_blank" className="flex-center">
            <Img src={generateUrl(images.globe.delegator.telegram)} />
          </a>
        </section>
        <Border />
        <section className="flex-center d-card-wallets">
          <h5>{text.favorite}</h5>
          <img src={generateUrl(images.globe.metamask)} />
          <img src={generateUrl(images.globe.metamask)} />
        </section>
        <section className="card-text">
          <aside className="card-quotes card-quotes-left">"</aside>
          {_body}
          <aside className="card-quotes card-quotes-right">"</aside>
        </section>
        <a href={giveawayUrl} target="_blank" className="card-link-btn">
          {text.giveaway}
        </a>
      </div>
    </div>
  );
};

export default Delegator;
