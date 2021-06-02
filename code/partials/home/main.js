import React from "react";
import Img from "../shared/Img";

const Main = ({
  globe_image,
  _relativeURL,
  _ID,
  socials,
  mobile_btn,
  title,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <main className="home">
      <div className="home-flex main-grid flex-start">
        <div className="home-flex-left flex-column">
          <section />
          <div className="home-flex-left-text"> {title}</div>
          {mobile_btn}
          {socials}
        </div>

        <Img
          src={generateUrl(globe_image)}
          alt="earth"
          className="home-globe-image home-flex-right"
        />
      </div>
    </main>
  );
};

export default Main;
