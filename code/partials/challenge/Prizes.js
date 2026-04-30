import React from "react";
import MainGrid from "../shared/MainGrid";

function Prizes({ eyebrow, title,
  p1kicker, p1title, p1note, p1unit, p1label,
  p2kicker, p2title, p2note,
  rank1, rank2, rank3,
  p2hw1, p2cash1, p2sub1, p2sub2, p2sub3, p2lucky }) {
  return (
    <section className="challenge-sec" id="prizes">
      <MainGrid>
        <div className="challenge-sec-head">
          <div className="challenge-sec-eyebrow"><span className="challenge-sec-idx">02</span><span>{eyebrow || "Prize breakdown"}</span></div>
          <h2>{title || "Over $1,500 in USDC prizes."}</h2>
        </div>

        <div className="challenge-prizes-wrap">
          <div className="challenge-prize-col challenge-prize-p1">
            <div className="challenge-prize-kicker">
              <span className="challenge-prize-tag">P1</span>
              <span>{p1kicker || "Onboarding Raffle"}</span>
            </div>
            <h3>{p1title || "Random draw, 10 winners"}</h3>
            <p className="challenge-prize-note">{p1note || "Every Phase 1 trade is one ticket. No minimum size."}</p>
            <div className="challenge-raffle-hero">
              <div>
                <div className="challenge-raffle-qty"><span className="challenge-raffle-mult">10×</span>$50</div>
                <div className="challenge-raffle-unit"><em>USDC</em>{p1unit ? ` ${p1unit}` : ""}</div>
              </div>
              <div className="challenge-raffle-lbl">{p1label || "$500 pool · drawn May 11"}</div>
            </div>
          </div>

          <div className="challenge-prize-col challenge-prize-p2">
            <div className="challenge-prize-kicker">
              <span className="challenge-prize-tag">P2</span>
              <span>{p2kicker || "Volume Competition + Lucky Draw"}</span>
            </div>
            <h3>{p2title || "Leaderboard prizes + random luck"}</h3>
            <p className="challenge-prize-note">{p2note || "Top three by volume take the podium. Everyone else is still eligible for a lucky draw."}</p>

            <div className="challenge-podium">
              <div className="challenge-slot challenge-slot-1">
                <div className="challenge-slot-top">
                  <span className="challenge-slot-rank">{rank1 || "01 · WINNER"}</span>
                  <div className="challenge-slot-medal">1</div>
                </div>
                <div className="challenge-slot-body">
                  <div className="challenge-slot-prize">
                    <span className="challenge-slot-hw">{p2hw1 || "~$599 USDC"}</span>
                    <span className="challenge-slot-cash">{p2cash1 || "Value of a Mac Mini M4"}</span>
                  </div>
                  <div className="challenge-slot-sub">{p2sub1 || "Top volume · paid in USDC"}</div>
                </div>
              </div>
              <div className="challenge-slot challenge-slot-2">
                <div className="challenge-slot-top">
                  <span className="challenge-slot-rank">{rank2 || "02 · RUNNER-UP"}</span>
                  <div className="challenge-slot-medal">2</div>
                </div>
                <div className="challenge-slot-body">
                  <div className="challenge-slot-prize">$200</div>
                  <div className="challenge-slot-sub">{p2sub2 || "USDC · 2nd by volume"}</div>
                </div>
              </div>
              <div className="challenge-slot challenge-slot-3">
                <div className="challenge-slot-top">
                  <span className="challenge-slot-rank">{rank3 || "03 · RUNNER-UP"}</span>
                  <div className="challenge-slot-medal">3</div>
                </div>
                <div className="challenge-slot-body">
                  <div className="challenge-slot-prize">$100</div>
                  <div className="challenge-slot-sub">{p2sub3 || "USDC · 3rd by volume"}</div>
                </div>
              </div>
            </div>

            <div className="challenge-lucky">
              <div className="challenge-lucky-badge">RND</div>
              <div className="challenge-lucky-txt">
                <div className="challenge-lucky-amt"><span className="challenge-raffle-mult">10×</span>$50 USDC</div>
                <div className="challenge-lucky-lbl">{p2lucky || "Lucky draw · random Phase 2 participants"}</div>
              </div>
            </div>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default Prizes;
