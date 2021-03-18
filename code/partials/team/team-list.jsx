import React from "react";

const TeamList = ({ management, employees }) => {
  return (
    <div className="team-lists flex-column">
      {management}
      {employees}
    </div>
  );
};

export default TeamList;
