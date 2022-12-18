import React from "react";


function Item({ value, _body, selected, supportedLibraries }) {
  return (
    <li
      data-selected={selected}
      data-value={value}
      className="selectbox-list-item"
      data-supported={supportedLibraries}
    >
      {_body}
    </li>
  );
}

export default Item;
