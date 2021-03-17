import React from "react";
const GlobeContainer = ({ cards }) => {
  return (
    <div className="home-globe">
      <div id="globeViz"></div>
      {cards}
    </div>
  );
};

export default GlobeContainer;
