import React from "react";

const Category = ({ title, items, id }) => {
  return (
    <div className="ecosystem-category" id={id}>
      <div className="ecosystem-category-title">
        <h5>{title}</h5>
      </div>
      <div className="ecosystem-category-list flex-start">{items}</div>
    </div>
  );
};

export default Category;
