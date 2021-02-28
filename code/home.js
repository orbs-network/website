import React from "react";
import ContributorCard from "./globe-components/cards/ContributorCard";
import DelegatorCard from "./globe-components/cards/DelegatorCard";
import GuardianCard from "./globe-components/cards/GuardianCard";
import Socials from "./common-components/socials";
import GlobeLoader from "./globe-components/globeLoader";
import { images } from "../assets/js/images";
import { locale } from "../locales";

const Home = ({ _relativeURL, _ID, language, Marked }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const text = locale[language].globe;
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src={generateUrl("../assets/js/globe/globe.js")}
        ></script>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ORBS</title>
      </head>

      <body className="home-page">
        <GlobeLoader />
        <div class="globe-wrapper">
          <div id="globeViz"></div>
          <ContributorCard generateUrl={generateUrl} />
          <DelegatorCard generateUrl={generateUrl} />
          <GuardianCard />
        </div>

        <div class="content-wrapper grid-page">
          <div class="page-content zIndex">
            <section class="page-content-top">
              <img src={generateUrl(images.globe.logo)} alt="" />
              <p>ORBS</p>
            </section>
            <section class="page-content-desc">
              <h3>{text.the}</h3>
              <h3>{text.future}</h3>
              <p>{text.of_blockchain}</p>
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
            <Socials generateUrl={generateUrl} />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Home;
