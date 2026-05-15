import React from 'react'

function Main({
  nav,
  hero,
  proofOfWork,
  stats,
  trackRecord,
  venues,
  products,
  selfCustody,
  infrastructure,
  policyEngine,
  integrationPaths,
  features,
  whoFor,
  talkToTeam,
  footer,
}) {
  return (
    <div className="institutional page">
      {nav}
      {hero}
      {proofOfWork}
      {stats}
      {trackRecord}
      {venues}
      {products}
      {selfCustody}
      {infrastructure}
      {policyEngine}
      {integrationPaths}
      {features}
      {whoFor}
      {talkToTeam}
      {footer}
    </div>
  );
}

export default Main
