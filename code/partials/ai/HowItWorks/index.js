import React from "react";
import MainGrid from "../../shared/MainGrid";

const steps = [
  {
    num: "1",
    title: "Define Intent",
    desc: "User or agent specifies: chain, tokens, amount, order type, and optional price constraints.",
  },
  {
    num: "2",
    title: "Wrap & Approve",
    desc: "If needed, wrap native tokens and approve the contract to spend your tokens. The skill provides the calldata.",
    optional: true,
  },
  {
    num: "3",
    title: "Prepare Order",
    desc: "The skill generates approval calldata, EIP-712 typed data, and relay-ready submit payloads.",
  },
  {
    num: "4",
    title: "Sign & Submit",
    desc: "User signs with their wallet (EIP-712). The signed order is submitted to the decentralized relay.",
  },
  {
    num: "5",
    title: "Oracle-Protected Execution",
    desc: "Orbs L3 network executes with best-price routing and oracle protection on every chunk.",
  },
];

function HowItWorks({ _body, title }) {
  return (
    <div className="ai-how-it-works">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-how-subtitle">{_body}</div>
        <div className="ai-how-steps">
          {steps.map((s, i) => (
            <div key={i} className={`ai-how-step${s.optional ? ' ai-how-step--optional' : ''}`}>
              <div className="ai-how-step-num">{s.num}</div>
              <h4 className="ai-how-step-title">
                {s.title}
                {s.optional && <span className="ai-how-step-badge">Optional</span>}
              </h4>
              <p className="ai-how-step-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="ai-how-step-arrow">→</div>}
            </div>
          ))}
        </div>
      </MainGrid>
    </div>
  );
}

export default HowItWorks;
