import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";
import InnerLinks from "../../shared/inner-links";

const MemberPopup = (props) => {
  const {
    _relativeURL,
    _ID,
    avatar,
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
        <button className="team-member-popup-c-close" aria-label="Close">
          <Img src={images.common.close} alt="close" />
        </button>
        <figure className="team-member-popup-c-avatar">
          <Img src={generateUrl(avatar)} alt="team-member-avatar" />
        </figure>
        <div className="team-member-popup-c-details flex-column">
          <h3 className="team-member-popup-c-name">{name}</h3>
          <h3 className="team-member-popup-c-role">{role}</h3>
          <InnerLinks
            generateUrl={generateUrl}
            section={images.team}
            links={linksProps}
          />

          <section className="team-member-popup-c-text">{_body}</section>
        </div>
      </div>
    </div>
  );
};

export default MemberPopup;
