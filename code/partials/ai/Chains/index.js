import React from "react";
import MainGrid from "../../shared/MainGrid";

const chains = [
  { name: "Ethereum", id: 1 },
  { name: "BNB Chain", id: 56 },
  { name: "Polygon", id: 137 },
  { name: "Arbitrum", id: 42161 },
  { name: "Base", id: 8453 },
  { name: "Linea", id: 59144 },
  { name: "Avalanche", id: 43114 },
  { name: "Sonic", id: 146 },
];

const features = ["Market", "Limit", "Stop-Loss", "Take-Profit", "TWAP"];

function Chains({ _body, title }) {
  return (
    <div className="ai-chains">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-chains-subtitle">{_body}</div>
        <div className="ai-chains-table-wrap">
          <table className="ai-chains-table">
            <thead>
              <tr>
                <th>Chain</th>
                <th>Chain ID</th>
                {features.map((f, i) => (
                  <th key={i}>{f}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chains.map((c, i) => (
                <tr key={i}>
                  <td className="ai-chains-name">{c.name}</td>
                  <td>{c.id}</td>
                  {features.map((_, fi) => (
                    <td key={fi} className="ai-chains-check">✓</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainGrid>
    </div>
  );
}

export default Chains;
