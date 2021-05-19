---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/6th-orbs-rewards-distribution-summary-2/bg.jpg
blogUrl: 6th-orbs-rewards-distribution-summary-2
date: 2020-10-01
title: "6th Orbs Rewards Distribution: Summary"
author:
  - /blog/common/authors/AndreyDulkin.md
type:
short_description: On September 30, 2020, Orbs network rewards distribution occurred, as described in the following post.
---

On September 30, 2020, Orbs network rewards distribution occurred, as described in the following post.

## The Process

Rewards are continuously calculated on the Orbs network; [click here for the details](https://www.orbs.com/getting-ready-for-round-v-of-orbs-rewards-distribution/). The rewards include Participation (delegation), Guardian Excellency and Validators Rewards.

Starting with election 144 only tokens staked in the updated staking contract participate in the Orbs PoS. For more information on the staking mechanism, see: [https://www.orbs.com/introducing-the-new-orbs-locking-mechanism/](https://www.orbs.com/introducing-the-new-orbs-locking-mechanism/).

To distribute the rewards to the staking contract, a dedicated Ethereum-deployed contract is used - [0xB52daF3f853bF570814d6AeA1ec7BFF30339BD0c](https://etherscan.io/address/0xB52daF3f853bF570814d6AeA1ec7BFF30339BD0c)

This contract was loaded with the tokens to be distributed and configured with hashes of transaction batches (the transactions are sent in batches due to gas limitations of the Ethereum platform). The transaction batches themselves were then sent to the contract, which disbursed the rewards.

## Rewards displayed

The distributed rewards are displayed in the Hedron UI: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

**The UI shows:**

- All earned rewards per address since the network started
- The rewards amount that has already been distributed to the address
- Delegation details for the address

### Sent rewards – in numbers

- Distribution event name:
  - Elections144-170_staked
- Total distributed rewards – 26,794,942 ORBS
- Number of reward recipient addresses – 614 addresses
- Number of election cycles for which rewards were distributed – 27
- Highest reward to a single address – 2,914,618 ORBS

# Summary

This distribution marks another milestone in the Orbs network project roadmap. We are most excited about the large community of Orbs’ various participants, which continues to grow as more and more learn about and become interested in Orbs.  Best of luck to us all!
