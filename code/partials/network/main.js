import React from "react";

const Main = ({ pageHeader, content, linkBtn }) => {
  return (
    <main className="network">
      {pageHeader}
      {content}
      {linkBtn}
    </main>
  );
};

export default Main;
