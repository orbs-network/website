---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/dTWAP-Case-study-SpookySwap/bg.jpg
blogUrl: dTWAP-Case-study-SpookySwap
date: 2023-03-09
title: "dTWAP Case-study: Reducing Price Impact on SpookySwap DEX"
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "Orbs recently introduced the novel dTWAP (decentralized time-weighted average price) protocol for DEXs. Using dTWAP orders, DEX users can now optimize their trading by executing more sophisticated trading strategies. One of the prominent use-cases is the ability to significantly reduce price impact when executing large orders or in cases of fragmented and low liquidity. In this blog post, we’ll analyze how dTWAP has already successfully been used for exactly that purpose: to significantly reduce price impact on SpookySwap DEX."
---

Orbs recently introduced the novel [dTWAP](https://www.orbs.com/dtwap/) (decentralized time-weighted average price) protocol for DEXs. Since its launch, the protocol has already been integrated by 3 DEXs: SpiritSwap and SpookySwap on Fantom, and Pangolin on Avalanche, with more integrations in the pipeline. 

Using dTWAP orders, DEX users can now optimize their trading by executing more sophisticated trading strategies. One of the prominent use-cases is the ability to significantly reduce price impact when executing large orders or in cases of fragmented and low liquidity.

In this blog post, we’ll analyze how dTWAP has already successfully been used for exactly that purpose: to significantly reduce price impact on SpookySwap DEX.


Let’s dive in…




### Analyzing dTWAP In Action

On March 3rd, 2023, two TWAP orders swapping USDC to OATH were submitted from the same wallet address on SpookySwap: the first for a total of $46,000 and the second for $42,000. 

**During the whole duration of the orders, the OATH token remained in the price range of $0.217-$0.22, meaning that no substantial price impact had occurred!**

In this analysis, we’ll examine the dTWAP orders settings, their impact on the market, and a comparison to what would have happened if the user had used a regular swap trade instead.

Let’s begin - 

First, let’s look at the available liquidity for the OATH token on SpookySwap’s [analytics page](https://info.spooky.fi/#/token/0x21ada0d2ac28c3a5fa3cd2ee30882da8812279b6). As seen in the screenshot below, the biggest pool by far is OATH-USDC which has ~$900,000 in total liquidity (which is similar to the total liquidity at the time of the dTWAP orders).


![analytics](/assets/img/blog/dTWAP-Case-study-SpookySwap/image1.png)



Next, we’ll simulate the price impact of a USDC -> OATH order of this magnitude executed with a standard market order. As shown below, such an order would result in a whopping 9.22% price impact (not including trading fees, slippage, and gas costs). In other words, the user would have lost $4,200 due to price impact alone had he executed this amount using a market order!


![market](/assets/img/blog/dTWAP-Case-study-SpookySwap/image2.png)


In fact, even executing the trade using [1inch](https://app.1inch.io/#/1/simple/swap/USDC/DAI) DEX aggregator, which usually offers the best execution rates, would have resulted in >5% price impact:


![1inch](/assets/img/blog/dTWAP-Case-study-SpookySwap/image3.jpg)



Now, let us analyze how the user executed the same trade using the new dTWAP order. As mentioned, two separate orders were submitted, which can be seen in the on-chain indexer shown below -

![data](/assets/img/blog/dTWAP-Case-study-SpookySwap/image4.png)


**dTWAP Order No.1**

Looking at the on-chain data, the first dTWAP order was configured as follows:

- Input token: [USDC](https://ftmscan.com/token/0x04068da6c83afcfa0e13ba15a6696662335d5b75), Output token: [OATH](https://ftmscan.com/token/0x21ada0d2ac28c3a5fa3cd2ee30882da8812279b6)
- Trades execution at market prices (no limit price set)
- Total input size: 46,000 USDC
- # of intervals: 200, which means 230 USDC per swap
-  Max. Duration: 2 hrs
-  Trade intervals (delay between swaps): 2 mins

Here’s the same order configuration in the SpookySwap UI:

![UI](/assets/img/blog/dTWAP-Case-study-SpookySwap/image5.png)


This order was canceled by the user after 36 minutes and 18 filled trades, totaling 4140 USDC successfully swapped to 18,756 OATH.

**dTWAP Order No.2**

The second dTWAP order was submitted shortly after and configured as follows:

- Input token: [USDC](https://ftmscan.com/token/0x04068da6c83afcfa0e13ba15a6696662335d5b75), Output token: [OATH](https://ftmscan.com/token/0x21ada0d2ac28c3a5fa3cd2ee30882da8812279b6)
- Trades execution at market prices (no limit price set)
- Total input size: 42,000 USDC
- # of intervals: 20, which means 2,100 USDC per swap 
- Max. Duration: 1 hr
- Trade intervals (delay between swaps): 3 mins

It seems as if the user wanted to speed up his original order while still attempting to find the optimal arbitrage duration.

This trade expired before being fully filled with a total of 14 filled orders, swapping 29,400 USDC and receiving 130,551 OATH tokens.


### Summary & Results

All in all, the user swapped a total of 33,540 USDC to 149,307 OATH using 2 dTWAP orders. Looking at the data, the trades cost him $680, or 2%, taking into account price impact, slippage, trading fees and gas costs.

In comparison, executing the same order size of 33,540 USDC to OATH using a market order on Spookyswap would have resulted in close to 7% in price impact alone! 


### Conclusions

As demonstrated in this SpookySwap case study, dTWAP orders can  significantly mitigate price impact for large orders and/or limited liquidity pools, saving the users substantial amounts of money.

Even dTWAP strategies with relatively short durations (i.e., executing a trade in intervals of 1-2 minutes over a period of 15-20 minutes) can mitigate price impact problems by giving arbitrageurs a short window to close any price discrepancies on the affected pools and bring the reserves back to equilibrium (on par with off-chain markets spot price). 

In addition to benefiting traders, this type of TWAP strategy also benefits the trading platform itself, as minimizing the risk of price impact for trades will lead to increased trading volume and thus increased fees for liquidity providers, which will in turn increase liquidity for the DEX.. With 3 integrations and more in the pipeline, we are seeing dTWAP becoming the standard protocol for TWAP orders for DEXs.

Orbs’ dTWAP contracts are fully decentralized, permissionless, without roles or ownership, and open to all participants to bid on individual swaps.

More information about dTWAP:
- dTWAP telegram channel: https://t.me/dTWAPSupportGroup
- dTWAP protocol Github: https://github.com/orbs-network/twap
- dTWAP lightpaper: https://www.orbs.com/white-papers/dTWAP/
- Security audits: [PechShield](https://drive.google.com/file/d/1xUZN5RrNvszaPDJuJjfeG3ig14Vo2aaE/view?usp=sharing), [RD Auditors](https://drive.google.com/file/d/1ASt3_mWwtQ0IfKqBHebnj_KGJWntaNJs/view?usp=sharing)
- General information about Orbs L3: https://www.orbs.com/network/ 


<div class='line-separator'> </div>


**About Orbs**

The Orbs Network is an open, decentralized and public blockchain infrastructure executed by a secure network of permissionless validators using Proof-of-Stake (PoS) consensus. 

Orbs is set up as a separate decentralized execution layer operating between existing L1/L2 solutions and the application layer, as part of a tiered blockchain stack, without moving liquidity onto a new chain. Orbs acts as a “decentralized backend”, enhancing the capabilities of existing smart contracts and opening up a whole new spectrum of possibilities for Web 3.0, DeFi, NFTs and GameFi. 

Orbs was founded in 2017 and launched its mainnet and token in March of 2019. Orbs is being developed by a dedicated team of more than 30 people, with offices in Tel Aviv, London, New York, Tokyo and Seoul. 

For more information, please visit www.orbs.com, or join our community at: 

Telegram: https://t.me/OrbsNetwork 

Twitter: https://twitter.com/orbs_network 
