import React from 'react'

function main({
  header,
  section1,
  section2,
  sectionPartners,
  section4,
}) {
  return (
    <div className="perps page">
      {header}
      {section1}
      {section2}
      {sectionPartners}
      {section4}
    </div>
  );
}

export default main
