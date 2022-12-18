import React from "react";
import { handleUrl } from "../../../util/link";
import Code from "../../Code";


const markdown = `
const BigNumber = require("bignumber.js");

class LowHealth {
  static displayName = "Low Health";
  static description = "Get notified when health factor is getting low (below 1.1)";

  async onInit(args) {
    const abi = [{/* ... */}];
    this.contract = new args.web3.eth.Contract(abi, "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");
  }

  async onBlocks(args) {
    const position = await this.contract.methods.getPositionData(args.address).call();
    if (new BigNumber(position.healthFactor).dividedBy("1e18").toNumber() < 1.1) return {
      notification: "Health factor dropped below 1.1"
    };
  }
}

module.exports = LowHealth;
`;


function Example({ _body, _relativeURL, _ID }) {

  return (
    <div className="contribute-example">
      <div className="contribute-example-body">{_body}</div>
      <div className="contribute-example-hero">
        <Code markdown={markdown} />
      </div>
    </div>
  );
}

export default Example;
