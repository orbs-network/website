import React from "react";
import LinkButton from "../LinkButton";

function Integrations({ list, title, prText }) {
  return (
    <div className="integrations">
      <h3 className="integrations-title">{title}</h3>
      <ul className="integrations-list">
        {list}
        <li className="integration" id="integration-pr">
          <p>{prText}</p>
          <LinkButton
            text="GitHub PR"
            url="https://github.com/open-defi-notification-protocol/projects/pulls"
          />
        </li>
      </ul>
    </div>
  );
}

export default Integrations;
