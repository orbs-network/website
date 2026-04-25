import React from "react";
import MainGrid from "../shared/MainGrid";

function What({ eyebrow, title, body, s1, s2, s3 }) {
  return (
    <section className="challenge-sec" id="what">
      <MainGrid>
        <div className="challenge-what">
          <div>
            <div className="challenge-sec-eyebrow"><span className="challenge-sec-idx">03</span><span>{eyebrow || "What is Orbs Agentic?"}</span></div>
            <h2>{title || "The execution layer between AI agents and DeFi."}</h2>
            <div className="challenge-capabilities">
              <span>dTWAP</span>
              <span>dLIMIT</span>
              <span>dSLTP</span>
            </div>
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: body || 'Orbs Agentic is the execution layer that sits between AI agents and DeFi protocols. One interface — <b>swap, limit, TWAP, stop-loss, take-profit</b> — verified by a decentralized <b>cosigned oracle</b> before any trade can execute. Non-custodial. Gasless for the agent. Running in production since 2017 across <b>Ethereum, BNB, Polygon, Arbitrum, Base, Avalanche, Sonic, Linea</b> and more.' }} />
            <div className="challenge-stat-grid">
              <div className="challenge-stat">
                <div className="challenge-stat-n">$14.1<span className="challenge-stat-u">B+</span></div>
                <div className="challenge-stat-l">{s1 || "On-chain volume processed"}</div>
              </div>
              <div className="challenge-stat">
                <div className="challenge-stat-n">L3</div>
                <div className="challenge-stat-l">{s2 || "PoS execution layer, since 2017"}</div>
              </div>
              <div className="challenge-stat">
                <div className="challenge-stat-n">8<span className="challenge-stat-u">+</span></div>
                <div className="challenge-stat-l">{s3 || "Major EVM networks"}</div>
              </div>
            </div>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default What;
