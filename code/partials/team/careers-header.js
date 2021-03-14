import React from "react";
const CareersHeader = ({ _body, title, tags }) => {
  return (
    <div className="team-careers-header flex-column" data-aos="fade-up">
      <h3 className="team-careers-header-title">{title}</h3>
      <section className="team-careers-header-sub-title">{_body}</section>
      <ul className="team-careers-header-tags flex-center">
        {tags.map((tag) => {
          return <li className="flex-center"> {tag}</li>;
        })}
      </ul>
    </div>
  );
};

export default CareersHeader;
