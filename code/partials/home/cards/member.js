import React from "react";
import { cardsWeights } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";
import InnerLinks from "../../shared/inner-links";
import CardTitle from "./components/card-title";

const MemberCard = ({
  _relativeURL,
  _ID,
  avatar,
  twitter,
  telegram,
  _body,
  linkedin,
  weight,
  name,
  role,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const linksProps = { twitter, telegram, linkedin };
  return (
    <div className="globe-card team-card" data-weight={cardsWeights.members}>
      <figure className="card-avatar">
        <Img
          src={generateUrl(avatar)}
          className="card-avatar-img"
          alt="orbs team member"
        />
      </figure>
      <div className="card-data flex-column">
        <CardTitle title={name} />
        <h5 className="team-card-sub-title">{role}</h5>

        <InnerLinks
          generateUrl={generateUrl}
          section={images.globe.delegator}
          links={linksProps}
        />

        <section className="card-text">{_body}</section>
      </div>
    </div>
  );
};

export default MemberCard;
