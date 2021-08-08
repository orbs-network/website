import React from "react";

const Guardian = ({ name, website, location, countryCode, lat, lng }) => {
  return (
    <div
      className="card guardian-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{name}</h3>
      <a href={website}>{website}</a>
      <h3>{location}</h3>
    </div>
  );
};

export default Guardian;
