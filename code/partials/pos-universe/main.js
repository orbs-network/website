import React from "react";
import MainGrid from "../shared/MainGrid";

const Main = ({
  _body,
  link,
  firstFlex,
  secondFlex,
  thirdFlex,
  link2,
  subText,
}) => {
  return (
    <main className="universe">
      <header className="header universe-header">{_body}</header>
      <MainGrid>
        <div className="universe-sub-text">{subText}</div>
      </MainGrid>

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
