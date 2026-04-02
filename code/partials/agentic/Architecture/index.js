import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function Architecture({ _relativeURL, _ID, image }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <div className="agentic-arch">
      <MainGrid>
        {image && <img src={generateUrl(image)} alt="Orbs Agentic Architecture" className="agentic-arch-img" />}
      </MainGrid>
    </div>
  );
}

export default Architecture;
