---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/introducing-helix-the-orbs-consensus-algorithm/bg.jpeg
blogUrl: introducing-helix-the-orbs-consensus-algorithm
date: 2018-05-08
title: "Introducing Helix: The Orbs Consensus Algorithm"
author:
  - /blog/common/authors/DavidY.md
type:
short_description: "Helix white paper by the Orbs Research Team: Avi Asayag, Gad Cohen, Ido Grayevsky, Maya Leshkowitz Ori Rottenstreich, Ronen Tamari and David Yakira"
---

_Helix white paper by the Orbs Research Team: Avi Asayag, Gad Cohen, Ido Grayevsky, Maya Leshkowitz Ori Rottenstreich, Ronen Tamari and David Yakira_

We are happy to present our white paper for _Helix_, a **scalable** and **Byzantine** **fault-tolerant** consensus protocol for ordering transactions that ensures the resulting order is **fairly** determined. A key element in the _Helix_ ledger is a source of **common and verifiable randomness**, which is used in helping obtain both scalability and fairness.

_Read the [Helix Consensus White Paper](https://orbs.site.strattic.io/white-papers/helix-consensus-whitepaper/) to see full technical details of the protocol._

Our network model assumes two types of participants: **Nodes** that take part in the consensus on the one hand and **users** issuing transactions such that a user is associated with one of the nodes. The network structure is illustrated in the figure below.

![](https://cdn-images-1.medium.com/max/800/0*zfQqh6VX8dSHMOmN.)

### Fairness

We believe that our work is highly suitable for ledger implementations in which every transaction is associated with a specific node (e.g., nodes are operated by app developers that wish to service their own users). In such circumstances, a fair composition of blocks is necessary, guaranteeing all participants enjoy an equal level of service (transaction confirmation time, throughput, etc.). _Helix_ provides this property relying on a technique known as [correlated sampling](https://arxiv.org/abs/1612.01041), utilizing the randomness inherent to the protocol.

In addition, _Helix_ assures its users enhanced protection from censorship and discrimination relative to other typical solutions, but only requires them to utilize a negligible amount of resources. This is achieved by having the users encrypt their transactions with a threshold encryption scheme prior to publishing them. We therefore see _Helix_ as a fair protocol towards users.

### Byzantine Fault Tolerance

By relying on [PBFT](http://pmg.csail.mit.edu/papers/osdi99.pdf), an established consensus protocol for a Byzantine environment, _Helix_ can deal with the existence of a limited number of Byzantine nodes which do not follow their expected behavior. _Helix_ produces a single, agreed-upon chain, that avoids forks.

### Scalability

In _Helix_, in each term a node is selected at random to propose the current block of transactions. We term this process _randomized proof-of-stake (rPoS)_. Then the block is verified through a bounded-size committee of nodes. Reducing the number of nodes that actively participate in a costly consensus protocol enhances the efficiency of the protocol and its ability to scale to large throughputs. Fairness is obtained also in this regard — nodes are selected in an unbiased manner (weighed according to reputation) to participate in committees or to propose blocks.

### Future work

In the following months we will be working on further improvements to the protocol, introducing pipelining, signature aggregation, efficient gossip schemes and an efficient reconfiguration procedure (addition/removal of nodes). We are also planning on publishing our simulation results that can give an idea of the throughput and latency the system can reach under different settings.

In parallel, we are working on an execution/validation service that is responsible for processing the transactions once their order has been established by _Helix_. This process would include sharding of state and parallel execution. Finally, we are working on formalizing the reputation measure which will rely (among other things) on the topology of a “trust graph” that nodes will maintain and its analysis via the theory of [expander graphs](https://en.wikipedia.org/wiki/Expander_graph).
