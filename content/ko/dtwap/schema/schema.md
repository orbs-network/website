---
layout: partials/shared/Schema
image: assets/img/dtwap/schema.png
title: Decentralized Execution of TWAP Orders
---

**Makers** - The first entity in the dTWAP protocol are DEX traders that submit new orders to the dTWAP EVM contract. They set all order parameters such as limit price and expiration. The dTWAP contract enforces these requirements in a trustless manner.

**Takers** - Incentivized third-party participants that monitor all live orders and submit bids on the best path to execute their next segment. The dTWAP contract selects the best bid and guarantees that the path that provides the best price to makers is the one executed.

Orbs Network has dozens of independent validators running Proof-of-Stake consensus with over $100 million staked. The network has been running in mainnet since 2019. All Orbs Network validators are takers and participate as honest bidders in the protocol, guaranteeing that orders are executed 24/7 with high redundancy and best price.