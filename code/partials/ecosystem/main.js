import React from "react";
import Categories from "./categories";

const Main = (props) => {
  const { page_title } = props;
  return (
    <main className="ecosystem main-grid page-padding-top">
      {page_title}
      <Categories {...props} />
    </main>
  );
};

export default Main;
