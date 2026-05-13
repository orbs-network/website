import React from 'react'

function Main({
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
}) {
  return (
    <div className="institutional page">
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
    </div>
  );
}

export default Main
