import React from "react";
import MainGrid from "../../shared/MainGrid";
import LinkButton from "../LinkButton";

function Contribute({ title, example, bottomText, github, telegram }) {
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
              text={github}
            />
            <LinkButton url="https://t.me/defi_notifications" text={telegram} />
          </div>
        </section>
      </MainGrid>
    </div>
  );
}

export default Contribute;
