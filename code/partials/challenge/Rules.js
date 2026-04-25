import React from "react";
import MainGrid from "../shared/MainGrid";

function Rules({ ctaUrl, eyebrow, title,
  r1, r1t, r2, r2t, r3, r3t, r4, r4t,
  bandH, bandCta, legalKicker, legalBody }) {
  return (
    <section className="challenge-sec" id="rules">
      <MainGrid>
        <div className="challenge-sec-head">
          <div className="challenge-sec-eyebrow"><span className="challenge-sec-idx">04</span><span>{eyebrow || "Rules"}</span></div>
          <h2>{title || "Four lines. No loopholes."}</h2>
        </div>

        <ul className="challenge-rules-list">
          <li>
            <span className="challenge-rules-num">R · 01</span>
            <span className="challenge-rules-txt">{r1 || "Phase 1 and Phase 2 are independent — join either or both."}</span>
            <span className="challenge-rules-tag">{r1t || "Eligibility"}</span>
          </li>
          <li>
            <span className="challenge-rules-num">R · 02</span>
            <span className="challenge-rules-txt">{r2 || "Wash trading = disqualification."}</span>
            <span className="challenge-rules-tag">{r2t || "Integrity"}</span>
          </li>
          <li>
            <span className="challenge-rules-num">R · 03</span>
            <span className="challenge-rules-txt">{r3 || "Leaderboard updates may be shared on Twitter."}</span>
            <span className="challenge-rules-tag">{r3t || "Transparency"}</span>
          </li>
          <li>
            <span className="challenge-rules-num">R · 04</span>
            <span className="challenge-rules-txt">{r4 || "Winners verified before payout."}</span>
            <span className="challenge-rules-tag">{r4t || "Payout"}</span>
          </li>
        </ul>

        <div className="challenge-band">
          <div className="challenge-band-diag"></div>
          <h3>{bandH || "Your first trade could win. Start now — zero fees."}</h3>
          <a className="challenge-btn challenge-btn-primary" href={ctaUrl || "https://clawhub.ai/eranp-orbs/spot-advanced-swap-orders"} target="_blank" rel="noopener">
            <span>{bandCta || "Start Trading on ClawHub"}</span>
            <span className="challenge-btn-arrow">→</span>
          </a>
        </div>

        <div className="challenge-legal">
          <div className="challenge-legal-inner">
            <div className="challenge-legal-k">{legalKicker || "Fine print"}</div>
            <p>{legalBody || "Open to participants 18+ where legally permitted. Void where prohibited. Executing a trade does not constitute a purchase — network gas and token costs are payable to third parties, not to Orbs. All prizes paid in USDC; the top Phase 2 prize is paid at the approximate value of a Mac Mini M4 (~$599 USDC). Winners will be contacted via on-chain address; unclaimed prizes expire 30 days after the draw. Orbs Network is the sponsor and sole arbiter of eligibility and disqualification."}</p>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default Rules;
