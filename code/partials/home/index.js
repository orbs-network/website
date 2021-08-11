import React from "react";
import { handleUrl } from "../../util/link";

const Main = ({ socials, mobile_btn, title, cards, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <main className="home">
      {cards}
      <div className="home-flex main-grid flex-start">
        <div className="home-flex-left flex-column">
          <section />
          <div className="home-flex-left-text"> {title}</div>
          {mobile_btn}
          {socials}
        </div>

        <div className="globe-container">
          <div id="globeArea"></div>
          <div id="guardianDetails"></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
