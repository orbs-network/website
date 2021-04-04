import React from "react";
import { colors } from "../../assets/js/consts/consts";
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
    <html style={{ background: colors.main }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://chancejs.com/chance.min.js"></script>
        <script src="//unpkg.com/three"></script>
        <script src="//unpkg.com/globe.gl"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js"></script>

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

        {header}
        <main>
          {cards}
          {pageText}
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
