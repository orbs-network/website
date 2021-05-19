---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-rd-update-june-2019/bg.jpg
blogUrl: orbs-rd-update-june-2019
date: 2019-07-02
title: Orbs R&D Update June 2019
author:
  - /blog/common/authors/EranK.md
type:
short_description: (https://www.orbs.com/technology/roadmap/), the internal R&D hackathon, development of the notary use-case, and the troubleshooting case study.
---

(https://www.orbs.com/technology/roadmap/), the internal R&D hackathon, development of the notary use-case, and the troubleshooting case study.

Enjoy!

_**Are you around for the Tel Aviv Zero-Knowledge Proofs meetup? Our lead cryptographer Idan Perl will be giving a talk on digital signatures. Details below :)**_

_**Developer? Start contributing to the [Orbs network](https://github.com/orbs-network/orbs-network-go) code - it’s all open source!**_

...

# General Updates

## Use Cases

### Notary Application

A simple application based on the immutability property of blockchain. [Orbs Notary](https://orbs-network.github.io/notary/) allows to register and verify the existence of any given document. When choosing a file, the app calculates its hash based on the content and writes is on a blockchain via a smart contract. The timestamp of registration is created. The Verification step simply checks the existence of the timestamp and returns the address of the owner.

## Hackathon

The Orbs R&D Core team conducted a 2 day hackathon which purpose was to put the network to real-world usage tests. There was a long list of ideas but only 4 teams. Results were amazing. We shared them previously in [this blog post](https://www.orbs.com/insights-into-orbs-rd-hackathon/). The core teams learned a lot and adjusted the roadmap accordingly.

...

## Community Updates

### Stratx monitoring tool

Stratx Consulting Inc. is currently an elected Validator and has recently become a listed Guardian in the Orbs Universe. Stratx is building an active monitoring tool for the benefit of all Validators in the Orbs universe. They have made this tool available here: [https://github.com/orbs-network/orbs-node-monitor](https://github.com/orbs-network/orbs-node-monitor).

The tool will allow Validators to monitor their performance and health. The goal is to empower all Validators with an intuitive dashboard for inspecting the status of their node and the overall Orbs network. We believe that by sharing this tool, more members of the community can collaborate to include features valued by Orbs universe participants.

# Project Updates

## Orbs Network

### Block Storage

- Resolved [#524](https://github.com/orbs-network/orbs-network-go/issues/524) - Removed duplicate code, enhance conformity to spec and resolve flakiness in return values when a block is written to Block Storage for the second time. Now performing fork detection checks as required, reliably.
- Removed redundant tests from Block Storage since Structural block validations were moved to ConsensusContext and are being tested there.
- Removed redundant sanity checks in GetBlockByTx.
- Added contract tests for GetTransactionReceipt.
- Expanded component test for GetTransactionReceipt.
- Simplified tests - removed the need for confusing.Reset() calls on Block Storage test harness mock objects in several tests.
- Reinstated skipped test for correct handling of a second attempt to commit an already stored block into Block Storage.
- Removed stale //TODOs.
- Spec conformity issue - Added “NETWORK_TYPE” validation to blocks file reader.
- Fixed flakiness in integration test for advisory locking on blocks files.
- Verified and closed [#448](https://github.com/orbs-network/orbs-network-go/issues/448)

### Metrics

- Added a metric to catch time drift against an NTP server [#1163](https://github.com/orbs-network/orbs-network-go/pull/1163)

### Signing service

- Started work on separate signing service that is going to hold the node private key. Virtual chains will lose access to the node private key. This is a part of ongoing security effort to safeguard the node keys and make it impossible to steal them in case an attacker gains access to the virtual chain container on one of the nodes [#1169](https://github.com/orbs-network/orbs-network-go/pull/1169)

### Contract SDK

- Added CI, refactored tests [#90](https://github.com/orbs-network/orbs-contract-sdk/pull/90)
- Contract tests now expose state diffs that will be produced as a result of the contract call and statistics about state I/O that happened during the call [#89](https://github.com/orbs-network/orbs-contract-sdk/pull/89)
- Finished the experimental collections framework, collected feedback.

### Gamma

- Gamma now can use LeanHelix consensus algorithm [#1173](https://github.com/orbs-network/orbs-network-go/pull/1137)

### Boyarin

- Fixed a bug when orchestrator options were always overridden from CLI [#79](https://github.com/orbs-network/boyarin/pull/79)
- Added support for the separate signing service as part of node provisioning process [#83](https://github.com/orbs-network/boyarin/pull/83)
- In anticipation for Docker 19.03, verified that the sysctl parameters (like net.core.comaxconn) are being passed to the virtual chain containers [#80](https://github.com/orbs-network/boyarin/pull/80)

## Gamma

Gamma-cli has been updated to version 0.7.0. The most exciting change in this version is the addition of Prism blockchain explorer as part of the gamma-cli engine.

Now, when you run Gamma you will be able to browse to localhost:3000 and see the Prism instance for your Gamma session. This update is part of an on-going effort of the Orbs R&D team to provide a more robust development environment for building orbs contracts - there is more to come soon as part of this effort, so stay tuned on upcoming updates next month!

## Orbs Ethereum Contracts

### Integrative Tests Framework

While Ethereum contracts may not access Orbs, Orbs smart contract SDK supports the reading state from Ethereum deterministically. This feature allows Orbs smart contracts to query and interoperate with Ethereum and is an enabler for cross-chain projects.

_Orbs-ethereum-contracts_ is a monorepo for smart contracts written for Orbs and Ethereum.

In April the core team initiated an effort to consolidate and unify the different projects in this monorepo. In May, this effort continued as we started characterizing a unified test framework that will accommodate integration tests involving both Blockchains.

As a first goal, we wanted to address two of the open issues identified in the previous update. Namely:

- Subrepo dependencies - to support code reuse for Ethereum, Orbs contracts, and testing code.
- Simplify the integration test stack by consolidating all test code to a single programming language. With this aim in mind we have:
  - Replaced invocation of _gamma-cli_ to access Orbs contracts with the native Orbs Javascript SDK
  - Replaced invocation of _truffle_ binary to access Ethereum in a child process with our own javascript wrappers to gain better control over solidity projects disk structure, subrepo dependencies, and complex test flow, and to reduce execution time overhead

## Next steps

The core team will shortly publish a post on this project, and continue work on a framework for fast integration tests for cross-chain platforms by replacing test code written in goLang with Javascript. Then, we will amalgamate the existing integration tests and form a unified test framework to support quick and easy integration tests for cross-chain smart contract projects.

...

## Prism

- **GapsFiller** now works with chunks for faster storage of new missing blocks.
- Added experimental **rebuild-db** utility for fast db rebuilding.
- Added **contractExecutionIdx** parameter to the contract page, to be able to implement pagination to the transaction history.
- Thicken DB tests.
- Added **type-check** script to package.json
- Added experimental **argsStringifier** (Not used yet)
- Fixed caches collection to work with multiple values in the database.
- Added prism configuration documentation.

## Lean Helix

The existing implementation of Lean Helix is presently single-threaded. This model is simpler to reason about and was simpler to develop and test, but has shown to create a performance bottleneck on some network conditions, and is also not as resilient to external manipulation as the original design requires. The core team is presently updating the Lean Helix implementation - more on that in the next update.

## Rewards Auditing & Resolution

The Orbs network launched on March 28th, 2019. The Orbs network relies on all of the participants in the proof of stake ecosystem to provide for the security and operation of the network. There are 17 active Guardians currently registered and 14 Validators running in production. There are now over 1300 Delegators participating in the Orbs PoS ecosystem.

At the beginning of July 2019, the first rewards distribution will occur. This post describes the various rewards, how they are calculated and the distribution process.

**Read more [here.](https://www.orbs.com/rewards-distribution/)**

## Troubleshooting - Case Study

As new software meets the real world in production for the first time, unforeseen issues pop up. Anyone in the business long enough knows this for a fact.

The Orbs platform is no different, and while considerable effort was, and still is being expended to retain the highest code quality, post-production incidents do happen, but they provide opportunities to make the software even better.

You can find the Case Study [here](https://medium.com/orbs-network/troubleshooting-the-orbs-platform-case-study-orbs-73c905de1f00).

...

## Roadmap

Following the launch of the production network, we have put out a research and development roadmap vision laying out the Orbs core team’s ideas for the next stages of the protocol and ecosystem development. The roadmap includes a set of features and activities that we think would move the project forward, providing a useful platform and a good developing experience to applications developers and users. The roadmap proposal can be used by the Orbs developer community as a basis for the development progress. As more feedback and requirements arrive, the roadmap may change or the development community may choose different directions.

**Orbs roadmap is published [here](https://www.orbs.com/technology/roadmap/).**

## Upcoming Events

### Zero-Knowledge meetup in Tel Aviv

Zero-Knowledge Proofs are a key cryptographic tool. They enable one to prove that they have performed a certain computation, while not revealing any secret information regarding this computation. This technology finds natural use in the context of blockchain, where sensitive information can often be made open to the public’s eye.

[ZK-TLV](https://www.meetup.com/Zero-Knowledge-TLV/) is a series of meetups discussing applied cryptography with an emphasis on zero-knowledge proofs. The lectures are aimed towards the more technical crowd, as they discuss both the rich underlying math and the gritty practical details of implementation. Our lead cryptographer, Idan Perl, will be giving a talk in the upcoming meetup, regarding one of the most classical forms of zero-knowledge proofs: _digital signatures_.

The event is public and free, please visit [this](https://www.meetup.com/Zero-Knowledge-TLV/) link for details.
