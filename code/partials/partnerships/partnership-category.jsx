import React from "react";

const PartnershipCategory = ({ title, _body }) => {
  return (
    <div className="partnerships-category">
      <h5 className="partnerships-category-title">{title}</h5>
      <div className="partnerships-category-list flex-start">{_body}</div>
    </div>
  );
};

export default PartnershipCategory;
