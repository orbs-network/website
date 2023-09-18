---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/bg.png
blogUrl: Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs
date: 2023-09-18
title: "Liquidity Hub by Orbs - The New Standard for DEXs"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "Liquidity Hub by Orbs brings the power of aggregated liquidity to any DEX-AMM, enabling them to provide better price quotes to their users without jeopardizing their liquidity providers."
---

### The Need for Aggregated Liquidity

DEX-AMMs are the driving engine behind the DeFi revolution, as its most fundamental cornerstone. One of the most basic roles of any DEX is to provide its users with the best price possible when executing a trade. Better prices are obtained via better liquidity. However, on-chain liquidity is highly fragmented as it is spread across different chains, across different AMMs within the chain, and across different pools within the AMM.

The problem of liquidity fragmentation in DeFi has become acute and directly impacts users via adverse exchange prices and material negative price impact on swaps.

This problem contributed to the rise of liquidity aggregators such as [1inch](https://1inch.io/), [ParaSwap](https://www.paraswap.io/), [CowSwap](https://swap.cow.fi/#/1/swap/WETH), and others. While these aggregators do generally provide better prices as compared to any one individual DEX, thereby making it increasingly difficult for individual DEXs to compete, much of the value saving is routed into the aggregates' pockets in the form of “positive slippage” and the users are not necessarily getting optimal prices.  


While in the past, it seemed like most DEXs were focused on safeguarding their liquidity and volume within their own liquidity pool, it has now become ever more obvious that the future of DeFi lies with liquidity aggregation. A notable player who recently chose this path is [Uniswap](https://uniswap.org/), the largest DEX-AMM in existence. UniSwap recently announced [UniswapX](https://blog.uniswap.org/uniswapx-protocol), an aggregator interface outsourcing routing complexity to third-party fillers who complete swaps using on-chain third-party liquidity sources.       

In light of the above, how can individual DEXs stay competitive in the age of aggregated liquidity?


Introducing Liquidity Hub…

**Liquidity Hub by Orbs brings the power of aggregated liquidity to any DEX-AMM, enabling them to provide better price quotes to their users without jeopardizing their liquidity providers.**


### What is Liquidity Hub?

Liquidity Hub is an L3 infrastructure software that provides an optimization layer above the AMM, which taps external liquidity for better price quotes and lower price impact.

Instead of the typical swap that searches for the best route within the DEX's limited liquidity pools, Liquidity Hub enhances this process by utilizing additional liquidity sources:

**1) On-chain solver auction:** Third-party solvers who compete to fill swaps using on-chain liquidity like AMM pools or their own private inventory.

**2) Decentralized orders via API:** Decentralized orders, accessible using API. Enabling institutional/professional traders, such as market makers, to submit bids and compete to fill swaps.

![infographic](/assets/img/blog/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/image1.png)


Liquidity Hub allows DEXs to attempt to execute trades without going through the AMM and experiencing AMM price impact. If the layer is unable to execute the trade at a better price than the AMM, the trade will fallback to the AMM contract and execute as usual.

Therefore, Liquidity Hub can only improve a trader’s experience. If Liquidity Hub isn’t competitive, meaning it would only execute at a worse price for the user or can’t execute at all, the swap will be routed through the AMM contract directly as usual.


![flow](/assets/img/blog/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/image2.png)




### Liquidity Hub Architecture & Product Spec

Liquidity Hub is operated by a mix of an on-chain contract (deployed right next to the AMM contract) and backend logic (still running on-chain via Orbs decentralized L3 nodes). In any case, the Liquidity Hub on-chain contract protects end-users and ensures that their funds are safe and significant price manipulations cannot occur.

Regular users attempting to swap don’t have to be aware that Liquidity Hub even exists. The Liquidity Hub contract guarantees that the execution price of the swap will be better than the execution price on the AMM contract. In other words, if Liquidity Hub isn’t competitive, it will be avoided. Since this guarantee is implemented at the contract level, there is no trust involved.

Part of the Liquidity Hub logic is implemented off of the DEX’s underlying chain (off-chain risks can be mitigated using Orbs L3 as further described below). Since the data structure is held off-chain, adding and removing orders from the Liquidity Hub will take a few milliseconds (without waiting for a new block to be closed) and will not cost gas. All of these properties are attractive for market makers because they are on par with CEXs.

All funds are held on-chain in a non-custodial manner. Participants that place an order in Liquidity Hub keep their funds in their own wallet. The Liquidity Hub contract will be approved to initiate the transaction that sends the funds from the account on match. Verification of orders will always take place on-chain through the Liquidity Hub contract. The contract will verify that the execution upholds both sides’ requirements and that the execution price is better than the AMM. On match, the funds will be exchanged between the parties directly on-chain.

Below are the key product spec of Liquidity Hub:
- No change in the DEX UI for users.
- API for solvers + decentralized order interface for MMs Nominal to zero latency execution for users.
- Token spending approval by users on MetaMask.
- Funds remain in the user wallet until trades execute.
- Liquidity Hub trades are gasless for users (although solvers may price gas into their fees)


### Liquidity Hub Main Features

**Avoiding LP Cannibalization**

One of the primary requirements of Liquidity Hub is to avoid cannibalizing the existing AMM business. 

This means that existing LPs need to generate the same revenue with Liquidity Hub enabled as they would have generated without it.

How is this achieved?

The graph below analyzes the performance of Quickswap trades using Dune Analytics. The x-axis is the price impact (percent) suffered per trade. The y-axis is the volume. The graph is calculated over all trades over a long period of time. We’ve executed similar queries on UniSwap and Pancakeswap, and the numbers are actually almost identical.


![graph](/assets/img/blog/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/image3.png)


The first thing we see in the graph is that price impact has two sides. Negative price impact is where users swap tokens for prices that are worse than market price. These are usually retail users. Positive price impact is where users swap tokens for prices that are better than market price. These are usually institutional arbitrageurs. An AMM is a zero sum game, for every trade with a negative price impact there’s a parallel trade with a positive one.

Arbitrageurs have to compete on the positive price impact trades since those are profitable. Ordering the transactions takes place by chain validators, so they are essentially sharing a percentage of the profit with them (via MEV, gas bids, etc). 

Since Liquidity Hub trades have priority over AMM trades (assuming price for users is similar) and it does not rely on the chain validators for its ordering, Liquidity Hub’s function is effectively to remove these MEV losses and re-distribute them among users, LPs and solvers. In addition, Liquidity Hub’s trades don’t generate any impermanent loss for LPs, which is an improvement over AMM trades.

In this way, the DEX keeps its ability to incentivize LPs to keep providing liquidity on its platform.


**Cutting Out the Middleman**

Liquidity Hub provides MEV protection.

As explained above, arbitrage loss to MEV can be significant. Since Liquidity Hub matches orders off-chain (without block producers), it removes MEV losses. These savings are then re-distributed between the users and the DEX itself. This ratio can be set by the platform to best suit its needs.

The distribution mechanism is a key differentiator between Liquidity Hub and other protocols such as UniSwapX.


**Fully Composable Solution for Solvers**

Liquidity Hub is a fully composable DeFi protocol building block.

UniSwapX is emerging as a standard for solvers. Liquidity Hub supports UniSwapX and other similar protocols solver (or filler) API, enabling anyone to participate in the bidding process. This feature means that Liquidity Hub can connect to multiple solvers right out of the box. The DEX has the option to pre-approve solvers if it wishes to.


**Fully Supports CeFi Market Makers**

Liquidity Hub software will allow DEXs to support standard CEX book API allowing traditional MM to participate in DeFi.

After having some detailed discussions with industry-leading market makers, we noticed that this class of participants is ill suited for on-chain AMM activity. The core of their business takes place on CEXs and their core expertise is book building. This expertise doesn’t come across on AMMs. Issues like gas costs for unfulfilled orders, inability to cancel orders immediately or simply lack of an order book prevent many market makers from participating in DeFi as much as they would like to.

Market makers are one of the primary sources of liquidity in the industry, and the ability for a DEX to bring them into DeFi is a significant advantage. The Liquidity Hub model solves most of the issues that prevent many market makers from participating in DEXs today and opens the gate for market makers to profit from trading on such platforms.

This is another key differentiator between Liquidity Hub and UniSwapX, which does not support an order book.


### Mitigating Centralization risks in Liquidity Hub using Orbs L3

All on-chain parts are trustless since contracts verify all actions. However, one may be concerned that the off-chain Liquidity Hub backend is able to manipulate trades in some way. This is avoided by using Orbs’ decentralized L3 technology.

The [Orbs Network](https://orbs.com) is an open, decentralized and public blockchain infrastructure executed by a secure network of permissionless validators (known as “Guardians”) using Proof-of-Stake (PoS) consensus. Orbs is optimized to provide “L3” services, working in conjunction with existing L1 and L2 layers and acting as a “decentralized backend” that enhances the capabilities of EVM smart contracts. Orbs Network mainnet is live since 2019 and has dozens of [active validators](https://status.orbs.network/) staked with [over $100M](https://etherscan.io/address/0x01d59af68e2dcb44e04c50e05f62e7043f2656c3).

The network provides its [L3 services](https://www.orbs.com/execution-services/) by operating as a decentralized serverless cloud that allows developers to design applications that extend the capabilities of their smart contracts without relying on traditional centralized server solutions. These applications are deployed to be executed by the Orbs Guardians in a decentralized way.

Orbs’ L3 offering is divided into two categories - ORBS-VM and ORBS-Lambda. ORBS-VM is a docker-compatible decentralized virtual machine, similar in concept to AWS EC2. This is designed for more complicated functions. 

For simpler functions, Orbs Network offers ORBS-Lambda - a decentralized and serverless cloud function solution, similar to AWS-Lambda. Developers can write cloud functions and, when the specified trigger occurs, Orbs Guardians then execute the function on the specified L1 blockchain in a decentralized way. 

As part of Liquidity Hub, Orbs Guardians will run software utilizing [ORBS-VM](https://docs.orbs.network/v3/orbs-vm/what-is-orbs-vm) that acts as a decentralized backend that is required for Liquidity Hub’s off-chain portion to run optimally and in a fully decentralized manner. 


### Summary: Liquidity Hub - the Next Evolution of DEX-AMMs

Liquidity Hub brings the benefit of aggregated liquidity to any DEX-AMM in DeFi.

The protocol presents significant benefits to all stakeholders:

- DEX **users** enjoy first and foremost better execution prices, as well as other benefits such as MEV protection. As we recall, Liquidity Hub guarantees that the final execution price of a completed transaction is always better than the AMM, all fees included. Users can only save money by using Liquidity Hub.
- The **DEX** platform itself can now enjoy added liquidity and increased volumes without cannibalizing its own LP. In addition, the fee mechanism can bring additional fee revenue for the platform.
- **Solvers**, who are emerging as a key function in DeFi can integrate into Liquidity Hub to expand their services. Moreover, Liquidity Hub has the potential to on-board professional market makers into the space, taking DeFi to the next level.

![summary](/assets/img/blog/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/image4.png)


Follow Orbs on [Twitter](https://twitter.com/orbs_network) or join the official Orbs [Telegram group](https://t.me/OrbsNetwork) to learn more about Liquidity Hub.





<div class='line-separator'> </div>

**Please Note**

_The Liquidity Hub is a beta version that is still under active development, and all underlying digital assets, blockchain networks and DEX platforms are also subject to ongoing development, and as such, Liquidity Hub or the underlying platforms:_

_(a) may contain bugs, errors and defects,_

_(b) may function improperly or be subject to periods of downtime and unavailability,_

_(c) may result in total or partial loss of funds._ 

_Any use of any platform, application and/or services described here is at your own risk and you are solely responsible for all transaction decisions._ 

_For more information, please see the [terms of use](https://drive.google.com/file/d/1wYqtBeVDILlJ61rYehEjLINrtcctbNLQ/view?pli=1)._ 
