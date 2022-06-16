import React from "react";
import MainGrid from "../shared/MainGrid";
import Categories from "./categories";

const Main = (props) => {
  return (
    <main className="ecosystem">
      <MainGrid>
        <div className="header">{props._body}</div>
        <Categories {...props} />
      </MainGrid>
    </main>
  );
};

export default Main;
