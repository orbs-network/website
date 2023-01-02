import React from 'react'
import { handleUrl } from '../../util/link';
import SmallGrid from './SmallGrid';

function Schema({ title, image, _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="schema">
      <SmallGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <img src={generateUrl(image)} className="schema-img" />
        <div className="schema-body">{_body}</div>
      </SmallGrid>
    </div>
  );
}

export default Schema