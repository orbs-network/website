import React from "react";

const Team = (props) => {
  const {
    title,
    header,
    teamList,
    footer,
    script,
    _relativeURL,
    _ID,
    teamText,
    careers,
    _storeSet,
    _store,
  } = props;

  _storeSet({ section: "team" });

  return (
    <html style={{ background: "#171819" }}>
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
      <body className="team grid-page">
        <header className="main-header">{header}</header>
        <main>
          <div className="team-flex flex-between">
            {teamText}
            {teamList}
          </div>
          {careers}
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
