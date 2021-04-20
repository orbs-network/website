import React from "react";

const PageContent = ({ firstFlex, secondFlex, thirdFlex }) => {
  return (
    <div className="main-grid">
      {firstFlex}
      {secondFlex}

      {thirdFlex}
    </div>
  );
};

export default PageContent;
