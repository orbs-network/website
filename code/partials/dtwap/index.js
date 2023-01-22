import React from 'react'

function Main({ header, benefits, integrations, explanation, codeExamples, schema }) {
  return (
    <div className="dtwap page">
      {header}
      {benefits}
      {integrations}
      {explanation}
      {codeExamples}
      {schema}
    </div>
  );
}

export default Main