import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import Img from "../../shared/Img";
import InnerLinks from "../../shared/inner-links";
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
      className="team-member flex-column list-item"
      data-aos={animations.fadeIn}
      style={{
        background: `url('${generateUrl(avatar)}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MemberPopup {...props} />
      <div className="team-member-details">
        <p className="team-member-details-name text-overflow">{name}</p>
        <p className="team-member-details-role">{role}</p>
        <InnerLinks
          generateUrl={generateUrl}
          section={images.team}
          links={linksProps}
        />
      </div>
    </div>
  );
};

export default Member;
