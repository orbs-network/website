---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/node-upgrade-version-1-1-1/bg.jpg
blogUrl: node-upgrade-version-1-1-1
date: 2019-07-24
title: "Orbs Node Upgrade: Version 1.1.1"
author:
  - /blog/common/authors/NoamBerg.md
type:
short_description: The latest proposed version of the Orbs platform was released on July 22, 2019 and accepted by the Orbs network’s Validators. The Orbs core team is very excited to publish the first version that is not a hot-fix and contains actual features.
---

The latest proposed version of the Orbs platform was released on July 22, 2019 and accepted by the Orbs network’s Validators. The Orbs core team is very excited to publish the first version that is not a hot-fix and contains actual features.

While this is not a major update, it does include several mini-features and improvements based on requirements gathered from:

- Insights regarding the Orbs production network operating since March 2019
- Insights from elections processing
- Insights from an internal hackathon, which was focused on application development on the Orbs platform

## Main improvements

...

#### **Stability:**

- Bugfix: Following a case of a Validator Node being behind the network time, the core team added metrics reporting a node’s time vs. absolute time read with NTP to catch any time drifts of nodes. This metric is configurable and can generate alerts to mitigate any such future cases faster. The metric is available to Validators and Guardians on the metrics page under "OS.Time.Drift.Millis" (pr [#1163](https://github.com/orbs-network/orbs-network-go/pull/1163))
- Bugfix: After a period of no transactions, the first transaction would cause several empty blocks to close. This was fixed so now the Transaction Pool waits for transactions while still able to close empty blocks every configurable interval if no transactions are available. (pr [#1136](https://github.com/orbs-network/orbs-network-go/pull/1136))
- Validations: Verify node address and private key match on startup. This prevents configuration changes (especially node address) without the corresponding configuration information (pr [#1117](https://github.com/orbs-network/orbs-network-go/pull/1117))
- Fork detection while writing a block has been improved: Fork detection also takes place for older blocks and not just the top one, while avoiding a possible race condition. When trying to write future blocks an error is returned. (pr [#1166](https://github.com/orbs-network/orbs-network-go/pull/1166), issue [#524](https://github.com/orbs-network/orbs-network-go/issues/524))
- Learning from the [Election application](https://github.com/orbs-network/orbs-network-go/tree/v1.1.0/services/processor/native/repository/_Elections) on [Orbs Universe](https://www.orbs.com/orbs-universe/), several logs were improved to allow the detection of inconsistent writes to the State DB. If a contract writes the same data in non-deterministic order the nodes can disagree on the block. Logs now clearly point out such cases (pr [#1140](https://github.com/orbs-network/orbs-network-go/pull/1140))
- General: A lot of tweaks in logs and metrics were done (some added and some removed) to allow better management of the network. Major changes are the integration of Prometheus (issue [#1100](https://github.com/orbs-network/orbs-network-go/issues/1100)) and Scribe into the native code.
- Addressed an issue with the storage metrics not reporting the correct size of the block storage database (pr [#1208](https://github.com/orbs-network/orbs-network-go/pull/1208)).

#### **Election contract**

- Bugfix: A bug wherein the vote-weight of the Guardians was not properly cleared before a new election result was calculated (bug [#1227](https://github.com/orbs-network/orbs-network-go/issues/1227), pr [#1234](https://github.com/orbs-network/orbs-network-go/pull/1234)), was fixed.
- Bugfix: Double delegation issue was fixed in 1.0.7 and the prevention of double counting code was added (see [here](https://www.orbs.com/rewards-distribution/)). Another delegator with double delegation was fixed (pr [#1237](https://github.com/orbs-network/orbs-network-go/pull/1237)).

#### **Development**

- CI/CD: Improved and streamlined our nightly and Pull-Requests (PRs) processes. The goal is to have every PR as the last stage of testing to be deployed to a short-lived test-net and run tests and stress-tests on it.
- Metrics: Some metrics were added to facilitate performance regression checks on the network for future code.
- General: Improved tests to reduce time to run tests, improve stability of tests, and remove obsolete tests.

#### **Tools:**

- Gamma now has more options:
- - Override config values: Allow override of configuration variables from gamma-cli. This allows broader testing ability. (For example, using Ropsten as an Ethereum Node, closing blocks faster or slower, etc.)
    - More nodes: Gamma allows testing with a configurable number of nodes to check network stability and performance of consensus.
    - Graceful shutdown from route: one can shut down Gamma via an HTTP call.
- Verification Mode: Verification Mode configuration now allows its operator the ability to run the transactions of the blocks (limited only to blocks that are “newer” than a certain time period) and thus not only verify execution, but also collect any std-output produced by the contract. This allows a certain kind of debug or verification process that was previously not available.

#### **Ethereum connection:**

- Dialing every time so that recovery from fail and/or changes of node configuration (like DNS) can happen immediately. This prevents disconnect issues and stale connections.

...

## What’s next?

Currently, the next big milestone is set for October. Some features that are currently anticipated are:

- Time-based elections
- Self-triggered transactions from the chain. Allowing, for example, the initiation of elections process automatically and not rely on external calls (aka good Samaritan scripts)
- Collections support in orbs-contracts
- Lean-Helix consensus algo threading model improvements
