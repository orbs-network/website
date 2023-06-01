---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Introducing-dLIMIT-for-DEXs/bg.jpg
blogUrl: Introducing-dLIMIT-for-DEXs
date: 2023-06-01
title: "Introducing dLIMIT - Decentralized Limit Orders for DEXs Powered by Orbs"
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "Orbs is excited to introduce its newest order type: dLIMIT, offering optimal and reliable execution of limit orders for DEXs."
---
The past several years have solidified DeFi as a new financial paradigm, with [billions of dollars](https://www.coingecko.com/en/dex) in daily trading volume executed across DEXs and AMMs. At the same time, due to the inherently limited capabilities of smart contracts, DeFi markets lack features that are commonplace in traditional finance which are crucial to deal with the heightened volatility and liquidity issues that characterize the current crypto landscape.

Orbs is pioneering the concept of [L3 infrastructure](https://www.orbs.com/overview/), by utilizing the Orbs platform’s decentralized network to enhance the capabilities of existing EVM smart contracts. Using this novel technology, Orbs develops advanced DeFi tools such as [dTWAP](https://www.orbs.com/dtwap/) - decentralized algorithmic TWAP orders for DEXs.

**As part of this lineup of products, Orbs is excited to introduce its newest order type: dLIMIT, offering optimal and reliable execution of limit orders for DEXs.**

This blog outlines the concept and architecture behind Orbs’ new decentralized dLIMIT product that will allow DEXs to harness Orbs L3 technology to benefit the platform and its users.


### Intro to dLIMIT

Most DeFi users are probably familiar with the regular DEX “swap” order, similar to a market order in CeFi. 

A limit order, on the other hand, enables users to buy or sell tokens at a specified price or better. While the price is guaranteed, the order being executed is not - limit orders will be executed only if the price meets the order qualifications.

However, decentralized limit orders are not trivial to implement using smart contracts. Flawed implementation of limit orders in DeFi can hurt users by executing the order at a price much worse than they intended, or the order not being executed at all.

This is where Orbs L3 steps in - the Orbs dLIMIT [smart contract](https://github.com/orbs-network/twap) for DEXs ensures that limit orders are executed at an optimal price and at fair fees, in a decentralized and reliable manner.

In addition, the Orbs team has designed a UI template that can be easily integrated and customized by any DEX, to create an intuitive, user-friendly, and informative way for users to set up limit orders trades.


![screenshot](/assets/img/blog/Introducing-dLIMIT-for-DEXs/image1.png)


**Example:**
In the screenshot above, the user would like to sell 50 WMATIC to USDC. The current market price of MATIC is 0.855 USDC. The user specifies a limit price of 1.5 USDC, meaning that the order will be executed when WMATIC reaches a price equal to, or above, 1.5 USDC.


### Contract Architecture and Design

 dLIMIT is based on the [dTWAP protocol](https://www.orbs.com/dtwap/) by Orbs and is in fact a specific instance of dTWAP-limit order, in which the total order size equals the individual trade size. 

dTWAP is an [audited](https://github.com/orbs-network/twap/blob/master/Audit-Report-PeckShield.pdf), production-tested product that has been integrated into major DEXs such as QuickSwap (the largest native DEX on Polygon) and SpookySwap (largest on Fantom), with millions of dollars in trading volume to date.

The dLIMIT smart contract architecture defines 2 actors:

**Maker:** User, the Order creator. 

- Controls the Order restriction parameters such as limit price.

**Taker:** Incentivized independent participators that monitor Orders submitted by makers. 

- Takers try to find the best path for executing the limit order and submit bids for those orders, including a fee for the taker.
- Takers spend the effort needed to find the best path and risk being out-bid in the bidding war by another taker with a better path or lower fee.

One honest taker (i.e., a taker who is willing to set the fee at the minimum amount needed to cover gas costs) is enough to ensure the entire system functions effectively at spot prices.

The dLIMIT Smart Contract does not hold any funds, has no owners, administrators or other roles and is entirely immutable once deployed on an EVM blockchain.


### Powered by Orbs L3

The [Orbs Network](https://orbs.com/) is an open, decentralized and public blockchain infrastructure executed by a secure network of permissionless validators (known as “Guardians”) using Proof-of-Stake (PoS) consensus. Orbs is optimized to provide “L3” services, working in conjunction with existing L1 and L2 layers and acting as a “decentralized backend” that enhances the capabilities of EVM smart contracts. Orbs Network mainnet is live since 2019 and has dozens of [active validators](https://status.orbs.network/) staked with [over $100M](https://etherscan.io/address/0x01d59af68e2dcb44e04c50e05f62e7043f2656c3).

The network provides its [L3 services](https://www.orbs.com/network/) by operating as a decentralized serverless cloud that allows developers to design applications that extend the capabilities of their smart contracts without relying on traditional centralized server solutions. These applications are deployed to be executed by the Orbs Guardians in a decentralized way.

As part of the dLIMIT protocol, Orbs Guardians will run a tailored function utilizing ORBS-Lambda that acts as the single honest bidder, or “taker”, that is required for the dLIMIT protocol to run optimally and achieve prices that track the spot market price as closely as possible.

The application run by Orbs Guardians will, in a decentralized manner, monitor the dLIMIT Smart Contract. When an order has been sent and open for bids, Orbs Guardians will automatically calculate and submit an honest bid. The fee component of the bid will include only a request to be estimated for the estimated gas fees. In addition, the Guardians will determine the optimal path for the transactions using services such as ParaSwap API, or the DEXs own router.

**By automatically creating honest bids that are hardcoded to only specify a minimal gas fee and optimal trade path, Orbs Guardians will provide a strong level of assurance that the trades executed and the dLIMIT contract track spot market prices as closely as possible.**

For more information regarding the dTWAP and dLIMIT protocol, join the [Telegram channel](https://t.me/dTWAPSupportGroup) support group.



<div class='line-separator'> </div>


### Orbs - Setting the Standard in DeFi

Harnessing the ability of Orbs’ unique L3 infrastructure to expand the capabilities of DeFi platforms can allow DEXs to provide highly efficient advanced orders to its user base without sacrificing decentralization. 

As this blog post outlines, dLIMIT by Orbs is the optimal limit order solution for DEXs over existing alternatives. This is a result of 2 main factors:
- The underlying Orbs network infrastructure which ensures decentralization, redundancy and reliability.
- The dLIMIT smart contract, which guarantees optimal execution and user protection.

Already there is a lot of interest in the Orbs dLIMIT product from leading DEXs, with several integrations underway. Stay tuned for more updates!


For more information, visit www.orbs.com, or join the community at:

Telegram: https://t.me/OrbsNetwork

Twitter: https://twitter.com/orbs_network






