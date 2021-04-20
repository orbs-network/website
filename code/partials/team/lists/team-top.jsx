import React from "react";

const Team1 = ({ list, slider }) => {
  return (
    <section className="team-list-group team-list-top flex-start">
      <ul className="flex-start">{list}</ul>
      {slider}
    </section>
  );
};

export default Team1;
