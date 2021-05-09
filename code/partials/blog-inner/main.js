import React from "react";

const Main = (props) => {
  const { blog, bottomSection } = props;

  return (
    <main className="single-blog page-padding-top">
      {blog}
      {bottomSection}
    </main>
  );
};

export default Main;
