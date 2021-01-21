import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Globe = ({ title }) => (
  <html lang="en">
    <head>
      <script src="../assets/globe/js/config.js"></script>
      <script src="../assets/globe/text/en.js"></script>

      <script src="../assets/globe/ui-data/ui-data.js"></script>
      <script src="//unpkg.com/three"></script>
      <script src="//unpkg.com/globe.gl"></script>
      <script src="../assets/globe/js/globe.js"></script>
      <script src="../assets/globe/js/view.js"></script>

      <link rel="stylesheet" href="../assets/globe/style/reset.css" />
      <link rel="stylesheet" href="../assets/globe/style/style.css" />
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
        <div class="point-container">
          <h3 class="point-container-name text-overflow"></h3>
          <span class="flex-start">
            <p class="point-container-amount"></p>
            <small>orbs</small>
          </span>
          <p class="point-container-text text-overflow"></p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            class="point-container-link text-overflow"
          ></a>
        </div>
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
              <p>subscribe for updates</p>
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
            <h3>the</h3>
            <h3>future</h3>
            <p>of blockchaim</p>
          </section>
        </div>

        <div class="overlay"></div>
        <div class="btns-container"></div>

        <footer class="zIndex">
          <ul class="socials"></ul>
        </footer>
      </div>
    </body>
  </html>
);

export default Globe;
