import React from 'react'
import { handleUrl } from '../../../util/link';
import MainGrid from '../../shared/MainGrid';

function index({ title, _relativeURL, _ID, list, subtitle, partner, tx, link, linkText }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="liquidity-hub-section liquidity-hub-launch-partner">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="content">
          <div className="left">
            <img className="partner-logo" src={generateUrl(partner)} />
            <h4>{subtitle}</h4>
            {list}
            <a href={link} target="_blank">
              {linkText}
            </a>
          </div>
          <div className="right">
            <img className="partner-tx" src={generateUrl(tx)} />
          </div>
        </div>
      </MainGrid>
    </div>
  );
}

export default index