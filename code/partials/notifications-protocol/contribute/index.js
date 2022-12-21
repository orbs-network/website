import React from "react";
import MainGrid from "../../shared/MainGrid";
import LinkButton from "../LinkButton";

function Contribute({ title, example, bottomText }) {
  return (
    <div className="contribute">
      <MainGrid>
        <h3 className="contribute-title">{title}</h3>
        {example}
        <section className="contribute-bottom">
          <h5>{bottomText}</h5>
          <div className="contribute-bottom-buttons">
            <LinkButton
              url="https://github.com/open-defi-notification-protocol/projects#open-defi-notification-protocol"
              text="Readme"
            />
            <LinkButton
              url="https://github.com/open-defi-notification-protocol/projects/pulls"
              text="GitHub PR"
            />
          </div>
        </section>
      </MainGrid>
    </div>
  );
}

export default Contribute;
