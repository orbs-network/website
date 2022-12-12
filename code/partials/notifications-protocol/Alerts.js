import React from "react";
import { handleUrl } from "../../util/link";

function Alerts({ _relativeURL, _ID, _body }) {


    const generateUrl = (url) => {
      return handleUrl(url, _relativeURL, _ID);
    };

  return (
    <div className="alerts">
      <div className="alerts-grid">
        <div className="alerts-description">
          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/alerts/orbs-logo.svg"
            )}
            className="alerts-description-logo"
            alt="orbs-logo"
          />
          <section className="alerts-description-body">{_body}</section>
        </div>
        <section className="alerts-right">
          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/alerts/hero.png"
            )}
            className="alerts-right-hero"
            alt="hero"
          />

          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/orbs-logo.svg"
            )}
            className="alerts-right-logo"
            id="alerts-logo-1"
            alt="orbs logo"
          />
          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/orbs-logo.svg"
            )}
            className="alerts-right-logo"
            id="alerts-logo-2"
            alt="orbs logo"
          />
          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/orbs-logo.svg"
            )}
            className="alerts-right-logo"
            id="alerts-logo-3"
            alt="orbs logo"
          />
          <img
            src={generateUrl(
              "../../../assets/img/notifications-protocol/orbs-logo-2.svg"
            )}
            className="alerts-right-logo"
            id="alerts-logo-4"
            alt="orbs logo"
          />
        </section>
      </div>
    </div>
  );
}

export default Alerts;
