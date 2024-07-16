import React from 'react'
import { handleUrl } from '../../../util/link';

function Integration({
  logo,
  github,
  demo,
  image,
  _relativeURL,
  _ID,
  background,
  name
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="integrations-integration">
      <span className="integrations-integration-top">
        <img className="integrations-integration-logo" src={logo} />
        {name && <h3 className="integrations-integration-name">{name}</h3>}
      </span>
      <div
        className="integrations-integration-demo"
        style={{ background: background }}
      >
        <img src={image} />
      </div>
      <div className="integrations-integration-links">
        <a href={github} target="_blank">
          <img src={generateUrl("/assets/img/dtwap/github.svg")} />
        </a>
        <a href={demo} target="_blank">
          <img src={generateUrl("/assets/img/dtwap/link.svg")} />
        </a>
      </div>
    </div>
  );
}

export default Integration