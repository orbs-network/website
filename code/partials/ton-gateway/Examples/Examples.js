import React from "react";
import CodeContainer from "../../shared/CodeContainer";
import MainGrid from "../../shared/MainGrid";

function Exmpales({ selectors, github, telegram, _body, copy }) {
  return (
    <div className="ton-gateway-example">
      <div id="get-started" />
      <MainGrid>
         <div className="ton-gateway-example-title">{_body}</div>
        <CodeContainer copy={copy} code='' left={<Left selectors={selectors} />} />
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

const Left = ({ selectors }) => {
  return <div className="ton-gateway-example-options">{selectors}</div>;
};
