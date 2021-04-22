import React from "react";
import GlobeLoader from "./globeLoader";

const Main = ({ cards, pageText }) => {
  return (
    <main className="home">
      {/* <GlobeLoader /> */}
      <div className="main-grid">
        {cards}
        {pageText}
      </div>
    </main>
  );
};

export default Main;
