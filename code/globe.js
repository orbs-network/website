import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
import en from "../assets/globe/language/en.json";
import { GuardianTooltip } from "./globe-components/GuardianTooltip";

const Globe = ({ title }) => (
  <html lang="en">
    <head>
      <script src="//unpkg.com/globe.gl"></script>
      <script src="//unpkg.com/three"></script>
      <script src="../assets/globe/js/config.js"></script>
      <script src="../assets/globe/text/en.js"></script>
      <script src="../assets/globe/ui-data/ui-data.js"></script>
      <script src="../assets/globe/js/index.js"></script>
      <script src="../assets/globe/js/globe.js"></script>
      <script src="../assets/globe/js/view.js"></script>
      <script src="../assets/globe/js/guardian-tooltip.js"></script>

      <link rel="stylesheet" href="../assets/globe/style/reset.css" />
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
        {<GuardianTooltip />}
        <div id="globeViz"></div>
      </div>

      <div class="page-wrapper">
        <nav class="zIndex">
          <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <section class="navbar-flags">
            <span class="flex">
              <p>+</p>
              <p>{en.subscribe_to_updates}</p>
            </span>
            <ul class="navbar-flags-list"></ul>
          </section>
        </nav>
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
          <ul class="socials"></ul>
        </footer>
      </div>
    </body>
  </html>
);

export default Globe;
