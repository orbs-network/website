import React from "react";

const Delegator = ({ name, countryCode, lng, lat }) => {
  return (
    <div
      className="data delegator-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Delegator;
