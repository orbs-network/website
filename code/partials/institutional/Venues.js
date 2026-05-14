import React from "react";
import MainGrid from "../shared/MainGrid";

// Map venue name (as authored in content/.../venues/index.md) to the
// committed SVG path. Swap or extend here when adding venues.
const VENUE_LOGO = {
  LYNEX: "/assets/img/institutional/venue-lynex.svg",
  base: "/assets/img/institutional/venue-base.svg",
  SpookySwap: "/assets/img/institutional/venue-spookyswap.svg",
  THENA: "/assets/img/institutional/venue-thena.svg",
  SwapX: "/assets/img/institutional/venue-swapx.svg",
  QUICKSWAP: "/assets/img/institutional/venue-quickswap.svg",
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
