import React from "react";

const Team1 = ({ list, slider }) => {
  return (
    <section className="team-list-managers flex-start">
      <ul className="team-list-managers-list flex-start">{list}</ul>
      {slider}
    </section>
  );
};

export default Team1;
