import React from "react";
import MainGrid from "../shared/MainGrid";

function Hero({ ctaUrl, eyebrow1, eyebrow2, eyebrow3, h1a, h1b, sub, ctaLabel, ctaGhostLabel,
  meta1k, meta1v, meta2k, meta2v, meta3k, meta3v, meta4k, meta4v }) {
  return (
    <header className="challenge-hero">
      <div className="challenge-hero-orb" aria-hidden="true"></div>
      <MainGrid>
        <div className="challenge-hero-eyebrow">
          <span>{eyebrow1 || "Orbs Agentic"}</span>
          <span className="challenge-hero-sep">/</span>
          <span>{eyebrow2 || "Trading Competition"}</span>
          <span className="challenge-hero-sep">/</span>
          <span>{eyebrow3 || "May 2026"}</span>
        </div>

        <h1 className="challenge-hero-title">
          <span>{h1a || "The Orbs"}</span><br />
          <span className="challenge-hero-grad">{h1b || "Agentic Challenge"}</span>
        </h1>

        <p className="challenge-hero-sub" dangerouslySetInnerHTML={{ __html: sub || 'Zero fees. Real prizes. <em>Your first trade could win.</em>' }} />

        <div className="challenge-hero-cta">
          <a className="challenge-btn challenge-btn-primary" href={ctaUrl} target="_blank" rel="noopener">
            <span>{ctaLabel || "Start Trading"}</span>
            <span className="challenge-btn-arrow">→</span>
          </a>
          <a href="#how" className="challenge-btn challenge-btn-ghost">{ctaGhostLabel || "How it works"}</a>
        </div>

        <div className="challenge-hero-meta">
          <div className="challenge-hero-cell">
            <div className="challenge-hero-k">{meta1k || "Phase 1"}</div>
            <div className="challenge-hero-v">{meta1v || "May 4 — 10"}</div>
          </div>
          <div className="challenge-hero-cell">
            <div className="challenge-hero-k">{meta2k || "Phase 2"}</div>
            <div className="challenge-hero-v">{meta2v || "May 11 — 24"}</div>
          </div>
          <div className="challenge-hero-cell">
            <div className="challenge-hero-k">{meta3k || "Prize Pool"}</div>
            <div className="challenge-hero-v">{meta3v || "Over $1,500 in USDC"}</div>
          </div>
          <div className="challenge-hero-cell">
            <div className="challenge-hero-k">{meta4k || "Chains"}</div>
            <div className="challenge-hero-v">{meta4v || "All Orbs-supported"}</div>
          </div>
        </div>
      </MainGrid>
    </header>
  );
}

export default Hero;
