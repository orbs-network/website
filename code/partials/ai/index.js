import React from 'react'

const SKILL_URL = "https://orbs-network.github.io/spot/skill/SKILL.md";

function Main({ header, quickstart, features, howItWorks, chains }) {
  return (
    <div className="ai page">
      <meta name="ai-skill" content={SKILL_URL} />
      <meta name="ai-plugin" content="https://www.orbs.com/assets/.well-known/ai-plugin.json" />
      <link rel="ai-skill" href={SKILL_URL} type="text/markdown" />
      {header}
      {quickstart}
      {features}
      {howItWorks}
      {chains}
    </div>
  );
}

export default Main
