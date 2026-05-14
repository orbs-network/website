import React from "react";
import MainGrid from "../shared/MainGrid";

// Map venue name (as authored in content/.../venues/index.md) to the
// committed logo asset. Most live under /assets/img/home/partners/
// (shared with the homepage partner grid); section-specific assets
// go under /assets/img/institutional/.
const VENUE_LOGO = {
  PancakeSwap: "/assets/img/home/partners/pancakeswap.png",
  SushiSwap: "/assets/img/home/partners/sushiswap.png",
  QuickSwap: "/assets/img/home/partners/quickswap.png",
  Blackhole: "/assets/img/institutional/venue-blackhole.png",
  Thena: "/assets/img/home/partners/thena.png",
};

function Venues({ title, v1, v2, v3, v4, v5, v6 }) {
  const venues = [v1, v2, v3, v4, v5, v6].filter(Boolean);
  return (
    <section className="institutional-sec institutional-venues">
      <MainGrid>
        <h3 className="institutional-venues-title">{title}</h3>
        <div className="institutional-venues-row">
          {venues.map((v, i) => {
            const src = VENUE_LOGO[v];
            return src ? (
              <img
                key={i}
                className="institutional-venues-logo"
                src={src}
                alt={v}
              />
            ) : (
              <div key={i} className="institutional-venues-logo institutional-venues-logo-text">
                {v}
              </div>
            );
          })}
        </div>
      </MainGrid>
    </section>
  );
}

export default Venues;
