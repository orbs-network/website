import React from "react";
import MainGrid from "../../shared/MainGrid";

function index({ _body, title }) {
  return (
    <div className="perps-section-3 perps-section">
      <MainGrid>
        <h3 className="page-colored-section-title">{title}</h3>
        <div className="perps-section-3-body">{_body}</div>
      </MainGrid>
    </div>
  );
}

export default index;
