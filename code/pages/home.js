import PropTypes from "prop-types";
import React from "react";
import GlobeLoader from "../partials/home/globeLoader";

const Home = ({
  title,
  header,
  cards,
  script,
  _relativeURL,
  _ID,
  pageText,
}) => {
  return (
    <html style={{ background: "#171819" }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://chancejs.com/chance.min.js"></script>
        <script src="//unpkg.com/three"></script>

        <script src="//unpkg.com/globe.gl"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/index.css`, _ID)}
        />
      </head>
      <body className="home-page">
        <GlobeLoader />
        {cards}
        <main>
          <header className="main-header">{header}</header>
          {pageText}
          <div className="home-globe">
            <div id="globeViz"></div>
          </div>
        </main>
        {script != undefined ? (
          <script
            type="module"
            src={_relativeURL(`/assets/js/${script}.js`, _ID)}
          />
        ) : null}
      </body>
    </html>
  );
};

export default Home;
