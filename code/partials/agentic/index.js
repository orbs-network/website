import React from 'react'

function Main({ header, breaks, tool, chains, oracle, architecture, powered, getStarted }) {
  return (
    <div className="agentic page">
      {header}
      {breaks}
      {tool}
      {chains}
      {oracle}
      {architecture}
      {powered}
      {getStarted}
    </div>
  );
}

export default Main
