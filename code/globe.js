import React from "react";
import ContributorCard from "./globe-components/cards/ContributorCard";
import DelegatorCard from "./globe-components/cards/DelegatorCard";
import GuardianCard from "./globe-components/cards/GuardianCard";
import Socials from "./common-components/socials";
import Navbar from "./navbar";
import en from "./text/en.json";
import GlobeLoader from "./globe-components/globeLoader";

const Globe = ({ title, _relativeURL, _ID }) => {
  const generteUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src={generteUrl("../assets/js/globe/globe.js")}
        ></script>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ORBS</title>
      </head>

      <body>
        <GlobeLoader />
        <div class="globe-wrapper">
          <div id="globeViz"></div>
          <ContributorCard generteUrl={generteUrl} />
          <DelegatorCard generteUrl={generteUrl} />
          <GuardianCard />
        </div>

        <div class="page-wrapper">
          <Navbar generteUrl={generteUrl} />
          <div class="page-content zIndex">
            <section class="page-content-top">
              <img
                src={generteUrl("../assets/globe/assets/white-logo.png")}
                alt=""
              />
              <p>ORBS</p>
            </section>
            <section class="page-content-desc">
              <h3>{en.globe.the}</h3>
              <h3>{en.globe.future}</h3>
              <p>{en.globe.of_blockchain}</p>
            </section>
          </div>
          <div class="overlay"></div>
          <div class="btns-container">
            <ul className="btns-container-list"></ul>
            <div className="addImgInput">
              <p>+</p>
              <input type="file" placeholder="+" />
            </div>
          </div>

          <footer class="zIndex">
            <Socials generteUrl={generteUrl} />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Globe;
