---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/whats-being-launched/bg.jpeg
blogUrl: whats-being-launched
date: 2019-03-26
title: What's Being Launched - an Inventory List of Everything Part of V1 Release
author:
  - ../common/authors/EranK.md
type:
short_description: _With our launch rapidly approaching, we wanted to provide a full breakdown of what you’ll find in Version 1 of Orbs. The launch of V1 is a huge step forward for the Orbs project — building a full blockchain from scratch based on the requirements of real businesses._
---

_With our launch rapidly approaching, we wanted to provide a full breakdown of what you’ll find in Version 1 of Orbs. The launch of V1 is a huge step forward for the Orbs project — building a full blockchain from scratch based on the requirements of real businesses._

_While we are incredibly proud of what we’re launching, this is only the first version and very exciting upgrades and updates are in store for later this year. Even more importantly, we look forward to hearing feedback from the developer community to understand what we can do better to build the ideal blockchain stack._

...

### Going fully open source

As stated in the original position paper, Orbs was always intended to be an open source project. As we approach the launch of our V1 release, we could find no better time to make our work open to the community and achieve this important milestone. This is a big moment for us. We are no longer developing in the shadows of private repos and are very proud to show everything we’ve been working on until now.

During V1 release, the entire Orbs codebase — over 60 repositories — will be made public on GitHub. Our belief is that open source code should not restrict usage so we’re using the most permissive licenses we can, mostly MIT. We are also making the shift towards full transparency and development: from this point on, will continue alongside the community on the public repos.

- This has some very important implications that speak to the core of being an open source company:
- Anyone can start reviewing the system and audit what was built so far. We believe that external review is critical for meeting our targets of a stable and secure system. In fact, we believe it to be a prerequisite as trust that a system is indeed secure can only be gained after external parties have been reviewing it, reporting issues and proposing solutions.
- Anyone can fork and make their own versions of what we’ve built. The IP is being made available to the community. A project aspiring to become decentralized is not really owned by anyone therefore all knowledge must be accessible to everyone. All of the assets we’ve created in code form or article form are becoming public.
- External contributors can start joining and taking part in the ecosystem we are building. In a sense, this ecosystem itself is now being launched because up until now, significant parts of it were closed. We aim for external developers to start using what we’ve built and with this use they will report issues, propose solutions and even implement some of these solutions by themselves.

### What features are part of V1?

Although V1 is by no means the end of development, it was important for us that this version be complete enough to stand on its own two feet. The ecosystem we are envisioning is made from many moving parts. This is the first version where all moving parts finally exist meaning the entire system is working end to end.

Naturally, not all of these parts are finalized and many have to be improved significantly over the versions to come, but the core competency of everything our vision encompasses is included. Developers can start working to make apps, these apps can be launched and the decentralized ecosystem that executes them can assemble and start governing itself.

We’ve been working on V1 for over 8 months. Our previous version, Orbs Alpha, provided the foundation for our work with design partners. That version was not yet suitable for production and was missing critical pieces. Many of the existing components have also been revamped from the ground up taking into account everything that we’ve learned during that time.

V1 has a very rich feature spec. It touches everything we’ve been talking about during the last year and a half. Including:

- All aspects of a working blockchain stack (from transaction pool to gossip to block sync). Unlike many blockchain stacks today, Orbs is not a fork of another mature stack. **The Orbs blockchain stack was developed 100% from scratch according to the specific requirements of our use case.**
- Two consensus algorithms are supported in V1. The more important one is Lean Helix, which is covered in the academic paper our team published alongside the position paper in the early days. [Lean Helix](https://orbs.site.strattic.io/white-papers/) is a Byzantine fault tolerant algorithm that enables us to balance high levels of performance with security. The second one is not Byzantine fault tolerant and is suitable for scenarios where we need higher performance and lower decentralization.
- Smart contracts in V1 include two smart contract environments. The more mature one is in Go language and can be used to write fully working apps. In fact, there are system smart contracts that are part of the core that are implemented on top of it. The second one is in JavaScript and is still a proof of concept (you can’t really write anything real with it today) but it demonstrates our commitment to the overall developer experience and being truly polyglot — we believe smart contracts should be able to be written in any language.
- Virtual chains, a core element in the Orbs architecture, are implemented in V1. The network can run multiple virtual chains in parallel on the same physical nodes. Virtual chains provide isolation between apps and allow every app to make its own governance decisions. Our V1 implementation supports a theoretically infinite number of virtual chains (true horizontal scaling) with automatic provisioning of more compute resources on a node as more virtual chains are spawned.
- The PoS incentive model in V1 is focused on taking responsible steps towards permissionless governance. The first app running on top of Orbs is a virtual chain we are launching for PoS voting. It will allow token holders to elect validators for the permissionless validator pool.
- Interoperability with Ethereum. We regard Ethereum as an ideal complement to Orbs for most apps. In fact, several core parts of Orbs itself are running on Ethereum like the ERC20 token, as well as the contracts for Validator registration, Subscription and Voting. The system reads data from Ethereum using Orbs smart contract API designed for cross-chain operations. This interoperability is working, in production, in V1.
- Full stack for developers. Aiming for an end-to-end app developer experience. Contract SDK with documentation and examples. Experimentation with a local instance on Gamma. Testing framework (both unit and end-to-end). Test net. Tools for deploying a virtual chain in production (Nebula). SDK for developing clients in Go and JavaScript (also Python). Block explorer for production monitoring (Prism).

### Inventory list of notable repositories

[**https://github.com/orbs-network/orbs-network-go**](https://github.com/orbs-network/orbs-network-go) The reference implementation of an Orbs node in the Go language. The node core is built from multiple microservices all found in this repo: _Block Storage_ (block persistence and block sync), _Consensus Algo_ (pluggable consensus), _Consensus Context_ (providing context like transactions to consensus), _Cross-chain Connector_ (interoperability to layers like Ethereum), _Gossip_ (how nodes communicate), _Processor_ (execution sandboxes for smart contracts in multiple languages), _Public API_ (external HTTP API to the node), _State Storage_ (combined snapshot of current state), _Transaction Pool_ (holding transactions until they enter blocks), _Virtual Machine_ (for executing smart contracts). Obviously, lots of our energies were spent here.

[**https://github.com/orbs-network/orbs-spec**](https://github.com/orbs-network/orbs-spec) The written specifications of the Orbs protocol. In essence, Orbs is a protocol, not an implementation as we encourage multiple node implementations in as many languages as possible. This resource should provide the guidelines for building an Orbs compatible implementation to anyone. In order to formalize the spec as much as possible, it also covers the formal interfaces between the microservices inside the node using Protobuf.

[**https://github.com/orbs-network/lean-helix-go**](https://github.com/orbs-network/lean-helix-go) The reference implementation of the Lean Helix consensus algorithm in Go language. The base for this algorithm was covered in the paper published by our team alongside the position paper. It is Byzantine fault tolerant and implements some of our core innovations like randomized consensus committees for improved decentralization and security while minding performance. We’ve made the effort to implement this as a library so it can be used in other blockchain systems.

[**https://github.com/orbs-network/orbs-contract-sdk**](https://github.com/orbs-network/orbs-contract-sdk) SDK for smart contract developers that want build dApps running on top of Orbs. Providing examples and APIs for smart contract developers. Orbs contracts are designed to be polyglot, providing a library-like SDK supporting multiple languages. The only mature language currently supported is Go but JavaScript is getting there too.

[**https://github.com/orbs-network/orbs-ethereum-contracts**](https://github.com/orbs-network/orbs-ethereum-contracts) [**https://github.com/orbs-network/orbs-token**](https://github.com/orbs-network/orbs-token) The small but critical parts of Orbs that are running on top of Ethereum as Solidity contracts. Some of the complex features of Orbs like stake-based validator elections or ASB (autonomous swap bridge for transitioning ERC20 tokens to Orbs) are implemented as a mix of Orbs and Ethereum contracts that communicate with each other. The Orbs subscription contract of how somebody pays the fees for a virtual chain is also here.

[**https://github.com/orbs-network/orbs-client-sdk-javascript**](https://github.com/orbs-network/orbs-client-sdk-javascript) [**https://github.com/orbs-network/orbs-client-sdk-go**](https://github.com/orbs-network/orbs-client-sdk-go) [**https://github.com/orbs-network/orbs-client-sdk-python**](https://github.com/orbs-network/orbs-client-sdk-python) SDKs in multiple languages for implementing clients for apps running on top of Orbs. Whereas the contract SDK covers the backend development of the app (smart contracts running server-side), these SDKs cover the frontend development of the app (web or mobile application running client-side). They allow users to sign and send transactions to the network.

**[https://github.com/orbs-network/gamma-cli](https://github.com/orbs-network/gamma-cli)** Personal Orbs blockchain that allows developers to easily test, run and deploy smart contracts on their local machine. This is a local instance of the blockchain for developers, very similar in concept to Ethereum Ganache. Almost all smart contract development should start from using this tool.

**[https://github.com/orbs-network/prism](https://github.com/orbs-network/prism)** The Orbs block explorer implemented in Node.js over MongoDB. Video demo [available here](https://youtu.be/0W68zTErUFU). Instances of the block explorer can be run by anyone and provide a user friendly web interface to what’s going on inside a virtual chain. We envision this tool eventually becoming an analytics, monitoring and debugging tool for app developers (imagine NewRelic for decentralized apps).

**[https://github.com/orbs-network/nebula](https://github.com/orbs-network/nebula)** Toolkit for the creation and management of an Orbs node running multiple virtual chains (a Constellation). Validators for example use this tool to deploy a node to production. The purpose of the tool is to abstract devops complexity and make node management easy for anyone.

**[https://github.com/orbs-network/membuffers](https://github.com/orbs-network/membuffers)** High performance memory efficient serialization library with direct wire access. Used by the Orbs protocol to serialize all protocol messages and implements the communication format between nodes and microservices inside a node. Built as a general purpose library since it’s not blockchain-specific and we believe many projects out there can benefit from it.

[**https://github.com/orbs-network/performance-benchmark**](https://github.com/orbs-network/performance-benchmark) A set of tools to run end to end performance benchmarks of Orbs. We use these tools as a baseline to measure the network under stress and decide whether proposed changes improve or degrade performance.

**[https://github.com/orbs-network/dkg-on-evm](https://github.com/orbs-network/dkg-on-evm)** Distributed key generation on Ethereum for BLS threshold signature using the elliptic curve BN256. Threshold encryption is a popular primitive in our architecture which some of our interesting innovations are based on. The difficulty with threshold encryption is that node keys have to be generated together which creates an operational challenge.

And much much more… from client SDKs in more environments like Android and iOS to additional reference implementations of node core in languages like TypeScript (some of the unlisted do not conform yet to the full V1 protocol spec).

### Setting expectations about stability and security

The network is production-ready. This means it’s ready for real apps running in production. The first example is the PoS voting app used to elect validators for the permissionless validator pool which will run in its own virtual chain.

The system we’re building is aimed for developers. The golden standard of stability for developer infrastructure, given by established cloud services like AWS, is 99.999%. In order to compete with traditional infrastructure, these are the numbers we have set as our target as well. Are we there now? Of course not.

We’re religious about testing and the node core implementation in Go has literally over 1000 different tests. This entire test suite is running automatically on every commit to the codebase. Is this enough to guarantee stability? No. The only way to measure true stability is not in the lab, but in production. Our test nets for example have been doing Ethereum interop on Ropsten, only in production we will start doing interop with Ethereum main net itself. We are confident we’ll learn a lot during the rollout process.

Once we have apps running in production, like the PoS voting app, we can start getting a real sense of how stable the system really is. We don’t expect this to be a completely smooth ride. Implementing a blockchain from scratch is not easy and even established blockchain nodes, like some Ethereum implementations that are years in development, are known to crash at times.

What about security? Are we able to give a hard guarantee for how much value can be held on the network at launch? The answer is similar. We don’t expect any app running on the network in the beginning to hold significant value.

Trust that a network is secure is generated over time when it’s running in production and fully transparent (so the community can review the implementation). We will start generating this trust on launch. After launch, we do plan to start a bounty program and promote external security audits to speed up the process. We don’t expect this to be a smooth ride either.

We’re certain that once external developers start reviewing the implementation issues will be reported. We hope that with the help of the community, we will be able to reach our security and stability targets in the upcoming months.

In order to keep the ORBS token itself safe and the voting process safe we’ve carefully relied on Ethereum in critical parts of the process to make sure no real damage can be done. This will allow us to learn in production without tangible risk to token holders.

### How can an app launch a virtual chain?

Although it is technically possible to self launch a virtual chain at this stage, it is still complicated due to product friction. The more realistic scenario is that apps launching a new production virtual chain will go through an integration process with our developer success team. We will be happy to provide hand-holding to anyone interested and teach how the process is done.

After launching multiple virtual chains to production this way, we’ll be able to focus on simplifying the product of the process and make this product a priority in future roadmap.

### How can a node be launched?

The project is open source so everything required to run a node is publicly available. The artifact generated by node core is a docker image which is ready to run. We will publish docker images for convenience to standard channels like Docker Hub, but we do recommend of course that everything be built from source.

It is relatively easy to launch new nodes, especially using Nebula, the tool designed for this purpose. It uses Terraform to provision machines on popular cloud providers semi-automatically. Anyone can create their own flavor of the network with their own validators or join the public network that we’ve set up. To be eligible for token rewards, and participate in the elections for the permissionless validator pool of the official network, nodes must register in the appropriate channels (smart contracts on Ethereum). More info will be provided when we share the details of our incentive model.

We do not currently provide a node that can run in “audit mode” and verify the output of the network without participating actively in the consensus. We see significant value in this functionality and plan to offer it in the upcoming months.

### How many validators participate on launch?

We are favoring quality over quantity. A permissionless validator pool is only as good as the validators who choose to participate in it. We want to build the validator pool slowly with validators that actually care about the network and have significant stake in it.

We are assisting on-boarding to facilitate the rollout of about two dozen validators during the few months following launch. We believe that growing a quality validator pool is a long process that will take months. The first validators are important because they are the ones who will help us iterate over the incentive model and make sure we’ll reach an ecosystem that is sustainable on its own.

In the big picture, we see the amount of validators proportional to the number of apps running on the network. If the network reaches a mature stage with several hundreds of meaningful apps running on their respective virtual chains, the validator pool will have to include several hundreds of validators in order meet the required decentralization and robustness goals. On launch, we’re still a little far from this point and hundreds of validators are simply not required.

For more concrete details on the specifics of the incentive model on launch please refer to the dedicated post on the subject.
