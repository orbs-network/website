import React from "react";

const Main = ({ pageHeader, tags, blogs }) => {
  return (
    <main className="blog page-padding-top">
      {pageHeader}

      <div className="blog-content">
        <div className="main-grid">{blogs}</div>
      </div>
    </main>
  );
};

export default Main;
