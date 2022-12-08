import React from "react";
import { handleUrl } from "../../util/link";

function Section({
  _body,
  image,
  _relativeURL,
  _ID,
  imgFirst,
  id,
  background,
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="common-grid-section orbs-vm-section" id={id} style={{ background }}>
      <div className="common-grid-section-grid">
        {!imgFirst ? (
          <>
            <div className="common-grid-section-left common-grid-section-text">
              {_body}
            </div>
            <img
              className="common-grid-section-image"
              src={generateUrl(image)}
            />
          </>
        ) : (
          <>
            <img
              className="common-grid-section-image"
              src={generateUrl(image)}
            />
            <div className="common-grid-section-left common-grid-section-text">
              {_body}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Section;
