import React from "react";

const Boxes = ({ title, list }) => {
  return (
    <div className="smart-contracts-boxes">
      <h4 className="smart-contracts-boxes-title">{title}</h4>
      <div className="flex-start smart-contracts-boxes-flex"> {list}</div>
    </div>
  );
};

export default Boxes;
