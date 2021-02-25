import React, { Component } from "react";
import Teammate from "./common/Teammate";
import { images } from "../../assets/js/images";

class TeamManegers extends Component {
  render() {
    const { generateUrl, management } = this.props;
    return (
      <section className="team-list-section team-list-section-managers">
        <ul className="team-list managers-list">
          {management.map((manager) => {
            return <Teammate data={manager} generateUrl={generateUrl} />;
          })}
        </ul>
        <figure className="team-list-img">
          <img src={generateUrl(images.team.management)} />
        </figure>
      </section>
    );
  }
}
TeamManegers.getInitialProps = async function (props) {
  const { generateUrl, management } = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl, management };
};
export default TeamManegers;
