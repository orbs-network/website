import React from 'react'
import { handleUrl } from '../../util/link';
import SmallGrid from './SmallGrid';

function Schema({ title, image, _body, _relativeURL, _ID, subtitle }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="schema">
      <SmallGrid>
        <h3 className="page-colored-section-title">{title}</h3>
       {subtitle &&  <h4 className='schema-subtitle'>{subtitle}</h4>}
        <img src={generateUrl(image)} className="schema-img" />
        <div className="schema-body">{_body}</div>
      </SmallGrid>
    </div>
  );
}

export default Schema