---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/PolygonStakingDate-images/bg.jpg
blogUrl: PolygonStakingDate
date: 2022-03-14
title: "Orbs PoS V3: Multi-chain Staking on Polygon Launch Date, Protocol Improvements and Special Features"

author:
  - /blog/common/authors/EranPeled.md
type:
short_description: 
---
**Polygon Staking Launch Date Confirmed!**

**After a lot of hard work by the Orbs team and many community members, we are excited to announce that Orbs PoS V3: Multi-chain Staking on Polygon will launch on 29/03/2022 (which also happens to be the three year anniversary of Orbs mainnet launch)!**

Around 2 months ago, the Orbs team put forward a [protocol upgrade proposal](https://www.orbs.com/polygon-staking/) for Orbs PoS V3: Multi-chain Staking on Ethereum and Polygon. We are happy to say that we have been busy working on implementing this proposal with invaluable feedback and advice from the community.

The team is currently working on the final QA and testing in order to ensure a successful launch. In addition, educational materials will be provided to both Orbs Guardians and Delegators for staking on Polygon.

We wish to give a huge thank you to the Orbs community who were instrumental in delivering this important protocol update of the Orbs network. We feel that this whole process has banded together the community making it stronger than ever.

**Protocol Adjustments and Improvements**

Polygon is an L2 EVM-compatible blockchain which fully supports the same Solidity smart contracts already running on Ethereum mainnet. This means delicate code that has undergone rigorous [audits](https://github.com/orbs-network/orbs-staking-contract#security-audit), such as Orbs Staking Contract, can be used without modification, making it just as secure as the current one on Ethereum.

However, multi-chain staking on Ethereum and Polygon can bring about various issues when needing to verify the joint state of the two chains. As a result, several improvements and modifications have been made to the Orbs PoS V3 mechanism. These changes apply to staking on both Ethereum and Polygon, so that the mechanism is identical in respect to both chains.

The Orbs PoS V3 staking mechanism stays the same as V2, with the following adjustments:

**1) Multi-chain Staking**

Orbs PoS V3: Multi-chain staking, [utilizes](https://www.orbs.com/Polygon-tech/) Orbs' hybrid architecture and cross-chain properties to deploy novel multi-chain PoS staking on Ethereum and Polygon.

Adding Orbs PoS staking on Polygon means that the Orbs network utilizes the Ethereum stack to its fullest potential: The security of Ethereum as the base layer, and the scalability & low fees of Polygon as L2.

Following the Orbs PoS V3 release, Orbs Guardians and Delegators will have the ability to choose between staking on Ethereum and staking on Polygon, based on their own personal preferences and considerations.

**2) Tetra Staking Wallet Support for Polygon**

In order to participate in the Orbs universe, token holders are required to stake their tokens and select a Guardian to delegate their voting power to.

In order to simplify the interaction with the staking contract, the Orbs team previously developed the Tetra wallet, with a simple and convenient interface. The [Tetra staking wallet](https://staking.orbs.network/) allows you to stake your tokens and select a Guardian to delegate to.

For the release of Orbs V3, Tetra has been updated to enable staking on Polygon with a simple and intuitive UI to switch between the Ethereum and Polygon networks.

**3) Changes in Staking Rewards**

The Orbs PoS rewards are calculated continuously based on the effective delegated stake in each time period. Having Orbs PoS deployed on Ethereum and Polygon can create syncing errors in parameters such as Total Stake on both chains, which is required to calculate the staking rewards. This calls for certain simplification in the rewards mechanism in order to avoid miscalculation of rewards.

**After consultation with Orbs Guardians and major stakeholders in the ecosystem, it was decided to increase the annual staking rewards to a fixed 10% APR and remove the annual maximum cap.**

Let us examine the effect of this on the Orbs Guardians and Delegators:

Orbs PoS V2 has a maximum annual reward equal to 12% of total delegated stake capped at 80M ORBS annually.  At the current total stake of approx. 838.5M ORBS (as of 8/3/22), rewards are at the max. cap of 80M, which means that the actual V2 staking rewards are 9.54% APR.

Polygon staking is expected to be a driver for further increase in the total ORBS staked. In addition, the total stake is predicted to increase organically if the Orbs network continues to grow and mature. In such a scenario, the actual APR for V2 would have been even lower than the current 9.54%.

![](/assets/img/blog/PolygonStakingDate-images/image1.jpg)

**Orbs PoS V2 vs V3 Staking Rewards Comparison**

As can be seen in the table above, the PoS V3 updated APR of a fixed 10% increases the rewards allocation to Guardians and Delegators in comparison to V2, especially when taking into account future network growth and increased adoption.

All in all, the V3 simplified rewards mechanism is a good compromise between avoiding potential staking rewards distribution errors while minimizing the impact on, and even improving, the rewards APR for Guardians and Delegators.

**4) Removal of Guardian's Self Stake**

Orbs PoS V3 removes the [self-stake](https://www.orbs.com/white-papers/orbs-pos-v2-the-age-of-guardians-section-minimum-self-delegation/) requirement for Orbs Guardians. This means that Guardians will no longer be required to have a self-stake of at least 8% of their total delegated stake.

The purpose of this is to reduce operating friction for Guardians serving on both an Ethereum and a Polygon committee. Such a state could cause capacity issues which will force the Guardians to maneuver their ORBS between Ethereum and Polygon in order to fulfill the self-stake requirement.

Therefore, to avoid this operational headwind and potential loss of revenue for the Orbs Guardians, it was decided to remove the self-stake requirement as part of the PoS V3 upgrade.

**5) Special Feature: Auto-compound for Polygon Staking**

Polygon is a scalability L2 chain on top of Ethereum and provides faster block times and fees that are considerably cheaper - every staking or claim rewards transaction is expected to cost a tiny fraction of the gas cost on Ethereum, practically resolving all existing gas issues.

Polygon's reduced gas costs also paves the way for new and exciting features that were not practically available on Ethereum. One of these is auto-compounding.

Auto-compounding will be the first special feature for Polygon staking and it will be available right from the launch of PoS V3. The auto-compounding feature will enable Orbs Delegators to increase their staking rewards APY by periodically re-staking their ORBS rewards back into the staking contract.

**Pos V3: A major milestone for Orbs 3.0**

Orbs PoS V3: Multi-chain staking is a key building block of [Orbs 3.0](https://www.orbs.com/Orbs3.0/) and a significant milestone for the Orbs project.

![](/assets/img/blog/PolygonStakingDate-images/image2.jpg)

We are really excited about Orbs coming into 2022!

The upcoming Orbs PoS V3, together with the potential for increased network usage thanks to [L3 applications](https://www.orbs.com/How-Orbs-Hybrid-Architecture-Is-Becoming-a-Game-Changer-in-DeFi/) powered by Orbs coming to fruition, like [The Open DeFi Notification Protocol](https://www.orbs.com/notifications-launch/) and [Revault](https://www.orbs.com/Revault-Network-to-Power-its-DeFi-Application-With-Orbs/), could help make 2022 the breakthrough year for Orbs becoming a major player in Web 3.0.

Last but not least, Orbs is also celebrating its 3 year anniversary this month. 3 years is a big number in crypto years - the project has been through a lot: from surviving crypto winter, market-fit pivots, and much much more. Through all of this the Orbs community has fully participated and shown a lot of resilience and loyalty. 

Expect some big surprises coming soon!
