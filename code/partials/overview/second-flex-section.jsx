import React from "react";

const SecondFlexSection = ({ expendableList, imagesGrid, text }) => {
  return (
    <div className="overview-second-flex">
      {expendableList}
      {imagesGrid}
      {text}
    </div>
  );
};

export default SecondFlexSection;
