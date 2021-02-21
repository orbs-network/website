import React from "react";
import { Socials } from "./common-components/socials";
import { Navbar } from "./navbar";

const Team = ({ title }) => {
  return (
    <html>
      <head>
        <script src="../assets/js/index.js"></script>
        <script src="../assets/team/js/index.js"></script>
        <script src="../assets/team/data/managers.js"></script>
        <script src="../assets/team/data/employees.js"></script>
        <script src="../assets/team/js/view.js"></script>
        <link rel="stylesheet" href="../assets/css/reset.css" />

        <link rel="stylesheet" href="../assets/team/style/index.css" />
      </head>
      <body className="team-page">
        <Navbar />
        <button className="team-btn"></button>
        <div className="team-content-wrapper flex-between">
          <section className="team-description">
            <div className="team-description-top">
              <h1>we are always there to meet your needs.</h1>
              <p>
                Our team consists of creators who have experience making Magic
                for various companies in the blockchain fields. it is a value
                that must be held by each of our team members.
              </p>
            </div>
            <div className="team-description-hiring flex-start">
              <p className="one-line">We are ALWAYS</p>
              <a href="/">Hiring!</a>
            </div>
            <Socials />
          </section>
          <div className="team-lists flex-column">
            <section className="team-list-section team-list-section-managers">
              <ul className="team-list managers-list"></ul>
              <figure className="team-list-img">
                <img src="../assets/img/team/management.jpg" />
              </figure>
            </section>
            <section className="team-list-section team-list-section-employees">
              <h4>Our Team Title</h4>
              <ul className="team-list employees-list"></ul>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Team;
