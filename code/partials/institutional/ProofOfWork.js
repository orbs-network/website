import React from "react";
import MainGrid from "../shared/MainGrid";

function ProofOfWork({ eyebrow, headline1, headline2, headlineGrad, body }) {
  return (
    <section className="institutional-sec institutional-sec-dark institutional-pow">
      <MainGrid>
        <div className="institutional-pow-grid">
          <div className="institutional-pow-art" aria-hidden="true">
            <div className="institutional-pow-beam"></div>
            <div className="institutional-pow-orb"></div>
          </div>
          <div className="institutional-pow-text">
            <div className="institutional-eyebrow institutional-eyebrow-light">
              {eyebrow || "[PROOF OF WORK]"}
            </div>
            <h2 className="institutional-h2">
              <span>{headline1 || "Forged in DeFi."}</span><br />
              <span>{headline2 || "Packaged for"}</span>{" "}
              <span className="institutional-grad-lilac">
                {headlineGrad || "institutions"}
              </span>
            </h2>
            <p className="institutional-body institutional-body-light">{body}</p>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default ProofOfWork;
