import React from "react";

function Selectbox({ list, property, _body }) {
  return (
    <div className="selectbox" data-key={property}>
      <div className="selectbox-title">{_body}</div>
      <div className="selectbox-selected"></div>
      <ul className="selectbox-list">{list}</ul>
    </div>
  );
}

export default Selectbox;
