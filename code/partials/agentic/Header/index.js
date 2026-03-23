import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function Header({ _body, _relativeURL, _ID, label, heroImg, announcementUrl, getStartedUrl, github }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <header className="agentic-header">
      <MainGrid>
        <div className="agentic-header-flex">
          <div className="agentic-header-content">
            <div className="agentic-header-label">{label}</div>
            <h1 className="agentic-header-title">
              THE DEFI AGENT<br />EXECUTION LAYER
            </h1>
            <div className="agentic-header-body">{_body}</div>
            <div className="agentic-header-buttons">
              {announcementUrl && (
                <a href={announcementUrl} className="agentic-btn agentic-btn-outline">Read the Announcement</a>
              )}
              {getStartedUrl && (
                <a href={getStartedUrl} className="agentic-btn agentic-btn-outline">Get Started →</a>
              )}
            </div>
          </div>
          <div className="agentic-header-visual">
            {heroImg && <img src={generateUrl(heroImg)} alt="Orbs Agentic" className="agentic-header-hero-img" />}
          </div>
        </div>
      </MainGrid>
    </header>
  );
}

export default Header;
