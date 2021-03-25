import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";
import CardLinks from "../../home/cards/card-links";

const MemberPopup = (props) => {
  const {
    _relativeURL,
    _ID,
    avatar,
    link,
    twitter,
    telegram,
    _body,
    linkedin,
    name,
    role,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const linksProps = { telegram, linkedin, twitter };

  return (
    <div className="team-member-popup flex-center">
      <secrtion className="team-member-popup-overlay"></secrtion>
      <div className="team-member-popup-c flex-between">
        <button className="team-member-popup-c-close">
          <Img src={images.common.close} />
        </button>
        <figure className="team-member-popup-c-avatar">
          <Img src={generateUrl(avatar)} />
        </figure>
        <div className="team-member-popup-c-details flex-column">
          <h3 className="team-member-popup-c-name">{name}</h3>
          <h3 className="team-member-popup-c-role">{role}</h3>
          <CardLinks
            links={linksProps}
            section="team"
            generateUrl={generateUrl}
          />

          <section className="team-member-popup-c-text">{_body}</section>
        </div>
      </div>
    </div>
  );
};

export default MemberPopup;
