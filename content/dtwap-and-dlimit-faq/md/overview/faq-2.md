---
layout: partials/shared/opening-box
title: How does the dTWAP and dLIMIT protocol work?
color: "#E61EA9"
---

The dLIMIT and dTWAP protocol defines two main actors:

- **Makers** - The first entity in the dTWAP protocol are DEX traders that submit new orders to the dTWAP EVM contract. They set all order parameters such as limit price and expiration. Maker orders are sent to the dTWAP smart contract, which enforces these requirements in a trustless manner.

- **Takers** - Incentivized third-party participants that monitor all live orders and submit bids on the best path to execute their next segment. The dTWAP contract selects the best bid and guarantees that the path that provides the best price to makers is the one executed.

The swap is ultimately executed directly between the user’s wallet and the applicable DEX pool, with the taker receiving the specified amount of the output token as a fee. All assets always go through the AMM’s main flow and smart contracts. No assets are diverted out of the DEX. The dTWAP smart contract is only responsible for ensuring that trades are executed according to the schedule and other parameters set by the user. The contract does not hold any user funds, has no owners, administrators or other roles and is entirely immutable once deployed on an EVM blockchain.

This entire mechanism is powered by Orbs L3 technology (see more on that below), ensuring the orders are executed in a decentralized and reliable manner.
