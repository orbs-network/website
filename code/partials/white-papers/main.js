import React from "react";
import MainGrid from "../shared/MainGrid";

const Main = ({ whitePapersList, _body }) => {
  return (
    <main className="white-papers page">
      <MainGrid>
        <div className="header">{_body}</div>
        {whitePapersList}
      </MainGrid>
    </main>
  );
};

export default Main;
