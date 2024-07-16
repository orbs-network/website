import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function Partner({
  title,
  _relativeURL,
  _ID,
  list,
  subtitle,
  partner,
  tx,
  link,
  linkText,
  name
}) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="liquidity-hub-launch-partners-partner">
      <div className="left">
        <img
          className={`partner-logo ${name}-logo`}
          src={generateUrl(partner)}
        />
        <h4>{subtitle}</h4>
        <ul className="liquidity-hub-list">
          {list.map((it) => {
            return (
              <li key={it}>
                <figure />
                <p>{it}</p>
              </li>
            );
          })}
        </ul>
        <a href={link} target="_blank">
          {linkText}
        </a>
      </div>
      <div className="right">
        <img className="partner-tx" src={generateUrl(tx)} />
      </div>
    </div>
  );
}

export default Partner;
