import React from "react";

const TeamTop = ({ list, slider }) => {
  return (
    <section className="team-list-flex team-list-flex-top flex-start">
      <ul className="flex-start">{list}</ul>
      {slider}
    </section>
  );
};

export default TeamTop;
