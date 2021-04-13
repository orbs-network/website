import React from "react";
import { colors } from "../../assets/js/consts/consts";

const Team = (props) => {
  const {
    title,
    header,
    teamList,
    footer,
    script,
    _relativeURL,
    _ID,
    teamTextHeader,
    teamTextLinks,
    socials,
  } = props;

  return (
    <html style={{ background: colors.main }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/index.css`, _ID)}
        />
      </head>
      <body className="team">
        {header}
        <main className="page-grid">
          <div className="team-flex flex-between">
            <div className="team-side-text sticky-section">
              {teamTextHeader}
              {teamTextLinks}
              {socials}
            </div>

            {teamList}
          </div>
        </main>
        {footer}
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
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

export default Team;
