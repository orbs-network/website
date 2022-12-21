import React from "react";

const Main = ({ blogs, _body }) => {
  return (
    <main className="blog page">
      <div className="header">{_body}</div>

      <div className="blog-content">
        <div className="main-grid">
          <ul className="blog-list">{blogs}</ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
