import React from "react";
import MainGrid from "../shared/MainGrid";

function TrackRecord({ eyebrow, lead, body }) {
  return (
    <section className="institutional-sec institutional-track">
      <picture>
        <source
          srcSet="/assets/img/institutional/track-record-bg@2x.webp"
          type="image/webp"
        />
        <img
          className="institutional-track-bg"
          src="/assets/img/institutional/track-record-bg@2x.png"
          alt=""
          aria-hidden="true"
        />
      </picture>
      <MainGrid>
        <div className="institutional-track-text">
          <div className="institutional-eyebrow">
            {eyebrow || "[TRACK RECORD]"}
          </div>
          <h2 className="institutional-h2">
            <span className="institutional-grad-orbs">{lead}</span>{" "}
            <span>{body}</span>
          </h2>
        </div>
      </MainGrid>
    </section>
  );
}

export default TrackRecord;
