import React from "react";
import MainGrid from "../shared/MainGrid";

function Infrastructure({ title, sub, l1, l2, l3, l4, l5 }) {
  const logos = [l1, l2, l3, l4, l5].filter(Boolean);
  return (
    <section className="institutional-sec institutional-infra">
      <MainGrid>
        <h3 className="institutional-infra-title">{title}</h3>
        <div className="institutional-infra-row">
          {logos.map((l, i) => (
            <div key={i} className="institutional-infra-logo">
              {l}
            </div>
          ))}
        </div>
        <p className="institutional-infra-sub">{sub}</p>
      </MainGrid>
    </section>
  );
}

export default Infrastructure;
