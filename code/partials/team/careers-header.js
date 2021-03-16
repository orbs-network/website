import React from "react";
const CareersHeader = ({ _body, title }) => {
  return (
    <div className="team-careers-header flex-column">
      <h3 className="team-careers-header-title">{title}</h3>
      <section className="team-careers-header-sub-title">{_body}</section>
    </div>
  );
};

export default CareersHeader;
