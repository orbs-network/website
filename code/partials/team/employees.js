import React from "react";
import DoubleBanner from "./double-banner";
import SingleBanner from "./single-banner";
import Teammate from "./teammate";

const Employees = ({
  employees,
  _relativeURL,
  _ID,
  banner1,
  banner2,
  banner3,
  banner4,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
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
        <SingleBanner url={generateUrl(banner1)} />
        {getEmployeesByIndex(employees, 4, 7)}
        <DoubleBanner url={generateUrl(banner2)} url2={generateUrl(banner3)} />
        {getEmployeesByIndex(employees, 8, 15)}
        <SingleBanner url={generateUrl(banner4)} />
        {getEmployeesByIndex(employees, 16, employees.length)}
      </div>
    </section>
  );
};

export default Employees;
