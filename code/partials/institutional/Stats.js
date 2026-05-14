import React from "react";
import MainGrid from "../shared/MainGrid";

// Map the badge identifier from frontmatter to the committed SVG.
// Each badge is the heptagon shape designed by the brand team, with
// its own color theme.
const STAT_BADGE = {
  volume: "/assets/img/institutional/stat-volume-badge.svg",
  chains: "/assets/img/institutional/stat-chains-badge.svg",
  integrations: "/assets/img/institutional/stat-integrations-badge.svg",
};

function Stats({
  stat1v, stat1k, stat1badge,
  stat2v, stat2k, stat2badge,
  stat3v, stat3k, stat3badge,
}) {
  const cells = [
    { v: stat1v, k: stat1k, b: stat1badge },
    { v: stat2v, k: stat2k, b: stat2badge },
    { v: stat3v, k: stat3k, b: stat3badge },
  ];
  return (
    <section className="institutional-sec institutional-stats">
      <div className="institutional-stats-grid-bg" aria-hidden="true"></div>
      <MainGrid>
        <div className="institutional-stats-row">
          {cells.map((c, i) => {
            const badgeSrc = STAT_BADGE[c.b];
            return (
              <div key={i} className="institutional-stats-cell">
                <div className="institutional-stats-shape">
                  {badgeSrc && (
                    <img
                      className="institutional-stats-badge"
                      src={badgeSrc}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <span className="institutional-stats-value">{c.v}</span>
                </div>
                <div className="institutional-stats-label">{c.k}</div>
              </div>
            );
          })}
        </div>
      </MainGrid>
    </section>
  );
}

export default Stats;
