import React from "react";

const Boxes = ({ list, title }) => {
  return (
    <div className="boxes">
      {title && <h5 className="boxes-title">{title}</h5>}
      <div className="boxes-list flex-start"> {list}</div>
    </div>
  );
};

export default Boxes;
