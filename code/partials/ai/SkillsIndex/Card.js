import React from "react";
import { handleUrl } from "../../../util/link";

function SkillCard({ _body, _relativeURL, _ID, name, skillUrl, pageUrl, github, chains, orderTypes, chains_label, view_skill }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <div className="ai-skills-index-card" data-skill-name={name} data-skill-url={skillUrl}>
      <h2 className="ai-skills-index-card-title">{name}</h2>
      <div className="ai-skills-index-card-desc">{_body}</div>
      <div className="ai-skills-index-card-tags">
        {orderTypes.map((t, i) => (
          <span key={i} className="ai-skills-index-card-tag">{t}</span>
        ))}
      </div>
      <div className="ai-skills-index-card-chains">
        <span className="ai-skills-index-card-chains-label">{chains_label}</span>
        {chains.join(", ")}
      </div>
      <div className="ai-skills-index-card-actions">
        <a href={generateUrl(pageUrl)} className="ai-skills-index-card-btn">{view_skill}</a>
        <a href={skillUrl} target="_blank" className="ai-skills-index-card-link">SKILL.md</a>
        <a href={github} target="_blank" className="ai-skills-index-card-link">GitHub</a>
      </div>
    </div>
  );
}

export default SkillCard;
