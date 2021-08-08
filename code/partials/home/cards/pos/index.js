import React from "react";

const Pos = ({ title, description, link, lng, lat, countryCode }) => {
  return (
    <div
      className="card pos-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{title}</h3>
      <h3>{description}</h3>
      <a href={link}>Link</a>
    </div>
  );
};

export default Pos;
