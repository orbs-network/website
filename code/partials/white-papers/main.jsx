import React from "react";

const Main = ({ whitePapersList, pageHaeder }) => {
  return (
    <main className="white-papers">
      {pageHaeder}
      <div className=" main-grid">{whitePapersList}</div>
    </main>
  );
};

export default Main;
