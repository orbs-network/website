import React from "react";
import MainGrid from "../../shared/MainGrid";

function index({ _body, title, buttons }) {
  return (
    <div className="dsltp-section-4 dsltp-section">
      <MainGrid>
        {title && <h3 className="page-colored-section-title">{title}</h3>}
        {_body && <div className="dsltp-section-4-body">{_body}</div>}
        {buttons && <div className="dsltp-section-4-buttons">{buttons}</div>}
      </MainGrid>
    </div>
  );
}

export default index;
