import React from "react";
import MainGrid from "../../shared/MainGrid";

function Chains({ _body, title, chain_header, chain_id_header, chains, order_types }) {
  return (
    <div className="ai-chains">
      <MainGrid>
        <h3 className="ai-section-title">{title}</h3>
        <div className="ai-chains-subtitle">{_body}</div>
        <div className="ai-chains-table-wrap">
          <table className="ai-chains-table">
            <thead>
              <tr>
                <th>{chain_header}</th>
                <th>{chain_id_header}</th>
                {order_types.map((f, i) => (
                  <th key={i}>{f}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chains.map((c, i) => (
                <tr key={i}>
                  <td className="ai-chains-name">{c.name}</td>
                  <td>{c.id}</td>
                  {order_types.map((_, fi) => (
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
