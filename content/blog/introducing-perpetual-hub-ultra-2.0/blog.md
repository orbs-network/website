---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/introducing-perpetual-hub-ultra-2.0/hero.png
blogUrl: introducing-perpetual-hub-ultra-2.0
date: 2026-07-06
title: "Introducing Perpetual Hub Ultra 2.0: The Full Stack, Fully In-House"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description:
---

When Orbs unveiled **Perpetual Hub Ultra**, it set a new standard for on-chain derivatives: a complete, turnkey perpetual futures platform that any trading venue could launch with its own branding, without building a specialized chain, bootstrapping liquidity, or running a complex backend.

**Perpetual Hub Ultra 2.0** takes that further, bringing the entire perps stack in-house. Execution, settlement, hedging, liquidation, pricing, and a professional-grade trading UI, all built by Orbs with no third-party dependencies. Liquidity is sourced from day one through the platform's integrated hedging infrastructure, so venues can go live with deep execution immediately, no bootstrapping required.

This is the most complete version of the protocol yet, and it changes what it means for a venue to launch perps.


### The Full Stack, In-House

Every component required to run a high-performance perps venue now runs natively within Orbs' Layer-3 infrastructure, with no third-party dependencies or external systems to coordinate. By bringing the full stack in-house, Orbs eliminates the moving parts that used to sit between a trading venue and a live perps platform. A single, unified stack handles the entire trading lifecycle, from the moment an order is placed to the moment it settles on-chain.

For integrating venues, that means fewer dependencies, fewer points of failure, and a faster path to launch. For traders, it means smoother execution and consistent performance under real market conditions.

The protocol already taps into the deepest centralized liquidity available, and 2.0 extends beyond it, sourcing and hedging across a growing range of venues including leading on-chain perpetual markets. The multi-source approach delivers tighter pricing, deeper books, and the flexibility to support a far wider universe of trading pairs than any single exchange could offer alone.

![](/assets/img/blog/introducing-perpetual-hub-ultra-2.0/img1.png)

### Under the Hood: TEE-Verified Execution

At the core of Ultra 2.0's architecture is a Trusted Execution Environment (TEE) designed to serve as the authoritative engine for all state transitions. Every trade, every position update, every liquidation runs inside this environment, with remote attestation ensuring the execution logic has not been tampered with. The TEE-based execution layer will be progressively integrated into Orbs' Layer-3 infrastructure as part of the broader 2.0 rollout.

The architecture breaks down into several core components:

**Hedger.** Trusted, whitelisted hedgers with high-SLA guarantees take the operational counterparty role, hedging across both centralized exchanges, including Binance USD-M futures, and leading on-chain perpetual markets. This multi-venue approach delivers deep execution from day one without relying on external solver networks.

**Liquidator.** Real-time solvency monitoring with automatic position liquidation when maintenance margin thresholds are breached. Cross-margin risk calculations use the same shared formulas across the entire stack, so there is no discrepancy between what a trader sees and what the system enforces.

**Price Oracle.** A signed mark-price feed inside the TEE drives risk calculations, funding rates, and liquidation decisions. Prices are cryptographically signed with EIP-712 and verified on every operation, creating a verifiable audit trail for every price input that affects the system.

**On-Chain Rollup Settlement.** All state, including user positions, balances, pending orders, and system configuration, lives in a unified Merkle tree. State roots are committed on-chain via a rollup contract, so every transition from order placement to settlement is verifiable. The result is the transparency of on-chain with the performance of off-chain execution.

![](/assets/img/blog/introducing-perpetual-hub-ultra-2.0/img2.jpg)

###  A CeFi-Grade Trading Experience

Ultra 2.0 ships with a complete, exchange-grade trading interface that rivals the look, feel, and responsiveness of platforms like Binance and Hyperliquid, fully customizable to the host venue's brand. Not a generic widget bolted onto a page; a professional trading terminal that runs on TradingView charts. Trusted by millions of traders as the top charting platform, TradingView can help you dive into [crypto heatmap analysis](https://www.tradingview.com/heatmap/crypto/), follow the crypto universe, and break down market movements with interactive visual tools and additional indicators.

It includes the full suite of order types serious traders expect: market and limit orders, stop-loss and take-profit, advanced brackets, matching the tools available on leading centralized exchanges.

Combined with one-click trading, account abstraction, and gasless flows, traders get the polish of a CEX with the self-custody and transparency of on-chain.

### Built for Many Venues, Across Many Chains

Perpetual Hub Ultra 2.0 scales horizontally. The same complete stack can power a growing network of branded perps venues across multiple chains, with more launching soon.

QuickSwap, a long-standing Orbs integration partner, recently passed a governance vote to adopt Perpetual Hub Ultra as the default perps infrastructure across all QuickSwap chains, replacing Orderly as the engine behind QuickSwap's perps on Polygon.

Any trading venue can now launch a full perpetual futures platform, branded, deeply liquid, and feature-complete, with minimal development effort and a fast time to market. As more venues come online, the network and its shared liquidity grow with them, accelerating adoption across the ecosystem.

Perpetual Hub Ultra proved that any venue could offer a CeFi-quality perps experience without building the infrastructure from scratch. Ultra 2.0 completes that vision: a fully self-contained perps platform, built end-to-end on Orbs' Layer-3 technology, sourcing liquidity from across the market, and wrapped in an interface built to compete with the best exchanges in the world.

### Orbs: Powering DEXs Across DeFi

Through its Layer-3 technology, Orbs provides essential decentralized infrastructure to DEXs across the ecosystem. In addition to Perpetual Hub Ultra, the Orbs toolkit includes:

-   **Liquidity Hub:** A decentralized optimization layer above AMMs that taps external liquidity sources to provide better swap prices, without cannibalizing existing LP.
-   **dTWAP:** Decentralized time-weighted average price orders that split large trades into smaller chunks to reduce price impact.
-   **dLIMIT:** Decentralized limit orders for price-efficient, reliable execution on DEX/AMMs.

With Perpetual Hub Ultra 2.0, Orbs continues to expand the capabilities available to DEXs in both spot and derivatives markets, with services already integrated across dozens of venues and multiple chains.
