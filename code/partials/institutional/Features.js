import React from "react";
import MainGrid from "../shared/MainGrid";

function Features({
  eyebrow, headline1, headline2,
  f1, f1sub, f2, f3, f4, f5, f6, f7, f8,
  panel1, panel2, panel3,
  cta1Label, cta1Url, cta2Label, cta2Url,
}) {
  const rest = [f2, f3, f4, f5, f6, f7, f8].filter(Boolean);
  return (
    <section className="institutional-sec institutional-features">
      <MainGrid>
        <div className="institutional-features-header">
          <div className="institutional-eyebrow">{eyebrow}</div>
          <h2 className="institutional-h2">
            <span>{headline1}</span><br />
            <span>{headline2}</span>
          </h2>
        </div>

        <div className="institutional-features-grid">
          <ul className="institutional-features-list">
            <li className="institutional-features-item institutional-features-item-active">
              <div className="institutional-features-name">{f1}</div>
              {f1sub && <p className="institutional-features-sub">{f1sub}</p>}
            </li>
            {rest.map((f, i) => (
              <li key={i} className="institutional-features-item">
                <div className="institutional-features-name">{f}</div>
              </li>
            ))}
          </ul>

          <div className="institutional-features-panel">
            <p className="institutional-features-panel-text">
              <span>{panel1}</span><br />
              <span>{panel2}</span><br />
              <span>{panel3}</span>
            </p>
            <div className="institutional-features-panel-mark" aria-hidden="true">
              <span className="institutional-features-panel-orb"></span>
              <span className="institutional-features-panel-wordmark">ORBS</span>
            </div>
          </div>
        </div>

        <div className="institutional-features-ctas">
          <a className="institutional-btn institutional-btn-outline institutional-btn-square institutional-btn-sm" href={cta1Url}>
            <span>{cta1Label}</span>
            <span className="institutional-btn-arrow" aria-hidden="true">→</span>
          </a>
          <a className="institutional-btn institutional-btn-outline institutional-btn-square institutional-btn-sm" href={cta2Url}>
            <span>{cta2Label}</span>
            <span className="institutional-btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </MainGrid>
    </section>
  );
}

export default Features;
