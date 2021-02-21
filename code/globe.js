import React from "react";
import en from "../assets/globe/language/en.json";
import { ContributorCard } from "./globe-components/cards/ContributorCard";
import { DelegatorCard } from "./globe-components/cards/DelegatorCard";
import { GuardianCard } from "./globe-components/cards/GuardianCard";
import { Flags } from "./navbar-components/flags";
import { Socials } from "./common-components/socials";
import { Navbar } from "./navbar";
const Globe = ({ title }) => (
  <html lang="en">
    <head>
      <script src="//unpkg.com/globe.gl"></script>
      <script src="//unpkg.com/three"></script>
      <script src="../assets/js/index.js"></script>
      <script src="../assets/globe/js/consts.js"></script>
      <script src="../assets/globe/js/config.js"></script>
      <script src="../assets/globe/text/en.js"></script>
      <script src="../assets/globe/ui-data/ui-data.js"></script>
      <script src="../assets/globe/js/index.js"></script>
      <script src="../assets/globe/js/globe.js"></script>
      <script src="../assets/globe/js/view.js"></script>
      <script src="../assets/globe/js/card.js"></script>
      <link rel="stylesheet" href="../assets/globe/style/cards/main.css" />
      <link rel="stylesheet" href="../assets/globe/style/cards/guardian.css" />
      <link
        rel="stylesheet"
        href="../assets/globe/style/cards/contributor.css"
      />
      <link rel="stylesheet" href="../assets/globe/style/cards/delegator.css" />

      <link rel="stylesheet" href="../assets/globe/style/style.css" />
      <link rel="stylesheet" href="../assets/globe/style/point-container.css" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ORBS</title>
    </head>

    <body>
      <div class="globe-loader">
        <p>Loading...</p>
      </div>
      <div class="globe-wrapper">
        <div id="globeViz"></div>
        <ContributorCard />
        <DelegatorCard />
        <GuardianCard />
      </div>

      <div class="page-wrapper">
        <Navbar />
        <div class="page-content zIndex">
          <section class="page-content-top">
            <img src="../assets/globe/assets/white-logo.png" alt="" />
            <p>ORBS</p>
          </section>
          <section class="page-content-desc">
            <h3>{en.the}</h3>
            <h3>{en.future}</h3>
            <p>{en.of_blockchain}</p>
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
          <Socials />
        </footer>
      </div>
    </body>
  </html>
);

export default Globe;
