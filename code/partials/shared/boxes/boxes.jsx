import React from "react";

const Boxes = ({ list, title }) => {
  return (
    <div className="boxes">
      {title && <h5 className="boxes-title">{title}</h5>}
      <ul className="boxes-list flex-start"> {list}</ul>
    </div>
  );
};

export default Boxes;
