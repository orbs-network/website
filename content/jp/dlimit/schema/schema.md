---
layout: partials/shared/Schema
image: assets/img/dlimit/schema.png
title: Decentralized Execution of Limit Orders
subtitle: powered by Orbs

---

dLIMIT is based on the [dTWAP protocol](/dtwap) where the individual order size equals the total trade size. The protocol defines two main actors: 

**Makers** - The first entity in the dLIMIT protocol are DEX traders that submit new orders to the dLIMIT EVM contract. They set all order parameters including the limit price. The dLIMIT contract enforces these requirements in a trustless manner.

**Takers** - Incentivized third-party participants that monitor all live orders and submit bids on the best path to execute their next segment. The dLIMIT contract selects the best bid and guarantees that the path that provides the best price to makers is the one executed.


Orbs Network has dozens of independent validators running Proof-of-Stake consensus with over $100 million staked. The network has been running in mainnet since 2019. All Orbs Network validators are takers and participate as honest bidders in the protocol, guaranteeing that orders are executed 24/7 with high redundancy and best price.
