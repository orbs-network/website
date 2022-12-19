import React from 'react'
import MainGrid from '../../shared/MainGrid';

function Posts({ list, _body }) {
  return (
    <div className="ton-gateway-posts">
      <MainGrid>
        {_body}
        <div className="ton-gateway-posts-flex">{list}</div>
      </MainGrid>
    </div>
  );
}

export default Posts