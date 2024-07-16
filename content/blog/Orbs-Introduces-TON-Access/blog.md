---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-Introduces-TON-Access/bg.jpg
blogUrl: Orbs-Introduces-TON-Access
date: 2023-01-26
title: 'Orbs Introduces “TON-Access”: A Decentralized Infura for the Open Network (TON)'
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "TON-Access is a reliable and decentralized RPC provider created specifically for TON dapps making HTTP queries to blockchain state from the browser. It provides unrestricted and anonymous access to dapp users without requiring an API key."
---

_[TON-Access](https://www.orbs.com/ton-access/)_ is a reliable and decentralized RPC provider created specifically for TON dapps making HTTP queries to blockchain state from the browser. It provides unrestricted and anonymous access to dapp users without requiring an API key.

Get started in the following link:
https://www.orbs.com/ton-access/#get-started

_TON-Access is powered by the [Orbs Network](https://www.orbs.com/). Orbs is one of the most prominent ecosystem contributors to TON, with projects like [TON Minter](https://minter.ton.org) and [TON Contract Verifier](https://tonverifier.live). Orbs is also a participant in TON’s [ecosystem fund](https://cointelegraph.com/news/new-250m-toncoin-fund-targets-dex-and-nft-tools-on-ton-blockchain) in an effort to support ecosystem growth._ 

**The app and protocol are now being launched in beta, under active development, and their use is subject to risks. Use of the app is subject to the terms and conditions which can be found [here](https://drive.google.com/file/d/1M94rXb1Ul4WfuUYKdZxTJrQBbhECPsFP/view?usp=share_link).**

### An essential infrastructure service for TON dapps

When implementing a dapp on TON you normally have two parts - a smart contract written in FunC and a frontend client written in JavaScript. The frontend client runs on users’ browsers and communicates with the contract on chain by calling getters and sending transactions via HTTP.

Making HTTP calls to the chain from a browser requires an HTTP API provider - this is where TON-Access comes in! TON-Access gives your dapp users unthrottled HTTP access to the chain.

### Why TON Access?

![Access](/assets/img/blog/Orbs-Introduces-TON-Access/image5.jpg)


**Unthrottled:** No throttling for anonymous dapp users

Traditional RPC gateways like [toncenter](https://toncenter.com/) throttle anonymous users to 1 request per second. Most dapps cannot operate under these restrictions since their users are anonymous. Toncenter is a great service, but it’s not perfectly suitable for dapps.

**No API Key:** Decentralized access without registering API keys

Traditional RPC gateways like toncenter reduce throttling by forcing you to register an API key. This API key is problematic for dapps because it cannot be stored client-side (it’s a secret) and it cannot be stored server-side (this would add a centralized dependency to the dapp).

**Serverless:** No need to run your own RPC backend server

Some dapp developers on TON resort to running their own backend servers. Running a backend server as part of your dapp is considered a bad practice  since these servers are centralized. If you suffer devops downtime, your users will lose access to their funds.

**Decentralized:** Trust a protocol, not a centralized business

The servers of TON-Access are operated by dozens of permissionless validators of the Orbs Network, staked with $100 million in Proof-of-Stake consensus. Your access to TON blockchain does not depend on a single centralized business.

**High Redundancy:** Robust API with no single point of failure

Since TON-Access servers are operated by dozens of independent validators of the Orbs Network, your connection enjoys a high degree of redundancy and multiple fallbacks. Orbs validators are running in mainnet since 2019 with virtually no downtime.

**Secure:** Support for raw ADML to enable lite clients

For a completely trustless setup, TON-Access also supports raw ADNL via HTTP proxy and allows your dapp client to perform client-side verifications of all responses from the chain like trustless lite clients.

### The importance of decentralized HTTP access

TON-Access was created after learning from some of the failings of Ethereum. Most dapps running on Ethereum rely on the MetaMask browser extension and its default RPC provider - [Infura](https://www.infura.io/) - for making HTTP queries to the chain. 

The problem is that Infura is a centralized business. This introduces a significant centralized bottleneck in dapps that otherwise aim to be fully decentralized. When Infura suffers an outage, for example, it often feels like Ethereum itself is down as thousands of Ethereum users lose access to their funds on its various dapps.

Decentralized projects such as pokt.network were created in the Ethereum ecosystem to overcome this problem. TON-Access follows a similar design.

### Get an RPC endpoint for your dApp on TON

TON-Access supports all popular RPC protocols on TON including:

- [TonCenter HTTP API v2](https://toncenter.com/api/v2/) - replaces the https://toncenter.com/api/v2/jsonRPC endpoint
- [TonHub HTTP API v4](https://github.com/ton-foundation/ton-api-v4) - replaces the https://mainnet-v4.tonhubapi.com endpoint
- [Raw ADNL Proxy](https://github.com/ton-community/ton-lite-client)

Developers on TON can easily get an RPC endpoint for their dApps from TON-Access by copy-pasting a short code snippet into their dApp client code. Get your RPC endpoint [here](https://www.orbs.com/ton-access/#get-started).

Learn more in the TON-Access Github README.

![rpc](/assets/img/blog/Orbs-Introduces-TON-Access/image2.png)



### Powered by the Orbs Network

![chart](/assets/img/blog/Orbs-Introduces-TON-Access/image3.png)


Orbs Network has dozens of independent validators running Proof-of-Stake consensus with over $100 million staked. The network has been running in mainnet since 2019. By routing your dApp RPC requests through Orbs validators, you maintain decentralized access to TON blockchain.


<div class='line-separator'> </div>

**About Orbs**

The Orbs Network is an open, decentralized and public blockchain infrastructure executed by a secure network of permissionless validators using Proof-of-Stake (PoS) consensus.

Orbs is set up as a separate decentralized execution layer operating between existing L1/L2 solutions and the application layer, as part of a tiered blockchain stack, without moving liquidity onto a new chain. Orbs acts as a “decentralized backend”, enhancing the capabilities of existing smart contracts and opening up a whole new spectrum of possibilities for Web 3.0, DeFi, NFTs and GameFi.

Orbs was founded in 2017 and launched its mainnet and token in March of 2019. Orbs is being developed by a dedicated team of more than 30 people, with offices in Tel Aviv, London, New York, Tokyo and Seoul.

For more information, please visit www.orbs.com, or join our community at:

Telegram: https://t.me/OrbsNetwork

Twitter: https://twitter.com/orbs_network

Learn more [about Orbs](https://www.orbs.com/Orbs-A-Re-introduction/)

