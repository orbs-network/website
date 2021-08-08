import React from "react";

const MemberCard = ({
  name,
  position,
  linkedin,
  hexaFoundation,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card member-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{name}</h3>
      <h3>{position}</h3>
      {linkedin && <a href={linkedin}>{linkedin}</a>}
      {hexaFoundation && <a href={hexaFoundation}>{hexaFoundation}</a>}
    </div>
  );
};

export default MemberCard;
