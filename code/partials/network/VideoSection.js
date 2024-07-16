import React from "react";
import SmallGrid from "../shared/SmallGrid";

function VideoSection({ _body }) {
  return (
    <div className="network-section network-section-video">
      <SmallGrid className="network-section-video-grid">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GIlFxR55Ap8"
          title="Orbs Network - Layer 3 Blockchain Technology"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </SmallGrid>
    </div>
  );
}

export default VideoSection;
