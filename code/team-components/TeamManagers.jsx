import React, { Component } from "react";
import PropTypes from "prop-types";
import { managers } from "./data/managers";
import Teammate from "./common/Teammate";

class TeamManegers extends Component {
  render() {
    return (
      <section className="team-list-section team-list-section-managers">
        <ul className="team-list managers-list">
          {managers.map((manager) => {
            return <Teammate data={manager} />;
          })}
        </ul>
        <figure className="team-list-img">
          <img src="../assets/img/team/management.jpg" />
        </figure>
      </section>
    );
  }
}

export default TeamManegers;
