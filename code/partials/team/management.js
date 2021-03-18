import React from "react";

const Management = ({ management, slider, text }) => {
  return (
    <section className="team-list-managers flex-start">
      {text.topText && <h5 className="team-list-title">{text.topText}</h5>}
      <ul className="team-list-managers-list flex-start">{management}</ul>
      {slider}
    </section>
  );
};

export default Management;
