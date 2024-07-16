import React from 'react'
import { handleUrl } from '../../util/link';


function main({
  header,
  _relativeURL,
  _ID,
  section1,
  section2,
  section3,
  section4,
  launchPartner,
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="liquidity-hub page">
      <img
        src={generateUrl("../../../assets/img/liquidity-hub/hero.svg")}
        className="liquidity-hub-hero"
      />
      {header}
      {section1}
      {launchPartner}
      {section2}
      {section3}
      {section4}
    </div>
  );
}

export default main