import React from "react";
import { Socials } from "./common-components/socials";
import Navbar from "./navbar";
import TeamEmployees from "./team-components/TeamEmployees";
import TeamManegers from "./team-components/TeamManagers";
import en from "./text/en.json";
const Team = ({ title, _relativeURL, _ID }) => {
  const generteUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <script
          type="module"
          src={generteUrl("../assets/js/team/index.js")}
        ></script>
      </head>
      <body className="team-page">
        <div className="team-content-wrapper flex-between">
          <Navbar generteUrl={generteUrl} />
          <section className="team-description">
            <div className="team-description-top">
              <h1>{en.team.title}</h1>
              <p>{en.team.subTtitle}</p>
            </div>
            <div className="team-description-hiring flex-start">
              <p className="one-line">{en.team.always}</p>
              <a href="/">{en.team.hiring}</a>
            </div>
            <Socials />
          </section>
          <div className="team-lists flex-column">
            <TeamManegers />
            <TeamEmployees />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Team;
