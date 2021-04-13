import React from "react";

const TeamList = ({ team1, team2, title }) => {
  return (
    <div className="team-lists flex-column">
      <h5 className="team-lists-title">{title}</h5>
      {team1}
      {team2}
    </div>
  );
};

export default TeamList;
