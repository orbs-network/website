import React from "react";

const SecondFlex = ({ leftText, images, bottomText }) => {
  return (
    <div className="universe-second-flex">
      <div className="flex-start universe-second-flex-container">
        {leftText}
        {images}
      </div>
      {bottomText}
    </div>
  );
};

export default SecondFlex;
