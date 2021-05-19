---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/rd-update-orbs-july-2019/bg.jpg
blogUrl: rd-update-orbs-july-2019
date: 2019-07-18
title: Orbs R&D Update July 2019
author:
  - /blog/common/authors/Nate.md
type:
short_description: ## **Highlights**
---

## **Highlights**

_This segment was contributed by_ [_@OdedWx_](https://github.com/OdedWx) _and_ [_@talkol_](https://github.com/talkol)

Hi community, this has been a busy month since the [last R&D update](https://www.orbs.com/orbs-rd-update-june-2019/)!

The biggest thing happening was the first ever rewards distribution. As you know, the rewards are given and accounted for on an ongoing basis (on every election), but the tokens themselves are distributed over Ethereum in bulk after 3 months. We’ve had our first successful distribution which included the first 27 election periods (1 through 27)!

Some statistics: 18,018,788 ORBS were distributed to 1,448 addresses. The distribution took place by a [smart contract on Ethereum](https://etherscan.io/tx/0x5627766a3f55354a2cd70f9153a2bebe1053d2f5c99aec647027ce85e93b3f1b), to make sure we have a third party external verification of the entire process. There’s a very nice architecture that requires only a single transaction with commitments for the entire distribution event. Following the commitment transaction, any account may send the distribution transactions relying on the commitments. This means that the process is transparent and easy to review and also very efficient (50 distributions per transaction). [See this post describing the entire process](https://www.orbs.com/first-orbs-rewards-distribution-summary/).

Another area the contributors have been focusing on this month is production network fixes. The network is up in production since March, and is constantly monitored for issues and improvements. For example, the lean helix threading model was improved, preventing corner cases that may cause a delay in a block creation. Another example is improvements to the gossip threading model.

There’s a lot of excitement in the community for working with the system and making this process easy for developers. One very exciting project I want to point out is the Orbs Playground - an online IDE for smart contract developers that lets them experiment and develop smart contracts on Orbs directly from their web browser - without downloading and installing any tools! This very cool tool started as a hackathon project, but got such a good feedback that it became a standalone project that is now actively maintained. Also look forward to seeing it embedded more in more in the various Orbs websites.

...

## **Blockchain Core**

_This segment was contributed by_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg)

Last month marked the completion of the first release since the Orbs platform was launched in March. While several patches have already been released earlier, June signified the first full release with actual features.

Updates include improvements to [Gamma](https://github.com/orbs-network/gamma-cli), various stability and monitoring updates, design & implementation work on the Lean Helix consensus algorithm goroutine model and more.

[_@itamararjuan_](https://github.com/itamararjuan) was working on a feature that intends to increase confidence against the introduction of bugs or regressions, and help measure improvement or degradation in performance, when changing the codebase.

This entails introducing a new step to the CI process, where, upon, the creation of a new pull-request on the [orbs-network-go](https://github.com/orbs-network/orbs-network-go) GitHub repo, provisions a new virtual chain (network) and runs the e2e (end-to-end) test suite against it.

[_@itamararjuan_](https://github.com/itamararjuan) upgraded [Nebula](https://github.com/orbs-network/nebula) — Orbs’ node deployment tool— to support Terraform 0.12.

BTW, [_@itamararjuan_](https://github.com/itamararjuan) also managed to complete a difficult bicycle tour of northern Italy during the same time, so great job and thank you :)

[@ronnno](http://@ronnno) and [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) have been busy converting integrative tests that span Orbs and Ethereum into Javascript. Check out the results in the subrepo [Psilo](https://github.com/orbs-network/orbs-ethereum-contracts/tree/master/psilo).

[_@ronnno_](https://github.com/ronnno) wrote the contracts of rewards distribution, along with extensive testing.

The work is in [PR110](https://github.com/orbs-network/orbs-ethereum-contracts/pull/110) and you can read more about it in this [post](https://www.orbs.com/first-orbs-rewards-distribution-summary/). Also, thanks to [_@gilamran_](https://github.com/gilamran) for adding rewards history to the [Rewards page](https://orbs-network.github.io/voting/reward).

[_@ronnno_](https://github.com/ronnno) and [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) have been modifying the goroutine model of the [Lean Helix consensus algorithm](https://github.com/orbs-network/lean-helix-go) of the Orbs platform. Presently, the algorithm suffers from less-than-ideal performance when the rate of incoming transactions is low, due to having a single goroutine for waiting for new transactions, and for handling external events such as Node Sync and Leader Election in Lean Helix. Following several proof-of-concept iterations, a new model was decided upon, and development is underway! This work is expected to complete during July, more details will be available in the next update (stay tuned).

[_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) completed an update of the Gossip goroutine threading model in [PR1121](https://github.com/orbs-network/orbs-network-go/pull/1211). Before this change, DirectTransport had a goroutine per connection, and handling a message occurred on that goroutine. This effectively blocked further communication from that peer for the duration it takes to handle the message. Some Gossip consumers, such as the LeanHelix consensus algo, may block for a long time, if - for instance - it is waiting for a new block to be produced.

This PR creates a goroutine per Gossip topic, writing from the connection goroutines to the topic goroutines via a buffered channel. Essentially this serializes all messages from _all peers_ to a single goroutine, but frees the connection goroutines to handle subsequent messages, and guarantees QoS per topic.

In addition, the code now creates a one-off goroutine per Block Sync request, so that scanning blocks or reading chunks from disk will not block the Block Sync topic goroutine. Another PR, [#1193](https://github.com/orbs-network/orbs-network-go/pull/1193), upgrades the Orbs platform to compile using Golang 1.12.6 (previously 1.11.x was used).

It is expected that the Lean Helix topic will not be blocked, as it will have a goroutine that deals with reading from the topic.

[_@noambergIL_](https://github.com/noambergIL) _and_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) updated code in [PR49](https://github.com/orbs-network/lean-helix-go/pull/49), [PR1202](https://github.com/orbs-network/orbs-network-go/pull/1202) to support _Sign()_ becoming an external service - to that end, a cancellable Go context was added as a parameter to this method.

More PRs by [_@noambergIL_](https://github.com/noambergIL):

- [PR1186](https://github.com/orbs-network/orbs-network-go/pull/1186) — To fix rewards & double delegate state
- [PR99](https://github.com/orbs-network/orbs-ethereum-contracts/pull/99) — For election review created a script to show every election breakdown

More PRs by [_@ronnno_](https://github.com/ronnno):

- [PR110](https://github.com/orbs-network/orbs-ethereum-contracts/pull/110), [PR112](https://github.com/orbs-network/orbs-ethereum-contracts/pull/112) — Orbs Rewards distribution
- [PR1188](https://github.com/orbs-network/orbs-network-go/pull/1188) — NodeSync test for when both petitioner and responder have no blocks
- [PR95](https://github.com/orbs-network/orbs-ethereum-contracts/pull/95) — Preparatory refactor; part of the larger effort to convert integrative tests that span both Orbs and Ethereum to Javascript. To that end, [@ronnno](http://@ronnno) and [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) created the subrepo [Psilo](https://github.com/orbs-network/orbs-ethereum-contracts/tree/master/psilo).

...

## **Network Production**

_This segment was contributed by_ [@jlevison](https://github.com/jlevison)

#### Rewards distribution

At the beginning of July, the first Orbs protocol rewards distribution occurred. Orbs has built a database to mirror Ethereum and run the calculations based on the raw delegation and stake data. You can check the [token-bi repo](https://github.com/orbs-network/token-bi) on Github, more information about the distribution [can be found at our blog](https://www.orbs.com/first-orbs-rewards-distribution-summary/).

You can read more about how Orbs Rewards are calculated in [@Andrey](https://community.orbs.network/u/andrey/summary)’s recent post, “[Orbs Rewards Distribution](https://www.orbs.com/rewards-distribution/)”.

#### Development

- [Revamped the AWS roles](https://github.com/orbs-network/nebula/pull/77) in Nebula as part of an ongoing security review process.
- Published a [list of the most important metrics](https://github.com/orbs-network/orbs-network-go/blob/master/Metrics.md) for guardians, validators and app developers. Introduces [two new metrics](https://github.com/orbs-network/orbs-network-go/pull/1203): transactions per second submitted to an individual virtual chain and queries per second served by an individual virtual chain per node.
- Created a [library](https://github.com/orbs-network/notary/pull/3) for notary apps, to enable building various solutions that rely on the notary core features of tracking information.
- Orbs core contributors invested some time into [making sense of Libra](https://www.orbs.com/making-sense-of-libra/).
- Explored a [possibility of analytics contracts](https://github.com/orbs-network/contract-external-libraries-go/pull/1), when smart contracts method calls are being tracked and the information about the use of the main contract can be made available via a separate contract. This opens many roads to tracking, analytics, and an audit via dedicated contracts with a common standardized interface

...

## **Use Cases and Dev Experience**

This segment was contributed by [@jlevison](https://github.com/jlevison)

#### Application Use Cases

There are multiple application use cases being developed across the community these days (that I’m aware of). These projects will be elaborated upon in dedicated blog posts as they mature, so here we’ll provide some basic descriptions and details:

- A POC with a leading academic institution regarding blockchain-based music rights management - this is a well-known pain in the industry, and we believe our Orbs-based solution can provide a valuable service. The developed POS combines on-chain rights registry with off-chain indexing and storage.

- A collection of use-cases with a media distributor to create a blockchain-based content registry (photos, videos etc.) and enable search, collaboration and monetization. Some interesting use-cases include:

  - Smart contracts to register and search for registered images - including a perceptual hash search that finds images similar to provided ones
  - Chrome extension - to highlight registered images in a browser and retrieve their metadata
  - Webcrawler - retrieve metadata for all images on a webpage

- Document notarization - we’ve further developed the document notarization use-case, introducing encrypted fields, ownership and more. These concepts have been presented to multiple parties interested in blockchain-based document registration and notarization ([https://github.com/orbs-network/notary](https://github.com/orbs-network/notary)).

#### Developer Experience

- Added ability to [read smart contract debug logs via gamma-cli](https://github.com/orbs-network/gamma-cli/pull/5) for development, more info documented at the [following page](https://docs.orbs.network/contract-sdk/gamma-in-depth/reading-logs-from-contracts) in the contract SDK documentation.

- Expanded the packages available for smart contract development by whitelisting more of the available packages in Go, the full list is [available here](https://docs.orbs.network/contract-sdk/orbs-contracts/limitations-of-orbs-contracts).
- Introduced experimental libraries for contract development available at [https://github.com/orbs-network/contract-external-libraries-go](https://github.com/orbs-network/contract-external-libraries-go) Currently includes extending the state to natively store structs.

This is part of a larger SDK architecture change to enable experimental vs. stable, production-ready code, the team will expand on this subject and the rationale in a dedicated post.

- More documentation updates in regards to [prism](https://docs.orbs.network/contract-sdk/gamma-in-depth/starting-and-stopping-the-server#running-prism) and the [starter kit](https://docs.orbs.network/contract-sdk/getting-started/the-orbs-starter-kit)

...

## **User Facing Products**

_This segment was contributed by_ [_@gilamran_](https://github.com/gilamran)

#### Prism (Block Explorer)

- Added a new script to automatically upgrade prims’s version, and publish it ([commit](https://github.com/orbs-network/prism/commit/ab90462d75029ddbad7ef0898929324734c056ea)).
- **Prism** will now get published to docker hub on every push (experimental) and on every version upgrade.
- Added dbVersion to the db ([commit](https://github.com/orbs-network/prism/commit/58c44688799dfc58a0375f6aa785be2acbefccf9)), upgrading according to semver ([commit](https://github.com/orbs-network/prism/commit/e8c6af0008942da702f5fcac6dfb21bf444a02c0))
- Introducing **dbBuilder** for first time/upgrade situations. ([commit](https://github.com/orbs-network/prism/commit/3db88589c40f99c1fe0b30445d679ad219cdfc28))

#### Hedron (Voting UI)

- Fully supports Japanese and Korean language translations ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/5db3e68ee30ddd4867ed55eb2cd5be7b1b125039)).
- Removed old JS/KO sites (using permanent redirect) ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/9ec78203b5098e5c020e19476bb2cedd9b4fd927))
- Using a new rewards contract, it is now possible to view past rewards on the site ([link](https://orbs-network.github.io/voting/reward))
- Fixed stake calculation bug ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/cdd7756824433b9309f12a8a1351308c080f4552)). Was showing the wrong percent.
- Better locale when displaying numbers. (Was send as string from the server) ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/c973bf29949dc3bf4d74c8bbc2964cf2431ae16d))
- Proxy server is now in the process of deprecation, and all the web3 code is being extracted ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/5f3c7b19208118c4d5fc0bf0c3ca99899f7a610b)) and will be moved soon to the client-web project.
- A big refactor to the **client-web** was done in order to separate Ethereum read/write services (with metamask and without). [Commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/b343bd8345551dbe89c68bd7371e9dc69343bfb8).
- Removed unused contracts from the proxy server. ([commit](https://github.com/orbs-network/orbs-ethereum-contracts/commit/5af07a910ece78bc7966fece9aa6d60425caa9fa))

#### Playground (Online IDE)

The Orbs Playground is an online IDE for developers, a fast an easy way to tryout Orbs smart contract creation and debugging. Deploy a smart contract, execute functions and view events and state history. Available on [http://playground.orbs.network](http://playground.orbs.network) for everyone.

![](/assets/img/blog/rd-update-orbs-july-2019/image1-1.png)

...

## **Research and Architecture**

_This segment was contributed by_ [_@Avilanthe1_](https://github.com/avilanthe1)

Orbs’ research efforts continue with researchers and developers work on different aspects of the Orbs blockchain infrastructure! Here is a breakdown:

### PoS Research

##### **Market research**

Resources are dedicated to researching the PoS market. There are two sides to this market: Projects, and ecosystem players. On the projects’ side, Orbs researchers have been focused on learning ~20 different projects which have a PoS element to them. In particular, they’ve been trying to understand what goals were the projects trying to realize via specific design choices, and how ecosystem players eventually chose to respond. On the ecosystem players side, mapping the market to different types of players — staking services, infrastructure services, lending platforms, exchanges, etc to how each type may benefit/harm a PoS network.

##### **Open and competitive validators nomination process**.

Currently, Validators undergo a due diligence process in order to evaluate their technical abilities and enabling gradual rollout. Orbs architects are working on an architecture that enables to remove the need for due diligence and enables an open and competitive process. This competition, as a by-product, should increase the security of the network and its usability.

As a first step to achieve this, we are working on a locking contract for Validators and Validator candidates. This locking contract, deployed on Ethereum, is designed to match the Orbs election architecture and support efficient queries by the election contract that runs on top of the Orbs platform. In order to allow the protocol to evolve in the future, they've designed the contract to be migratable, while still requiring participants to provide their agreement for the migration.

### Threshold BLS signature scheme security proof

An ongoing _Random Beacon_ project is carried out by members of the research team. In this work, a set of rational players jointly perform a multiparty computation that results in a random number, that can be used in diverse applications. One such notable application is the selection of random committees in Orbs’ consensus mechanism.

A cryptographic primitive that naturally appears in this context, is ‘_threshold digital signature’_; the set of participants sign messages in an incorruptible manner as long as a large portion of them is honest. One manifestation of a threshold digital signature builds upon the well-known (single player) BLS signature scheme. However, security proof of the threshold version of this scheme is not covered in the literature. More specifically, the question raised is whether the devised scheme indeed holds the threshold property, meaning that a (certain specific) portion of players cannot produce a valid signature, while larger sets of players can. Orbs’ Research team has prepared a mathematical proof of security to ensure the security of the threshold version of the BLS signature scheme.

### Zero-Knowledge

Orbs core contributors continue to explore the subject of privacy through zero-knowledge proofs, focusing primarily on a few subjects:

- **Trusted Setup.** Most efficient forms of zero-knowledge proofs require a _trusted setup,_ a subject of controversy, as it entails an expensive procedure and is specified to an application. In other words, different applications (including updates to an application) require different trusted setups. We study zero-knowledge proof systems where the trusted setup only has to be carried out once and is universal in the sense that it supports all applications. These usually come at a price of efficiency, and we focus on mitigating this problem, taking advantage of the efficiency of the Orbs blockchain infrastructure.
- **Key generation ceremony.** The generation of keys is a process ideally performed by a trusted party, as leakage of the private keys has severe implications. However, In typical blockchain usually, such a party does not exist. Our team has been studying the procedure to ensure that keys do not leak while avoiding the need for a trusted third party.

### File Systems and Immutable Large Data Storage

Orbs Network aims for accommodating apps that (among others) require large amounts of storage. After all, how would you run a [distributed YouTube](https://www.quora.com/What-is-the-total-size-storage-capacity-of-YouTube-and-at-what-rate-is-it-increasing-How-is-Google-keeping-up-with-the-increasing-demands-of-Youtube%E2%80%99s-capacity-given-that-thousands-of-videos-are-uploaded-every-day) if storage is limited? One direction the research team has taken to explore immutable storage for large data.

Part of the research included the reviewing of the IPFS (InterPlanetary File System) protocol. IPFS is a distributed peer to peer storage system that has recently gained a lot of interest from various blockchain projects that see IPFS as a good candidate for their protocol’s storage layer (like TrueBit).

The research team has been scrutinizing the different components of IPFS in order to learn from them towards a solution tailored particularly for the purpose of the Orbs blockchain infrastructure.

Among these components are Distributed Hash Tables (DHTs) for fast content lookup and peer locating the network; GIT protocol for version control; block exchange protocol for data swapping marketplace - all may be relevant for the future design of the ever-evolving Orbs infrastructure.

A prominent piece that is missing in the original design of IPFS is the incentive layer. When considering distributed storage solutions at scale, with recurrent data reads and writes, there must be an incentive layer that allows nodes to withstand their costs. The FileCoin protocol is designed to complement exactly that. The research team has recently focused on one of FileCoin’s most interesting innovations: Proof-of-Replication (PoRep). PoRep provides an entity with a way to prove that a specific number of replications of a particular file are stored in her local storage system. A distributed file system protocol that is able to absorb the overhead PoRep incurs can solve the problem of data availability, which is one of the major issues when dealing with vast amounts of storage.

...

**Thanks for reading!** I hope this recurring monthly segment is educational and does a great job informing Orbs followers on the R&D happenings. If something is unclear, or you wish to comment or otherwise participate in the open-source Orbs project, join the Orbs Community on Discourse or [email us directly](mailto:hello+nate@orbs.com) :). Also, be sure to check out the links below for more information.

Till next time,

Ciao

❤
