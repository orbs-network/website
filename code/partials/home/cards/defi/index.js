import React from "react";

const Defi = ({
  ecosystem,
  application,
  title,
  link,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card defi-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{ecosystem}</h3>
      <h3>{application}</h3>
      <h3>{title}</h3>
      <a href={link}>Link</a>
    </div>
  );
};

export default Defi;
