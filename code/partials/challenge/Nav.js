import React from "react";
import { handleUrl } from "../../util/link";

function Nav({ _relativeURL, _ID, lang, pill }) {
  const generateUrl = (url) => handleUrl(url, _relativeURL, _ID);
  const activeLang = lang || "en";

  return (
    <nav className="challenge-nav">
      <div className="challenge-nav-inner">
        <div className="challenge-nav-left">
          <a href={generateUrl(activeLang === "ja" ? "/jp/" : activeLang === "ko" ? "/ko/" : "/")}>
            <img src={generateUrl("/assets/img/challenge/orbs-logo.svg")} alt="Orbs" />
          </a>
          <span className="challenge-nav-pill">
            <span className="challenge-nav-dot"></span>
            <span>{pill || "Live · May 4 – 24"}</span>
          </span>
        </div>
        <div className="challenge-lang" role="navigation" aria-label="Language">
          <a href={generateUrl("/challenge/")} className={activeLang === "en" ? "active" : ""}>EN</a>
          <a href={generateUrl("/jp/challenge/")} className={activeLang === "ja" ? "active" : ""}>日本語</a>
          <a href={generateUrl("/ko/challenge/")} className={activeLang === "ko" ? "active" : ""}>한국어</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
