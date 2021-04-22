import React from "react";

const Main = ({ teamList, sideContent }) => {
  return (
    <main className="team">
      <div className="team-content-wrapper main-grid">
        {sideContent}
        {teamList}
      </div>
    </main>
  );
};

export default Main;
