import React from 'react'
import { handleUrl } from '../../../util/link';

function Social({ url, image, _relativeURL, _ID }) {
   const generateUrl = (url) => {
     return handleUrl(url, _relativeURL, _ID);
   };
    return (
      <a href={url} target="_blank" className="socials-link">
        <img src={generateUrl(image)} />
      </a>
    );
}

export default Social
