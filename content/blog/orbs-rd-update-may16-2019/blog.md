---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-rd-update-may16-2019/bg.jpg
blogUrl: orbs-rd-update-may16-2019
date: 2019-05-16
title: Orbs R&D Update May 2019
author:
  - /blog/common/authors/EranK.md
type:
short_description: _After a year and a half of building the Orbs blockchain from the ground up with the most talented team I could hope for, mainnet was released to the public on March 28th. One of my non-technical post-launch goals is to focus on communicating directly all the work we’re doing._
---

_After a year and a half of building the Orbs blockchain from the ground up with the most talented team I could hope for, mainnet was released to the public on March 28th. One of my non-technical post-launch goals is to focus on communicating directly all the work we’re doing._

_Brace yourselves - this is long :)_

...

## **The Orbs Universe**

Since the launch of the production-ready Orbs platform and its release to the community, the Orbs core development team has continued to monitor its progress and work to develop improvements to propose to the community of participants in the Orbs network. Our team prepared a post describing what we’ve learned so far, the problems the network has encountered and the fixes we’ve proposed to the Validators running the protocol.

[Read all about it here](https://medium.com/orbs-network/pos-ecosystem-elections-update-orbs-a4063e3d0f05).

## **Use cases**

There’s been a lot of interest among Orbs contributors to implement cool use-cases on top of the platform to show what it’s capable of. Some of these ideas will remain proof of concepts, while others may eventually mature to working products as an increasing number of companies in the ecosystem express interest to take them to the next level. The Orbs core development team believes that the focus of this exploration should be to work on the use-cases that have the potential to derive the most significant utility from a public blockchain, mainly by benefiting from the various guarantees Tal (@talkol) writes about (auditability, forkability, governance). See here \[[link](https://medium.com/orbs-network/the-blockchain-dichotomy-and-an-architecture-to-overcome-it-8b124cf1cad)\] Some of the use-cases the Orbs core development team believes have this type of potential are the following:

### Decentralized NPM

Node.js Package Manager (NPM) is a super popular tool for sharing code between projects in the JavaScript ecosystem. It hosts over [1.2M](https://registry.npmjs.org/) packages that are downloaded over [1B](https://api.npmjs.org/downloads/point/2019-05-06) times per day. This database is open-source but what’s interesting is that it’s completely centralized and managed by a well-known company called npm Inc.

Currently, it fulfills two important roles: 1) authority and 2) storage.

Firstly, npm Inc. authenticates users who can publish new versions of packages and manages their permissions. Secondly, it hosts and maintains the registry where packages are stored.

Sergey (@[bolshchikov](https://github.com/bolshchikov)), one of the core contributors, is a die-hard JavaScript ecosystem fan, incepted proof of concept of a [decentralized npm](https://github.com/orbs-network/decentralized-npm) can address both roles by utilizing smart contracts and public blockchain.

A smart contract allows the decentralized npm to easily manage the authority and role of every user publishing code in a transparent manner. It also makes it possible to store and audit the metadata of packages that are being published.

### Conversation App

Kirill (@[netoneko](https://github.com/netoneko)) created Conversation ([https://github.com/orbs-network/conversation](https://github.com/orbs-network/conversation)) - a serverless chat running on top of the Orbs blockchain. It utilizes the strength of Orbs where finality is achieved in sub-seconds and you can actually have a responsive chat on top of the blockchain!

**_Got an idea for a useful apps to develop using Orbs? Suggest it on the_** [**_community board_**](https://community.orbs.network/)**_!_**

...

## **Orbs Network**

[**Orbs Network Github**](https://github.com/orbs-network/orbs-network-go)

During April we’ve worked a lot on monitoring and stabilizing Orbs network:

- Extracted logger to separate library, Scribe: [https://github.com/orbs-network/scribe](https://github.com/orbs-network/scribe)
- Added support for Prometheus metrics exposed via HTTP API.
- Added config validation for the node that verifies that Orbs node address was derived from the public key. It addresses the issue of misconfiguration that one of our partners had experienced.
- Streamlined release process for Gamma and Orbs node, master and releases are published to Docker Hub now.
- Network launch - logs monitoring and understanding the network 'heartbeat'
  - Ethereum health-check (github [#1102](https://github.com/orbs-network/orbs-network-go/issues/1102)) - refactored the component to be testable, added a sanity test, refactored the reporting code to send less data or more concise data about the health checking
  - native compiler (github [#1106](https://github.com/orbs-network/orbs-network-go/issues/1106)) - added 6 new metrics to give us visibility about contract compilation
- Monitoring data - added/fixed metrics to native compiler and Ethereum health check
- Reporting block-sync issues - injected the sync peer IP into the connection context object, so we can report the peer IP and not just the peer address (github [#1123](https://github.com/orbs-network/orbs-network-go/issues/1123))
- Analyzed new transport limitations to resolve invalid network communications (github [#1153](https://github.com/orbs-network/orbs-network-go/issues/1153))
- Worked with Logz.io to understand our limitations and ensure we do not get blocked and 'blinded' when it comes to logs of the system
- Added state diff discrepancy dump in case Validators disagree on the proposed block’s state diff. This is an interesting case, described [here](https://medium.com/orbs-network/pos-ecosystem-elections-update-orbs-a4063e3d0f05), where Orbs nodes didn’t reach a consensus and the Orbs team investigated the cause. Once the team realized it’s because of non-deterministic execution, we proposed this feature.
- Removed logging of metrics to log files. Monitoring now relies on metrics polling over via http requests rather than logs parsing
- Several issues: [#1121](https://github.com/orbs-network/orbs-network-go/issues/1121), [#973](https://github.com/orbs-network/orbs-network-go/issues/973)
- Introduced GOSSIP_RECONNECT_INTERVAL config variable. Previously, when a connection could not be established we would sleep for GOSSIP_CONNECTION_KEEP_ALIVE_INTERVAL before the next attempt. This use of keep-alive-interval to determine the sleep between reconnection is incorrect in itself. The problem appeared when, in some testing scenarios, keep-alive messages are disabled by setting the keep-alive-interval to a very high value. In these scenarios, if a transport listener is not initialized before the first connection attempt, the test would halt because the reconnect interval was a virtually infinite duration.

## **Gamma**

Gamma is a local environment that enables developers to develop, deploy and test on Orbs layer. You can read about it [here](https://medium.com/orbs-network/orbs-launches-gamma-local-testing-environment-ahead-of-2019-production-launch-ee0ac277544e) and start playing with it [here](https://github.com/orbs-network/gamma-cli).

- We added an option to gamma server to use LeanHelix consensus. This means that Gamma server can now run with 2 different consensus algorithms:
  1. Benchmark consensus: optimized for fastest block time and lowest resource requirements and assumes trust among the nodes. It is useful for contract development.
  2. Lean Helix consensus: random leader consensus based on PBFT, lean helix is Byzantine Fault Tolerant and is the consensus algorithm Orbs network is running in production.
- A new version of Gamma CLI also automatically runs Prism, the Orbs blockchain explorer.

## **Orbs Ethereum Contracts**

[**Orbs Ethereum Contracts Github**](https://github.com/orbs-network/orbs-ethereum-contracts)

This monorepo contains projects involving Orbs and Ethereum interoperability features. During the development of V1 the Orbs team started experiencing the challenges involved in testing, building, and deploying features that span across more than one blockchain.

All subrepos contain Solidity contracts for deployment on Ethereum. Some contain Orbs contracts, and some contain additional standalone processes meant to facilitate communications between the two networks. In addition, some subrepos include off-chain apps such as web UI.

The stack used in these repositories is diverse:

1. Solidity contracts unit tests are implemented in JS over Truffle
2. Orbs contracts and their unit tests are implemented in Golang
3. Integration tests demonstrating full life cycles for all features are implemented using a mixed stack of JS, Truffle, Golang, Gamms, and bash

The monorepo currently contains 3 + 1 subrepos:

1. Subscription - Contracts for provisioning and payments for Orbs Virtual Chains
2. ASB - Autonomous Swap Bridge - enable ERC20 token transfers between Ethereum and Obrs networks
3. Voting - Contracts for delegation, voting, Guardian and Validator registration, and voting over Ethereum and contracts for tallying elections results and executing their results on Orbs. In addition, there is an external process which drives data flow between the two networks.
4. Deprecated - Federation contracts. Reference for the deprecated federation model envisioned in the original Orbs Position Paper, since replaced with Orbs PoS model.

### Refactor / cleanup

When V1 was released, each of the subrepos had a different internal structure, following different conventions. In addition, the directory structure was confusing since the repository was not initially conceived as a monorepo. The refactor/cleanup included:

1. Separation into subrepos - now, each top level folder represents a single subrepo corresponding to a single feature
2. Added shebang lines to bash scripts
3. Removed non repo folders from repo top level - scatter docker folders into subfolders
4. Stop using NPM symlinks
5. Uniform subrepo structure, with these folders:
   1. Docker - used for ci automation
   2. Ethereum - truffle folder containing Ethereum contracts
   3. Orbs - Orbs contracts project
   4. ff-blockchain components - such as web UI projects, schedulers, cron jobs, etc
   5. Build - build artifacts output for all projects, in particular, compiled Ethereum contracts
   6. Test
      1. End-to-end (e2e) - undetermined scope
      2. Integration Test - integration e2e tests testing the full feature against both Ethereum and Orbs implementations: local dev (Gamma/Ganache), testnet (Ropsten/Testnet), production (Mainnets)

### Open Issues

1. ABS project still makes a distinction between Ganache and Ropsten target networks in testing code. This is a technical debt
2. Dependencies between subrepos are not yet resolved. Currently, Ethereum contracts must be compiled and published using ./deploy.sh script found in the truffle project folder, or manually
3. Integration test stack is too complex.

## **Performance monitoring**

In the weeks leading up to our planned launch, the Orbs core team ran stability tests on various network configurations. The purpose was twofold: identify bugs that manifest themselves only after the system has been online for a long time, and test the load limits of the system.

As a new software system goes to Production it is essential to have a monitoring system in place. Its main goal is to identify anomalies, that is, deviations from the KPIs that have been set for the system. This information should optimally be presented in a clear format so that a casual glance at a performance dashboard lets users identify an "All OK" or "Not all OK" status.

[Read all about it here.](https://www.orbs.com/monitoring-the-orbs-platform/)

## **Prism**

Prism is a reference implementation of an Orbs block explorer. Just like every part of Orbs, Prism is an open source project. If you want to review the code or contribute, take a look here:

[https://github.com/orbs-network/prism](https://github.com/orbs-network/prism)

#### New Features

- Added new **/contract** page with the contract code, and the 100 latest transactions sorted by block height and index in the block. This page can be used to monitor incoming transactions to a specific contract and the results of each transaction.

![](/assets/img/blog/orbs-rd-update-may16-2019/image2-2.png)

- Added a link to the contract page from the transactions page.
- Detecting system contracts, and indicating that on the client (Without the code)
- Changed **blockHeight** to a number (In the db), instead of string to be able to sort transactions history for the contract page. Client should still use string as it doesn’t support bigint.
- Added contract Golang syntax highlighting.

#### Server-side enhancements

- Added some basic and naive **add/subtract** utilities for bigint calculations on the client as it is not supported on some browsers.
- Added **release.js** that will bump the **package.json** version, commit and push. Added **publish** to the npm scripts for fast and simple release.
- Added Prism version (taken from the package.json) on the bottom left of the Prism client.
- Stopped using **IS_PRODUCTION** / **IS_STAGING** taken from **NODE_ENV**, and simplified these to more specific params like **FORCE_HTTPS**, **MINIFY_JS, LOG_TO_CONSOLE, LOG_TO_FILE,** and **LOG_TO_ROLLBAR**.
- Added default values to **.env** instead of **config.js**. Also using **.staging.env** and **.testnet.env** to be able to debug other environments (ignored on git)
- Moved from webpack port 8080 to port 8085 to let gamma use its default port
- Fixed **README.md** to reflect the current state of the project
- Removed anything related to postgres
- Fixed unit tests and e2e tests db collusion, by clearing the db after each test
- Added cloudinary for uploading failing e2e tests screen captures
- E2E failed because animation timing, so added **DISABLE_ANIMATIONS** environment variable that is turned on during e2e tests. Doing so will disable animations and will prevent flakiness in e2e tests
- Using **func** instead of **method** in logs which was specific to rollbar, and caused wrong error reporting
- All the transactions argument list was redesigned to better show long values
- Fixed blocks layout (overlapping)
- Retrying tx & block loading after fetch error instead of always showing errorsAdded logs when getBlock responded with blockHeight=0
- Using **process.cwd** instead of relative path when accessing files on the server
- Added capper (To prevent client memory overflow), Not used yet
- Added the ability to debug client-tests
- Added protection against failed server initialization
- Blocks with more than one tx are now laid out better
- Halting the app start up if the db was unable to initialize
- Using injected logger instead of **console.log**
- Avoiding **require**, using es6 **import** when possible
- Added more information on logs about bad block requests
- Added **rollbar** as a logger in winston
- Using **winston** logger in the server. (Logs to console, file and remote)
- Preventing animation when app starts for the first time
- Fixed background animation bug
- Implemented **prev** and **next** blocks
- Fixed **signerPublicKey** generation in tests
- Added **signer address** to the transactions

## **Boyar**

[**Boyar on Github**](https://github.com/orbs-network/boyarin)

Boyar is probably the only blockchain provisioning system today to do dynamic resource allocation in real-time. This means that when a new virtual chain is created, new containers are automatically spawned on all Orbs nodes by this system (an Orbs node is a cluster of machines, not a single machine).

- Added logging via Scribe ([https://github.com/orbs-network/scribe](https://github.com/orbs-network/scribe))
- Added monitoring for virtual-chain’s containers. The status of the containers is now reported to the logs
- Fixed race condition that occurred when multiple virtual chains were provisioned at once
- Added support for 10s and 100s virtual chains running in parallel on the same cluster (300+ verified to run on current hardware, m4.xlarge x 3)
- Added support for NFS as virtual-chain volume persistence for one of the Validators, Tenta, allowing them to run Orbs node on their own hardware (non-AWS) with no code modification and minimal effort
- Added optional SSL support: Orbs node public API is now available via HTTPS, allowing for the creation of in-browser client apps. Encryption happens in Nginx reverse proxy that proxies requests to individual virtual chain containers

## **Nebula**

[**Nebula on Github**](https://github.com/orbs-network/nebula)

Nebula is an Orbs node deployment tool for validators that provisions all the needed resources on AWS and creates the Orbs node.

- Added option to enable HTTPS in Orbs node public API implemented in Boyar.
- Remove the automated setup of an Ethereum node from our node deployment tool - Nebula.

Since the latest update, Nebula will **not** create an Ethereum node anymore as part of the Orbs node. From now on, it’s the validator’s _own responsibility_ to set up an Ethereum node in a separate process (**prior** to creating the Orbs node using Nebula)  and ensure it is synced and ready to hit the road **before** using Nebula to deploy their Orbs node. Since the Orbs POS ecosystem is based on Ethereum, Boyar & Nebula must have up to date state from Ethereum in order to operate. Some of the recent changes to Nebula which also supports this very same goal is providing in the arguments to Nebula an Ethereum endpoint that the Orbs node will use for Ethereum main net access.

In addition, Nebula was refactored to be more concise and easy to contribute to. Linting was added to the project as well to find more errors while writing code, especially when using an Atom-based open source editor (e.g VS Code and friends)

## **Launch of Orbs Community**

We launched [Orbs Community](http://community.orbs.network) using the Discourse platform. and aim for it to become an open environment for discussion and collaboration about Orbs with the community of all participants in the Orbs Universe - developers, Delegators, Guardians, and Validators. Since Orbs is a decentralized and open source project, any constructive member of the community can become a moderator. Check this [blog post](https://www.orbs.com/introducing-orbs-community/) for more insights behind the community.

Together with establishing the community, we have revived our [orbs-contributor-guide](https://github.com/orbs-network/orbs-contributor-guide). We value the good community around the project, therefore we have added a [Code of Conduct](https://github.com/orbs-network/orbs-contributor-guide/blob/master/CODE_OF_CONDUCT.md) that applies to all Orb network projects. If you are willing to contribute code, please consult with the [contribution guide](https://github.com/orbs-network/orbs-contributor-guide/blob/master/CONTRIBUTING.md), it should suffice to get you started.

### **Hackathon**

Orbs will have a hackathon on May 22nd-23rd. Its purpose is for the Orbs R&D team to further explore the abilities of Orbs platform, with a view to discovering and sharing new ideas for use-cases and products that can be developed on the Orbs platform. We are excited about getting ideas from the community about specific products you think would be interesting to develop. Join the conversation at: [https://community.orbs.network/t/ideas-for-r-d-hackathon/90](https://community.orbs.network/t/ideas-for-r-d-hackathon/90)

## Research

The Orbs team is also engaged in theoretical research that we believe the community of developers may find useful in the future development of the Orbs network. The below summarizes some of what we have been thinking about and working on lately.

### **Zero Knowledge Proofs**

A key factor in mainstream application' adoption is the ability to provide users with the required privacy. The ability to achieve privacy with the ability to maintain state under consensus and provide the auditability and forkability guarantees is challenging. Multiple cryptographic technologies for privacy solutions are under research, such as zero-knowledge proofs, bulletproofs, multi-party computation and others. We’ve chosen to focus our research initially on zero-knowledge proofs.

Zero-knowledge proofs are a cutting-edge cryptographic tool. They allow an entity to provide proof of some claim, without revealing any other information other than the validity of the claim itself. A popular Blockchain-related use case is the privacy coin Zcash, where zero-knowledge proofs are used in the following way: A payer, rather than uploading a transaction, uploads a “proof” of correct transaction. All verifying nodes of the system may then check that the underlying transaction is valid, without learning who is the payer, what is the amount being paid and to whom. Moreover, they are able to update the transaction pool accordingly, thus fulfilling their role as system maintainers without jeopardizing the privacy of the users.

The Orbs research team continually explores all aspects of zero-knowledge proofs, from theory to implementation. We study the cutting edge protocols for zero-knowledge proofs and examine whether it is possible to bootstrap the unique Orbs network architecture to gain further improvements. Parallely, we research use-cases where zero-knowledge proofs present themselves as a key tool. An example we have recently been focused on is digital identification, a problem with immense implications. In the upcoming Hackathon, we hope to show a proof of concept for a blockchain identification scheme, the core tool of which are zero-knowledge proofs.

[ZKProof.org](https://zkproof.org/) is an open initiative of industry and academia to standardize the security, implementation, and application of zero-knowledge proofs. In early April, a standardization workshop was held at Berkeley. It gathered experts from around the world, both from the industry and academia. The Orbs core team was represented by its lead cryptographer Idan Perl.

### **Non-Deterministic Execution**

The Orbs team is actively researching the topic of non-deterministic execution support in smart-contracts, to expand our platform capabilities. Non-deterministic execution provides two important capabilities. The first is the ability to reach a consensus on data external to the system, which can vary by nature (such as location or a stock price). The second is the ability to identify and remove transactions that result in unintentional non-deterministic execution allowing the block to reach consensus. For example, the non-deterministic state order writes that occurred in the elections contract due to the use of Golang maps.

Most existing blockchains solutions follow the active state machine replication approach, in which clients\` operations are ordered and then executed. Here, the backend service distributes the application over multiple servers to enhance the resilience of a client-server application for tolerating arbitrary faults, misbehavior (under certain assumptions, such as honest majority). In this approach, if all servers start from the same state, process and execute the same sequence of operations, then they all maintain a single consistent state.

This design requires the execution of an operation to be deterministic. If the servers process a smart-contract which includes a source of non-determinism, such as randomness, or outside the system data, the result of the operation will differ across servers causing them to diverge, and prevent state progress.

The common approach in blockchain systems for dealing with non-deterministic execution is suppression. Ethereum developed its own execution environment (EVM) along with the Solidity programming language which goes a great length to eradicate all traces of non-determinism (for example allocating variables in memory in known addresses).

This approach hinders adoption - for example, by developers which are used to different General-purpose languages, and prevents robust and interesting features in the application which runs on top.

There are several traditional approaches in distributed systems research, to support non-deterministic execution - rely on a trusted source of randomness - or even Hyperledger fabric blockchain platform design, which altered the operation processing sequence - execution first, then ordering and final validation phase.

We continue to research possible approaches to embedding the support for non-deterministic execution in the Orbs platform.

### Randomness

The Orbs research team is working on completing a paper on the topic of generating randomness.

Apps that require randomness stand in front of a dilemma. If they become transparent, they lose their ability to generate randomness easily. If they remain obscure, users don't have a good reason to trust the app (other than reputation, that can't be based on much). Since the randomness can have great economic implications (by determining the winners of valuable prizes), it could be very profitable to tweak the randomness, predict it, or block its publication. How does an app guarantee (not promise!) the integrity of the randomness generation process it uses?

Our paper introduces a randomness generation service in a game-theoretic environment that an app can use. Intuitively, it can be seen as a “randomness-as-a-service” type solution.  Randomness is produced on-demand (rather than as a beacon), instantly (without inherent delay built in), and counters collusion.

A reliable randomness generation process might be useful for the Orbs network one day -- selecting transactions fairly in high load periods, selecting committees fairly (among a large network of validators).

## **Going on Tour**

Our very own Shai Yallin spent the first 3 weeks of April on tour with his band [Subterranean Masquerade](https://www.submasq.net/), living on a [nightliner](http://absolute-touring.com/) and performing music on a daily basis!

![](/assets/img/blog/orbs-rd-update-may16-2019/image1.jpg)

...
