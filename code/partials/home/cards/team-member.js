import React from "react";
import Img from "../../common/Img";
import CardLinks from "./card-links";
import CardTitle from "./components/card-title";

const TeamMember = ({
  _relativeURL,
  _ID,
  image,
  link,
  twitter,
  telegram,
  text,
  _body,
  linkedin,
  weight,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card team-card" data-weight={weight}>
      <figure className="card-avatar">
        <Img src={generateUrl(image)} className="card-avatar-img" />
      </figure>
      <div className="card-data flex-column">
        <CardTitle title={text.title} />
        <h5 className="team-card-sub-title">{text.subTitle}</h5>
        <CardLinks
          link={link}
          twitter={twitter}
          telegram={telegram}
          linkedin={linkedin}
          section="delegator"
          generateUrl={generateUrl}
        />

        <section className="card-text">{_body}</section>
      </div>
    </div>
  );
};

export default TeamMember;
