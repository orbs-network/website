import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

const chains = [
  { name: "Ethereum", logo: "/assets/img/agentic/chains/ethereum.png" },
  { name: "BSC", logo: "/assets/img/agentic/chains/bnb.png" },
  { name: "Polygon", logo: "/assets/img/agentic/chains/polygon.png" },
  { name: "Avalanche", logo: "/assets/img/agentic/chains/avalanche.png" },
  { name: "Arbitrum", logo: "/assets/img/agentic/chains/arbitrum.jpg" },
  { name: "Base", logo: "/assets/img/agentic/chains/base.png" },
  { name: "Linea", logo: "/assets/img/agentic/chains/linea.png" },
  { name: "Sonic", logo: "/assets/img/agentic/chains/sonic.png" },
];

function ChainItem({ chain, generateUrl }) {
  return (
    <div className="agentic-chains-item">
      <img src={generateUrl(chain.logo)} alt={chain.name} className="agentic-chains-item-logo" />
      <span className="agentic-chains-item-name">{chain.name}</span>
    </div>
  );
}

function Chains({ _relativeURL, _ID }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <div className="agentic-chains">
      <MainGrid>
        <div className="agentic-chains-divider"></div>
        <h2 className="agentic-section-title"><span className="agentic-gradient">Supported</span> Chains</h2>
        <div className="agentic-chains-carousel">
          <div className="agentic-chains-track">
          {chains.map((c, i) => (
            <ChainItem key={i} chain={c} generateUrl={generateUrl} />
          ))}
          {chains.map((c, i) => (
            <ChainItem key={`dup-${i}`} chain={c} generateUrl={generateUrl} />
          ))}
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default Chains;
