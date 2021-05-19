---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/first-orbs-rewards-distribution-summary/bg.jpg
blogUrl: first-orbs-rewards-distribution-summary
date: 2019-07-04
title: "First Orbs Rewards Distribution: Summary"
author:
  - /blog/common/authors/AndreyDulkin.md
type:
short_description: On July 2nd, 2019, the first Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself.
---

_On July 2nd, 2019, the first Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself._

...

## The process

Rewards are continuously calculated on the Orbs network; [Click here for the details](https://www.orbs.com/rewards-distribution/). They are sent directly to the addresses of the Orbs participants and include Participation (delegation), Guardian Excellency and Validators rewards.

To distribute the rewards, [a dedicated contract was developed](https://github.com/orbs-network/orbs-ethereum-contracts/tree/rewards-distribution/rewards-distribution/ethereum/contracts), and deployed on Ethereum. **Contract address - [0xb2969e54668394bcA9B8AF61bC39B92754b7A7a0](https://etherscan.io/address/0xb2969e54668394bca9b8af61bc39b92754b7a7a0).**

This contract was then loaded with the total sum of tokens to be distributed and configured with hashes of transaction batches (the transactions are sent in batches due to gas limitations of the Ethereum platform). The transactions batches themselves were then sent to the contract which dispersed the rewards.

## Rewards displayed

The distributed rewards are displayed in the UI: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

#### The UI shows:

- All earned rewards per address since the network started
- The reward amount that has already been distributed to the address
- Delegation details for the address

#### Sent In numbers:

- Total distributed rewards - 18,018,788 ORBS
- Number of reward recipient addresses - 1,448 addresses
- Number of election cycles for which rewards were distributed - 27
- Highest reward to a single address - 2,651,165 ORBS
- Participating stake in 27th elections cycle - 396,408,427 ORBS

## The data

All the data relevant for rewards calculations is available on the Ethereum network. [As previously noted](https://www.orbs.com/rewards-distribution/), we are also sharing a more structured view of this data in order to ease processing by interested parties.

This [Rewards](https://drive.google.com/drive/folders/19ua_3fOI2zufCynYC46BDd7XqdhiNLXH) folder holds a breakdown of the data according to the 27 election cycles, showing:

- All the delegations per Guardian
- Each Guardian participation in votes
- Participation (delegation) rewards
- Guardian Excellency rewards
- Validators rewards

## Summary

This was an exciting process, marking a significant milestone in the Orbs network project roadmap. We are most excited about the large community of Orbs various participants which continues to grow as more and more learn about and become interested in Orbs.

Best of luck to us all!
