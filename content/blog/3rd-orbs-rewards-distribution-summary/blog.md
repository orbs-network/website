---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/3rd-orbs-rewards-distribution-summary/bg.jpg
blogUrl: 3rd-orbs-rewards-distribution-summary
date: 2019-12-26
title: "3rd Orbs Rewards Distribution: Summary"
author:
  - /blog/common/authors/AndreyDulkin.md
type:
short_description: On December 25, 2019, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself.
---

On December 25, 2019, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself.

## The process

Rewards are continuously calculated on the Orbs network; [click here for the details](https://www.orbs.com/getting-ready-for-round-ii-of-orbs-rewards-distribution/). They are sent directly to the addresses of the Orbs participants and include Participation (delegation), Guardian Excellency and Validators Rewards.  To distribute the Rewards, a dedicated Ethereum-deployed contract is used. Contract address: [0xb2969e54668394bcA9B8AF61bC39B92754b7A7a0](https://etherscan.io/address/0xb2969e54668394bca9b8af61bc39b92754b7a7a0). This contract was loaded with the total sum of tokens to be distributed and configured with hashes of transaction batches (the transactions are sent in batches due to gas limitations of the Ethereum platform). The transactions batches themselves were then sent to the contract which dispersed the Rewards.

## Rewards displayed

The distributed Rewards are displayed in the UI: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward) The UI shows:

- All earned Rewards per address since the network started
- The Rewards amount that has already been distributed to the address
- Delegation details for the address

### Sent rewards - in numbers

- Distribution event name - Elections56-82
- Total distributed rewards - 23,411,365 ORBS
- Number of reward recipient addresses - 1532 addresses
- Number of election cycles for which rewards were distributed - 27
- Highest reward to a single address - 3,554,041 ORBS
- Participating stake in 82nd elections cycle - 538,933,915 ORBS

...

# The data

All the data relevant for the Rewards calculations are available on the Ethereum network. In addition, a more structured view of this data will be shared in order to ease processing by interested parties.  [This Rewards](https://drive.google.com/drive/folders/1fkqD8m9-2F09GmSB_Lp0kfjkHFcsqoLC?usp=sharing) folder holds a breakdown of the data according to the 55 election cycles, showing:

- All the delegations per Guardian
- Each Guardian participation in votes
- Participation (delegation) Rewards
- Guardian Excellency Rewards
- Validators Rewards

# Summary

This distribution marks another milestone in the Orbs network project roadmap. We are most excited about the large community of Orbs’ various participants, which continues to grow as more and more learn about and become interested in Orbs.  Best of luck to us all, and a happy New Years :)
