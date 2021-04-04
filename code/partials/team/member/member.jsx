import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import Img from "../../common/Img";
import InnerLinks from "../../common/inner-links";
import MemberPopup from "./member-popup";

const Member = (props) => {
  const {
    avatar,
    _relativeURL,
    _ID,
    role,
    name,
    telegram,
    linkedin,
    twitter,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const linksProps = { telegram, linkedin, twitter };

  return (
    <div
      className="team-member flex-column"
      data-aos={animations.fadeTop}
      style={{
        background: `url('${generateUrl(avatar)}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MemberPopup {...props} />
      <div className="team-member-details">
        <p className="team-member-name text-overflow">{name}</p>
        <p className="team-member-role">{role}</p>
        <section className="team-member-socials flex-start">
          <InnerLinks
            generateUrl={generateUrl}
            section={images.team}
            links={linksProps}
          />
          <figure className="team-member-border" />
          <Img
            src={generateUrl(images.team.arrow)}
            className="team-member-arrow"
          />
        </section>
      </div>
    </div>
  );
};

export default Member;
