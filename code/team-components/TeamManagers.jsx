import React, { Component } from "react";
import PropTypes from "prop-types";
import { managers } from "./data/managers";
import Teammate from "./common/Teammate";

class TeamManegers extends Component {
  render() {
    const { generteUrl } = this.props;
    return (
      <section className="team-list-section team-list-section-managers">
        <ul className="team-list managers-list">
          {managers.map((manager) => {
            return <Teammate data={manager} generteUrl={generteUrl} />;
          })}
        </ul>
        <figure className="team-list-img">
          <img src={generteUrl("../assets/img/team/management.jpg")} />
        </figure>
      </section>
    );
  }
}
TeamManegers.getInitialProps = async function (props) {
  const generteUrl = await FetchMyDataFromSomewhere(props._ID);
  return { generteUrl };
};
export default TeamManegers;
