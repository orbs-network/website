import React from "react";

const TeamList = ({ team1, team2 }) => {
  return (
    <div className="team-lists flex-column">
      {team1}
      {team2}
    </div>
  );
};

export default TeamList;
