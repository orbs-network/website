import React from "react";

const Main = ({ _body, id = "" }) => {
  return (
    <div className="policy page main-grid page-padding-top" id={id}>
      {_body}
    </div>
  );
};

export default Main;
