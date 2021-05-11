---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/second-orbs-rewards-distribution-summary/bg.jpg
blogUrl: second-orbs-rewards-distribution-summary
date: 2019-09-25
title: "2nd Orbs Rewards Distribution: Summary"
author:
  - ../common/authors/AndreyDulkin.md
type:
short_description: _On September 25, 2019, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself._
---

_On September 25, 2019, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself._

...

# The process

Rewards are continuously calculated on the Orbs network; [click here for the details](https://www.orbs.com/getting-ready-for-round-ii-of-orbs-rewards-distribution/). They are sent directly to the addresses of the Orbs participants and include Participation (delegation), Guardian Excellency and Validators Rewards.

To distribute the Rewards, a [dedicated Ethereum-deployed contract](https://github.com/orbs-network/orbs-ethereum-contracts/tree/rewards-distribution/rewards-distribution/ethereum/contracts) is used.

Contract address: [0xb2969e54668394bcA9B8AF61bC39B92754b7A7a0](https://etherscan.io/address/0xb2969e54668394bca9b8af61bc39b92754b7a7a0).

This contract was loaded with the total sum of tokens to be distributed and configured with hashes of transaction batches (the transactions are sent in batches due to gas limitations of the Ethereum platform). The transactions batches themselves were then sent to the contract which dispersed the Rewards.

### Rewards displayed

The distributed Rewards are displayed in the UI: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

The UI shows:

- All earned Rewards per address since the network started
- The Reward amount that has already been distributed to the address
- Delegation details for the address

### Sent rewards - in numbers

- Total distributed rewards - 22,249,682 ORBS
- Number of reward recipient addresses - 1521 addresses
- Number of election cycles for which rewards were distributed - 28
- Highest reward to a single address - 3,339,691 ORBS
- Participating stake in 55th elections cycle - 466,645,382 ORBS

# The data

All the data relevant for the Reward calculations is available on the Ethereum network. In addition, a more structured view of this data will be shared in order to ease processing by interested parties.

This [Rewards](https://drive.google.com/drive/folders/19ua_3fOI2zufCynYC46BDd7XqdhiNLXH) folder holds a breakdown of the data according to the 55 election cycles, showing:

- All the delegations per Guardian
- Each Guardian participation in votes
- Participation (delegation) Rewards
- Guardian Excellency Rewards
- Validators Rewards

# Summary

This distribution marks another milestone in the Orbs network project roadmap. We are most excited about the large community of Orbs’ various participants, which continues to grow as more and more learn about and become interested in Orbs.

Best of luck to us all!
