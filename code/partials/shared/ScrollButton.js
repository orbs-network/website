import React from 'react'

function ScrollButton({_body, url}) {
  return (
    <a className="button scroll-button" href={`#${url}`}>
      {_body}
    </a>
  );
}

export default ScrollButton