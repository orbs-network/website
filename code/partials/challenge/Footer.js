import React from "react";
import { handleUrl } from "../../util/link";

function Footer({ _relativeURL, _ID, tagline, followLabel, termsLabel, privacyLabel, contactLabel }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);

  return (
    <footer className="challenge-footer">
      <div className="challenge-shell">
        <div className="challenge-foot-top">
          <div>
            <img src={generateUrl("/assets/img/challenge/orbs-logo.svg")} alt="Orbs" />
            <p>{tagline || "CeFi-level execution, on-chain. A Layer-3 for aggregated liquidity, verifiable execution, and agentic trading."}</p>
          </div>
          <div>
            <div className="challenge-socials-label">{followLabel || "Follow us"}</div>
            <div className="challenge-socials">
              <a className="challenge-social challenge-social-x" href="https://twitter.com/orbs_network" target="_blank" rel="noopener">
                <span className="challenge-social-ic challenge-social-ic-x">𝕏</span>
                <span>@orbs_network</span>
              </a>
              <a className="challenge-social challenge-social-ja" href="https://twitter.com/JapanOrbs" target="_blank" rel="noopener">
                <span className="challenge-social-ic challenge-social-ic-ja">JP</span>
                <span>@JapanOrbs</span>
              </a>
              <a className="challenge-social challenge-social-kr" href="https://t.me/orbskorea" target="_blank" rel="noopener">
                <span className="challenge-social-ic challenge-social-ic-kr">KR</span>
                <span>Korean Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="challenge-foot-bot">
          <span>© 2026 Orbs Network</span>
          <div className="challenge-foot-legal">
            <span>{termsLabel || "Terms"}</span>
            <span>{privacyLabel || "Privacy"}</span>
            <span>{contactLabel || "Contact"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
