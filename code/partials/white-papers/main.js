import React from "react";

const Main = ({ whitePapersList, _body }) => {
  return (
    <main className="white-papers">
      <div className="header">{_body}</div>
      <div className=" main-grid">{whitePapersList}</div>
    </main>
  );
};

export default Main;
