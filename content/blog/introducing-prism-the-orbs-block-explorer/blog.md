---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/introducing-prism-the-orbs-block-explorer/bg.jpg
blogUrl: introducing-prism-the-orbs-block-explorer
date: 2019-04-04
title: Introducing PRISM - The Orbs Block Explorer
author:
  - /blog/common/authors/EranK.md
type:
short_description:
---

(https://github.com/orbs-network/prism).

Prism server is written in TypeScript and is based on Node.js and MongoDB. It is not part of the Orbs node core, but a standalone project. Prism server connects to a running Orbs node and indexes all of the blocks it holds in its own database in order to provide popular user queries - such as searching by transaction Id or block hash.

Anyone can start their own Prism instance and query it. We hope Orbs community members, especially Guardians and Validators, will start running Prism servers and open them to the public in order to provide this service to the community. We’ve already integrated a running Prism server so you can play with it. It’s available here:

[https://prism.orbs.network/vchains/1100000](https://prism.orbs.network/vchains/1100000)

Prism shows the data of apps running on top of Orbs. For example, the link above shows the PoS voting app - where Delegators’ and Guardians’ votes are calculated to elect active Validators.

### A quick video demo:

\[embedyt\] https://www.youtube.com/watch?v=0W68zTErUFU\[/embedyt\]

## Explore a world of virtual chains

One of the powerful concepts of the Orbs architecture is virtual chains. The Orbs network runs multiple virtual chains in parallel on the same shared validator infrastructure. Since every app can run on its own virtual chain, virtual chains provide isolation between apps where every virtual chain runs its own parallel consensus and maintains its own chain of blocks.

Besides governance autonomy given to the app and the ability to dedicate resources and guarantee its transaction throughput, virtual chains are also infinitely scalable horizontally. This means that more compute resources are automatically allocated by Orbs nodes as more virtual chains are instantiated. If interested, read more about virtual chains [here](https://www.orbs.com/white-papers/blockchain-virtualization-a-necessity-for-real-world-dapps/).

When using Prism, you must specify which virtual chain you want to look at. If you can't find your transactions, make sure you're watching the correct virtual chain ID. We’ve chosen to filter a single virtual chain in the UI from the product understanding that users of different virtual chains will probably only care about transactions that take place on the virtual chain they use. If they care about a different virtual chain, they can easily change the filter through the UI to explore it.

## What can you do with Prism today

Prism currently supports the following features:

- Seeing new blocks as they’re added to the chain
- Seeing detailed information about a block including its hash, height, timestamp and list of transactions inside
- Seeing detailed information about a transaction including its id, block height, timestamp, signer public key, contract name, method name, execution result, input and output arguments, output events
- Query by block height
- Query by block hash
- Query by transaction Id

## Our vision for Prism

A block explorer is just the beginning, a bare-bones tool that lets you explore blocks and see transactions. The potential for Prism is much greater. We envision Prism becoming an analytics and monitoring platform providing real-time information and statistics about what happens inside a virtual chain. A tool that provides insights to help build better apps.

As product inspiration, an example of such a solution from the traditional cloud world is a great tool called [NewRelic](https://newrelic.com/). Almost every modern application today requires such a product in order to verify it’s running properly and understand how it can improve.

We want Prism to provide more insights for app developers about how the app is being used: Which transactions are failing and why; What are the slow points from a perspective of load and performance; Which contract methods are most popular; and so forth.

## You’re invited to contribute

Orbs is an open source project that is lead by its community. In order to reach this vision, we want your help. If you’re passionate about improving Prism or forking it to create something in your own image - please hop on to [Github](https://github.com/orbs-network/prism).
