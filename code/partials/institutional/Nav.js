import React from "react";

function Nav({ home, logo, logoAlt, ctaLabel, ctaUrl, languages }) {
  const current = (languages || []).find((l) => l.isCurrent) || (languages || [])[0];
  const others = (languages || []).filter((l) => l !== current);
  return (
    <header className="institutional-nav">
      <div className="institutional-nav-inner">
        <a className="institutional-nav-logo" href={home || "/"} aria-label="Orbs home">
          <img src={logo} alt={logoAlt || "Orbs"} />
        </a>

        <div className="institutional-nav-right">
          {current && (
            <details className="institutional-nav-lang">
              <summary className="institutional-nav-lang-current">
                <span>{current.code}</span>
                <span className="institutional-nav-lang-caret" aria-hidden="true">▾</span>
              </summary>
              {others.length > 0 && (
                <ul className="institutional-nav-lang-options">
                  {others.map((l, i) => (
                    <li key={i}>
                      <a href={l.link}>{l.code}</a>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          )}

          <a
            className="institutional-btn institutional-btn-outline institutional-btn-square"
            href={ctaUrl || "/contact/"}
          >
            <span>{ctaLabel || "Talk to the team"}</span>
            <span className="institutional-btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
