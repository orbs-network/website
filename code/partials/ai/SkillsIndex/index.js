import React from "react";
import MainGrid from "../../shared/MainGrid";

const SKILL_URL = "https://orbs-network.github.io/spot/SKILL.md";

const skills = [
  {
    name: "Spot Advanced Swap Orders",
    description: "Gasless limit, stop-loss, take-profit, and TWAP orders across EVM chains. Non-custodial, oracle-protected execution using immutable, audited contracts.",
    skillUrl: SKILL_URL,
    pageUrl: "/ai/skills/spot-advanced-swap-orders/",
    github: "https://github.com/orbs-network/spot",
    chains: ["Ethereum", "BNB Chain", "Polygon", "Arbitrum", "Base", "Linea", "Avalanche", "Sonic"],
    orderTypes: ["TWAP", "Limit", "Stop-Loss", "Take-Profit"],
  },
];

function SkillsIndex() {
  return (
    <div className="ai-skills-index page">
      <meta name="ai-skills-directory" content="true" />
      <meta name="ai-plugin" content="https://www.orbs.com/assets/.well-known/ai-plugin.json" />
      <MainGrid>
        <div className="ai-skills-index-header">
          <h1 className="ai-skills-index-title">AI Skills</h1>
          <p className="ai-skills-index-desc">
            DeFi trading tools for AI coding agents like Claude Code, Cursor, and Windsurf. Install a skill and let your agent place on-chain orders for you.
          </p>
        </div>
        <div className="ai-skills-index-grid">
          {skills.map((s, i) => (
            <div key={i} className="ai-skills-index-card" data-skill-name={s.name} data-skill-url={s.skillUrl}>
              <h2 className="ai-skills-index-card-title">{s.name}</h2>
              <p className="ai-skills-index-card-desc">{s.description}</p>
              <div className="ai-skills-index-card-tags">
                {s.orderTypes.map((t, ti) => (
                  <span key={ti} className="ai-skills-index-card-tag">{t}</span>
                ))}
              </div>
              <div className="ai-skills-index-card-chains">
                <span className="ai-skills-index-card-chains-label">Chains:</span>
                {s.chains.join(", ")}
              </div>
              <div className="ai-skills-index-card-actions">
                <a href={s.pageUrl} className="ai-skills-index-card-btn">View Skill</a>
                <a href={s.skillUrl} target="_blank" className="ai-skills-index-card-link">SKILL.md</a>
                <a href={s.github} target="_blank" className="ai-skills-index-card-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </MainGrid>
    </div>
  );
}

export default SkillsIndex;
