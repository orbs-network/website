import React from "react";
import MainGrid from "../shared/MainGrid";

function PolicyEngine({ line1, line2, line3, linePunch }) {
  return (
    <section className="institutional-sec institutional-sec-dark institutional-policy">
      <MainGrid>
        <div className="institutional-policy-stack">
          <p className="institutional-policy-line">{line1}</p>
          <p className="institutional-policy-line">{line2}</p>
          <p className="institutional-policy-line">{line3}</p>
          <p className="institutional-policy-line institutional-policy-punch">
            {linePunch}
          </p>
        </div>
      </MainGrid>
    </section>
  );
}

export default PolicyEngine;
