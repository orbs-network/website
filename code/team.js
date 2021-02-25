import React from "react";
import { locale } from "../locales";
import Socials from "./common-components/socials";
import TeamEmployees from "./team-components/TeamEmployees";
import TeamManegers from "./team-components/TeamManagers";

const Team = ({ _relativeURL, _ID, language, management, employees }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const text = locale[language].team;
  return (
    <html>
      <head>
        <script
          type="module"
          src={generateUrl("../assets/js/team/index.js")}
        ></script>
      </head>
      <body className="team-page grid-page">
        <div className="team flex-between base-grid">
          <section className="team-description small-section">
            <div className="team-description-top">
              <h1>{text.title}</h1>
              <p>{text.subTtitle}</p>
            </div>
            <div className="team-description-hiring flex-start">
              <p className="one-line">{text.always}</p>
              <a href="/">{text.hiring}</a>
            </div>
            <Socials generateUrl={generateUrl} />
          </section>
          <div className="team-lists flex-column big-section">
            <TeamManegers generateUrl={generateUrl} management={management} />
            <TeamEmployees generateUrl={generateUrl} employees={employees} />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Team;
