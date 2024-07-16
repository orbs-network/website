import React from 'react'
import MainGrid from '../../shared/MainGrid'

function Benefits({list, title, _body}) {
  return (
    <div className="dtwap-benefits">
      <MainGrid>
        <div className="dtwap-benefits-body">{_body}</div>
        <h3 className="dtwap-benefits-title">{title}</h3>
        <div className="dtwap-benefits-list">{list}</div>
      </MainGrid>
    </div>
  );
}

export default Benefits