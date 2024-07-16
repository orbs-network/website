---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-Liquidity-Hub-Goes-Live-on-Fenix-Finance/bg.jpg
blogUrl: Orbs-Liquidity-Hub-Goes-Live-on-Fenix-Finance
date: 2024-07-04
title: 'Orbs Liquidity Hub Goes Live on Fenix Finance!'
author:
  - /blog/common/authors/RanHammer.md
type:
short_description:
---

### Orbs Liquidity Hub is now live on Fenix Finance, an emerging DEX on Blast!

With Orbs leading a [$300K seed round](https://www.orbs.com/Orbs-Announces-Strategic-Investment-in-Fenix-Finance-an-Innovative-DEX-on-Blast/) into Fenix Finance, this new frenship highlights the potential of Fenix Finance as an innovative platform in the decentralized exchange (DEX) space. This collaboration significantly enhances Fenix Finance users' trading experience by providing ongoing access to a broader spectrum of liquidity sources.

The Liquidity Hub, powered by Orbs' pioneering L3 technology, offers numerous benefits including reduced transaction fees, protection against Maximal Extractable Value (MEV), gas-free transaction executions, enhanced capital efficiency, and a streamlined user interface. This marks the fifth deployment of Liquidity Hub via Orbs, setting a significant milestone in the DeFi space by merging liquidity from both on-chain and off-chain sources into a decentralized exchange (DEX).

Liquidity Hub represents a breakthrough in decentralized finance (DeFi), conceptualized and built by the Orbs project. It operates on the principles of full decentralization, open access without permissions, and composability. Thanks to this integration, traders on Fenix Finance can now tap into the full liquidity potential of the network without incurring additional costs.

Orbs is a decentralized protocol operated by a public network of permissionless validators using PoS, with tens of millions of dollars staked in TVL. It optimizes on-chain trading with aggregated liquidity, advanced trading orders, and decentralized derivatives, enabling a DeFi trading experience that is as efficient as CeFi.

### How Liquidity Hub Works

Liquidity Hub is a decentralized optimization layer that operates above Automated Market Makers (AMMs). This layer mitigates the problem of fragmented liquidity in DeFi, enabling DEXs to tap into external liquidity sources to provide better swap prices.

Instead of the typical swap that searches for the best route within the DEX's limited liquidity pools, Liquidity Hub enhances this process by utilizing additional liquidity sources:

- **On-chain solver auction:** Third-party solvers compete to fill swaps using on-chain liquidity like AMM pools or their own private inventory.

- **Decentralized orders via API:** Accessible decentralized orders via API enable institutional/professional traders, such as market makers, to submit bids and compete to fill swaps.

![](/assets/img/blog/Orbs-Liquidity-Hub-Goes-Live-on-Fenix-Finance/liquidity-hub-on-fenix.jpg)

Liquidity Hub allows DEXs to attempt to execute trades without going through the AMM and experiencing price impact. If the layer cannot execute the trade at a better price than the AMM, the transaction reverts to the AMM contract and executes as usual. Thus, Liquidity Hub can only improve a trader’s experience. If it isn’t competitive, meaning it would only execute at a worse price for the user or can’t execute at all, the swap routes through the AMM contract directly as usual.

![](/assets/img/blog/Orbs-Liquidity-Hub-Expands-to-SpookySwap-on-Fantom/img2.png)
![](/assets/img/blog/Orbs-Liquidity-Hub-Expands-to-SpookySwap-on-Fantom/img3.png)

### Liquidity Hub Architecture & Product Spec

Liquidity Hub operates through a combination of an on-chain contract (deployed next to the AMM contract) and backend logic (running on-chain via Orbs decentralized L3 nodes). The on-chain contract ensures end-user protection, safeguards funds, and prevents significant price manipulations.

For regular users attempting to swap, the presence of Liquidity Hub is transparent. The Liquidity Hub contract guarantees a better execution price than the AMM contract. If Liquidity Hub isn’t competitive, the swap defaults to the AMM contract execution. No trust is required, as this guarantee is enforced at the contract level.

A portion of Liquidity Hub’s logic is implemented off the DEX’s underlying chain, with off-chain risks mitigated by Orbs L3. This setup allows for quickly adding and removing orders from the Liquidity Hub, taking only milliseconds and incurring no gas costs. These features are particularly attractive to market makers, aligning with the performance of centralized exchanges.

Funds are held on-chain in a non-custodial manner. Participants placing orders in Liquidity Hub keep their funds in their wallets, and the Liquidity Hub contract authorizes them to initiate transactions. Order verification always occurs on-chain, ensuring that execution meets both parties' requirements and offers a better price than the AMM. Upon matching, funds are exchanged directly on-chain between parties.

Key product specs of Liquidity Hub include:

- There has been no change in the DEX UI for Users. Integration maintains the DEX's familiar user interface for a seamless trading experience.

- API for Solvers + Decentralized Order Interface for Market Makers (MMs): Efficient API for solvers and a decentralized interface for Market Makers, streamlining liquidity provision and trading.

- Nominal to Zero Latency Execution for MMs: Trades execute with minimal to zero latency, enabling users to capitalize on real-time market movements.

- Token Spending Approval by Users on MetaMask: Users authorize token spending through MetaMask, maintaining control and security over their transactions.

- Funds Remain in the User Wallet Until Trades Execute: Users' funds stay in their wallets until trade execution, enhancing security and trust.

- Gasless Trades for Users: Gasless trades reduce transaction costs significantly.

### Continuing the Standard

The Liquidity Hub protocol, powered by Orbs L3 technology, has set the industry standard for achieving the best price without leaving the DEX.

To date, the protocol has been implemented by Quickswap on Polygon and Polygon zkEVM, IntentX on Base, SpookySwap on FTM, and THENA on BNB.

If you have any questions regarding Liquidity Hub, please join Orbs’ Telegram channel.

Further readings:

- [Liquidity Hub Website](https://www.orbs.com/liquidity-hub/)

- [GitHub](https://github.com/orbs-network/liquidity-hub)

- [dTWAP Whitepaper](https://www.orbs.com/white-papers/dTWAP/)

- [Layer 3 Blockchains Explained](https://www.coingecko.com/learn/what-are-layer-3s-crypto)

### About Orbs

Orbs is designed specifically for advanced on-chain trading. It optimizes on-chain trading with aggregated liquidity, advanced trading orders, and decentralized derivatives, enabling a DeFi trading experience that is as efficient as CeFi. These decentralized protocols include [dLIMIT](https://www.orbs.com/dlimit/),[ dTWAP](https://www.orbs.com/dtwap/), [Liquidity Hub](https://www.orbs.com/liquidity-hub/), and [Perpetual Hub](https://www.orbs.com/Perpetual-Hub-by-Orbs/).

The project's core team comprises more than thirty dedicated contributors from Tel Aviv, London, New York, Tokyo, and Seoul.

For more information, please visit[ www.orbs.com](https://www.orbs.com), or join our community at:

- Telegram:[ https://t.me/OrbsNetwork](https://t.me/OrbsNetwork)

- Twitter:[ https://twitter.com/orbs_network](https://twitter.com/orbs_network)
