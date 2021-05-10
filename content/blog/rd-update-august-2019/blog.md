---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/rd-update-august-2019/bg.jpeg
blogUrl: rd-update-august-2019
date: 2019-08-18
title: Orbs R&D Update August 2019
author:
  - ../common/authors/Nate.md
type:
short_description: (https://www.orbs.com/orbs-update-august-2019/) I wanted to keep everyone in the loop regarding the R&D progress being made by Orbs contributors. Here is a breakdown of some of the things accomplished during the past month.
---

(https://www.orbs.com/orbs-update-august-2019/) I wanted to keep everyone in the loop regarding the R&D progress being made by Orbs contributors. Here is a breakdown of some of the things accomplished during the past month.

To learn more, be sure to visit the shiny new Orbs newest git library, Govnr, a minimalist supervision library for Go language _(Thank you [Shai](https://twitter.com/shaiyallin/status/1160957117664247809)!)_

And away we go:

...

**Highlights**

_This segment was contributed by_ [_@OdedWx_](https://github.com/OdedWx) _and_ [_@talkol_](https://github.com/talkol)

- Deployed v1.1.1 of the Orbs node
  - [https://www.orbs.com/node-upgrade-version-1-1-1/](https://www.orbs.com/node-upgrade-version-1-1-1/)
- PoS architecture
  - Stacking dashboard
  - locking research and architecture
  - time based elections
- Production
  - Hot TCP topology update?

\---- SEPARATOR ----

**Blockchain Core**

_This segment was contributed by_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg)

This month saw several features come to fruition and several others in the planning phase.

Performing any kind of configuration change on the network (modifying timeouts, changing the max number of transactions per block, etc.) as well as adding new nodes, required a restart of the entire network. An important step in making Orbs platform more stable is [hot deployment](https://github.com/orbs-network/orbs-network-go/pull/1251) of new nodes and hot configuration change - this means it's not necessary to restart the running nodes. This greatly facilitates joining new validator and audit nodes to the network. Making all parts of the platform support hot configuration is a lot of work, so first the TCP transport was updated - this makes hot deployment of new nodes possible. This feature is ready to go to production.

Research and planning is underway for proposals to increase the **scalability** of the network. Presently each node holds an open TCP connection to every other node, forming a [complete graph](http://mathworld.wolfram.com/CompleteGraph.html). This means every node's resource consumption increases in linear proportion to the size of the network. This is the easiest model to develop but naturally does not scale well. It is time to consider how the network can operate while a node maintains connections to only a subset of its peers. As a first step, this would involve the audit nodes. Terminology note: "validator" nodes participate in consensus (messages passed between these nodes are quite numerous and time-sensitive), whereas "audit" nodes do not participate in consensus and receive new blocks via the sync mechanism (less messages, are ok to take a little longer to reach).

Lean Helix's new goroutine model is undergoing tests after extensive planning and development by [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) and [_@ronnno_](https://github.com/ronnno) and will be production-ready soon. It solves an inherent problem in the existing algorithm, where slow operations run by Lean Helix cannot be stopped by Leader Election or Node Sync events, even if these render the slow operation obsolete. This had a detrimental effect on liveness and performance of the platform. In the new goroutine model, Leader Election or Node Sync will immediately call the cancel function of the Go context of the slow operation, freeing Lean Helix to continue the consensus flow. Merging into orbs-network-go is underway ([#1255](https://github.com/orbs-network/orbs-network-go/pull/1255)).

Research and planning is underway for the concept of a _management chain_ which the other virtual chains will connect to. More info in subsequent updates.

[_@ronnno_](https://github.com/ronnno) extracted the supervisor package of orbs-network-go into a separate [repo](https://github.com/orbs-network/govnr) called **govnr** ("goroutine governor"), so that orbs-network-go and lean-helix-go (and any other repo of course) can use supervised goroutines. The Go language does not allow _panic()_ calls to propagate from one goroutine to another. This means a goroutine can die when _panic()_ is called during its execution, thus rendering the node unusable without raising an alarm. The _supervised_ package catches _panic()_ calls, logs them, and tries to restart the goroutine. This is critical for infinitely-running goroutine such as those in the consensus, Node Sync, Transaction Pool and more.

To facilitate testing, [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) added the ability to set the clock time on Gamma ([#1222](https://github.com/orbs-network/orbs-network-go/pull/1222)), similar to what is available on Ganache when developing over Ethereum.

Elections timing was based on Ethereum blocks - every n blocks Elections were triggered. Ethereum block time is not constant, and is actually increasing over time, so it is proposed that Orbs platform switchis switching to time-based elections. This feature is being developed by [_@noambergIL_](https://github.com/noambergIL) ([#124](https://github.com/orbs-network/orbs-ethereum-contracts/pull/124)). Efficient testing of this significant update required the introduction of an all-Javascript integrative tests framework by [_@ronnno_](https://github.com/ronnno), and setting the Gamma clock manually (which reduced test time from ~45s to 10-15s) by [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk).

Significant progress made by [_@itamararjuan_](https://github.com/itamararjuan) ([#1249](https://github.com/orbs-network/orbs-network-go/pull/1249)) in switching orbs-network-go and its dependencies from vendoring to Go Modules, along with upgrading to Go 1.12.6.

[_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg) & [_@itamararjuan_](https://github.com/itamararjuan) [resolved a long-standing bug](https://github.com/orbs-network/orbs-network-go/pull/1257) in Gamma tests, which would sometimes fail because one of the nodes would be left behind during consensus and never recover.

[_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk) refactored the TCP transport code ([#1241](https://github.com/orbs-network/orbs-network-go/pull/1241) [#1243](https://github.com/orbs-network/orbs-network-go/pull/1243/)). A hard-earned refactoring tip: every time you spend any nonzero amount of time trying to understand the use of some object name or type, it becomes a candidate for rename. Same goes for any names that require comments to explain them - a short yet comprehensive list of naming guidelines can be found [here](http://bensmith.io/20-tips-for-better-naming).

Gossip goroutine model change: [https://github.com/orbs-network/orbs-network-go/pull/1211](https://github.com/orbs-network/orbs-network-go/pull/1211) - this increases resilience of the node - previously there was a single Goroutine per peer, meaning that if the current node's message connection to Lean Helix of some peer was blocked, there was also no connection available for forwarding transactions to that peer. The new update means Lean Helix, Transaction Forwarding, and other topics use separate goroutines and do not block one another.

That's enough for one month! Thank you for reading :)

\---- SEPARATOR ----

**Network Production**

_This segment was contributed by_ [@jlevison](https://github.com/jlevison)

Development

- [Fixed](https://github.com/orbs-network/orbs-network-go/pull/1208) incorrect storage metrics reported on how big the block storage is.
- We created [https://github.com/orbs-network/kartoha](https://github.com/orbs-network/kartoha), Generates Prometheus configuration that continuously polls all the nodes in the network, allowing to constantly monitor the state of all virtual chains, complete with Grafana dashboard.
- We have enabled our validators to deploy v1.1.1 of the Orbs node, a detailed report of what is included can be found at the R&D post [https://www.orbs.com/node-upgrade-version-1-1-1/](https://www.orbs.com/node-upgrade-version-1-1-1/)
- New 4 node demonet was created to host Technology Engagement Group demos and app (for example, [the Notary app](https://orbs-network.github.io/notary/))

\---- SEPARATOR ----

**Use Cases and Dev Experience**

This segment was contributed by [@jlevison](https://github.com/jlevison)

Application Use Cases

- On top of the notary project, extracted the notary lib into its own repository [https://github.com/orbs-network/orbs-notary-lib](https://github.com/orbs-network/orbs-notary-lib). Then, redesigned the Orbs notary UI: Using the newly extract lib and a UI design.

- Enabling the ability to track tenders over the Orbs blockchain, for a fully trusted tender process.
- Invoice processing on-chain, exploring with an independent SaaS invoice provider the ability to support invoice processing over the Orbs blockchain
- Working with several leading SI to incorporate Orbs in their blockchain based solutions.
- Developing several events, workshops and hackathons, if you wish to receive more information or participate, contact [jonathanl@orbs.com](mailto:jonathanl@orbs.com)

Developer experience

- The smart contract compiler got a minor update to its code sanitation component which included a [small refactor](https://github.com/orbs-network/orbs-network-go/pull/1224) to support wildcard import whitelisting
- Contract multiple file support - Orbs now supports deploying a contract with multiple source files. Gamma server, Gamma-cli and the client SDKs have been updated to support this new feature.
- Support docker version 19.03 as part of the deployment framework of Orbs

\---- SEPARATOR ----

**User Facing Products**

_This segment was contributed by_ [_@gilamran_](https://github.com/gilamran)

Staking dashboard

- We are redesigning the website to improve several things:
  - Improve usability for  PoS and delegators
  - Change our content strategy from a lot of information to effective information that is  relevant to PoS, enterprises and developers
  - Brand the website in two ways, black for PoS and white for developers-enterprises
- As part of the above we are redesigning the homepage which will open with a new and awesome PoS interactive dashboard
- A POC has begun.

\---- SEPARATOR ----

**Research and Architecture**

_This segment was contributed by_ [_@Avilanthe1_](https://github.com/avilanthe1)

Orbs’ research efforts continue with researchers and developers work on different aspects of the Orbs blockchain infrastructure! Here is a breakdown:

PoS Research

Locking contract

Last month, the PoS team’s main effort was to give a full specification of the locking contract. First, we distinguish between Validator locking and Delegator locking. In the past, our primary focus was solely on Validator locking, which was the first step towards a permission-less open-to-competition Validator nomination process. The addition of Delegator locking is an essential feature in the Orbs PoS architecture because we use periodic snapshots, which are susceptible to manipulation if no locking is employed. Additionally, locking would increase attack cost predictability - to attack the network one needs 70% of all delegated stake; without locking, there can be tremendous fluctuations in the amount of delegated stake, thus making the cost of an attack highly unpredictable.

Our current planned locking contract architecture is composed of two separate contracts: one for Delegators and one for Validators. Each contract can be upgraded independently. Locking properties, such as locking periods and cool-down periods, may differ between the two contracts. Moreover, more than one locking options may be proposed to the different participants. Conditions for transferring locked coins from one contract to the other are specified. Furthermore, rewards and voting power are increased for locked coins versus unlocked coins.

Zero-Knowledge

The research team continually explores the subject of zero-knowledge proofs and its role in typical blockchain use cases. In the previous month, the effort focused on the following:

- **Offloading workload from user to cloud**. Generation of proofs in zero-knowledge is often a significant computational effort, in some cases one that can't be performed (in a reasonable time) by a user who only uses their cellular phone rather than a powerful computer. Such a user may choose to offload the computation to the cloud, in which case they forfeit their privacy. To fix that, homomorphic encryption may be of use: a client may upload _encrypted_ data to the cloud, which will generate the proofs directly from the encrypted data, thus not undermining the user's privacy. The research team is exploring this concept to check its feasibility and effectiveness.
- Reference string generation. Numerous cryptographic systems entail a preprocessing phase in which a trusted or untrusted party generates what is referred to as a _common reference string_. For example, the privacy-focused cryptocurrency Zcash is such a cryptographic system. Having in mind that any future zero-knowledge-related application will probably require a reference string generation, the research team studied the generation process, with an emphasis on some parameter tweaking that may enable new and useful features. For example, the "traditional" way of generating the common reference string has a one-point failure: any one of the participating parties may fail the process if they so desire. Using ideas from distributed key generation schemes, we can mediate this issue.

Proof of Custody

Orbs network employs a PoS design for Sybil resistance and to economically align the different parties with the protocol instructions. To steer clear of the “fox guarding the henhouse”-issue Orbs network utilizes Ethereum to perform Validators election (see more details [here](https://www.orbs.com/pos-external-oversight/)). For this reason, Orbs Ltd. operates an Ethereum node that is currently the provider of the election data to the Orbs network. This Ethereum node is effectively a single point of failure in the PoS architecture. Therefore, the research team is investigating different methods to resolve this issue to make the Orbs network more decentralized and by that more secure.

One obvious “solution” can be to require all Validators to obtain their own Ethereum node. Unfortunately, Validators will have a hard time to comply with such a requirement as operating an Ethereum node incurs non-negligible costs as well as continuous and rigorous maintenance. Therefore, without a proper incentive, we cannot expect Validators to possess their own Ethereum node. Here is where Proof of Custody emerges - it enables Validators to prove succinctly that they hold specific data. In our case, such data can be the current Ethereum state which functions as a witness of one operating an Ethereum node. A proper proof of custody scheme involves proofs that are easy to compute, are of constant-size and can be verified quickly (preferably without interaction with the prover), as well as small size witnesses that can be easily validated in case of prover misbehavior.

New Features Architecture

The Orbs architecture and research team is extending the Orbs infrastructure by providing a detailed specification of the following new features and improvements:

Trigger mechanism

This feature enables contract calls that are self-triggered without necessitating an external client call. The trigger mechanism is a block-level hook - appended to the end of every block as a special system transaction. When executed, it triggers the execution of contract methods that were previously registered to the trigger mechanism and meet some predetermined conditions. At the outset, we design the trigger mechanism only to support other system services, some of which are mentioned below.

Leader activity reputation

This feature implements a simple failure detector intended to decrease the harm incurred to a virtual chain by a malfunctioning block proposer (mainly in terms of throughput).

The idea is to record on-chain the activity of the block proposers as reflected in the consensus process. This activity is transformed into a measurable indicator called reputation. Validators reputation is taken into account at the beginning of each new consensus round, decreasing the chance of an inactive block proposer to get elected and vice versa.

Management chain

Adding the management chain transmutes Orbs infrastructure design from a simple collection of isolated (virtual) chains into a hierarchical one. Its primary purpose is to be a system-wide source of information to all other virtual chains in the Orbs network. As a first step, the management chain will be the sole maintainer of the Validator's election results, relayed from Ethereum. This solution reduces the resources consumed by Validator nodes, which currently have to relay the results on every virtual chain separately. In the future, the management chain could further serve as a trusted medium for virtual chain interoperability.

Redesigning Ethereum mirroring

The Orbs PoS data is maintained on Ethereum and relayed to the Orbs network by a mirroring agent. Currently, this process occurs in bursts - at every election event. A more reliable approach is to consume this data in small chunks continuously. The research team is working on a design that replaces the dedicated mirroring agent with the native trigger mechanism described above. Where the recording and processing of data on the Orbs management chain will be a system service.

**\--- Separator---**

**<@Nate outro>**

Till next time,

Bella Ciao
