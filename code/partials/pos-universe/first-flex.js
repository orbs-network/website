import React from "react";
import MainGrid from "../shared/MainGrid";

const TopSection = ({ sections }) => {
  return (
    <div className="flex-start universe-first-flex">
      <MainGrid> {sections}</MainGrid>
    </div>
  );
};

export default TopSection;
