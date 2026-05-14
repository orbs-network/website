import React from "react";
import MainGrid from "../shared/MainGrid";

function SelfCustody({ eyebrow, headline1, headline2, body }) {
  return (
    <section className="institutional-sec institutional-selfcustody">
      <picture>
        <source
          srcSet="/assets/img/institutional/self-custody-bg@2x.webp"
          type="image/webp"
        />
        <img
          className="institutional-selfcustody-bg"
          src="/assets/img/institutional/self-custody-bg@2x.png"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <MainGrid>
        <div className="institutional-selfcustody-text">
          <div className="institutional-eyebrow">{eyebrow}</div>
          <h2 className="institutional-h2">
            <span>{headline1}</span><br />
            <span>{headline2}</span>
          </h2>
          <p className="institutional-body">{body}</p>
        </div>
      </MainGrid>
    </section>
  );
}

export default SelfCustody;
