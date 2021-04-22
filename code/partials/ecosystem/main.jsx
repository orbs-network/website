import React from "react";
import Categories from "./categories";

const Main = (props) => {
  const { pageTitle } = props;
  return (
    <main className="ecosystem main-grid page-padding-top">
      {pageTitle}
      <Categories {...props} />
    </main>
  );
};

export default Main;
