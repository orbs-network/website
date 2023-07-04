import React from 'react'

function Main({ header, integrations, cards, codeExamples, schema }) {
  return (
    <div className="dlimit page">
      {header}
      {cards}
      {integrations}
      {codeExamples}
      {schema}
    </div>
  );
}

export default Main