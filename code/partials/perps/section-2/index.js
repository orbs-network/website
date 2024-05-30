import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";
import SectionTitle from "../../shared/SectionTitle";

function main({ title, diagram, _relativeURL , _ID, _body}) {

  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="perps-section-2 perps-section">
      <MainGrid>
      {title && <SectionTitle title={title} />}
      <div className="perps-section-2-body">{_body}</div>
      <img src={generateUrl(diagram)} className='perps-section-2-diagram' />
      </MainGrid>
    </div>
  );
}

export default main;
