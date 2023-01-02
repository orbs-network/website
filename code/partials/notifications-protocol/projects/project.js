import React from 'react'
import { handleUrl } from '../../../util/link';

function Project({ title, _body, url, image, _relativeURL, _ID }) {
     const generateUrl = (url) => {
       return handleUrl(url, _relativeURL, _ID);
     };
    return (
      <div className="project">
        <h4 className="project-title">{title}</h4>
        <div className="project-body">{_body}</div>
        <a href={url} target="_blank" className="project-link">
          View More
        </a>
        <img src={generateUrl(image)} className="project-image" />
      </div>
    );
}

export default Project