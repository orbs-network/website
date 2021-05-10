---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/5th-orbs-rewards-distribution-summary/bg.jpg
blogUrl: 5th-orbs-rewards-distribution-summary
date: 2020-07-08
title: "5th Orbs Rewards Distribution: Summary"
author:
  - ../common/authors/AndreyDulkin.md
type:
short_description: On July 06, 2020, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself.
---

On July 06, 2020, Orbs network rewards distribution occurred. This post summarizes the process and provides resources that can be used by any interested party to review and validate the calculation and distribution itself.

## The Process

Rewards are continuously calculated on the Orbs network; [click here for the details](https://www.orbs.com/getting-ready-for-round-v-of-orbs-rewards-distribution/). The rewards include Participation (delegation), Guardian Excellency and Validators Rewards.

The rewards for participants who have not staked their token in the staking contract as part of the new staking mechanism announced in April were distributed to the recipients’ addresses on Ethereum. Note: This is the last rewards distribution for participants who are using the first-year staking mechanism, as starting with election 143 only tokens staked in the updated staking contract will participate in PoS. For more information on the new staking mechanism, see: [https://www.orbs.com/introducing-the-new-orbs-locking-mechanism/](https://www.orbs.com/introducing-the-new-orbs-locking-mechanism/).

To distribute the rewards, dedicated Ethereum-deployed contracts are used.

- Contract address [0xb2969e54668394bcA9B8AF61bC39B92754b7A7a0](https://etherscan.io/address/0xb2969e54668394bca9b8af61bc39b92754b7a7a0) distributes to balances (for non-staking participants using the first-year mechanism).
- Contract address [0xB52daF3f853bF570814d6AeA1ec7BFF30339BD0c](https://etherscan.io/address/0xB52daF3f853bF570814d6AeA1ec7BFF30339BD0c) distributes to the staking contract.

These contracts were loaded with the tokens to be distributed and configured with hashes of transaction batches (the transactions are sent in batches due to gas limitations of the Ethereum platform). The transaction batches themselves were then sent to the contracts, which dispersed the rewards.

## Rewards displayed

The distributed rewards are displayed in the Hedron UI: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

**The UI shows:**

- All earned rewards per address since the network started
- The rewards amount that has already been distributed to the address
- Delegation details for the address

### Sent rewards – in numbers

- Distribution event names:
  - Elections111-143
  - Elections111-143_staked
- Total distributed rewards – 33,337,673 ORBS
  - 21,645,981 ORBS went to the staking contract (staked on behalf of the participants)
  - 11,691,692 ORBS went to balances (for participants using the first-year mechanism)
- Number of reward recipient addresses – 1,672 addresses
- Number of election cycles for which rewards were distributed – 33
- Highest reward to a single address – 3,898,806 ORBS

...

# Summary

This distribution marks another milestone in the Orbs network project roadmap. We are most excited about the large community of Orbs’ various participants, which continues to grow as more and more learn about and become interested in Orbs.  Best of luck to us all!
