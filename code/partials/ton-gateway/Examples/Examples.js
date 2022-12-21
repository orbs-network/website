import React from "react";
import { handleUrl } from "../../../util/link";
import MainGrid from "../../shared/MainGrid";

function Exmpales({ selectors, github, telegram, _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-example">
      <MainGrid>
        <div className="ton-gateway-example-title">{_body}</div>
        <div className="ton-gateway-example-flex">
          <div className="ton-gateway-example-options">{selectors}</div>
          <div className="ton-gateway-example-code">
            <div className="ton-gateway-example-copy">
              <button>
                <img src={generateUrl("/assets/img/copy.svg")} />
              </button>
              <div className="ton-gateway-example-copy-tooltip">Copied!</div>
            </div>
            <pre>
              <code className="ton-gateway-hljs"></code>
            </pre>
          </div>
        </div>
        <div className="ton-gateway-example-links">
          <a href="https://github.com/orbs-network/ton-gateway" target="_blank">
            {github}
          </a>
          <a href="https://t.me/ton_gateway" target="_blank">
            {telegram}
          </a>
        </div>
      </MainGrid>
    </div>
  );
}

export default Exmpales;
