import React from "react";
import MainGrid from "../shared/MainGrid";

function Stats({
  stat1v, stat1k, stat1c,
  stat2v, stat2k, stat2c,
  stat3v, stat3k, stat3c,
}) {
  const cells = [
    { v: stat1v, k: stat1k, c: stat1c },
    { v: stat2v, k: stat2k, c: stat2c },
    { v: stat3v, k: stat3k, c: stat3c },
  ];
  return (
    <section className="institutional-sec institutional-stats">
      <div className="institutional-stats-grid-bg" aria-hidden="true"></div>
      <MainGrid>
        <div className="institutional-stats-row">
          {cells.map((c, i) => (
            <div key={i} className="institutional-stats-cell">
              <div className={"institutional-stats-shape institutional-stats-shape-" + (c.c || "cyan")}>
                <span className="institutional-stats-value">{c.v}</span>
              </div>
              <div className="institutional-stats-label">{c.k}</div>
            </div>
          ))}
        </div>
      </MainGrid>
    </section>
  );
}

export default Stats;
