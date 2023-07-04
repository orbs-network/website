import React from 'react'
import MainGrid from '../../shared/MainGrid'
function Explanation({title, slider}) {
  return (
    <div className="dtwap-explanation">
      <MainGrid>
        <h3 className="dtwap-explanation-title">{title}</h3>
        {slider}
      </MainGrid>
    </div>
  );
}

export default Explanation