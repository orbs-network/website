import React from "react";
import MainGrid from "../../shared/MainGrid";

const SKILL_URL = "https://orbs-network.github.io/spot/skills/advanced-swap-orders/SKILL.md";

const humanPrompt = `Fetch orbs-network.github.io/spot and install the skills described there so you can help me place gasless advanced orders like limit, stop-loss, take-profit, and TWAP.`;

function CopyButton({ text }) {
  return (
    <button
      className="ai-quickstart-copy"
      onClick={`navigator.clipboard.writeText(\`${text.replace(/`/g, '\\`')}\`).then(function(){var b=event.target.closest('.ai-quickstart-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},2000)})`}
    >
      Copy
    </button>
  );
}

function Quickstart({ _body }) {
  return (
    <div className="ai-quickstart" id="quickstart">
      <MainGrid>
        <h3 className="ai-section-title">Quick Start</h3>
        <div className="ai-quickstart-subtitle">{_body}</div>
        <div className="ai-quickstart-grid">
          <div className="ai-quickstart-card">
            <div className="ai-quickstart-card-header">
              <span className="ai-quickstart-card-icon">&#x1F9D1;&#x200D;&#x1F4BB;</span>
              <h4>For Humans</h4>
            </div>
            <p className="ai-quickstart-card-desc">
              Paste this prompt into any AI coding agent:
            </p>
            <div className="ai-quickstart-code">
              <code>{humanPrompt}</code>
              <button
                className="ai-quickstart-copy"
                data-copy={humanPrompt}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="ai-quickstart-card">
            <div className="ai-quickstart-card-header">
              <span className="ai-quickstart-card-icon">&#x1F916;</span>
              <h4>For AI Agents / LLMs</h4>
            </div>
            <p className="ai-quickstart-card-desc">
              Point your agent to the skill spec:
            </p>
            <div className="ai-quickstart-code">
              <code>{SKILL_URL}</code>
              <button
                className="ai-quickstart-copy"
                data-copy={SKILL_URL}
              >
                Copy
              </button>
            </div>
            <div className="ai-quickstart-card-links">
              <a
                href={SKILL_URL}
                target="_blank"
                className="ai-quickstart-view-link"
              >
                View SKILL.md →
              </a>
            </div>
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default Quickstart;
