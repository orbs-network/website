import React from "react";

const Main = ({ pageHeader, link, firstFlex, secondFlex, thirdFlex, link2 }) => {
  return (
    <main className="universe">
      {pageHeader}
      <div className="main-grid">
        {firstFlex}
        {secondFlex}
        {thirdFlex}
      </div>
      <div>
      {link}
      {link2}
      </div>
    </main>
  );
};

export default Main;
