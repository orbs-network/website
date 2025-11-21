import React from "react";
import MainGrid from "../../shared/MainGrid";
import { handleUrl } from "../../../util/link";

function index({ title, diagram, _relativeURL , _ID }) {
  
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="dsltp-section-3 dsltp-section">
      <MainGrid>
      {title && <h3 className="page-colored-section-title">{title}</h3>}
      <img src={generateUrl(diagram)} className='dsltp-section-3-diagram' />
      </MainGrid>
    </div>
  );
}

export default index;
