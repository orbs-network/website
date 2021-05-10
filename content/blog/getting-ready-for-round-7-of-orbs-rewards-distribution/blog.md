---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/getting-ready-for-round-7-of-orbs-rewards-distribution/bg.png
blogUrl: blog/getting-ready-for-round-7-of-orbs-rewards-distribution
date: 2020-12-02
title: Getting Ready for Round 7 of Orbs Rewards Distribution
author:
  - ../common/authors/AndreyDulkin.md
type:
short_description: The Orbs network launched on March 28th, 2019. The Orbs network relies on all of the participants in the proof of stake ecosystem to provide for the security and operation of the network. 
---


 The Orbs network launched on March 28th, 2019. The Orbs network relies on all of the participants in the proof of stake ecosystem to provide for the security and operation of the network. 

On December 7th, 2020, the 7th (and last) round of rewards distribution will occur. This distribution marks the end of Orbs network v1, as the network moves to v2.5 with the updated, ongoing rewards accumulation mechanism.

This post describes the various rewards, how they are calculated, and the distribution process.

## Transition to PoS V2.5

The Orbs Network has transitioned to the new and improved staking mechanism: **Orbs V2.5: The Age of Guardians**. 

Orbs V2.5 will emphasize usage and performance while empowering the Orbs Universe Guardians. Orbs V2.5 will enable the Orbs Universe Guardians to take an active role in building and maintaining a secure, scalable network, which will be the first choice for blockchain adoption, and to better manage and serve the network and its participants.

Orbs V2.5 has successfully completed the Beta Program stage and is going into production, with over 20 Orbs Guardians already running a V2.5 node and 13 Orbs Guardians already participating in the Certified Committee. 

As of today, rewards will be calculated and distributed under the new Orbs V2.5: The Age of Guardians mechanism. Detailed information on the Orbs PoS V2.5 can be found here:

[**Orbs PoS V2.5: The Age of Guardians**](https://www.orbs.com/orbs-pos-universe/)

## Rewards distribution process

- Rewards will be distributed on December 7th, 2020
- Only staking participants will be eligible for rewards 
    - To participate in the Orbs Universe, use [Tetra, the Orbs staking wallet](https://staking.orbs.network/)**.** 
- These v1 rewards for participants will be added to their staked balance.
- The rewards will comprise the accumulated rewards for each address (for all its relevant roles), from the previous distribution up until (and including) the 193rd elections, which will be based on Ethereum block number 11,368,900  ([https://etherscan.io/block/countdown/11368900](https://etherscan.io/block/countdown/11368900)) The 193rd elections are the last elections and rewards calculations for Orbs v1 network.

## Reward types

Rewards are accumulated following every election cycle. There are 3 types of rewards - Participation Rewards, Guardian Excellency Rewards, and Validator Rewards.

Active Guardians are eligible for Participation rewards for their own stake.

It is important to note that the same address can be eligible for all 3 types of rewards, i.e. a Validator can serve as a Guardian, and also receive Participation rewards based on self-delegation.

The accumulated rewards for a specific address, as well as the previously distributed rewards, are available here: [https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

### Participation rewards (Delegators and Guardians)

Token holders that delegate their voting weight to an active Guardian directly or indirectly, are rewarded proportionally to their stake. In order to receive the Participation reward for an election term, Delegators must have delegated to a Guardian that participated in the election.

An annual aggregate sum of 60M ORBS tokens is allocated to reward participation (of Delegators or Guardians). The reward allocation per election term is determined as a fraction of the annual allocation proportional to the duration of the election term.

Participants are rewarded in proportion to the stake they own and delegate at the time of each election event. The rewards are calculated at the end of each election term. The reward allocated to any specific Participant at any specific election term shall be capped to such Participant’s delegated stake for that election term multiplied by 8% divided by the annual number of election periods (for detailed calculation, see _“Rewards calculation”_ section below).

### Guardian Excellency rewards

Guardians enforce the security of the network and are rewarded for their own stake as part of the participation reward (described in the previous section). In order to encourage Guardian participation, top-ranking Guardians are also rewarded with the Guardians Excellence Program.

An annual aggregate sum of 40M Orbs is allocated to reward top-ranking Guardians for their work. The reward allocation per election term is determined as a fraction of the annual allocation proportional to the duration of the election term. 

In each election term, rewards will be allotted to the 10 leading Guardians that actively participated in the elections, ranked by the amount of stake delegated to them (including their own stake) in that election. The Guardian Excellency reward is distributed to Guardians in the top 10 group (in proportion to that stake). The rewards are calculated at the end of each election term. The reward allocated to any specific Guardian at any specific election term shall be capped to such Guardian’s total delegated stake for that election term multiplied by 10% divided by the annual number of election periods (for detailed calculation, see _“Rewards calculation”_ section below).

### Validator rewards

Validators are rewarded for running the network protocol and the actual steps they take to keep the network active and secure. The Validators rewards comprise:

- 4% annual rate of the Validator own stake. Awarded for the duration the Validator was elected
- Fees paid by any applications which may run on Orbs, divided equally between the active Validators 
- Validator Introduction Program - 1M ORBS tokens per Validator, on an annualized basis. Awarded in proportion to the duration the Validator was elected, for the duration of the Validator Introduction Program.

## Rewards calculation

The rewards calculation is available in the “Orbs PoS Ecosystem” document ([https://www.orbs.com/proof-of-stake-ecosystem/](https://www.orbs.com/proof-of-stake-ecosystem/)). The calculations will be published in parallel with the actual rewards distribution, so that anyone can retrieve the relevant information from the Ethereum network and confirm the calculations.

An example of calculated rewards for the 19th election cycle is available here - 

[https://docs.google.com/spreadsheets/d/1xFcErCbMfltISEOQjVMw3kZACszGBcvLQnmO487RqQk/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1xFcErCbMfltISEOQjVMw3kZACszGBcvLQnmO487RqQk/edit?usp=sharing) 

_Note - these rewards are just for the 19th election cycle,_ **_NOT_** _the total accumulated rewards_

## The actual calculations

- For elections and rewards calculation purposes, only whole ORBS tokens are considered
    - For example, for a Delegator stake of 15,240.13 ORBS the participating stake is 15,240 ORBS
    - This “whole ORBS only” approach is carried throughout all calculations
- Number of election periods in a year = 117.23
    - This calculation is based on the original blockheight progression on the Ethereum network
    - Elections occur every 20,000 Ethereum blocks
- Per election Validator reward = **validator\_stake** \* (4%/**num\_periods**) + (1M / **num\_periods**)
- Per election Guardian Excellency reward = **top10\_guardian\_reward\_ratio** \* **guardian\_total\_voting\_power**
    - Where **top10\_guardian\_reward\_ratio** = MIN(10%,(40M / sum\_of\_top10\_guardians\_total\_voting\_power)) / **num\_periods**
    - This reward is for the Top 10 (by their total voting power) of the Guardians who voted in this election round
- Per election **Participation reward** = **delegator\_reward\_ratio** \* **delegator\_stake**
    - Where **delegator\_reward\_ratio** \= MIN(8%, (60M /  all\_participating\_stake)) / **num\_periods**

...

PLEASE NOTE: RECEIPT OF REWARDS OR OTHER VALUE, AS WELL AS ANY USE OF THE ORBS NETWORK OR ACTIVITY THEREON, IS SUBJECT TO THE **ORBS NETWORK TERMS OF USE,** WHICH ARE AVAILABLE AT [https://github.com/orbs-network/orbs-spec/blob/master/NETWORK-TOU.md](https://github.com/orbs-network/orbs-spec/blob/master/NETWORK-TOU.md), INCLUDING, WITHOUT LIMITATION, ANY TERMS AND CONDITIONS THEREOF PERTAINING TO TAX CONSEQUENCES, WITHHOLDING OBLIGATIONS AND/OR TAX INDEMNIFICATION.    


