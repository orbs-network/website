import React from 'react'
import { handleUrl } from '../../../util/link';
import PostCard from '../../shared/PostCard'

function Benefit({ _relativeURL, _ID, _body, title }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <PostCard generateUrl={generateUrl} className="dtwap-benefit">
      <h3 className="dtwap-benefit-title">{title}</h3>
      <div className="dtwap-benefit-body">{_body}</div>
    </PostCard>
  );
}

export default Benefit