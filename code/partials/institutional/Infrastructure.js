import React from "react";
import MainGrid from "../shared/MainGrid";

// Map infrastructure brand name (as authored in content/.../infrastructure/index.md)
// to the committed SVG path. Swap or extend here when adding partners.
const INFRA_LOGO = {
  LEDGER: "/assets/img/institutional/infra-ledger.svg",
  Safe: "/assets/img/institutional/infra-safe.svg",
  Fireblocks: "/assets/img/institutional/infra-fireblocks.svg",
  "copper.co": "/assets/img/institutional/infra-copper.svg",
  BitGo: "/assets/img/institutional/infra-bitgo.svg",
};

function Infrastructure({ title, sub, l1, l2, l3, l4, l5 }) {
  const logos = [l1, l2, l3, l4, l5].filter(Boolean);
  return (
    <section className="institutional-sec institutional-infra">
      <MainGrid>
        <h3 className="institutional-infra-title">{title}</h3>
        <div className="institutional-infra-row">
          {logos.map((l, i) => {
            const src = INFRA_LOGO[l];
            return src ? (
              <img
                key={i}
                className="institutional-infra-logo"
                src={src}
                alt={l}
              />
            ) : (
              <div key={i} className="institutional-infra-logo institutional-infra-logo-text">
                {l}
              </div>
            );
          })}
        </div>
        <p className="institutional-infra-sub">{sub}</p>
      </MainGrid>
    </section>
  );
}

export default Infrastructure;
