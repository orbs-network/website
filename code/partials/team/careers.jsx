import React from "react";
import CareerTags from "./career-tags";

const Careers = ({ header, careers }) => {
  return (
    <div className="team-careers">
      <section className="team-careers-header-wrapper">
        {header}
        <CareerTags careers={careers} />
      </section>
      {careers &&
        careers.map((career) => {
          return (
            <section className="team-careers-section">
              <aside className="indicator" id={`${career.title}`}></aside>
              <h5 className="team-careers-section-title">{career.title}</h5>
              <ul>{career.list}</ul>
            </section>
          );
        })}
    </div>
  );
};

export default Careers;
