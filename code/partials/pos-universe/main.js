import React from "react";

const Main = ({ pageHeader, link, firstFlex, secondFlex, thirdFlex }) => {
  return (
    <main className="universe">
      {pageHeader}
      <div className="main-grid">
        {firstFlex}
        {secondFlex}
        {thirdFlex}
      </div>
      {link}
    </main>
  );
};

export default Main;
