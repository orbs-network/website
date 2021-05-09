import React from "react";

const TeamList = ({ teamTop, teamBottom, title }) => {
  return (
    <div className="team-list flex-column">
      <h5 className="team-list-title">{title}</h5>
      {teamTop}
      {teamBottom}
    </div>
  );
};

export default TeamList;
