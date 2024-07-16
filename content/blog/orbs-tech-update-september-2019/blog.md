---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-tech-update-september-2019/bg.jpg
blogUrl: orbs-tech-update-september-2019
date: 2019-09-26
title: Orbs Technology Update September 2019
author:
  - /blog/common/authors/Nate.md
type:
short_description: "Ok gang, here's a breakdown of the technology highlightsfrom Orbs contributors during this past month. Feel free to reach out to any particular contributor for more information:"
---

Ok gang, here's a breakdown of the technology highlightsfrom Orbs contributors during this past month. Feel free to reach out to any particular contributor for more information:

...

## **Blockchain Core**

_This segment was contributed by_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg)

[_@ronnno_](https://github.com/ronnno) [_@itamararjuan_](https://github.com/itamararjuan) [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) [_@noambergIL_](https://github.com/noambergIL)

[_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) has worked on fixing race conditions and flaky tests throughout the codebase. This entailed major refactors, mostly around shutting down the system in an orderly manner during tests.

[_@itamararjuan_](https://github.com/itamararjuan) upgraded to Go 1.12.6 and switched [Orbs repo](https://github.com/orbs-network/orbs-network-go/) and all its dependencies to use [Go modules](https://github.com/golang/go/wiki/Modules) instead of vendoring.

[_@ronnno_](https://github.com/ronnno) made progress with management chain, both on the research/spec front, and in development. Work is underway on the cross-chain adapter that would allow a contract running on the app chain to request data from the management chain's state.

In addition, [_@ronnno_](https://github.com/ronnno) resolved various flakiness and stability issues, and fixed a responsiveness issue in Gossip - see [PR-1305](https://github.com/orbs-network/orbs-network-go/pull/1305).

[_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) and [_@ronnno_](https://github.com/ronnno) have finalized and released the new Lean-Helix [goroutine](https://golangbot.com/goroutines/) model, to be included in the upcoming version v1.2.0.

In the previous Lean-Helix goroutine model, there was only a single goroutine. It did everything - handled incoming messages and events, performed all of Lean-Helix' logic, and also called and waited on external, time-consuming services, such as collecting transactions into a new proposed block. While the goroutine was blocked on an external service, it naturally was not available for responding to messages and events, resulting in (sometimes significant) lags in response time.

In the new model, a new goroutine has been added.

The existing goroutine that handles everything is now called the **worker loop** and still does everything as before. The new goroutine, called **main loop,** steps in as a proxy in front of the worker loop, and gets to handle messages and events first. If a message or events should make a long-running process obsolete, the main loop immediately cancels the context of the long-running process, signaling it to stop as soon as possible. For example - a Leader Election event makes a long-running request for a new block obsolete, because the leader node that called it has now been replaced. Previously the long-running operation would have continued, only to discover when done that its results are stale and ignored.

More info [here](https://github.com/orbs-network/lean-helix-go/blob/master/DEV-GUIDE.md#updated-threading-model).

This task took far longer to complete than was originally planned. More so, when considering that of several alternatives, a rather modest solution was chosen, to reduce both risk and effort. As a result, we decided to run a retrospective review (sometimes called “post mortem”) of the entire process, to ensure that we understand the root causes and improve the community processes related to the development, Here is a summary of the retrospective process:

That solution that is described above and was developed, is half-way towards a more comprehensive solution (of creating a separate, short-lived goroutine for every increment of height or view - this is out of scope for this document). This turned out to be counterproductive and led to difficulties in reasoning about errors that cropped up. As an additional complication, the existing tests were found to be flaky (that is, were occasionally failing) so a basic condition - using tests as a safety net for changes - was not met.

**Major conclusions:**

- It is better to come up with an ambitious architecture that is sound engineering-wise than trying to come up with a seemingly quick solution that is not fully perceived by all parties as the right way to go. By "sound engineering-wise", the meaning is easy to understand, explain to others, and debug when problems arise.
- Raise a red flag as soon as a basic condition of having solid tests is found to be false - the vast majority of time spent on the project was in the area of tests and this was not taken into account when planning the project. The whole project's timeline and scope should have been rethought at that point.
- As a positive point - despite difficulties during testing, the contributors persevered and fixed the testing framework so it is now far better than it was before. It would have been easy to simply update the production code with the addition of a new goroutine (production code, excluding tests, was updated in one day) but this would not have been up to par with the high standard of the Orbs project.

[_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) and [_@itamararjuan_](https://github.com/itamararjuan) have begun project [Marvin](https://github.com/orbs-network/marvin) for monitoring pre-production networks. With some simplification, there are 2 such networks: **testnet-master** which holds a release-candidate version, and **chain-on-pr** which is a virtual chain that is spawned on every push to an existing PR.

Monitoring the performance of these networks will:

- Provide confidence in the performance of a release-candidate version
- Provide quick feedback regression test for developers of new PRs. It will notify if the latest code change caused performance to drop or error count to rise.

More on this on later R&D updates.

#### **Merged PRs by [_@noambergIL_](https://github.com/noambergIL):**

- [https://github.com/orbs-network/orbs-network-go/pull/1279](https://github.com/orbs-network/orbs-network-go/pull/1279) - sanitization of contract names
- [https://github.com/orbs-network/orbs-network-go/pull/1258](https://github.com/orbs-network/orbs-network-go/pull/1258) - worked on finalizing time based elections
- [https://github.com/orbs-network/orbs-network-go/pull/1265](https://github.com/orbs-network/orbs-network-go/pull/1265) - self-triggering of system transaction mechanism

#### Merged PRs by [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg):

- Lean-Helix new goroutine model: [Lean-Helix v0.2.0](https://github.com/orbs-network/lean-helix-go/releases/tag/v0.2.0)
- Apply Lean-Helix new goroutine model into Orbs: [PR-1255](https://github.com/orbs-network/orbs-network-go/pull/1255)

...

## **Technology Engagement**

_This segment was contributed by_ [@jlevison](https://github.com/jlevison) and [@netoneko](https://github.com/netoneko)

### Development

- Started working on [initial wallet architecture](https://github.com/orbs-network/orbs-client-sdk-javascript/issues/20) and implemented [proof of concept Firefox extension](https://github.com/orbs-network/wallet/) ([@netoneko](https://github.com/netoneko))
- Started working on [JS client SDK 2.0](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/21) to increase the security of dApps
- [Fix 404 and 502 errors](https://github.com/orbs-network/boyarin/pull/96) in Boyar ([@netoneko](https://github.com/netoneko))

### Application Use Cases

- Implemented non-fungible tokens, styled after Ethereum [ERC721](https://github.com/orbs-network/erc721) ([@netoneko](https://github.com/netoneko))
- Built a [demo](https://github.com/orbs-network/provenance) for art provenance on top of erc721 library, [live version](https://orbs-network.github.io/provenance/) ([@netoneko](https://github.com/netoneko))

### Developer Experience

- Added support for multiple files in contracts ([@netoneko](https://github.com/netoneko)):
  - [Support multiple files in contracts](https://github.com/orbs-network/orbs-network-go/pull/1225) in orbs-network-go
  - [Add multi-file deployment](https://github.com/orbs-network/gamma-cli/pull/9) in gamma-cli
  - [Add orbs.CreateDeployTransaction](https://github.com/orbs-network/orbs-client-sdk-go/pull/25) in Go client SDK
  - [Add Client.createDeployTransaction](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/14) in JS client SDK
  - [Fix passing empty array of variable length to a contract](https://github.com/orbs-network/orbs-network-go/pull/1323) in orbs-network-go
- [Update smart contract whitelist with crypto packages](https://github.com/orbs-network/orbs-network-go/pull/1308) in orbs-network-go ([@netoneko](https://github.com/netoneko))
- [Add contractNameToAddressAsBytes](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/18) in JS client SDK ([@netoneko](https://github.com/netoneko))
- [Add ContractNameToAddressAsBytes](https://github.com/orbs-network/orbs-client-sdk-go/pull/26) in Go client SDK ([@netoneko](https://github.com/netoneko))
- [Allow experimental libraries import in smart contracts](https://github.com/orbs-network/orbs-network-go/pull/1311) in orbs-network-go ([@netoneko](https://github.com/netoneko))
- [Implement append only list](https://github.com/orbs-network/contract-external-libraries-go/pull/6) in experimental smart contract libraries ([@netoneko](https://github.com/netoneko))
- [Orbs project generator](https://github.com/orbs-network/orbs-project-generator/) - new tool that allows to quickly generate scaffolding, including contracts, JS interfaces, and tests ([@netoneko](https://github.com/netoneko))

...

## **User Facing Products**

_This segment was contributed by_ [_@gilamran_](https://github.com/gilamran)

#### Dashboard

- Created a [new library](https://github.com/orbs-network/orbs-ethereum-contracts/tree/master/voting/orbs-pos-data) to easily read ORBS POS information.

#### Hedron (Voting UI)

- Using the new orbs-pos-data library.
- Proxy deprecation has began
- It is now possible to see your ORBS tokens in Metamask! Here’s how:

![](/assets/img/blog/orbs-tech-update-september-2019/H44LGHvBJP.gif)

...

## **Research and Architecture**

_This segment was contributed by_ [_@Avilanthe1_](https://github.com/avilanthe1)

Orbs’ research efforts continue with researchers and developers work on different aspects of the Orbs blockchain infrastructure! Here is a breakdown:

### PoS Research

We have drafted a spec of the staking contract (previously dubbed locking contract) and reviewed it internally (we also intend to external audit the contract before the deployment). We have decided to use a single staking contract, for both Delegators and Validators. This contract functions as a custodian retaining ORBS tokens for those who want to stake (lock) them in exchange for some rewards. ORBS token holders can stake tokens indefinitely in the staking contract. Once they wish to withdraw their coins, they will have to notify the contract and wait for the cooldown period (approximately one month) to pass. The Orbs blockchain will be directly connected to the staking contract - it will track its state changes and derive reward calculations, election results, and whatever else is necessary for the PoS mechanism. Currently, this is the only staking option. Nevertheless, participating in the PoS ecosystem without staking (locking) still stands.

To conclude, we note that the contract’s spec also considers easy contract migrations. In the case of a migration from one staking contract to another, the staked tokens will move without requiring to withdraw them first.

### Zero-Knowledge

Our enthusiastic cryptographer, [Idan](mailto:idanp@orbs.com), continually explores the subject of zero-knowledge proofs (ZKPs) and its applications in Orbs. Recently, Idan made the first steps towards designing a zero-knowledge-proofs software development kit, intending to make ZKPs more accessible to developers. We are working towards a proof of concept that will enable developers to construct a large class of zero-knowledge systems from simpler primitives. In parallel, we keep track of recent advances in the field, staying up to date with the latest released papers.

### New Features

The specs for the features of ’Leader activity reputation’ and ‘Trigger mechanism’ were completed, reviewed, and handed to the Dev team for implementation (see [previous R&D update](https://www.orbs.com/rd-update-august-2019/)). The ‘Management Chain’ spec has evolved, and we further elaborate on an interesting aspect addressed in it.

### Management Chain

A critical requirement from the design of the Management Chain is to allow virtual chains (VCs) to obtain close-to real-time information from the Management Chain. Due to the asynchronous way different chains communicate, achieving this goal is not an easy task. Therefore, a simple solution might introduce a non-deterministic execution of a VC, which leads to an agreement problem. To overcome this challenge and to preserve agreement among the Validators, we add a “safe verification rule”. This rule gives a block proposer some flexibility on the possible results coming from the interaction with the Management Chain. Thus assuring that an honest proposer will pass verification with very high probability. Dishonest proposers, though, are not guaranteed to pass verification and may be subject to reputation deterioration.

...

## TLV Blockchain Week

Last week Tel Aviv Blockchain Week took place with many interesting meetups and conferences all happening just around the corner of our main office. Among our research team, [David](https://twitter.com/DavidYakira), [Gad](https://github.com/gadcl) and your devoted [reporter](https://github.com/avilanthe1), attended the Scaling Bitcoin conference which is one of the leading research conferences about blockchains in the world.

Also, [Idan](mailto:idanp@orbs.com) and [Oded](https://github.com/OdedWx) attended Starkware Sessions, a one-day conference gathering speakers from all around the world with the focal point being zero-knowledge cryptography.

...

Alright everyone, hope you've found this dev update useful and exciting, things are def picking up speed and we are happy to have you along for the ride :) In the upcoming month Orbs reps will be attending Korea Blockchain Week as well as Japan Blockchain Week, so if any of you wiplan to be in the neighborhood please feel free to get in touch with the team! And as usual, if you wish to comment or otherwise participate in the open-source Orbs project, join the Orbs Community on Discourse or [email us directly](mailto:hello+nate@orbs.com) :)

Till next time,

Shana Tova <3
