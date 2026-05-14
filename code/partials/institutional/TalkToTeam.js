import React from "react";
import MainGrid from "../shared/MainGrid";

function TalkToTeam({ title, body, cta1Label, cta1Url, cta2Label, cta2Url }) {
  return (
    <section id="talk-to-team" className="institutional-sec institutional-talk">
      <MainGrid>
        <div className="institutional-talk-inner">
          <h2 className="institutional-talk-title">{title}</h2>
          <p className="institutional-talk-body">{body}</p>
          <div className="institutional-talk-ctas">
            <a
              className="institutional-btn institutional-btn-outline institutional-btn-square institutional-btn-sm"
              href={cta1Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{cta1Label}</span>
              <span className="institutional-btn-arrow" aria-hidden="true">→</span>
            </a>
            <a className="institutional-btn institutional-btn-outline institutional-btn-square institutional-btn-sm" href={cta2Url}>
              <span>{cta2Label}</span>
              <span className="institutional-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default TalkToTeam;
