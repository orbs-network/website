import React from "react";

function List({ title, list }) {
  return (
    <ul className="liquidity-hub-list">
      {list.map((it) => {
        return (
          <li key={it}>
            <figure />
            <p>{it}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
