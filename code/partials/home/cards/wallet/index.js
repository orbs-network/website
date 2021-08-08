import React from "react";

const Wallet = ({
  application,
  supportedDevices,
  link,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card wallet-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{application}</h3>
      <h3>{supportedDevices}</h3>
      <a href={link}>Link</a>
    </div>
  );
};

export default Wallet;
