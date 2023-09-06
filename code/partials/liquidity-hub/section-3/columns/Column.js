import React from "react";

function Column({ title, list }) {
  return (
    <div className="liquidity-hub-section-3-column">
      <h4>{title}</h4>
      <ul>
        {list.map((it) => {
          return (
            <li key={it}>
              <figure />
              <p>{it}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Column;
