---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/polygon-staking/bg.jpg
blogUrl: polygon-staking
date: 2022-01-11
title: "Orbs Protocol Upgrade Proposal - Multi-Chain Staking on Ethereum and Polygon"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description:
---

### Orbs Introduces Multi-chain Staking


TL;DR

1. In November 2019, Orbs PoS V2: The Age of Guardians was launched, fully deploying the Orbs PoS architecture on the Ethereum network.
2. Since then, we have seen an explosion in usage on the Ethereum network caused by the emergence of DeFi and NFTs, which resulted in a substantial increase in ETH price and soaring gas prices for Orbs Delegators.
3. Polygon is a leading layer-2 scaling solution on top of Ethereum, facilitating high transaction throughput and low gas fees.
4. The Orbs team proposes utilizing Orbs hybrid architecture and cross-chain properties to deploy multi-chain Orbs PoS staking, starting with the Polygon network.


In this proposal, the Orbs team introduces a novel approach of multi-chain staking. This unique approach aims to utilize the solutions currently available in the crypto landscape to their fullest, in order to optimize the security and scalability of the Orbs protocol. This proposal is now made possible with the fruition of two main factors: Orbs becoming a multi-chain asset with integrations into all major chains, and the maturing of tested and functioning L2 solutions.

After much research and deliberation, the Orbs team found Polygon as the most suitable chain to implement Orbs multi-chain staking. As of today, Polygon is the leading L2 project on top of Ethereum. Deploying Orbs staking on Polygon will capitalize on the advantages offered by the Ethereum stack, being the market leader by a large margin, and will help achieve both scalability and low fees as well as high security.

**The multi-chain staking solution proposed by the team is expected to completely mitigate the current high Ethereum gas costs for Orbs delegators interacting with the Orbs staking contracts.**

Having the Orbs governance mechanism deployed on multiple chains is a revolutionary and bold move by the Orbs project which conforms with Orbs vision of interoperability across the crypto space. Orbs has always been at the forefront of blockchain technology innovation and the Orbs team is proud to put forward this proposal for the community.


### Background: Orbs PoS V2 - The Age of Guardians

[Orbs V2: The Age of Guardians](https://www.orbs.com/white-papers/orbs-pos-v2-the-age-of-guardians/), launched in November 2019, introduced many significant upgrades to the Orbs protocol with emphasis on usage and performance. The main goal of Orbs V2 was to enable the Orbs Universe Guardians (validators) to take an active role in building and maintaining a secure, scalable network, which will be the first choice for blockchain adoption, and to better manage and serve the network and its participants.

Fast-forwarding to the present, V2 was indeed a pivotal moment in the network's history, and was instrumental in turning Orbs into a functioning decentralized infrastructure protocol, with a set of committed Guardians and a strong backing community. The Orbs project is now stronger than ever!

However, since November 2019, the crypto space, and ETH in particular, have also undergone some monumental shifts as a result of protocol upgrades and the emergence of new and exciting use-cases such as DeFi and NFTs. The fast-moving crypto market presents a sea of opportunities to projects who are willing to adapt and utilize these shifts to their advantage - and that is exactly what we are planning to do with this exciting new proposal by the Orbs team


![armor](/assets/img/blog/polygon-staking/image1.png)



### Staking on Ethereum: Pros and Cons

The Orbs project introduced a novel and original model of a hybrid blockchain:

The Orbs network is based on its own blockchain that is used as an infrastructure for running applications. Orbs is therefore not a layer 2 for Ethereum and it holds its own value in its permissionless validator pool based on the PoS ecosystem of the ORBS token and its incentives model.

However, the Orbs network’s hybrid architecture provides a role for another blockchain. The Orbs network currently utilizes the Ethereum network to host the ORBS ERC20 token and Proof-of-Stake contracts. As a result, the ORBS token is also used for staking, electing Guardians and rewarding the PoS participants. Orbs PoS Ethereum contracts implement the logic for staking tokens, electing the Guardians committee, distributing rewards and fees, and more. Orbs ecosystem participants, Delegators and Guardians, interact with the PoS contracts by sending Ethereum transactions to the relevant Orbs contracts, these transactions are subject to gas cost.

The choice to delegate the voting functions to another blockchain was made because it provides an [external objective guarantee](https://www.orbs.com/pos-external-oversight/) that any observer can verify that elected nodes on Orbs are indeed the ones the stakeholders voted for. Similarly, launching the Orbs token as a token on another blockchain allows the Orbs token to enjoy the security benefits provided by the second blockchain’s security ecosystem. Ethereum was chosen as the second chain to provide these important functions, and is therefore a crucial component in the Orbs design.

This structure allows the Orbs network to enjoy many of the benefits of both chains. However, the parts of the Orbs network that rely on Ethereum are still subject to some of Ethereum’s downsides - in particular high gas fees. High gas costs adversely affect some aspects of the Orbs Network operation, specifically transactions which are executed using Ethereum smart contracts, such as staking.

![gas](/assets/img/blog/polygon-staking/image2.png)

Since the V2 launch, Ethereum experienced an ever increasing trend of on-chain activity, largely due to the explosion in usage of DeFi and NFTs protocols. This in turn resulted in a significant spike in gas prices for using the Ethereum network. The Orbs team did take measures to mitigate this issue by launching various V2 [protocol improvements](https://www.orbs.com/v2-5-update-combating-the-gas-storms/), mainly in the staking rewards assignment and distribution architecture, leading to an improved distribution mechanism and significant reduction in Guardians operating costs. However, the issue remained.

With the introduction of [EIP-1559](https://consensys.net/blog/quorum/what-is-eip-1559-how-will-it-change-ethereum/) and the upcoming [Ethereum merge](https://ethereum.org/en/eth2/merge/), as well as the long term belief in the growth of the Ethereum ecosystem, we expect this issue to persist. 


### Orbs: Multi-chain Asset & Multi-chain Staking

Around one year ago, the Orbs core team shifted much of its focus to the DeFi space, as we believed that DeFi will emerge as the killer app of blockchain technology. And indeed, during this period we saw an explosion in DeFi protocols, accelerated by the maturing of layer-2 (L2) technology and the rapid emergence of quality L2 infrastructure scaling projects.

During this past year, the Orbs project has strengthened its position as a multi-chain asset across the DeFi space. Orbs is already available on 5 major layer-1 (L1) chains: Ethereum, BSC, Polygon, Solana, with Avalanche being the latest addition. This in turn accelerated the integration of the Orbs ecosystem with over 17 major DeFi platforms (such as UniSwap, SushiSwap, PancakeSwap, Kyber Network, 1inch, Alpaca Finance, Beefy Finance, QuickSwap, DinoSwap, Raydium, Trader Joe, Pangolin, with more to come in the near future...).

The availability of functioning L2 chains together with Orbs’ rapid expansion into multiple chains, paved the way for various exciting and innovative applications for the Orbs network that were not available before. These include Orbs as a [Layer 3 infrastructure](https://www.orbs.com/How-Orbs-Hybrid-Architecture-Is-Becoming-a-Game-Changer-in-DeFi/) for DeFi applications. 

Now, these integrations also allow for the Orbs Network to diversify and add another blockchain to its hybrid architecture by implementing cross-chain staking! 

Instead of having the Orbs Token staking just on Ethereum, Delegators will have the option of being part of a parallel staking system on Polygon.  


### Why Polygon?

When considering the next steps for the Orbs ecosystem expansion, Polygon emerged as a leading candidate being one of the most interesting scaling solution projects being built on top of Ethereum.

After doing a thorough [research](https://www.orbs.com/orbs-ecosystem-expansion-whats-next/) into Polygon’s technology, ecosystem, defi activity and on-chain fundamentals, Polygon was indeed chosen to be one of the first chains for Orbs expansion. Since then, this conviction has only strengthened, with Polygon emerging as the leader of L2 scaling infrastructure in the Ethereum stack.

After going [live on Polygon](https://www.orbs.com/how-to-bridge-orbs-tokens-onto-the-polygon-network/) using the official Polygon bridge to Ethereum, the Orbs presence on Polygon has flourished following addition of the ORBS token to leading protocols such as [QuickSwap](https://www.orbs.com/orbs-is-now-live-on-quickswap/), the largest DEX-AMM on polygon. As liquidity increased in the Orbs pools, Orbs was also added to leading vaults such as [DinoSwap](https://www.orbs.com/Orbs-Extinction-Pool-Launched-on-DinoSwap/) and [KogeFarm](https://www.orbs.com/Orbs-Added-to-KogeFarm-Vaults/). All in all, the Orbs expansion into Polygon has been a success and Orbs maintains a strong presence on the Polygon network.


### Staking on Polygon Proposal Overview 

**Having Orbs PoS staking on Polygon means that the Orbs network utilizes the Ethereum stack to its fullest potential: The security of Ethereum as the base layer, and the scalability & low fees of Polygon as L2.**

Adding staking on Polygon will require deploying Orbs PoS contracts on the Polygon chain, as well as having additional contracts to verify the merge state from Ethereum and Polygon to determine the Elections Committee results. In addition, the Orbs team will need to update the Tetra staking wallet to be compatible with Polygon. The end result will allow Orbs Delegators to have the ability to choose between staking on Ethereum and staking on Polygon, based on their own personal preferences and considerations. 

Thanks to Orbs’ earlier integration with Polygon, Orbs token holders can easily migrate ORBS tokens between Ethereum and Polygon using cross-chain bridges such as the [official Polygon bridge](https://www.orbs.com/how-to-bridge-orbs-tokens-onto-the-polygon-network/). In addition, existing ORBS liquidity pools on leading protocols on both chains, such as [Uniswap](https://blog.orbsdefi.com/p/orbs-on-uniswap-and-whats-next) and [Quickswap](https://www.orbs.com/orbs-is-now-live-on-quickswap/), will provide the necessary liquidity and allow Orbs token swaps on each chain.

The Orbs Network is a community-based project and cannot succeed without the collective effort of all participants, including the Orbs development team, Guardians, users and token holders. Since the launch of Orbs V2 we have always been attentive to the important feedback from community members and have been analyzing various solutions. With the advancement of L2 solutions and after a lot of groundwork by the Orbs team, we are now ready to put forward this proposal.


### What’s Next…

The Orbs team is currently working on the technical details on this proposal which will be presented to the community in due course. In parallel, we will initiate ongoing discussions with the Orbs Guardians and the Orbs community to present and review the various aspects of this proposal for notes and feedback.

The Orbs team is extremely excited about this initiative which addresses one of the key feedbacks from the community following the V2 launch. Staking on Polygon will boost inclusion and participation of Orbs token holders in the PoS Universe staking, as well as solidify Orbs as a multi-chain protocol. In addition, the low fees on the Polygon network will enable the team to develop new features in the Orbs PoS Universe that are not practical on Ethereum, more on that soon…

For a protocol to have a major part of its governance mechanism deployed on multiple chains is quite unprecedented. Orbs has always been at the forefront of blockchain technology innovation, with new and novel concepts and applications such as presented in this proposal and other projects the team is currently working on such as [L3 architecture](https://www.orbs.com/How-Orbs-Hybrid-Architecture-Is-Becoming-a-Game-Changer-in-DeFi/).

Stay tuned for more information and updates in the official Orbs [telegram channel](https://t.me/OrbsNetwork).


