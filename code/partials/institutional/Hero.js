import React from "react";
import MainGrid from "../shared/MainGrid";

function Hero({
  eyebrow,
  headline1,
  headlineGrad,
  headline2,
  headline3,
  sub,
  ctaUrl,
  ctaLabel,
}) {
  return (
    <header className="institutional-hero">
      <img
        className="institutional-hero-bg"
        src="/assets/img/institutional/hero-bg@2x.png"
        alt=""
        aria-hidden="true"
      />
      <MainGrid>
        <div className="institutional-hero-content">
          <div className="institutional-hero-eyebrow">
            {eyebrow || "[ORBS INSTITUTIONAL]"}
          </div>

          <h1 className="institutional-hero-title">
            <span className="institutional-hero-line">
              {headline1 || "Institutional swap"}
            </span>
            <span className="institutional-hero-line">
              <span className="institutional-hero-grad">
                {headlineGrad || "infrastructure"}
              </span>
              <span> {headline2 || "for"}</span>
            </span>
            <span className="institutional-hero-line">
              {headline3 || "on-chain execution"}
            </span>
          </h1>

          <p className="institutional-hero-sub">{sub}</p>

          <div className="institutional-hero-cta">
            <a
              className="institutional-btn institutional-btn-outline institutional-btn-square"
              href={ctaUrl || "#talk-to-the-team"}
            >
              <span>{ctaLabel || "Talk to the team"}</span>
              <span className="institutional-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </MainGrid>
    </header>
  );
}

export default Hero;
