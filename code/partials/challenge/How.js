import React from "react";
import MainGrid from "../shared/MainGrid";

function How({ eyebrow, title,
  p1kicker, p1title, p1window, p1body, p1f1k, p1f1v, p1f2k, p1f3k,
  p2kicker, p2title, p2window, p2body, p2f1k, p2f1v, p2f2k, p2f2v, p2f3k }) {
  return (
    <section className="challenge-sec" id="how">
      <MainGrid>
        <div className="challenge-sec-head">
          <div className="challenge-sec-eyebrow"><span className="challenge-sec-idx">01</span><span>{eyebrow || "How it works"}</span></div>
          <h2>{title || "Two phases. One mandate: trade."}</h2>
        </div>

        <div className="challenge-phases">
          <div className="challenge-phase challenge-phase-1">
            <div className="challenge-phase-stamp">01</div>
            <div className="challenge-phase-kicker">{p1kicker || "Phase 1 · Onboarding Raffle"}</div>
            <h3>{p1title || "Make one trade. You're in."}</h3>
            <div className="challenge-phase-window">{p1window || "MAY 04 → MAY 10 · UTC"}</div>
            <p dangerouslySetInnerHTML={{ __html: p1body || 'Execute one trade through Orbs Agentic. <b>Any size. Any Orbs-supported chain. Zero fees.</b> That\'s it — you\'re entered into a $500 USDC raffle. 10 winners drawn randomly.' }} />
            <div className="challenge-phase-facts">
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p1f1k || "Entry"}</div><div className="challenge-phase-fv">{p1f1v || "1 trade"}</div></div>
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p1f2k || "Pool"}</div><div className="challenge-phase-fv">$500</div></div>
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p1f3k || "Winners"}</div><div className="challenge-phase-fv">10</div></div>
            </div>
          </div>

          <div className="challenge-phase challenge-phase-2">
            <div className="challenge-phase-stamp">02</div>
            <div className="challenge-phase-kicker">{p2kicker || "Phase 2 · Volume + Lucky Draw"}</div>
            <h3>{p2title || "Climb the board. Or stay lucky."}</h3>
            <div className="challenge-phase-window">{p2window || "MAY 11 → MAY 24 · UTC"}</div>
            <p dangerouslySetInnerHTML={{ __html: p2body || 'Open to everyone — no Phase 1 required. <b>Top volume wins the value of a Mac Mini M4 in USDC (~$599).</b> Runners-up win $200 and $100 USDC. Not a whale? No problem — 10 random participants win $50 USDC each, just for trading.' }} />
            <div className="challenge-phase-facts">
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p2f1k || "Entry"}</div><div className="challenge-phase-fv">{p2f1v || "1 trade"}</div></div>
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p2f2k || "Top prize"}</div><div className="challenge-phase-fv">{p2f2v || "~$599 USDC"}</div></div>
              <div className="challenge-phase-f"><div className="challenge-phase-fk">{p2f3k || "Lucky"}</div><div className="challenge-phase-fv">10 × $50</div></div>
            </div>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default How;
