import React from "react";


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

function NotificationsProtocol({
  hero,
  contribute,
  integrations,
  alerts,
  apps,
}) {
  return (
    <div className="notifications">
      <pre>
        <code className="language-javascript">{markdown}</code>
      </pre>

      {hero}
      {contribute}
      {integrations}
      {alerts}
      {apps}
    </div>
  );
}

export default NotificationsProtocol;
