import React from "react";

const PageContent = ({ expendingSection, contractText, boxes }) => {
  return (
    <div className="smart-contracts-content main-grid">
      {expendingSection}
      {contractText}
      {boxes}
    </div>
  );
};

export default PageContent;
