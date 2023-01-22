import React from "react";
import { handleUrl } from "../../util/link";

function Asset({
  image,
  png,
  svg,
  _body,
  pngText,
  svgText,
  _relativeURL,
  _ID,
  fileName,
  background = "transparent",
  border = "#5e75e8",
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="brand-asset">
      <div
        className="brand-asset-image"
        style={{ background, border: `1px solid ${border}` }}
      >
        <img src={generateUrl(image)} />
      </div>
      <div className="flex">
        <div className="brand-asset-body">{_body}</div>
        <div className="brand-asset-buttons">
          <a
            data-name={fileName}
            className="brand-asset-download"
            href={generateUrl(png)}
            download={fileName}
          >
            {pngText}
          </a>
          <a
            className="brand-asset-download"
            data-name={fileName}
            href={generateUrl(svg)}
            download={fileName}
          >
            {svgText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Asset;
