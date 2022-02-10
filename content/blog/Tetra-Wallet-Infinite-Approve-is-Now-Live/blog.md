---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Tetra-Wallet-Infinite-Approve-is-Now-Live/bg.png
blogUrl: Tetra-Wallet-Infinite-Approve-is-Now-Live
date: 2021-02-10
title: "Tetra Wallet: Infinite Approve is Now Live"
author:
  - /blog/common/authors/EranPeled.md
type:
short_description:
---

**Hello Orbs community!**

Orbs recently announced its latest protocol update [proposal](https://www.orbs.com/polygon-staking/) for multi-chain staking on Ethereum and Polygon.

This proposal addresses one of the key feedbacks from the community following the V2 launch: the substantial increase in ETH price and soaring gas prices for Orbs Delegators. The multi-chain staking solution proposed by the Orbs team is expected to completely mitigate the current high Ethereum gas costs for Orbs Delegators interacting with the Orbs staking contracts. The end result will allow Orbs Delegators to have the ability to choose between staking on Ethereum and staking on Polygon, based on their own personal preferences and considerations.

One of the action items for Polygon staking is revamping [Tetra](https://staking.orbs.network/): the official staking wallet by the Orbs team. As part of this revamp, the Orbs team also took the time to address one other feedback from the community regarding the staking flow - **specifically the “Approval” step.**


### Improved Staking Flow

Up until now, each time an Orbs Delegator wanted to stake ORBS on Tetra, he had to send an “Approve” transaction for his ORBS tokens in order to allow Tetra to stake the ORBS. Originally, this was designed as a security feature, as it is good practice to not leave open token approvals when interacting with smart contracts.

We received a lot of feedback from the community that this step is redundant and only puts additional costs for Orbs Delegators. It is true that for most protocols, like DEXs for example, there is only a 1-time approval when swapping tokens.

**As a result, the team has updated Tetra architecture and, from now on, the ORBS approval transaction will be required only when staking ORBS for the first time, after which it will no longer be needed when re-staking(*).**

*Orbs Delegators can always remove the ORBS token approval using existing tools such as [approved.zone](https://approved.zone/).

Here is the new staking flow on Tetra -

**1) First time ever Staking:**

Connect Metamask Wallet with TETRA -> Select a Guardian (Transaction #1) -> Approve ORBS token usage (Transaction #2) -> Stake ORBS (Transaction #3)

![Approve](/assets/img/blog/Tetra-Wallet-Infinite-Approve-is-Now-Live/image1.png)

**2) Additional Staking (Improved flow):**

Connect Metamask Wallet with TETRA -> Stake ORBS (Transaction #1, **no approval needed**)

![NoApprove](/assets/img/blog/Tetra-Wallet-Infinite-Approve-is-Now-Live/image2.png)


<div class='line-separator'> </div>

### A Community Effort

As always, we are attentive to feedback from the community. The Orbs Network is a community-based project and cannot succeed without the collective effort of all participants, including the Orbs development team, Guardians, users and token holders.

The Orbs team is extremely excited about the upcoming upgrades to its staking architecture which will put Orbs as the first protocol to have its PoS mechanism deployed on multiple chains. 

Stay tuned for more information and updates in the official Orbs [telegram channel](https://t.me/OrbsNetwork).





