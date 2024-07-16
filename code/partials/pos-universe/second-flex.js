import React from "react";
import MainGrid from "../shared/MainGrid";

const SecondFlex = ({ leftText, images, bottomText }) => {
  return (
    <div className="universe-second-flex">
      <MainGrid>
        <div className="flex-start universe-second-flex-container">
          {leftText}
          {images}
        </div>
        <div className="universe-second-flex-bottom">{bottomText}</div>
      </MainGrid>
    </div>
  );
};

export default SecondFlex;
