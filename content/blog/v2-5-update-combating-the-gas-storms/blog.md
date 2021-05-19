---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/v2-5-update-combating-the-gas-storms/bg.png
blogUrl: v2-5-update-combating-the-gas-storms
date: 2020-09-24
title: V2.5 UPDATE - Combating the Gas Storms
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: ## Orbs PoS: The Age of Guardians
---

## Orbs PoS: The Age of Guardians

## **Executive Summary**

The Orbs Network launched in March 2019. With the growth of the Orbs ecosystem, the Orbs team launched the Beta version of V2 in July 2020.

The V2 Beta has overall been a great success, with the vast majority of Guardians participating and over 1 Billion Orbs tokens staked. However, the period of the V2 Beta so far was also a very active period on Ethereum, largely due to the explosion in usage of DeFi protocols, which resulted in a significant spike in gas prices for using the Ethereum network. This created unanticipated issues that have required some additional development to solve.

The Orbs development team is now releasing the V2.5 Update to address these new conditions.

Main changes in V2.5:

- Reward distribution will be done on an ongoing basis by the protocol directly to both Guardians and Delegators, rather than in multiple transactions.
- Guardians maintain control of the levels of distribution to their Delegators and can set these levels through the Tetra UI.
- Rewards may be claimed at any time, and Guardians and Delegators may use the Tetra UI to do so.
- Guardians will not have to do periodic automated reward distribution transactions.
- Gas cost optimization for committee participation and other Guardian costs.
- The reward calculation is accurate to the block level and accurately represents the Guardians participation in committee and delegators stake.

In order to accomplish the above goals, V2.5 includes the following technical changes:

- Refactoring of the rewards contract.
- Incorporation of technology inspired by yield farming contracts rewards allocation - a two-level mechanism designed to support Guardian and Delegator rewards.
- The UI will now update the Guardian and Delegator on every stake or delegation change.
- Simplification of the committee election logic for gas optimization, separating the committee members’ weight update and members list update.

Benefits:

- Significant reduction of Ethereum gas consumption across the Orbs Universe.
- Simplification of the system by requiring less service in the nodes.
- Reduction of node operation requirements by Guardians.
- Added flexibility to the Guardians and Delegators, who may claim the staking rewards at any point in time.
- Significant reduction in costs for Guardians.
- Increased predictability and confidence for Delegators.

...

## **Post Beta PoS V2 Enhancements**

The Orbs Network launched in March 2019. With the growth of the Orbs ecosystem, the Orbs team launched a beta of V2 in July 2020.

Orbs PoS V2 introduced a new architecture for the Orbs platform’s Guardians election, virtual chain provisioning and reward distribution, among other significant changes. The changes to the reward distribution model involved a shift from a manual, more centralized model for reward distribution to a decentralized model. This shift requires that rewards be distributed via smart contracts on Ethereum to a large number of participants with two different roles (Guardians and Delegators), which presents a technical challenge that requires innovative solutions.

The solution planned for V2 was for the reward contract to distribute the rewards to the Guardians and then have the Guardians distribute to their Delegators using an automated service that would be incorporated into and run as part of their node. The rewards contract and distribution mechanism were tested as part of the V2 Beta testing period. During these tests, the system proved itself and executed successful distributions.

However, while the Beta testing has been successfully completed, during this period there were also significant changes in the Ethereum ecosystem. The changes primarily relate to the explosion in usage of DeFi protocols, which resulted in a massive increase in ETH price and soaring gas prices.

This in turn resulted in a significant increase in the costs incurred by Guardians when distributing rewards, beyond what was expected when the system was designed. The resulting feedback from participating Guardians led the team to rethink the architecture. Inspired by state of the art contract design patterns that are gaining popularity in yield farming contracts, the team designed a new architecture for V2 reward distribution. In addition, carefully analyzing the Beta testing behavior resulted in additional improvements being introduced to the contracts, and in particular in the committee election logic, pushing the gas consumption even lower.

## A New Rewards Assignment and Distribution Architecture

The new reward distribution architecture provides a scalable and gas-efficient reward distribution that occurs through the protocol itself. This was accomplished by creating several updates to the V2 Beta architecture. Under the new system, Guardians still have the ability to set the level of rewards that will be distributed to their Delegators, within the same parameters as provided for previously in V2. Guardians can set the level of rewards to be received by their Delegators through the Tetra interface. Guardians can change the reward distribution levels when they choose and their Delegators will be able to see the currently effective rate on the Tetra interface. However, once the level of distributions is set, the respective rewards are distributed by the protocol directly to both the Guardians and the Delegators, on a continuous basis. Delegators and Guardians can then decide when they wish to claim their reward tokens.

This has several benefits. First, unlike the initial Beta rewards mechanism, which only managed rewards to the Guardians, the new rewards contract manages the rewards assignment for all participants - Guardians and Delegators. Assigning the Delegators’ rewards with the Ethereum rewards contract provides Orbs Delegators with an additional level of confidence and predictability for their rewards allocation. The on-chain rewards allocation also provides an accurate block level reward allocation for each participant that is updated on any change in the stake or delegation.

The continuous reward assignment also allows Guardians and Delegators to control the rate at which they claim their rewards. Under the new architecture, a Participant can claim their rewards by sending a claim transaction to the contract. This may be done using the Tetra staking interface. As the claim transaction has a gas cost, Delegators may initiate these transactions based on their need and the current gas price, which fluctuates heavily. One of the main benefits of expanding the on-chain rewards allocation to include Delegators is eliminating the need for Guardians to periodically distribute the rewards to their Delegators, which has a high gas cost. Eliminating the periodic rewards distribution by Guardians also simplifies the Guardians’ nodes and reduces the chance for errors, for example due to non-sufficient ETH balance in a node wallet. Moreover, the on-chain rewards assignment eases the development of rewards analytics tools by the Orbs team and other ecosystem participants, enhancing the user experience.

## High-Level Technical Overview

Inspired by the architecture for rewards assignment in yield farming contracts, the updated rewards contract provides the means for a scalable and continuously accurate rewards assignment. The basis for the mechanism is to update the minimal required parameters for every change in the state of a Delegator or Guardian.

For example, when a Delegator makes a change in the state of the Delegator, their Guardian and the global state of the network will now be updated automatically. The ability to update only a small set of parameters, yet maintain a valid assignment for all participants, is achieved by constantly maintaining data on the global rewards for each Guardian’s effective stake and each Delegator's rewards per token for each Guardian. To keep the gas consumption low, the balance calculation is done only when a Guardian or Delegator claim their rewards; their exact assigned balance is then calculated based on the continuously updated state. The rewards allocation algorithm was designed to meet the Orbs PoS architecture’s requirement that there be a hierarchical Guardian - Delegator structure. In particular, the algorithm needs to award only committee members and their Delegators, and to take the Guardians’ effective stake into consideration. This required the team to design a new two-level architecture. Keeping the rewards allocation continuously updated is achieved by notifications from the Delegation contract and the Committee contract on relevant changes.

In addition to rewards assignment refactor, additional changes in the contracts were made based on the Beta phase analysis. One of these changes includes a change in the committee election logic - a significant part of the model with an impact on both the operation of virtual chains and the assignment of rewards. The committee logic was modified to reduce the gas cost for the common cases, yielding a lower cost for the typical stake and delegation operations.

## Gas Cost Analysis

To shed more light on the team's thought process that led to the change, let’s review the gas analysis for the reward distribution flow. In the Beta rewards distribution process, the Guardians were expected to periodically distribute the rewards, with a default distribution every 2 weeks. The fact that the Guardians were responsible for the distribution of rewards meant that the Guardians were required to distribute the rewards to the staking contract which updated the system state accordingly. This had a non-negligible gas cost.

**Example - rewards distribution by a Guardian with 100 delegators.**

Distributing rewards to 100 Delegators required to send multiple distributeRewards() transactions with a total gas cost of approximately 4M gas for each bi-weekly distribution. In some scenarios, the gas cost could further increase, for example, due to a Delegator’s change in their delegation just prior to the distribution.

During the gas price storm in the last months, the gas price went from 10-30 Gwei in May all the way up to over 700 Gwei. The increase in gas cost, which was mostly due to the increased use of Defi applications on top of Etherium, remains high with an average of 200 Gwei gas price during the last month (see [Etherscan](https://etherscan.io/chart/gasprice))

This resulted in a distribution cost of 0.8 ETH, twice a month ( = 4M x 200 Gwei  = 0.8 ETH). Assuming an ETH price of $400, this would imply a $640 monthly cost for Guardians, which is much higher than the cost of operating the platform. Any additional surge in gas price or an increase in ETH price would increase the cost even further.

The new architecture eliminates the Guardians rewards distribution flow, and with optimizations in the committee logic, has minimal impact on the staking gas cost. Controlling the cost of the system increases the robustness and sustainability of the PoS universe.

## What’s next

The development of the new changes is complete but still requires reviews, testing and quality enhancements. In order to gain confidence in the new architecture, it is desired to open V2.5 in a Beta format and test it in action. The team plans to deploy the new contacts soon and start getting them in motion.

As discussed, the change in the rewards architecture simplifies the analytics tools and UIs. As a first step, Tetra is being adjusted to accommodate the change and allow Guardians and Delegators to claim their deserved rewards at the click of a button.

This process will require the Orbs team to extend the Beta period for V2, and V2 will not be launched in production during October 2020.

However, these changes are crucial for the overall health and sustainability of the Orbs Universe. We aim to complete the update and conduct the final launch by end of November 2020.
