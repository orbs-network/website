import React from "react";
import MainGrid from "../shared/MainGrid";

function SelfCustody({ eyebrow, headline1, headline2, body }) {
  return (
    <section className="institutional-sec institutional-selfcustody">
      <MainGrid>
        <div className="institutional-selfcustody-grid">
          <div className="institutional-selfcustody-text">
            <div className="institutional-eyebrow">{eyebrow}</div>
            <h2 className="institutional-h2">
              <span>{headline1}</span><br />
              <span>{headline2}</span>
            </h2>
            <p className="institutional-body">{body}</p>
          </div>
          <div className="institutional-selfcustody-art" aria-hidden="true">
            <img
              className="institutional-selfcustody-art-img"
              src="/assets/img/institutional/self-custody-bg@2x.png"
              alt=""
            />
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default SelfCustody;
