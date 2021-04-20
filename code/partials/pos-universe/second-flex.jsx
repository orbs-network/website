import React from "react";

const SecondFlex = ({ leftText, images, bottomText }) => {
  return (
    <div className="universe-second-flex">
      <div className="flex-start">
        {leftText}
        {images}
      </div>
      {bottomText}
    </div>
  );
};

export default SecondFlex;
