import React from 'react'

function BtnLink({url, _body}) {
  return (
    <a target="_blank" href={url} className="button">
      {_body}
    </a>
  );
}

export default BtnLink