import React, { Component } from "react";
import { randomImgUrl } from "../helpers/image";
import DoubleBanner from "./common/DoubleBanner";
import SingleBanner from "./common/SingleBanner";
import Teammate from "./common/Teammate";

class TeamEmployees extends Component {
  render() {
    const { generateUrl, employees } = this.props;
    const getEmployeesByIndex = (list, from, to) => {
      return list.map((employee, index) => {
        if (from <= index && index <= to) {
          return <Teammate data={employee} generateUrl={generateUrl} />;
        }
        return null;
      });
    };

    return (
      <section className="team-list-section team-list-section-employees">
        <h4>Our Team Title</h4>
        <div className="team-list team-list-employees">
          {getEmployeesByIndex(employees, 0, 3)}
          <SingleBanner url={randomImgUrl()} />
          {getEmployeesByIndex(employees, 4, 7)}
          <DoubleBanner url={randomImgUrl()} url={randomImgUrl()} />
          {getEmployeesByIndex(employees, 8, 15)}
          <SingleBanner url={randomImgUrl()} />
          {getEmployeesByIndex(employees, 16, employees.length)}
        </div>
      </section>
    );
  }
}
TeamEmployees.getInitialProps = async function (props) {
  const { generateUrl, employees } = await FetchMyDataFromSomewhere(props._ID);
  return { generateUrl, employees };
};
export default TeamEmployees;
