---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-tech-update-february-2020/bg.jpg
blogUrl: orbs-tech-update-february-2020
date: 2020-02-19
title: Orbs Technology Update February 2020
author:
  - /blog/common/authors/NoamBerg.md
type:
short_description: ## New Token Locking in PoS
---

## New Token Locking in PoS

_Update from Orbs contributor [@noambergIL](https://github.com/noambergIL)_

Part of the new PoS V2 model update includes a shift to factor \*locked\* tokens for the PoS election process. It's better to move towards PoS V2 in small steps when possible so I'm integrating the new staking contract to the current election process. Why do we even want to lock tokens? Well, the strength of PoS is based on the value of all the tokens participating in running and governing the network. We need to align the interest of the participant in the PoS voting with the (well-being) interest of the network. So when a participant locks their tokens, they are more committed to the honest operation of the network because any malicious behavior that jeopardizes the entire network will also jeopardize their tokens.

How do we calculate the voting power for each participant of the election? The source of truth, i.e how many tokens the participant is voting with, is now split into two Ethereum contracts. One is the orbs token ERC20 itself, the other is the new separate locking (staking) contract. In this step towards PoSv2 we still consider the ERC20 token unlocked balances. So we need to consider the regular sum of tokens from both Ethereum contracts as your voting power and also for the rewards. So all I needed to do was add reading of the locked-stake value from the new Ethereum contract each time I read the ERC20 token balance. This is how I did it:

**Step 1**: Add unit tests for reading tokens from new source (not linked here).

**Step 2:** Duplicate the read from Ethereum code to allow reading another contract: [Git](https://github.com/orbs-network/orbs-network-go/blob/56de7fbc64cc69738d910d0ead8a261ed9790a9b/services/processor/native/repository/_Elections/processing_vote.go#L193)

**Step 3:** For every place we called the original \_getStake, add it’s duplicate and sum their values: [Git](https://github.com/orbs-network/orbs-network-go/blob/56de7fbc64cc69738d910d0ead8a261ed9790a9b/services/processor/native/repository/_Elections/processing_vote.go#L173)

The end result was actually a very minor change to the current election contract. For the full pull request, [click here](https://github.com/orbs-network/orbs-network-go/pull/1531).

...

## The Elusive _Reputation Bug_

_Update from Orbs contributor [@vistra](https://github.com/vistra)_

A few weeks ago, [@gadcl](https://github.com/gadcl) and I stumbled across an interesting and somewhat entertaining bug in the reputation mechanism. First of all, some context: the reputation mechanism is the part of the protocol responsible for automatically detecting and "punishing" misbehaving validator nodes. The basic idea is to keep a reputation score for each node under the protocol, and (very broadly speaking) derive a participation probability for the validator node. This probability defines how frequent the node takes part in consensus activity (i.e. closing blocks) - the lower your reputation score is, the lower the probability should be. The bug had to do with just how low.

We observed that nodes with only a few incidents of misbehaviour were severely punished and are practically banned from taking part of the consensus (their participation probability dropped to near-zero). At first we thought it to be an implementation bug, but after some investigation (and a toy simulation which reproduced this) we found that the bug was actually in the design of the probabilistic model itself. To keep a long story short, the faulty model lowered the probability exponentially instead of linearly. So instead of a probability of, say, 1/100, the effective probability was more in the range of 1/(2^100) (practically zero). As the model defines a process and doesn't produce the probabilities directly, that was a bit counter intuitive and easy to miss.

To fix this, at first we considered adjusting the parameters of the existing model so it would produce the desired probabilities. We ran some calculations and even used some integrals! That was fun. But in the end we decided to change the model altogether, to one which is more straightforward and does not require heavy parameter adjustment. The new model is now live in Orbs as of version 1.3.9. You can take a look at the pull request here: [https://github.com/orbs-network/orbs-network-go/pull/1527](https://github.com/orbs-network/orbs-network-go/pull/1527)

...

## Improvement of Node-Level Services

_Update from Orbs contributor [@amir-arad](https://github.com/amir-arad)_

One of the places I plan to get into is the management layer of an Orbs node. Today there are two services that are responsible for managing the node: [Nebula](https://github.com/orbs-network/nebula) (CLI tool that provisions, re-deploys, and destroys a node) and [Boyar](https://github.com/orbs-network/boyarin) (golang service that runs inside the node, reads the state of the network and executes virtual-chain processors and other services). Since an Orbs node executes multiple virtual chains side by side and these virtual chains are completely isolated, this management layer is in charge of orchestrating the various virtual chains - each running in its own docker instance.

My first goal is to make Boyar act according to the new “Proof-of-Stake V2” model which relies more tightly on Ethereum contracts instead of the current JSON configuration. So I’m going to start by adding a new node-level service called "service 2" (working title, suggestions for a cool name are welcome!) that will serve as a proxy between the new contracts and the legacy Boyar. Implementation-wise, this service will generate the JSON file Boyar is relying on from Ethereum events. On a larger scale, I think the Orbs project will benefit from a rewrite of Boyar in a more flexible language than golang (Typescript is my personal choice since it's so easy to hack and I think validators will benefit from being able to easily modify this part), but I think small incremental changes are more important at this point. Anyways, I'm planning to implement the new service in Typescript.

...

## Hacking in ETH Denver

_Update from Orbs contributor [@netoneko](https://github.com/netoneko)_

I'm in [ETH Denver](https://www.ethdenver.com/) this week to represent the Orbs project. I saw a lot of great projects, both apps and infrastructure. It seems like particular infrastructure projects are more popular than others - for Ethereum it's governance frameworks like DAOStack and identity providers like Fortmatic and 3box, alternative compatible runtimes concerned with lowering transaction costs and providing instant confirmation like Ethermint and Skale (Orbs, though incompatible with the Ethereum contract API, also falls into this category).

There's still a lot of talk about DeFi and exchanges. It also seems that government representatives are supportive of blockchain initiatives. Another popular area that I noticed is off-chain calculation solutions and oracle providers. Since hacking and building stuff is a big part of ETH Denver, I'm working on a very cool hackathon-style project here - an oracle subsystem for Orbs. This is PoC for a generic way to access external oracles from Orbs smart contracts. I promise that the full details will come in a standalone blog post I'll publish later this week, once I’m back.

...

## Orbs PoS Mobile Wallet

_Update from contributor and Orbs Korea Community Manager_ [_Eddy Kim_](https://www.linkedin.com/in/eddy-kim-340376151/)

The Orbs PoS Wallet has finally been rolled out. The app is developed as a native app to support easy participation and easy POS information access in a mobile environment. The app is connected with the most secure mobile wallet, Samsung Blockchain Keystore powered by Knox technology. If you have a supported device, you can hold and delegate with a simple button click in your app. Otherwise, it is still useful for monitoring your assets in other wallet via read only mode:

![](/assets/img/blog/orbs-tech-update-february-2020/image1.png)

**KEY features Include:**

- Send, Receive tokens
- Easy delegation via simple GUI
- Guardians list and information of guardians
- POS rewards information (estimated amount, previous distributed history, etc)
- Election information with countdown

**Specification requirement:**

- Android 8 (sdk 26) or above
- Samsung blockchain keystore (for full wallet features)

The app has already undergone rapid improvement during last week with the help of our community great beta testers (thanks everyone!)

[The repo](https://github.com/Eddy-orbs/orbs-pos-scw) is private for now, but if any developers are interested in contributing, please feel free to touch me at [eddy@orbs.com.](mailto:eddy@orbs.com)

**Try the app now for free!**

**▶️ [Google Play](https://play.google.com/store/apps/details?id=com.orbs.pos)**

**▶️ [Galaxy Store](https://galaxy.store/orbs)**
