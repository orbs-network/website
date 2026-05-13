import React from "react";
import MainGrid from "../shared/MainGrid";

function TrackRecord({ eyebrow, lead, body }) {
  return (
    <section className="institutional-sec institutional-track">
      <MainGrid>
        <div className="institutional-track-grid">
          <div className="institutional-track-text">
            <div className="institutional-eyebrow">
              {eyebrow || "[TRACK RECORD]"}
            </div>
            <h2 className="institutional-h2">
              <span className="institutional-grad-cyan">{lead}</span>{" "}
              <span>{body}</span>
            </h2>
          </div>
          <div className="institutional-track-art" aria-hidden="true">
            <div className="institutional-track-art-inner"></div>
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default TrackRecord;
