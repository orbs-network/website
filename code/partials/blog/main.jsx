import React from "react";

const Main = ({ pageHeader, tags, blogs }) => {
  return (
    <main className="blog page-padding-top">
      {pageHeader}
      <div className="main-grid">
        {tags}
        {blogs}
      </div>
    </main>
  );
};

export default Main;
