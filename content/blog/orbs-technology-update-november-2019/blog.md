---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-technology-update-november-2019/bg.jpg
blogUrl: orbs-technology-update-november-2019
date: 2019-11-18
title: Orbs Technology Update November 2019
author:
  - /blog/common/authors/OrenGampel.md
type:
short_description: Highlights:** Ver 1.2.2 released ⁂ New Staking scheme research complete ⁂ New stress & endurance testing suite ⁂ New Reputation feature ⁂ New demos and status pages ⁂ More developers contributing
---

**Highlights:** Ver 1.2.2 released ⁂ New Staking scheme research complete ⁂ New stress & endurance testing suite ⁂ New Reputation feature ⁂ New demos and status pages ⁂ More developers contributing

...

### Intro by [@OrenGampel](https://github.com/owlen)

_There were many changes,  and improvements happening since [the last tech update](https://www.orbs.com/orbs-tech-update-september-2019/), so once again, we are happy to give you an overview of some of the things we achieved during this time._

_One significant related effort is the creation of Marvin, a new stress testing and endurance testing suite that will alert and help identify cases where code changes lead to performance degradations._

_An important aspect of the network is its liveness, and we've added an internal metric of the liveness of validators. The metric, very basically, checks how many times a validator failed to close a block. Such failure can be because he was malicious or simply because he experienced a brief network outage. If the number of consecutive failures increases, it will hurt the node's "reputation. This value can help guardians to make an informed decision about voting out nodes that impair the liveness of the entire network. Speaking of reputation, read below about the new status page, that shows the status of live validators._

_In case you didn't notice, the Orbs team released and the validators accepted version 1.2.2 of Orbs network in October, featuring time-based elections, triggers, and the reputation mechanism just mentioned._

_You may have noticed in the past company updates, our continued efforts in driving real-world usage to our platform. Below you'll read about many developments related to the user side of the system, a new demo page that includes links to several demos you can quickly and easily try yourself, and many more._

_Another important effort that was made by the research team is to finalize the new staking scheme and enable the utilization of a Management Chain functionality. You can read below the details as well as some of the design decisions that were made during their development._

_Finally, two new developers started contributing to our code, and below you'll be able to read more details about their contributions so far, as well as the details of the things highlighted above and many, many more updates._

...

## **Blockchain Core**

_This segment was contributed by_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg), [@electricmonk](http://@electricmonk):

- Numerous refactoring and cleanups of our test infrastructure
  - [https://github.com/orbs-network/orbs-network-go/pull/1402](https://github.com/orbs-network/orbs-network-go/pull/1402)
  - [https://github.com/orbs-network/orbs-network-go/pull/1290](https://github.com/orbs-network/orbs-network-go/pull/1290)
  - [https://github.com/orbs-network/orbs-network-go/pull/1302](https://github.com/orbs-network/orbs-network-go/pull/1302)
  - [https://github.com/orbs-network/orbs-network-go/pull/1304](https://github.com/orbs-network/orbs-network-go/pull/1304)
- After a Gamma version with a broken Golang contract compiler has been released by mistake, added a test that attempts to deploy a contract against a Gamma server running in Docker [https://github.com/orbs-network/orbs-network-go/pull/1342](https://github.com/orbs-network/orbs-network-go/pull/1342)
- Refactored the Golang contract processor to allow instantiating it with a different set of pre-built contracts than what’s used in production [https://github.com/orbs-network/orbs-network-go/pull/1359](https://github.com/orbs-network/orbs-network-go/pull/1359)
- Removed the Ethereum simulator usage from our codebase; previously, component tests in the Ethereum cross-chain connector package were being run against go-ethereum’s [SimulatedBackend](https://github.com/ethereum/go-ethereum/blob/master/accounts/abi/bind/backends/simulated.go). This caused problems, as it was not intended to actually simulate a full-blow Ethereum network, but rather to just allow running contracts against en EVM. Specifically, the Orbs network uses complicated logic to fetch a “final enough” block number in Ethereum for a transaction that’s currently being executed, so that a transaction will not run a possible block that doesn’t end up in the longest Ethereum chain. This logic is dependent on block number, a concept that’s not supported in SimulatedBackend. As a solution, the Orbs network now runs all of its tests against [Ganache](https://www.trufflesuite.com/ganache). [https://github.com/orbs-network/orbs-network-go/pull/1369](https://github.com/orbs-network/orbs-network-go/pull/1369)
- While investigating a port collision in the in-process E2E test, we found out that if an Orbs node is started with a Gossip port that’s already in use, it will endlessly attempt - and fail - to listen to that port. This PR ([https://github.com/orbs-network/orbs-network-go/pull/1401](https://github.com/orbs-network/orbs-network-go/pull/1401)) changes this behavior, so now the node will panic and exit in this case.
- A common reason for flakiness was that the Gossip TCP server opens a goroutine for each incoming connection, and these goroutines were not being supervised. This resulted in logs being written after tests have been completed, which is not allowed in Golang tests. [https://github.com/orbs-network/orbs-network-go/pull/1412](https://github.com/orbs-network/orbs-network-go/pull/1412)

[@IdoZilberberg](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) & [@itamararjuan](https://github.com/itamararjuan) - work is underway on Marvin, the test framework for Orbs' test networks. Marvin identifies performance degradation or increases in errors when merging PRs into the master branch. This prevents regression in production code. It does so by running stress and endurance tests against a test network and comparing present and past results.

Summarized test results are sent to the developer, along with comparison to existing master branch. In addition, full test results are accessible via Grafana dashboard or directly in the Prometheus TSDB (Time Series database). Prometheus continuously collects metrics from the main test network that runs the master branch. In phase II it will gain the ability to run on every push to an open PR for more immediate developer feedback, and will be able to test the effect of pushing PRs to master prior to actually doing so, preventing unwanted merges. It will also collect logs into an ELK stack for deeper analysis.

An initial version of the client that exercises the test network is already written in Go, and the two additional Node.js processes are underway. These are (1) the Orchestrator that listens to external requests (such as from CircleCI) and spawns JobExecutor instances per test job, and (2) the JobExecutor that runs multiple instances of the Go clients. The full code is available on the [Marvin repo](https://github.com/orbs-network/marvin).

Running stress tests against testnet yields a notification to Slack, such as this one:

![](/assets/img/blog/orbs-technology-update-november-2019/image2.png)

_(Disclaimer: This is still in development, the results will be more detailed, will compare against previous runs, and will be aggregated from more transactions over a longer time period.)_

Here is Grafana sample output (not related to the Slack message above):

**![](/assets/img/blog/orbs-technology-update-november-2019/image1.png)**

_[@noambergIL](https://github.com/noambergIL)_

**Reputation & Committee Generation**

This new feature allows every Orbs-node to save information about the behavior of the validators. The node keeps track of how many times in a row a validator failed to close a block. When a validator doesn't close a block, we will make it less likely for it to be the leader of the block committee - this helps the liveliness of the network. Soon this information would be present to the guardians, so they may choose to vote against misbehaving validators.

[https://github.com/orbs-network/orbs-network-go/pull/1299](https://github.com/orbs-network/orbs-network-go/pull/1299)

[https://github.com/orbs-network/orbs-network-go/pull/1297](https://github.com/orbs-network/orbs-network-go/pull/1297)

[https://github.com/orbs-network/orbs-network-go/pull/1296](https://github.com/orbs-network/orbs-network-go/pull/1296)

### New Types

Orbs-nodes can support four new types of arguments in public methods of the contract (methods that can be called from the client directly): bool, \*big.Int, \[20\]byte & \[32\]byte. This expands our usability of contracts.

This addition required modifications in several repositories, listed below. It's already part of the coming gamma-cli 0.9.0 version, where it can be tested and used  in the experimental mode.

memuffers

[https://github.com/orbs-network/membuffers/pull/33](https://github.com/orbs-network/membuffers/pull/33)

[https://github.com/orbs-network/membuffers/pull/36](https://github.com/orbs-network/membuffers/pull/36)

[https://github.com/orbs-network/membuffers/pull/37](https://github.com/orbs-network/membuffers/pull/37)

Orbs-spec

[https://github.com/orbs-network/orbs-spec/pull/186](https://github.com/orbs-network/orbs-spec/pull/186)

[https://github.com/orbs-network/orbs-spec/pull/184](https://github.com/orbs-network/orbs-spec/pull/184)

orbs-network-go

[https://github.com/orbs-network/orbs-network-go/pull/1405](https://github.com/orbs-network/orbs-network-go/pull/1405) - sanitation of packages to allow math/big

[https://github.com/orbs-network/orbs-network-go/pull/1398](https://github.com/orbs-network/orbs-network-go/pull/1398) - types of bool and \*big.Int

[https://github.com/orbs-network/orbs-network-go/pull/1356](https://github.com/orbs-network/orbs-network-go/pull/1356) - types \[20\]byte & \[32\]byte

orbs-client-sdk-go

https://github.com/orbs-network/orbs-client-sdk-go/pull/30

orsb-client-sdk-javascript

[https://github.com/orbs-network/orbs-client-sdk-javascript/pull/28](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/28)

Gamma-cli

https://github.com/orbs-network/gamma-cli/pull/11

[**_@amir-arad_**](https://github.com/amir-arad)

Amir is a prolific open source contributor who is starting to contribute to the ORBS network code and documentation:

- _Improve randomness of  ports in the in-process E2E test_

[https://github.com/orbs-network/orbs-network-go/pull/1389](https://github.com/orbs-network/orbs-network-go/pull/1389)

- Improve committee metrics: add members IDs

[https://github.com/orbs-network/orbs-network-go/pull/1397](https://github.com/orbs-network/orbs-network-go/pull/1397)

- Begin simplify docker composition

[https://github.com/orbs-network/orbs-network-go/pull/1411](https://github.com/orbs-network/orbs-network-go/pull/1411)

- Fixed some flaky tests:
  - Add timeouts to test drivers

[https://github.com/orbs-network/orbs-network-go/pull/1419](https://github.com/orbs-network/orbs-network-go/pull/1419)

- Resolve race condition in scribe
- [https://github.com/orbs-network/scribe/pull/17](https://github.com/orbs-network/scribe/pull/17)

[**_@vistra_**](https://github.com/vistra) _is another strong developer who started to contribute to the ORBS codebase. Here are some of the changes he contributed recently:_

- [https://github.com/orbs-network/orbs-network-go/pull/1376](https://github.com/orbs-network/orbs-network-go/pull/1376) - Serve metric related HTTP endpoints before a complete node initialization
- [https://github.com/orbs-network/orbs-network-go/pull/1373](https://github.com/orbs-network/orbs-network-go/pull/1373) - Speed up block indexing by buffering reads
- [https://github.com/orbs-network/orbs-network-go/pull/1370](https://github.com/orbs-network/orbs-network-go/pull/1370) - Add metric for transaction relay errors.
- [https://github.com/orbs-network/orbs-network-go/pull/1367](https://github.com/orbs-network/orbs-network-go/pull/1367) - Add node id to to context, tracing context and request id
- [https://github.com/orbs-network/scribe/pull/12](https://github.com/orbs-network/scribe/pull/12) - fix scribes HttpWriter - add timeout, support 2XX HTTP responses
- Fixed some flaky tests:
  - [https://github.com/orbs-network/orbs-network-go/pull/1362](https://github.com/orbs-network/orbs-network-go/pull/1362) - Increase timeout
  - [https://github.com/orbs-network/orbs-network-go/pull/1377](https://github.com/orbs-network/orbs-network-go/pull/1377) - Finallity issue
  - [https://github.com/orbs-network/orbs-network-go/pull/1378](https://github.com/orbs-network/orbs-network-go/pull/1378) - Issue with node state eventual consistently

[**@ronnno**](http://@ronnno)

- Various PRs - Fixing flakiness and race detector bug fixes
- With [@itamararjuan](http://@itamararjuan):
  - [https://github.com/orbs-network/orbs-network-go/pull/1335](https://github.com/orbs-network/orbs-network-go/pull/1335) - prefetch smart contract compiler dependencies, and prevent go.mod file modifications during compile
  - [https://github.com/orbs-network/orbs-network-go/pull/1303](https://github.com/orbs-network/orbs-network-go/pull/1303) - Launch Management chain in all E2E test scenarios. Preparatory PR to launch a management chain pending new spec for management chain based  elections
- [https://github.com/orbs-network/orbs-network-go/pull/1305](https://github.com/orbs-network/orbs-network-go/pull/1305) - Gossip dispatcher liveness fix - when message queues are full do not block the dispatcher goroutine and discard the message.

[**_@vistra_**](https://github.com/vistra) **&** [**@ronnno**](http://@ronnno)**:**

- [https://github.com/orbs-network/orbs-network-go/pull/1303](https://github.com/orbs-network/orbs-network-go/pull/1303) - Refactor worker loop context allocation. Prevent unnecessary interruption of Lean Helix event handlers. More accurate cancellation of event handlers based on the height and view of the incoming event. Resolves issue [#74](https://github.com/orbs-network/lean-helix-go/issues/74)

...

## Technology Engagement

_This segment was contributed by [@jlevison](https://github.com/jlevison)_

- SFBW19:

  - We had a very successful Orbs-led “Blockchain for Enterprise” event
  - At the SFBW conference itself we’ve had lots of very interesting meetings:
    - Learned about a lot of use-cases already explored by established major companies
    - Discussed potential projects with several interested enterprises
  - We identified several areas that would be relevant for future feature-set
  - In preparation for the events, we released the demos page ([https://demos.orbs.network](https://demos.orbs.network)), which  garnered a lot of interest at the meetings

- The Orbs network was updated to version 1.2.2 in October and was accepted by the Orbs network validators.. The release notes are available here: [https://github.com/orbs-network/orbs-network-go/releases/tag/v1.2.2](https://github.com/orbs-network/orbs-network-go/releases/tag/v1.2.2)

### Development

- [Membuffers for JavaScript now supports uint64](https://github.com/orbs-network/membuffers/pull/42), that enables iOS support. iOS has an older version of WebKit that does not implement uint64 operations for DataView object - by @netoneko and @noambergIL
- Boyar now has options related to l[ogfile management](https://github.com/orbs-network/boyarin/pull/99) - by @netoneko
- [Status page](https://github.com/orbs-network/status-page) is now available for both [production](https://status.orbs.network/) and [demo](https://demonet.status.orbs.com/) networks - by @netoneko
- Regression is orbs-network-go that by mistake has excluded [experimental Go smart contract libraries](https://github.com/orbs-network/contract-external-libraries-go) from the build [has been fixed](https://github.com/orbs-network/orbs-network-go/pull/1386) by @netoneko and @itamararjuan
- [New pluggable processor architecture](https://github.com/orbs-network/orbs-network-go/pull/1372) is in the early stages of specification and development. This will allow to support more languages for smart contracts - by @netoneko
- [First pluggable processor](https://github.com/orbs-network/orbs-network-javascript-plugin) is in the experimental stage and [JS SDK](https://github.com/orbs-network/orbs-network-javascript-plugin/issues/3) API has already been defined - by @netoneko

### Application Use Cases

- There’s a new home for all demos of application use cases built with Orbs technology. It includes links to working demos and a reference implementation. [Check it out](https://www.demos.orbs.network/).
- [Open Rights project](http://open-rights.com/) is live. You now can easily connect your Instagram account and automatically register metadata of your images on the blockchain - by @bolshchikov
- Camera Registry application allows to register pictures from your cell phone directly on the blockchain. Current support is for [Android](https://play.google.com/store/apps/details?id=net.sourceforge.openregistrycamera). Based on open-sourced application of Open Camera. Validation of registered images can be done [here](https://open-camera-registry.herokuapp.com/) - by @bolshchikov
- [Provenance demo](https://orbs-network.github.io/provenance/) became the first demo that works on all major platforms, both desktop and mobile - by @netoneko
- Notary library received a [bugfix for a hashing function](https://github.com/orbs-network/orbs-notary-lib/pull/2) used inside - Node.js and client side version produced different hashes - by @netoneko
- [Notary Web Gateway](https://github.com/orbs-network/notary-web-api) provides a REST API for notary library so it could be used in languages other than JS - by @netoneko

### Developer Experience

- [JavaScript Client SDK 2.0 was released](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/21) with some breaking API changes to support more secure Signer interface, paving the road to adoption of [new wallet architecture](https://github.com/orbs-network/orbs-client-sdk-javascript/issues/20) - by @netoneko
- JavaScript Client SDK starting from version 1.4.0 and 2.1.0 [now support iOS](https://github.com/orbs-network/orbs-client-sdk-javascript/pull/27), covering all major platforms: Firefox and Chrome on desktop, and Android and iOS on mobile - by @netoneko
- Nebula now comes with a [debugging manual](https://github.com/orbs-network/nebula/pull/94) that can help validators to identify and fix problems with their nodes - by @netoneko
- Orbs Project Generator has [moved to version 2.0.0 of JavaScript Client SDK](https://github.com/orbs-network/orbs-project-generator/pull/2) - by @netoneko

...

## **Research and Architecture**

_This segment was contributed by [@Avilanthe1](https://github.com/avilanthe1)_

#### **The Orbs research team’s efforts continue with researchers and developers work on different aspects of the Orbs blockchain infrastructure! Here is a breakdown:**

### Orbs Staking Contract

The R&D activities on Orbs PoS architecture were focused on the Orbs staking contract.

The staking contract development was completed and is now undergoing an external security audit. The contract is available for review in the [orbs-staking-contract GitHub repo](https://github.com/orbs-network/orbs-staking-contract) along with a [high-level specification](https://github.com/orbs-network/orbs-staking-contract/blob/master/docs/CONTRACT.md).

The Orbs network staking contract is set to be deployed on Ethereum similarly to the ORBS native token. The use of an ERC20 token and a staking contract on the Ethereum blockchain enables the Orbs PoS hybrid model. In the Orbs PoS model, the staking, delegation and validators selection process are done on Ethereum and the Orbs network calculates the election results along with the earned rewards based on the data logged on Ethereum.

The staking contract enables Orbs token holders to stake tokens, request to unstake them, entering a cooldown period and withdraw tokens back to their ORBS ERC20 account.

An interesting aspect of the Orbs staking contract is the migration strategy. First and foremost, the contract is designed to be immutable such that stakers’ funds are secured and one can not move staked tokens or modify the staking properties without the staker approval. On the other hand, we want to allow stakers to transition to new staking contracts in the future without requiring them to first unstake before staking in a new contract, leaving them without staked tokens for the cooldown period. The proposed staking contract addresses the issue by allowing stakers to explicitly request to migrate their stake to a new staking contract thus allowing a seamless transition.

A complementary product for the staking contract is a staking wallet to enable a simpler interface for staking. A staking wallet allows ORBS token holders to interact with the contract without a need to manually construct the transactions. We’ve designed a product definition for such a staking wallet and are starting to develop it. The staking wallet we’re working on may be used by the Orbs community as a reference implementation for additional wallet implementations..

### New Features

[Gad](https://github.com/gadcl) has completed the specs of two new features: the Management Chain and the Ethereum Proxy.

In addition to the benefits coming from the introduction of the Management Chain (see more in the [previous tech update](https://www.orbs.com/orbs-tech-update-september-2019/)), its inclusion obliges supplementing the Orbs network’s infrastructure with cross-Virtual Chain (VC) communication. Communication between different VCs will be regularly used between any VC and the Management Chain but can be employed for other uses such as the design pattern of hierarchical VCs. The management chain will hold every VC’s configuration, for example, the current VC’s validators set. This, in turn, will facilitate coordination between validators assigned to operate a new VC. However, it also implies that the VC is no longer standalone. To audit a VC (and verify its state transitions), one must consume the VC’s configuration from the management chain.

The Ethereum Proxy feature will significantly facilitate the process of obtaining and calculating the Election results from Ethereum. Among its benefits is the removal of the external agent that mirrors the Ethereum data and relaxation of demands from an Ethereum node. Now, an Ethereum node needs only to support state queries for the latest 100 blocks rather than 5000 blocks as it formerly used to be.

...

Everything we develop is, as always, updated in our GitHub repositories. Here, we try to point to the things that are actually done and ready to be used, rather than discuss ongoing developments and future plans.

Just like in previous updates, and as part of being true to our goal to develop enterprise-class software, we continuously labor to improve ORBS' stability. Most of it is done by improving our tests, code cleanup, and refactoring, whenever we encounter or even suspect any sort of instability or general [code smell](https://en.wikipedia.org/wiki/Code_smell).

Be sure to follow Orbs' channels to stay up-to-date with all the latest dev! Till next time,

Ciao!
