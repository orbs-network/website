---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/how-pow-and-pos-can-help-create-better-apps/bg.jpg
blogUrl: how-pow-and-pos-can-help-create-better-apps
date: 2019-04-11
title: How PoW and PoS Can Help Create Better Apps
author:
  - ../common/authors/DavidY.md
type:
short_description: (https://medium.com/@_David) is Orbs Head of Research. He is also a PhD candidate in the Technion (Israel Institute of Technology) under the supervision of Prof. Idit Keidar. His research focuses on the interplay between game theory and distributed systems._
---

(https://medium.com/@_David) is Orbs Head of Research. He is also a PhD candidate in the Technion (Israel Institute of Technology) under the supervision of Prof. Idit Keidar. His research focuses on the interplay between game theory and distributed systems.\_

...

**This post is the first in a series about my latest focus in Orbs - the Proof-of-Stake ecosystem.** I’d like to share my view of what we’re trying to accomplish, why PoS is the right choice and how our PoS implementation is optimized for this purpose.

## Articulating the value for apps

We’re building a blockchain infrastructure for apps. Not until long ago, I would have written that the infrastructure is for decentralized apps, but it always bothered me that the value proposition of decentralization by itself isn’t concrete enough. Let’s try to explain the value for apps and their users, but as an exercise, avoid using the words decentralization and blockchain altogether.

Most conventional web applications today run using centralized backends under a client-server architecture. The server hosts the backend, which comprises two main parts - (i) state (or database) and (ii) transition function, a piece of software that can be interpreted as the set of rules that dictates how the database evolves, given users’ requests and operations (transactions). The state is dynamic and keeps changing according to the transition function software and the interaction with the users. The client software (aka the frontend), installed in the users’ devices, enables users to interact with the backend.

The entity that owns the app controls the server - it privately maintains the backend, and provides no guarantees to the users as to how the backend is run. Instead, users need to trust their apps. To gain trust, especially concerning sensitive issues, apps usually need to earn a reputation and may convince their users of a viable business model. Furthermore, the principal means which users have to influence apps - leaving them - is in many cases problematic as users become “captive”.

An effective way to shift this user-app power equilibrium is by providing end-users with additional means of influencing the apps they use. We argue that by adopting these means, apps can become better for their users, and thus more competitive.

## App backend forkability

The most effective of these means is the guarantee of backend forkability. Providing this guarantee means that an app’s backend, both database and software, is available for anyone at any time to fork (with reasonable cost).

A fork means that an instance of the backend is duplicated and now serves as the backend of two distinct apps. This power allows a sub-community of users that are not satisfied with the way their app functions to “fork away” and continue with a new set of rules, but without losing their history or the experience they are used to. Backend forkability should be seen as a countermeasure against app abuse and should happen in practice only very rarely.

We distinguish backend forkability from traditional [forking](https://help.github.com/en/articles/about-forks) in the context of open source. There, a codebase can be forked, but not a live instance of an app’s backend including its database and access to end-users. In a sense, the data of the app makes all the difference.

## App backend auditability

Another powerful means to supplement backend forkability is to provide a guarantee of backend auditability. Providing this guarantee means that an app commits to its backend’s transition function in a public manner. Once this commitment is made, end-users have the ability to verify that the backend’s state progresses correctly.

Backend auditability can increase the trust users put in their apps. Take, for example, a conventional app today that wants to incorporate its users in governance decisions (e.g., adding or removing features, or more generally, changing the backend’s transition function). Without backend auditibality, it will have a hard time convincing its users of the correctness of the process. Another good example is exchanges (or banks), whose users trust blindly to handle their funds. Exchanges can gain a competitive advantage by providing auditability guarantees to their users.

It is important to note that without backend auditability, the backend forkability guarantee is meaningless. If users have no access to what’s going on behind the scenes, they won’t have the ability to make wise decisions regarding forking.

## Orbs as an infrastructure for apps

So what does the Orbs platform do? It allows app developers to create apps that provide these types of guarantees.

When you hear about forkability in the field of blockchain, it is usually in the context of forkability of the infrastructure, not the forkability of apps. This might be a bit confusing. Most purely decentralized blockchain infrastructures, Orbs included, are naturally forkable - their data and code are publicly available to anyone.

When the system is purely decentralized, providing the forkability guarantee is fairly straightforward. The Orbs platform, for example, is not designed to rely on any single entity - but rather to be managed and run by an open network of stakeholders. Since anyone can become an equal operator, anyone can also fork.

What is less straightforward is providing these guarantees on a hosted app that is not purely decentralized. Orbs supports hosting apps that are not purely decentralized and are managed by a single company. Even under these conditions, the Orbs platform guarantees that the app is forkable.

## Bitcoin and Proof-of-Work

Let’s explore the guarantees of backend forkability and backend auditability for one of the killer apps of the field - Bitcoin. We should note that Bitcoin is both an app and the infrastructure running this app:

- First, Bitcoin is a web application that defines a digital asset. The app is responsible for issuing the asset and distributing it to initial holders, and it enables the safe transfer of the asset between users, eliminating the risk of double- or over- spending.
- Second, Bitcoin is also the infrastructure over which the above web application is run. This infrastructure provides strong guarantees (such as forkability and auditability) to the users regarding the asset.

The Bitcoin infrastructure is open - anyone can connect to the Bitcoin peer-to-peer network, either as a miner or as a full node. The open nature of the infrastructure is generally seen as a prerequisite for making it possible to provide guarantees to the end-users. Proof-of-Work (first suggested [here](https://link.springer.com/chapter/10.1007/3-540-48071-4_10) as “a general computational technique for controlling access to a shared resource”) is the first mechanism to avoid the abuse of sybils in an open network and serves as the backbone of the Bitcoin infrastructure.

PoW on its own is not enough - the longest chain rule incentivizes the network to converge on a single version of history, and serves the function of establishing consensus, aka Nakamoto consensus. In Nakamoto Consensus, the potential prospects from mining drive many actors to engage in the mining race; as mining efforts intensify, the blockchain becomes more secure as the cost of attack increases.

Why do we need such a complicated and costly infrastructure? The Bitcoin app could not have been run on the typical client-server infrastructure that does not provide any guarantees to end-users. Any attempt to initiate a new digital asset based on the traditional client-server infrastructure would fail - the asset would not gain trust from a wide community and would not reach a notable valuation.

Bitcoin’s forkability (both the app and the infrastructure) was most notably demonstrated by the [Bitcoin Cash](https://en.wikipedia.org/wiki/Bitcoin_Cash) hard fork, concerning the general approach to scaling Bitcoin. Bitcoin’s forkability forces the core devs to make responsible decisions, backed by the community.

The following quotation from Princeton's [_Bitcoin and Cryptocurrency Technologies_](http://bitcoinbook.cs.princeton.edu/) nicely clarifies the idea: “One way of thinking about this is to say that the lead developers are leading the parade. They’re out in front of the parade marching and the parade will generally follow them when they turn a corner, but if they try to lead the parade into an action that is disastrous, then the parade members marching behind them might decide to go in a different direction. They can urge people on, and as long as they seem to be behaving reasonably, the group will probably follow them, but they don't have formal power to force people to follow them if they take the system in a technical direction that the community doesn't like.”

While this may slow down the decision-making processes, it also tunes Bitcoin to best fit its users and enables a (rather) peaceful split in the event of an unbridgeable quarrel in the Bitcoin community.

The interpretation of Bitcoin as constituting both app and infrastructure was first given by Ethereum (see the [White Paper](https://github.com/ethereum/wiki/wiki/White-Paper)), which disentangled the app layer from the infrastructure layer. The Ethereum blockchain offers the same infrastructure as Bitcoin’s infrastructure, based on PoW, but with the ability to build general apps (referred to as smart contracts or dApps) on top.

Ethereum offers the guarantees we have defined above, but has significant problems that prevent it from hosting consumer apps - it is too expensive, too slow and its capacity is too limited for these purposes. It is widely accepted in the blockchain community that the original Bitcoin infrastructure was not capable of efficiently hosting high-performance consumer apps without major architectural modification.

In the whitepaper, Bitcoin is referred to as a peer-to-peer electronic cash system. While Bitcoin has evolved into something that is viewed more as “digital gold” and serves more as a store of value than as a medium of exchange, layer two solutions (specifically the [lightning network](https://en.wikipedia.org/wiki/Lightning_Network)) are aimed to allow cheap, instantaneous, and non-refundable transactions that have the potential to turn Bitcoin into a cash system.

## Proof-of-Stake

The concept of PoS was conceived in an attempt to mimic Bitcoin and its underlying mechanism for sybil resistance - PoW - in an energy-economical way. In PoW, whoever has computing resources can take an active part in the system, and the influence of a participant is proportional to her computing resources. Alternatively, in a PoS system, in order to participate, one needs coins (or ‘stake’) in the system and participants’ influence is proportional to the number of coins they hold.

Since the term was coined in a [2011 Bitcoin forum post](https://bitcointalk.org/index.php?topic=27787.0), there have been many attempts to realize “PoS-based blockchains”. It became evident that such systems cannot preserve many of the properties of PoW-based blockchains, and that many adaptations to Bitcoin’s original design would have to be made in order to get similar properties. For one, the elegant longest-chain consensus rule would have to be altered (see [this](https://arxiv.org/abs/1809.06528) paper).

[Tendermint](https://atrium.lib.uoguelph.ca/xmlui/handle/10214/9769) was first to realize blockchain systems could benefit from the long-standing body of research that deals with distributed systems, and more specifically with replicated state machine and fault tolerance. The longest chain rule was replaced by a consensus algorithm that (under certain assumptions) supported “finality” and eliminated the need to handle “reorgs” (a prominent disadvantage in Nakamoto consensus). Tendermint adopted and adapted the famous [PBFT](http://pmg.csail.mit.edu/papers/osdi99.pdf) consensus algorithm to fit their blockchain architecture. [Algorand](https://arxiv.org/abs/1607.01341) developed a Byzantine agreement algorithm (dubbed BA\*) that supports their original approach towards DDoS protection. [Casper FFG](https://arxiv.org/abs/1710.09437) and [HotStuff](https://arxiv.org/abs/1803.05069) are BFT consensus protocols that are specially designed to fit a blockchain data structure and inspired by PBFT.

These consensus protocols incur a communication overhead that does not scale well with increased numbers of nodes. Thus, a way to sample-down a large network of stakeholders to only a few 10s or 100s is necessary. Proposed solutions to this problem can be divided into two main categories -- generating randomness and using it to sample committees (cryptographic sortition by Algorand, [threshold relay](https://www.youtube.com/watch?v=xf1dql4Zoqw) by [Dfinity](https://dfinity.org/), and Ethereum’s [VDF randomness beacon](https://ethresear.ch/t/minimal-vdf-randomness-beacon/3566) that shuffles validators to shards); or having the stakeholders vote for a committee of representatives ([Delegated-Proof-of-Stake (DPoS)](https://steemit.com/bitshares/@testz/bitshares-history-delegated-proof-of-stake-dpos) by Dan Larimer, used by [EOS](https://eos.io/), [Cosmos](https://cosmos.network/), [Tezos](https://tezos.com/), and other projects).

We emphasize that a consensus protocol on its own isn’t enough, nodes in a PoS-based blockchain need to be incentivized to act in accordance with the consensus protocol. A general approach to achieve this is by imposing economic punishments (or slashing) on misbehaving nodes (this idea was first articulated in [this](https://blog.ethereum.org/2014/01/15/slasher-a-punitive-proof-of-stake-algorithm/) blog post by Vitalik) and rewarding positive behavior.

In PoS blockchains coins have two distinct roles: staking and utility. Utility relates to all the different services or goods that can be consumed using the coins. Staking relates to the mechanisms that maintain the blockchain trustworthy, secure and healthy (for instance, the sampling-down mentioned above, or the slashing, are part of the staking mechanisms). It is important to note that the two roles, staking and utility, amplify each other, but introduce a “chicken or egg” paradox as well. Generally, more use yields a higher token value that makes staking more effective. In turn, effective staking is a condition for the system to be secure and attract more usage.

## Analyzing the EOS PoS architecture

Let’s analyze EOS, one of the most popular PoS blockchains today, to see how well suited it is for our goals. EOS is a blockchain for hosting apps run over a DPoS network. While EOS strives to be a decentralized platform, we want to test it against the more specific forkability and auditability guarantees defined above.

At the heart of the EOS platform lies a native token that has two main functions - staking and utility. Staking includes locking of EOS tokens and participating in governance decisions, the most important of which is determining the composition of the DPoS network over which the EOS platform is run. Token holders that lock their tokens can delegate them to a set of (up to 30) representatives, where the 21 representatives backed by the most stake are elected as EOS’ block producers (BPs) - the network nodes which participate in the EOS consensus protocol and produce blocks. Elections in EOS do not happen at designated times, they are ongoing constantly. Changes in the EOS BP composition can happen at any time.

The token utility concerns the allocation of system resources - compute, bandwidth, and memory - to users and apps (so they can use the platform). Access to compute and bandwidth requires a participant to lock tokens, while access to memory can be purchased with EOS tokens in a designated memory marketplace.

In terms of auditability, the EOS platform does improve on the centralized client-server architecture by relying on several network nodes to validate the correct progress of an app’s backend. An end-user that trusts even one BP to validate all blocks and report any malfeasance can trust the EOS platform as a whole. However, the platform does not facilitate sufficient tools (in our view) for light clients (or end-users) to monitor the BPs and verify the blockchain’s state (or even parts of it) independently. As a matter of fact, as we see it, the only satisfactory way to verify the EOS blockchain is by running a full node, which requires significant support from stakeholders. Maybe this is the core difference between a system like Bitcoin and EOS - becoming a full node in Bitcoin is quite easy and cheap (this includes getting convinced that your view is consistent with the rest of the network). In contrast, becoming a full node in EOS is almost impossible for a player that wasn’t among the early investors (with a reasonable cost).

Another issue with the EOS design is that BPs have no real incentive to behave correctly. BPs earn rewards for being elected among the top 21 delegates. This should incentivize BPs to act correctly, as if they act otherwise, they would lose their BP status and the rewards that come with it. This logic stands as long as there are sufficient ways for enough independent entities to evaluate the BPs (additionally, the token holders need to care enough to change their delegation, but this is a different story). As noted before, there are very few (on the magnitude of a hundred) full nodes auditing the BPs, and, since they are motivated to replace the current BPs, they are probably not sufficiently objective in evaluating them. Thus, full nodes cannot be used by token holders as a reliable signaling source for BPs’ evaluations.

The other incentivization tool used by the EOS blockchain is locking - delegated tokens are always locked and liquidation takes 3 days, during which the tokens can no longer be used for delegation. This means that if a BP, supported by her own stake, harms the network, it must wait 3 days before it could sell her tokens. By the time she is ready to sell, the token price would already have been affected by the attack. The locking mechanism is intended to discourage attacks that reduce the token price (quickly). But this mechanism isn’t bulletproof, as BPs do not necessarily lock their own tokens.

We now turn to analyze the delegation procedure and its implications. To determine the top 21 delegators, the platform uses a voting rule known as approval voting, initially devised in the 1970s ([this](https://www.amazon.com/Approval-Voting-Steven-Brams/dp/0387498958) book and [this](https://www.springer.com/gp/book/9783642028380) one are good resources). Every locked token can approve up to 30 BP candidates. Each candidate is then weighed according to the number of tokens supporting her, and the elected candidates are the top 21 (in terms of weight). This voting method is susceptible to manipulations -- colluding stakeholders holding 50+% of the total voting tokens can control all winning seats, and gain total control of the system. In practice, fewer tokens should be enough because the non-colluding tokens are probably not coordinated in their votes.

This concern further intensifies due to the following statistics: (i) Concentrated token distribution -- according to [Etherscan](https://etherscan.io/token/tokenholderchart/0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0), the top ten addresses in the EOS network control around 50% of the total EOS tokens in circulation (as of the mainnet launch in June 2018). (ii) Low voter turnout: only 26% of EOS tokens in circulation take part in voting (according to statistics published March 2019 by [EOS Authority](https://eosauthority.com/voting), an EOS BP). This means that only 13% of the total stake needs to collude to gain control of the EOS network). This turn of affairs is not surprising, even when noting that 50% of the total EOS tokens are locked and eligible to vote, as there is no direct monetary incentive to vote.

But this is not the end. Since each elected BP gains high rewards, there is a clear incentive to collude and potentially gain higher rewards - a “50% coalition” can guarantee itself 100%of the BPs rewards.

Indeed, evidence of collusion and vote manipulation has appeared in the media. Most notably, in September 2018, documents from Huobi, an exchange and a Chinese BP, were leaked showing that they were selling and trading votes with other BPs (as [this](https://mp.weixin.qq.com/s/xOUK8CwLCU4e9MFMaDFK7w) piece suggests). None of the accounts involved in the conspiracy have suffered any consequences, even though it is against the EOS constitution.

As a final issue, we note that once colluding parties gain control of the system, they can secure their position. Either by economic means, through vote buying and trading (as discussed in [this blog post](https://vitalik.ca/general/2018/03/28/plutocracy.html) by Vitalik, claiming that profit-driven participants would prefer a small guaranteed reward by the “in-control” 21 BPs, over improbable alternatives). Or by exploiting their control, censoring on-chain operations and accounts ([freezing accounts](https://hackernoon.com/everything-they-dont-want-you-to-know-about-eos-the-ethereum-killer-9939c43aa2df) has been done before) that are not supportive. This demonstrates the inherent conflict in the EOS election design - candidates are responsible for running their own election. We refer to this problem, which is valid in many PoS designs, as “letting the fox guard the henhouse”.

## The next post

So far, we’ve articulated the guarantees of forkablity and auditability that constitute the value-add that a blockchain-based infrastructure can provide for apps and their users.  We’ve also seen how PoW can provide these effectively, but is limited in cost and performance for general-purpose apps. PoS can address these limitations, and we’ve analyzed one major PoS architecture as a candidate for providing these guarantees.

In the next post, we’ll dive deeper into the specifics of the Orbs PoS architecture, see where it differs from other popular implementations and the rationale behind these differences.
