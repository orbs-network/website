---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-Expands-into-On-chain-Derivatives-through-a-Strategic-Partnership-with-SYMMIO/bg.jpg
blogUrl: Orbs-Expands-into-On-chain-Derivatives-through-a-Strategic-Partnership-with-SYMMIO
date: 2024-02-15
title: "Orbs Expands into On-chain Derivatives through a Strategic Partnership with SYMMIO"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: 
---

### On-chain Derivatives - the Next Big Narrative in DeFi?

Derivatives trading is one of the most popular trading vehicles in crypto.

Looking at the top spot and derivatives centralized exchanges like Binance, OKX, KuCoin, etc., we can see that perpetual futures trading volumes can be an order of magnitude greater in comparison to spot. Derivatives made up 78.2% of the total cryptocurrency trading volume on centralized exchanges in July 2023, CCData reported.

The main reason for these high volumes is that derivatives trading can be alluded to using leverage, often as much as x100, which enables users to increase their trading position beyond what would be available from their cash balance alone.

However, the on-chain derivatives market is still reasonably small: according to [defillama](https://defillama.com/protocols/Derivatives), the total derivatives TVL is $2B, while the overall DeFi market TVL is $60B, and the total volume on DEXs make only 2% of the total crypto traded derivatives volume.

The primary cause is that leading on-chain derivatives platforms such as GMX and dYdX, operate using an order-book or virtual Liquidity-like mechanism that requires LPs and overcollateralization when using leverage that leads to poor capital efficiency.

Symm.io: "Unlimited Liquidity" with intent-based execution

**[Symm.io](https://www.symm.io/) attempts to solve the capital efficiency problem of on-chain derivatives platforms by introducing a novel technology for intent-based OTC derivatives trading.**

This means that when a user wishes to open a position on a SYMM-powered frontend, hedgers have already streamed quotes to said frontends upfront. Frontends then automatically select the best quote for the users based on their desired market, price, maintenance margin, etc. After the user selects the parameters, the frontend creates an intent, which is then sent by the user on-chain. This intent is subsequently accepted by the solver if the parameters match their quote, executing the trade on-chain. By that time, both parties have immutably locked collateral.

These hedgers can tap into external liquidity from any available source, including CEXs such as Binance. This means that Symm's technology can provide much greater liquidity compared to other derivatives platforms and as a result, significantly increase its [capital efficiency](https://docs.symm.io/overview/introduction-to-symmio/comparing-capital-efficiency), as well as having the [deepest liquidity available onchain](https://twitter.com/levysaur/status/1755660933945282916).

![](/assets/img/blog/Orbs-Expands-into-On-chain-Derivatives-through-a-Strategic-Partnership-with-SYMMIO/img1.png)


**Orbs: Building RFQ protocols using layer-3 technology**

If intent-based or RFQ systems sound familiar to you, then you're spot on...

**Orbs has recently launched its flagship product: [Liquidity Hub](https://www.orbs.com/liquidity-hub/), a decentralized aggregated liquidity protocol for DEXs powered by Orbs' layer 3 technology.**

Liquidity Hub is a decentralized optimization layer that operates above Automated Market Makers (AMMs). This layer mitigates the problem of fragmented liquidity in DeFi, enabling DEXs to tap into external liquidity sources to provide better prices on swaps.

Instead of the typical swap that searches for the best route within a specific DEX's limited liquidity pools, integrating the Liquidity Hub software protocol allows DEXs to enhance this process by utilizing additional liquidity sources, such as solvers, using its decentralized RFQ mechanism.

![](/assets/img/blog/Orbs-Expands-into-On-chain-Derivatives-through-a-Strategic-Partnership-with-SYMMIO/img2.png)


The protocol is already integrated into [Quickswap](https://www.orbs.com/Liquidity-Hub-by-Orbs-The-New-Standard-for-DEXs/) (the largest native DEX on polygon) and [Thena](https://www.orbs.com/LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs/) (3rd largest DEX on BNB Chain), with tens of millions of dollars in trading volume.

### Orbs and Symm: Strategic Partnership for On-chain Derivatives

Just as Liquidity Hub provides an RFQ optimization layer for DEXs (spot market), Orbs is also looking to expand its offering for the on-chain derivatives market.

The strategic partnership Orbs and Symm.io will focus on potential use cases in the on-chain derivatives space using Orbs layer 3 technology. Such use cases include among others:

-   Off-chain/on-chain communication oracle

-   Collaboration on building the bidding system for hedgers

-   And more

The Orbs project is very excited about this partnership with Symm.io and its potential for on-chain derivatives and the future of DeFi as a whole!

Stay tuned for more updates by following Orbs on [Twitter](https://twitter.com/orbs_network) and joining the official Orbs [Telegram group](https://t.me/OrbsNetwork).