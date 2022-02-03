---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/PolygonTech-imgages/bg.jpg
blogUrl: PolygonTech
date: 2022-02-03
title: Orbs — Building the World’s First Multi-Chain Staking with Ethereum and Polygon
author:
  - /blog/common/authors/TalKol.md
type:
short_description: 
---
*Orbs is one of the pioneering protocols utilizing Proof-of-Stake for securing its consensus layer. Orbs V1 executed PoS elections in an internal virtual chain. Orbs V2 innovated by adding the security of Ethereum's PoW to create the most secure PoS implementation to date. Orbs V3 is setting a new bar --- expanding PoS elections to Polygon and creating the world's first PoS implementation that spans 3 chains: Orbs, Ethereum and Polygon!*

<div class='line-separator'> </div>

**Orbs V1: Self executed PoS elections**

What's wrong with executing your blockchain's own Proof-of-Stake on your own blockchain nodes? Pretty much everybody does it.. If you look at popular PoS networks like EOS, Tezos and Cosmos, they are all running their PoS implementations on their own nodes.

This works. And Orbs V1 that launched in March 2019 did the same. The first version of Orbs Proof-of-Stake ran as an Orbs virtual chain executed by Orbs own validators. Is this such a bad thing?

The issue with PoS is that it's simply not as elegantly secure as PoW. In [Vitalik's own words](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/), this boils down to PoS being *subjective* while PoW has the wonderful property of being *objective*. This is a tricky concept to understand, so in 2019 I published a [post explaining this](https://medium.com/hackernoon/what-game-of-thrones-teaches-us-about-proof-of-stake-don-t-trust-cersei-a9caba418d36) with a cool little analogy from Game of Thrones:

Consider queen Cersei offering a way to end all the wars in Westeros and elect the rightful ruler for the seven kingdoms in a cunning spin on democracy. Cersei's army has gone to every village and collected a vote from every single citizen, bringing them all to her Red Keep where Cersei sat by herself and counted them all. To her pleasant surprise, she claims to have won in a landslide and now she expects you and everybody else to bend the knee. Would you trust such a system?

This isn't much different from asking Orbs elected nodes to run the next elections that will get them elected once again.

**Orbs V2: PoS over Ethereum's PoW**

In November 2020 we proposed a clever solution to this problem and launched the world's most secure PoS implementation in [Orbs V2.5](https://www.orbs.com/white-papers/orbs-pos-v2-the-age-of-guardians/). This was the first PoS implementation that relied on an external side-chain to verify its own election results!

And we didn't just choose any side-chain, we chose Ethereum itself. Orbs is an independent blockchain to Ethereum, it has its own separate nodes, its own consensus algorithm and its own separate incentive layer --- the ORBS token. By harnessing the power of Ethereum, we've utilized Ethereum's own ironclad security to increase the security of our own protocol.

**How did this work under the hood?**

The heart of Orbs PoS is allowing ORBS token holders to stake their tokens and elect honest validators. Elected validators are also called Orbs Guardians and represent the network's consensus committee. This committee executes the Orbs protocol and guarantees the network is fully decentralized and controlled by its token holders.

The system is implemented with a set of [Solidity smart contracts](https://github.com/orbs-network/orbs-ethereum-contracts-v2) that are deployed to Ethereum mainnet. The first of these contracts is the Orbs Staking Contract, which you can see [right here](https://etherscan.io/address/0x01d59af68e2dcb44e04c50e05f62e7043f2656c3), that is holding several hundreds of millions of dollars worth of ORBS tokens that have been staked by the Orbs community. The great thing about this implementation is that user funds are absolutely protected. To hack and steal staked ORBS tokens, you would have to hack Ethereum itself. If you could do that, Orbs Staking would probably not be your first target :)

Another Solidity smart contract takes care of calculating delegations and outputting the election results on every delegation change. This means that to stake your ORBS and delegate them, you have to send an Ethereum transaction. Another Solidity contract distributes staking rewards to all participants, which need to be claimed by participants as another Ethereum transaction.

![](https://miro.medium.com/max/60/1*mCO3veXyaD4lQFufOz-54g.png?q=20)

![](/assets/img/blog/PolygonTech-imgages/image1.png)

**Orbs V3: PoS over Ethereum + PoS over Polygon**

Orbs V2 architecture has some excellent security properties, but as Ethereum became more and more congested and ETH price climbed, so did the gas costs of users participating in Orbs PoS.

High participation costs slow down network growth and make it harder to onboard new delegators, particularly those looking to stake smaller amounts. It became clear that as the first feature of the next major version of the Orbs protocol we want to address this issue.

Without further ado, we're proud to announce Orbs staking on Polygon! (previously Matic). This will be the first major feature that will be part of the upcoming Orbs V3 release.

**Why Polygon?**

First of all, we love Polygon and we're good friends with the Polygon core team. Polygon has been one of the first alternative chains to support the ORBS token via its [official bridge](https://www.orbs.com/how-to-bridge-orbs-tokens-onto-the-polygon-network/) and promote the Orbs ecosystems with an incentivized liquidity program for ORBS token on its popular DEX [QuickSwap](https://www.orbs.com/orbs-is-now-live-on-quickswap/).

Polygon is an L2 EVM-compatible blockchain which fully supports the same Solidity smart contracts already running on Ethereum mainnet. This means delicate code that has undergone rigorous [audits](https://github.com/orbs-network/orbs-staking-contract#security-audit), such as Orbs Staking Contract, can be used without modification. This would give new ORBS stakers on Polygon peace of mind that the new Orbs Staking Contract on Polygon is just as secure as the current one on Ethereum.

Polygon is also a scalability layer for Ethereum and provides faster block times and fees that are considerably cheaper --- every staking or claim rewards transaction would cost a tiny fraction of the gas cost on Ethereum, practically resolving all existing gas issues.

**How will this work under the hood?**

The full suite of [Orbs PoS Solidity contracts](https://github.com/orbs-network/orbs-ethereum-contracts-v2) will be deployed to Polygon mainnet. This includes the Orbs Staking Contract, the contract calculating delegations and emitting committee results and the contract distributing staking rewards.

Instead of working with the ERC20 Ethereum ORBS token, these contracts would naturally work with the Polygon [bridged ORBS token](https://polygonscan.com/token/0x614389eaae0a6821dc49062d56bda3d9d45fa2ff). This means that every participant that wants to stake and delegate on Polygon would have to first take their ORBS tokens and use the official Polygon bridge to move them over to Polygon. If this sounds complicated don't worry, simple step by step tutorials will be published before launch. If you change your mind and want to move your ORBS back to Ethereum, simply use the Polygon bridge to send them back.

If you had been using an Ethereum wallet like MetaMask to send Ethereum transactions, chances are your wallet fully supports Polygon as well. You can use the exact same account, address and private key you use on Ethereum mainnet. You will have to hold some [MATIC](https://coinmarketcap.com/currencies/polygon/) tokens to pay for gas, similar in principle to holding some ETH to pay for gas on Ethereum mainnet.

Staking actions will still be performed on [Tetra](https://staking.orbs.network/#/) --- the Orbs staking wallet. The new Tetra wallet will soon be upgraded to support both Ethereum and Polygon side by side.

**Guardians** - will be able to support both networks and receive delegations on both Ethereum and Polygon. Keep in mind that each network has its own separate self stake requirement, so a Guardian looking to receive delegations on both networks will be required to self stake separately in both. Guardians will still run a single validator node like before. Once updated, the new Orbs node will support both Ethereum and Polygon at the same time. We've put a lot of emphasis on optimization, so running the new Orbs node will not be more expensive.

**Delegators** - will need to decide on which network they want to stake their tokens --- Ethereum or Polygon. Since the existing Ethereum mainnet smart contracts remain intact, ORBS can still be staked on Ethereum like before. Both networks pay the same staking rewards and have the same unstaking cooldown period, but gas is cheaper on Polygon so all actions on Polygon will require a fraction of the cost in fees.

![](https://miro.medium.com/max/56/1*_NYoZOObSgFlxSoD9465vA.png?q=20)

![](/assets/img/blog/PolygonTech-imgages/image2.png)

As you can see in the architecture diagram above, the committee of elected validators is no longer dictated by Ethereum only. Since every set of election contracts emits a committee, the Orbs network will now have an Ethereum committee and a Polygon committee. There will probably be some overlap between the two as some Guardians are expected to seek delegations in both. The super committee of Orbs Network will be the union of the two committees.
