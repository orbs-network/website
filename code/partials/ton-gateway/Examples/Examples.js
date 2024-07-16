import React from "react";
import { handleUrl } from "../../../util/link";
import CodeContainer from "../../shared/CodeContainer";
import MainGrid from "../../shared/MainGrid";

function Exmpales({ selectors, github, telegram, _body, _relativeURL, _ID }) {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };

  return (
    <div className="ton-gateway-example">
      <MainGrid>
        <div className="ton-gateway-example-title">{_body}</div>
        <CodeContainer
          code=""
          generateUrl={generateUrl}
          left={<Left selectors={selectors} />}
        />
        <div className="ton-gateway-example-links">
          <a href="https://github.com/orbs-network/ton-access" target="_blank">
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

const Left = ({ selectors }) => {
  return <div className="ton-gateway-example-options">{selectors}</div>;
};
