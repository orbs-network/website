---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/A-New-Liquidity-Hub-Solver-Magpie/image2.png
blogUrl: A-New-Liquidity-Hub-Solver-Magpie
date: 2024-10-01
title: 'A new solver appears… Magpie!'
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: 'Orbs Liquidity Hub has taken another step in optimizing decentralized finance (DeFi) liquidity by integrating Magpie.'
---

**A new solver appears… Magpie\!**

Orbs Liquidity Hub has taken another step in optimizing decentralized finance (DeFi) liquidity by integrating [Magpie](https://www.magpiefi.xyz/), a specialized solver designed to enhance trade execution and liquidity aggregation. As the DeFi space evolves, fragmented liquidity across multiple chains has become a critical issue, leading to inefficiencies like slippage and higher costs for traders. Magpie will join the ever-growing number of solvers that contribute to Liquidity Hub by Orbs, a novel product that works to combat these inefficiencies.

Magpie’s integration joins a powerful on-chain solver auction system, where solvers compete to fulfill trade orders by drawing liquidity from various sources, including AMM pools, cross-chain, and off-chain reserves. This dynamic ensures that trades are executed at the best possible price, surpassing traditional DEX-AMM models. By doing so, Orbs Liquidity Hub further enhances its ability to aggregate liquidity from anywhere, providing users optimal pricing without manual liquidity sourcing​.

**How Liquidity Hub Works**

Liquidity Hub is an Orbs [layer 3 (L3)](https://www.coingecko.com/learn/what-are-layer-3s-crypto) powered meta aggregator that provides an optimization layer above the AMM. This technology taps external liquidity for better price quotes and lower price impact.

Instead of the typical swap that searches for the best route within the DEX's limited liquidity pools, Liquidity Hub enhances this process by utilizing additional liquidity sources:

1. **On-chain solver auction:** Third-party solvers who compete to fill swaps using on-chain liquidity like AMM pools or their private inventory.

2. **Decentralized orders via API:** Decentralized orders are accessible using API, enabling institutional/professional traders, such as market makers, to submit bids and compete to fill swaps.

![liquidityhub](/assets/img/blog/A-New-Liquidity-Hub-Solver-Magpie/image1.jpg)

Liquidity Hub allows DEXs to attempt to execute trades without going through the AMM and experiencing price impact. If the layer cannot execute the trade at a better price than the AMM, the transaction will return to the AMM contract and execute as usual.

**About Magpie**

Magpie offers its [API](https://docs.magpiefi.xyz/magpie-protocol/developers/api-reference) for other DeFi platforms looking to leverage its cross-chain capabilities. This API provides endpoints designed to cater to various aspects of quotes for on-chain swaps, cross-chain swaps, bridge types, liquidity sources, etc.

Magpie API endpoints facilitate a range of functionalities, which includes quotes for the swaps, balances, and networks supported for swapping and more complex operations like distributions. Each endpoint has detailed documentation telling developers of its specific purpose, required input parameters, and the structure of the output data as well as clear examples of usage.

Magpie’s API gives DeFi platforms an opportunity to provide their users with a larger pool of trade prospects in a capital-efficient way rather than limiting swaps to a handful of native assets and stablecoins. For instance, integrating with Magpie allows protocols who have integrated with Orbs access to thousands of tokens that users can securely and efficiently swap cross-chain.

**About Orbs**

Orbs is a decentralized Layer-3 (L3) blockchain specifically designed for advanced on-chain trading.

Utilizing a Proof-of-Stake consensus, Orbs acts as a supplementary execution layer, facilitating complex logic and scripts beyond the native functionalities of smart contracts. Innovative protocols like dLIMIT, dTWAP, Liquidity Hub, and Perpetual Hub push the boundaries of DeFi and smart contract technology, introducing CeFi-level execution to on-chain trading.

The project's core team comprises over thirty dedicated contributors globally from Tel Aviv, London, New York, Tokyo, Lisbon, Limasso, and Seoul.

For more information, please visit www.orbs.com, or join our community at:  
Telegram: https://t.me/OrbsNetwork  
Twitter: https://twitter.com/orbs\_network
