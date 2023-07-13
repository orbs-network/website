import React from 'react'
import MainGrid from '../shared/MainGrid';

function Schema({ schema, whitePaper, audit, faq }) {
  return (
    <div className="dtwap-schema">
      {schema}
      <MainGrid className="dtwap-schema-links">
        <a href="/white-papers/dTWAP/" className="button">
          {whitePaper}
        </a>
        <a
          target="_blank"
          href="https://github.com/orbs-network/twap/blob/master/Audit-Report-PeckShield.pdf"
          className="button"
        >
          {audit}
        </a>
        <a href="/dtwap-and-dlimit-faq/" className="button">
          {faq}
        </a>              
      </MainGrid>
    </div>
  );
}

export default Schema