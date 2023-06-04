import React from 'react'
import MainGrid from './MainGrid';

function SectionGrid({children}) {
  return <MainGrid className="common-section-grid">{children}</MainGrid>;
}

export default SectionGrid