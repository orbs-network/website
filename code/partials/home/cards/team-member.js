import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";
import CardTitle from "./components/card-title";

const TeamMember = ({
  _relativeURL,
  _ID,
  image,
  weight,
  website,
  twitter,
  telegram,
  text,
  _body,
  type,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card team-card" data-weight={text.title}>
      <figure className="card-avatar">
        <Img src={generateUrl(image)} className="card-avatar-img" />
      </figure>
      <div className="card-data flex-column">
        <CardTitle title={text.title} />
        <h5 className="team-card-sub-title">{text.subTitle}</h5>
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

        <section className="card-text">{_body}</section>
      </div>
    </div>
  );
};

export default TeamMember;
