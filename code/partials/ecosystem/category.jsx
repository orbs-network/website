import React from "react";

const Category = ({ title, _body }) => {
  return (
    <div className="ecosystem-category">
      <h5 className="ecosystem-category-title">{title}</h5>
      <div className="ecosystem-category-list flex-start">{_body}</div>
    </div>
  );
};

export default Category;
