import React from "react";
import MainGrid from "../../shared/MainGrid";

function SkillsIndex({ _body, title, skills }) {
  return (
    <div className="ai-skills-index page">
      <meta name="ai-skills-directory" content="true" />
      <meta name="ai-plugin" content="https://www.orbs.com/assets/.well-known/ai-plugin.json" />
      <MainGrid>
        <div className="ai-skills-index-header">
          <h1 className="ai-skills-index-title">{title}</h1>
          <div className="ai-skills-index-desc">{_body}</div>
        </div>
        <div className="ai-skills-index-grid">
          {skills}
        </div>
      </MainGrid>
    </div>
  );
}

export default SkillsIndex;
