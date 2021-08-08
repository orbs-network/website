import React from "react";
import { images } from "../../../../../assets/js/images";
import { handleUrl } from "../../../../util/link";

const Social = ({ name, url, _relativeURL, _ID }) => {
  return name ? (
    <a href={url}>
      <img src={handleUrl(images.socials[name], _relativeURL, _ID)} />
    </a>
  ) : null;
};

const Contributor = ({
  name,
  github,
  twitter,
  linkedin,
  interests,
  _relativeURL,
  _ID,
  countryCode,
  lat,
  lng,
}) => {
  return (
    <div
      className="card contributor-card"
      data-countryCode={countryCode}
      data-lng={lng}
      data-lat={lat}
    >
      <h3>{name}</h3>
      <ul className="contributor-card-interests">
        {interests &&
          interests.map((interest, key) => {
            return <li key={key}>{interest}</li>;
          })}
      </ul>
      <div className="contributor-card-socials">
        <Social
          name="github"
          url={github}
          _relativeURL={_relativeURL}
          _ID={_ID}
        />
        <Social
          name="twitter"
          url={twitter}
          _relativeURL={_relativeURL}
          _ID={_ID}
        />
        <Social
          name="linkedin"
          url={linkedin}
          _relativeURL={_relativeURL}
          _ID={_ID}
        />
      </div>
    </div>
  );
};

export default Contributor;
