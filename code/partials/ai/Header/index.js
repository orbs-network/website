import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

const GithubImg = "/assets/img/ton-gateway/github.svg";

function Header({ _body, _relativeURL, _ID, title, subtitle, github }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <header className="ai-header">
      <div className="ai-header-bg">
        <MainGrid>
          <div className="ai-header-content">
            <div className="ai-header-badge">
              <span className="ai-header-badge-dot"></span>
              <span>AI Agent Skill</span>
            </div>
            <div className="ai-header-body">
              {_body}
            </div>
            <div className="ai-header-actions">
              <a href="#quickstart" className="ai-header-btn ai-header-btn-primary">
                Get Started
              </a>
              {github && (
                <a href={github} target="_blank" className="ai-header-btn ai-header-btn-secondary">
                  <img src={generateUrl(GithubImg)} alt="GitHub" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </MainGrid>
      </div>
    </header>
  );
}

export default Header;
