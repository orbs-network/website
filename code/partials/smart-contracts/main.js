import React from "react";

const Main = ({
  pageHeader,
  expendingSection,
  contractText,
  boxes,
  linkBack,
}) => {
  return (
    <main className="smart-contracts">
      {pageHeader}
      <div className="smart-contracts-content main-grid">
        {expendingSection}
        {contractText}
        {boxes}
      </div>
      {linkBack}
    </main>
  );
};

export default Main;
