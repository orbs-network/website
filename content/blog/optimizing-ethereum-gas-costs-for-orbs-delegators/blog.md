---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/bg.png
blogUrl: optimizing-ethereum-gas-costs-for-orbs-delegators
date: 2021-01-06
title: Optimizing Ethereum Gas Costs for Orbs Delegators
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: Occasional high gas fees on Ethereum can inflict heavy costs on Orbs Delegators when executing transactions in the Orbs PoS mechanism, if done without preplanning. With a few simple steps, Delegators can significantly reduce losses incurred by these high gas prices.
---

Occasional high gas fees on Ethereum can inflict heavy costs on Orbs Delegators when executing transactions in the Orbs PoS mechanism, if done without preplanning. With a few simple steps, Delegators can significantly reduce losses incurred by these high gas prices.

In this guide, we will explain how Delegators can perform their roles as Orbs Delegators in a more efficient manner and thereby significantly reduce costs associated with gas prices.

But first, a short background on the Orbs proof of stake architecture on Ethereum.

## Orbs the hybrid blockchain

The Orbs project introduced a novel and original model of a hybrid blockchain:

The Orbs network is its own PoS-based blockchain that is used as an infrastructure for running applications. Part of its design provides for stable transaction fees. By running their applications on a virtual chain on the Orbs network, applications are insulated from the fluctuations of gas prices in Ethereum, where they have to compete with others for resources. Orbs is therefore not a layer 2 for Ethereum and it holds its own value in its permissionless validator pool based on the PoS ecosystem of the ORBS token and its incentives model.

However, Orbs network utilizes the Ethereum network to accommodate the ORBS ERC20 token and Proof-of-Stake contracts. The ORBS token is used for paying infrastructure fees, running apps and also for staking, electing Guardians and rewarding the PoS participants. Orbs PoS Ethereum contracts implement the logic for staking tokens, electing the Guardians committee, distributing rewards and fees and provisioning Orbs virtual chains. Orbs ecosystem participants, Delegators and Guardians, interact with the PoS contracts by sending Ethereum transactions to the relevant Orbs contracts, these transactions are subject to gas cost.

The choice to delegate the voting functions to Ethereum was made because it provides an **external objective guarantee** that any observer can verify that elected nodes on Orbs are indeed the ones the stakeholders voted for. Similarly, launching the Orbs token as an ERC20 token allows the Orbs token to enjoy the security benefits provided by Ethereum’s robust security ecosystem. For these important functions, Ethereum is a crucial component in the Orbs design.

This voting feature’s logic is explained in this excellent blog by Orbs co-founder, Tal Kol,:

[![](/assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/photo_2021-01-05_17-04-50.jpg)](https://www.orbs.com/pos-external-oversight/)

This structure allows the Orbs network to enjoy many of the benefits of both chains. However, the parts of the Orbs network that rely on Ethereum are still subject to some of Ethereum’s downsides. Thus, while applications running on top of Orbs are shielded from gas price fluctuations, the distribution of rewards on the Ethereum blockchain can be affected. Overall, the security and objectivity benefits outweigh these downsides, and the design has been streamlined in order to mitigate them to the extent possible.

## V2.5 update - Combatting the gas storms

Orbs PoS V2.5: The Age of Guardians architecture takes Orbs’ PoS over PoW design to the next level by moving the entire election logic and reward mechanism to be performed by Ethereum smart contracts.

To learn more, see the [Orbs PoS V2.5 Overview Document](https://www.orbs.com/white-papers/orbs-pos-v2-the-age-of-guardians/)

The period of the Orbs PoS V2 Beta, was also a very active period on Ethereum, largely due to the explosion in usage of DeFi protocols, which resulted in a significant spike in gas prices for using the Ethereum network. This created unanticipated issues that required some additional development to solve.

As noted above, high gas costs adversely affect some aspects of the Orbs Network operation, specifically transactions which are executed using Ethereum smart contracts, such as staking.

As a consequence, the Orbs team released the V2.5 update which, with remarkable innovation and sophistication, successfully managed to reduce the Ethereum gas consumption across the entire Orbs PoS Universe. It accomplished this by, among other things, allowing Delegators to claim their rewards directly from the protocol, instead of having the rewards sent to the Guardians first. This cut the number of transactions for which gas prices need to be paid in half **and allowed the Delegators to choose when and how often to initiate these transactions.** We’ll see why this is important later on.

To read more about the V2.5 update release, see here:

[![](/assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/photo_2021-01-05_17-07-44.jpg)](https://www.orbs.com/v2-5-update-combating-the-gas-storms/)

## Gas costs efficiency for Delegators

In the last couple of days, we experienced another substantial increase in activity on the Ethereum network. This caused the network to congest which in turn brought a spike in gas prices. These spikes, or “gas storms”,  tend to be short-lived and are usually caused by market conditions such as high volatility, etc.

[![](/assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/Screen-Shot-2021-01-04-at-15.15.27.png)](https://twitter.com/glassnode/status/1346054016493645824)

With the recent increase in the price of ETH, gas prices can become hefty, even up to $50. Such events affect the entire Ethereum ecosystem, not only Orbs, as can be seen in the below example. And yet, Ethereum still has the strongest ecosystem due to its many benefits which make it very attractive for developers and projects.

[![](/assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/Screen-Shot-2021-01-04-at-13.44.27-691x1030.png)](https://twitter.com/lawmaster/status/1345987750319812609)

## Three basic functions

Such high gas fees can inflict heavy costs on Orbs Delegators when executing transactions on Ethereum smart contracts if they are not careful and strategic. In general, Orbs Delegators need to execute 3 basic functions, all of which can be done using the [Tetra](https://staking.orbs.network/) staking wallet

#### 1) Stake

Stake ORBS tokens to an Orbs Guardian and receive staking rewards.

#### 2) Unstake

To unstake staked ORBS token, which can then be withdrawn after a 14 days cooldown period.

#### 3) Claim Rewards

To move ORBS tokens received as part of the staking rewards into the staking contract. **A Delegator’s rewards are safely maintained in his rewards construct balance until claimed.**

Regarding the first 2 functions, the choice to initiate them depends on the Delegators’ personal considerations and can be timed accordingly. **The Orbs team recommends that Delegators check current gas prices (and all other aspects of their transactions) carefully before initiating any transaction**.

A good website to view the current recommended gas prices is [ETH GAS STATION](https://ethgasstation.info/), or [Etherscan](https://etherscan.io/gastracker)

### The “Claim Rewards” transaction is a different story.

Claiming rewards gives very little value to Delegators and should rarely be done. The main value of claiming is that the election weight of the Delegator's Guardian is adjusted to count for the reward. This change is normally negligible for the average Delegator, and will not influence election results. In addition, as mentioned above, **the rewards belong via contract to the Delegator whether or not they are claimed**, and can be claimed at any time.

**Therefore, It's recommended to claim very rarely, or perform it only as part of the unstake flow.**

## Conclusion

All in all, under normal circumstances, Orbs Delegators rarely need to do actions that result in paying gas fees on the Ethereum Network. A Delegator that is satisfied with his Guardian may need to initiate only a handful of transactions a year which can be timed with low gas fees.

These costs are compensated for by the benefits of working over the Ethereum Blockchain which provides the necessary security and oversight required to maintain the integrity of the Orbs network.

...

This is the second guidebook to the Orbs Delegator issued following the release of Orbs PoS V2.5: The Age of Guardians.

The first one offered general guidelines for the Orbs Delegator on how to choose a Guardian. For the full. To read more, click on the link below:

[![](/assets/img/blog/optimizing-ethereum-gas-costs-for-orbs-delegators/guardians-twitter.png)](https://www.orbs.com/how-to-choose-an-orbs-guardian/)
