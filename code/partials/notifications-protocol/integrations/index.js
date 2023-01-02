import React from "react";
import MainGrid from "../../shared/MainGrid";
import LinkButton from "../LinkButton";

function Integrations({ list, title, prText }) {
  return (
   
      <div className="integrations">
         <MainGrid>
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
         </MainGrid>
      </div>
   
  );
}

export default Integrations;
