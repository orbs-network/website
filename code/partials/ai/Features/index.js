import React from "react";
import MainGrid from "../../shared/MainGrid";

const features = [
  {
    icon: "⚡",
    title: "Market Orders",
    desc: "Instant gasless swaps at best available price with oracle protection.",
  },
  {
    icon: "🎯",
    title: "Limit Orders",
    desc: "Set a target price — the order executes automatically when the market reaches it.",
  },
  {
    icon: "🛡️",
    title: "Stop-Loss",
    desc: "Protect your position with automatic sell triggers below a price threshold.",
  },
  {
    icon: "📈",
    title: "Take-Profit",
    desc: "Lock in gains by auto-selling when price rises above your target.",
  },
  {
    icon: "⏱️",
    title: "TWAP / Chunked",
    desc: "Split large orders into time-weighted chunks with oracle protection on every fill.",
  },
];

function Features({ _body, title }) {
  return (
    <div className="ai-features">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-features-subtitle">{_body}</div>
        <div className="ai-features-grid">
          {features.map((f, i) => (
            <div key={i} className="ai-feature-card">
              <div className="ai-feature-icon">{f.icon}</div>
              <h4 className="ai-feature-title">{f.title}</h4>
              <p className="ai-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </MainGrid>
    </div>
  );
}

export default Features;
