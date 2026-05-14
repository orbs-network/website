import React from "react";
import MainGrid from "../shared/MainGrid";

function Features({
  eyebrow, headline1, headline2,
  f1, f1body, f2, f2body, f3, f3body, f4, f4body,
  f5, f5body, f6, f6body, f7, f7body, f8, f8body,
  cta1Label, cta1Url, cta2Label, cta2Url,
}) {
  const features = [
    { name: f1, body: f1body },
    { name: f2, body: f2body },
    { name: f3, body: f3body },
    { name: f4, body: f4body },
    { name: f5, body: f5body },
    { name: f6, body: f6body },
    { name: f7, body: f7body },
    { name: f8, body: f8body },
  ].filter((f) => f.name);

  const defaultBody = features[0] ? features[0].body : "";

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
          <div className="institutional-features-list" role="tablist">
            {features.map((f, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === 0}
                aria-controls="institutional-features-panel"
                data-body={f.body}
                className={
                  "institutional-features-item" +
                  (i === 0 ? " institutional-features-item-active" : "")
                }
              >
                {f.name}
              </button>
            ))}
          </div>

          <div
            id="institutional-features-panel"
            role="tabpanel"
            className="institutional-features-panel"
            aria-live="polite"
          >
            <p className="institutional-features-panel-text">{defaultBody}</p>
            <img
              className="institutional-features-panel-mark"
              src="/assets/img/institutional/orbs-logo.svg"
              alt="Orbs"
            />
          </div>
        </div>

        <div className="institutional-features-ctas">
          <a
            className="institutional-btn institutional-btn-outline institutional-btn-square institutional-btn-sm"
            href={cta1Url}
            target="_blank"
            rel="noopener noreferrer"
          >
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
