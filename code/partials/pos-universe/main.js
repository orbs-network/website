import React from "react";
import MainGrid from "../shared/MainGrid";

const Main = ({ _body, link, firstFlex, secondFlex, thirdFlex, link2 }) => {
  return (
    <main className="universe page">
      <header className="header universe-header">{_body}</header>
      {firstFlex}
      {secondFlex}
      <MainGrid>{thirdFlex}</MainGrid>
      <div className="universe-bottom-links">
        {link}
        {link2}
      </div>
    </main>
  );
};

export default Main;
