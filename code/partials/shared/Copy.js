import React from "react";
import { handleUrl } from "../../util/link";

function Copy({ _relativeURL, _ID, id }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="copy" id={id}>
      <button>
        <img src={generateUrl("/assets/img/copy.svg")} />
      </button>
      <div className="copy-tooltip">Copied!</div>
    </div>
  );
}

export default Copy;
