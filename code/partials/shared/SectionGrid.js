import React from 'react'
import MainGrid from './MainGrid';

function SectionGrid({children, className = ''}) {
  return (
    <MainGrid className={`${className} common-section-grid`}>
      {children}
    </MainGrid>
  );
}

export default SectionGrid