---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Deep-Dive-to-Orbs-Lambda/bg.jpg
blogUrl: Deep-Dive-to-Orbs-Lambda
date: 2022-11-03
title: "Deep Dive to Orbs Lambda"
author:
  - /blog/common/authors/TalKol.md
type:
short_description: "Orbs Lambda is an event driven, serverless and decentralized cloud function, similar in concept to AWS Lambda - only decentralized. Cloud functionsfunction are implemented in a few lines of code, deployed to the Orbs Network and then executed by the network validators. Much like AWS Lambda, there is no devops involved and no instances to worry about. Unlike AWS Lambda, the protocol is fully transparent and decentralized, providing execution guaranteed to the user community by relying on dozens of independent network validators that participate in the protocol."
---

### What is Orbs Lambda?

**Decentralized Serverless Cloud Function**

Orbs Lambda is an event driven, serverless and decentralized cloud function, similar in concept to [AWS Lambda](https://aws.amazon.com/lambda/) - only decentralized.

Cloud functions are implemented in a few lines of code, deployed to the Orbs Network and then executed by the network validators. Much like AWS Lambda, there is no devops involved and no instances to worry about. Unlike AWS Lambda, the protocol is fully transparent and decentralized, providing execution guaranteed to the user community by relying on dozens of independent network validators that participate in the protocol.

**Code in JavaScript**

Cloud functions in Orbs Lambda are written in an industry standard language - JavaScript (or TypeScript). Developers are not required to learn unfamiliar smart contract languages or operate strange toolchains - they can rely on their existing knowledge. Developers are free to utilize dozens of familiar [NPM](https://www.npmjs.com/) packages such as [web3.js](https://www.npmjs.com/package/web3) or [node-fetch](https://www.npmjs.com/package/node-fetch).

**Execution Triggers**

Orbs Lambda cloud functions are executed automatically according to pre-chosen triggers. Triggers can include a scheduled time interval (similar to a cron job), on-chain events from multiple L1 blockchains (logs emitted from smart contracts or state changes) and HTTP requests. Once a lambda function is deployed, network validators monitor these triggers and guarantee execution as soon as they occur.

**Enhance Existing Smart Contracts**
Orbs Lambda is not meant to replace existing L1 smart contracts. It is a complementary solution that allows developers to enrich their business logic with actions that the smart contract sandbox is unable to do, without sacrificing decentralization. Dapps that are currently relying on their own centralized backends are welcome to migrate these backends to Orbs Lambda and eliminate the centralized bottlenecks from their offering.

**Alternatives**

Orbs Lambda is designed for ease of use. Writing and deploying an Orbs Lambda function can take as little as 30 minutes. For a more powerful solution that resembles AWS EC2, see [Orbs VM](https://docs.orbs.network/v3/orbs-vm/what-is-orbs-vm).


### Network Diagram

![Network](/assets/img/blog/Deep-Dive-to-Orbs-Lambda/image1.png)


The Orbs Network includes dozens of independent validators that run Proof-of-Stake consensus and execute Orbs Lambda JavaScript functions in a decentralized manner.
 
Orbs is not an L1 blockchain and is not trying to replace existing smart contracts. It is more accurately described as an oracle network similar to [Chainlink](https://chain.link/), operating in L3. Orbs runs over leading L1/L2 blockchains like the EVM and TON and allows dapps to enhance smart contracts with advanced capabilities that are [unsupported](https://docs.orbs.network/v3/overview/enhanced-execution) by the sandboxed L1/L2 smart contract model.
 
 
### Example Use Cases

Orbs Lambda is designed to enhance the capabilities of existing smart contracts. Here are some real world examples of how dapps can use this infrastructure. Notice that many of these examples could have been implemented with a centralized backend operated by the dapp itself, but this would create a centralized bottleneck that can be avoided by using the dozens of validators of Orbs Network.
 
 
 
**Mobile push notifications for dapp end-users for on-chain events**

A dapp like Aave or Compound may want to alert its users when an on-chain condition is triggered - for example before their positions are in danger of being liquidated. A lambda function wakes up every block and checks if any of the positions passes a liquidation threshold and if so, triggers a mobile push notifications webhook, a tweet or a Telegram/Discord chat message. A more advanced version of this lambda could also generate an on-chain transaction to reduce the position in the protocol automatically to avoid liquidation completely by adjusting it according to the live market price.
 
**Calculating a staked vote according to historic balance snapshot on multiple chains**

An Orbs Lambda function can access on-chain data. Unlike smart contracts, it is not limited to the state head and can also query historical balances. Unlike smart contracts, it is also not limited to the same blockchain and can query multiple blockchains like Ethereum, Polygon and BNB Chain. Governance votes in dapps usually rely on a historic balance snapshot to avoid vote manipulation by buying tokens after the vote was announced. Dapp users often exist on multiple blockchains since tokens are often bridged. If the vote passes, the lambda can generate an on-chain transaction - a great way to implement decentralized smart contract upgrades.
 
**Auto compounding of vaults like Harvest.finance or other advanced strategies**

Vaults are decentralized "hedge funds" that implement a DeFi investment strategy on-chain in a completely trustless manner using smart contracts. Efficient investment strategies often require automatic triggers that adjust the position in some way. One example is auto compounding - selling rewards back to the base assets and re-depositing them to increase the position principal. Another example is comparing two alternative positions and moving funds automatically according to the one with the best APR. The lambda function checks for relevant triggers on every new block and generates the transaction to trigger the appropriate response on-chain when the position needs to be adjusted.
 
**Executing large trades in DeFi without price impact by implementing TWAP**

Trades executed on on-chain DEX/AMM protocols are atomic and take place immediately. When the trade is relatively large or relies on a low liquidity pair, this will result in significant loss due to price impact. An Orbs lambda function can break the single trade into multiple smaller ones every several minutes, allowing enough time for arbitrageurs to correct the pair back to market price, thus reducing price impact. The lambda function will generate numerous transactions to carry the smaller trades and adjust price limits according to live market prices to avoid front running.
 
**Price feed similar to Chainlink or any other data oracle**

An Orbs Lambda function is free to fetch any data available online and is not limited to the current on-chain state. External market price feed is a useful example of such data that can be read from a multitude of exchanges and price providers (Coinbase, Binance, CoinMarketCap, Coingecko, etc). Lambda functions wake up every minute, query the price from all external sources, then sign the price off-chain and send the signatures to a new dapp smart contract that verifies the Orbs quorum and records an aggregated price on-chain.
 
 
### Step by Step Overview

The development process of a new Orbs Lambda cloud function includes the following steps:
 
1. **[Select a unique ID](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/select-unique-id)** for your lambda function (alpha-numeric characters and dashes).
2. **[Create a local git repository](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/project-template)** conforming to the appropriate project structure.
3. **[Implement the logic](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/index.js-implementation)** of your cloud function in JavaScript (or TypeScript).
4. **[Write a simple test suite](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/testing-locally)** to verify your lambda function logic locally.
5. **Deploy your lambda** by creating a PR (git pull request) to the official Orbs repo on GitHub.
6. **[Wait until your lambda is deployed](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/deploying-to-production)** by the system, errors and feedback will appear on the PR.
7. **[Analyze execution](https://docs.orbs.network/v3/orbs-lambda/step-by-step-overview/analyzing-execution)** of your lambda in production by examining the network [status page](https://status.orbs.network/).



<div class='line-separator'> </div>


Want to learn more about the Orbs network? Check out the developers documentation [here](https://docs.orbs.network/v3/overview/what-is-orbs), or chat with the Orbs team on the official [Telegram](https://t.me/OrbsNetwork) channel and on [Discord](https://discord.com/invite/sswGDYGBt5).


