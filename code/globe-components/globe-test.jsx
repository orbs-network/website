import React from "react";
import Globe from "react-globe.gl";
import { points } from "../../assets/js/globe/points";

const GlobeTest = () => {
  return (
    <div>
      <Globe pointsData={points} />
    </div>
  );
};

export default GlobeTest;
