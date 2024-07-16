---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/my-time-at-the-ethdenver-hackathon/bg.jpg
blogUrl: my-time-at-the-ethdenver-hackathon
date: 2020-02-24
title: My time at the EthDenver Hackathon
author:
  - /blog/common/authors/Kiril.md
type:
short_description: I attended EthDenver to represent the Orbs team. Both the BUILDWeek and the conference that followed have been a blast, with many great talks and tech showcases. It was a great pleasure to talk and learn with fellow attendees.
---

I attended EthDenver to represent the Orbs team. Both the BUILDWeek and the conference that followed have been a blast, with many great talks and tech showcases. It was a great pleasure to talk and learn with fellow attendees.

I saw a lot of great projects, both apps and infrastructure:

Apart from default Ethereum (and enterprise Ethereum by Ethereum Enterprise Alliance and Quorum), alternative blockchains (sometimes Ethereum-compatible) were also represented: Cosmos-based Ethermint, Skale, and NEAR. Of course, I talked to other devs about Orbs.

Government representatives are supportive of blockchain initiatives: the governor of Colorado made a speech at the conference where he explored the possibilities of collaboration between the government and the industry.

Of course, DAOs and DeFi are still a big thing, and growing fast. The consumer adoption of DAOs is growing and the financial services they provide are ever-expanding: Maker, Lendroid, etc. But DAOs were not limited to finance: there were a lot of initiatives that were aimed to help the most unfortunate members of society, for instance, the homeless people.

It seems like DAO space is moving towards consolidation and standardization with DAOStack and similar frameworks. Other DAO-related technologies include identity and key management on the customer side, like BurnerWallet, Fortmatic and 3box.

A lot of Level 2 solutions have emerged to fill the gaps that Ethereum has not fulfilled: off-chain calculations solutions (iExec, Offchain Labs) and oracle providers (Chainlink) have showcased their tech.

![](/assets/img/blog/my-time-at-the-ethdenver-hackathon/testdenver.png)

There was a lot of talk about providing more stable Ethereum infrastructure: RADAR just launched their Deploy product for node hosting similar to Infura and The Graph and Open Relay providing indexing services to query Ethereum events without having to run a full Ethereum node.

What I most liked about the conference was that it validated a lot of my own ideas and confirmed that Orbs is moving in the right direction. I was talking to other devs about the possibility of upgrading contracts via governance mechanism when stakeholders of the app have time to review and approve new smart contract code without resorting to things like proxy contracts, how it is currently done in Ethereum. I got a lot of positive feedback for that idea: after all, everybody makes mistakes, and it would be nice to be able to rectify them after launch. As far as I know, some Cosmos fork already does binary upgrades via transaction and Cosmos is bound to implement the same thing this year.

One of the best parts of the EthDenver was BUILD hackathon which went on for almost 3 days. I worked on my own project on Orbs platform called [The Weatherman](https://netoneko.github.io/weatherman/).

It was inspired by Chainlink’s USD price oracle that they are running on Ethereum. One of the drawbacks of Ethereum oracles is that you absolutely have to push all data to Ethereum. It means that the person running the oracle will incur a lot of fees.

With Orbs, I took a different approach: I modified the Orbs node and SDK to include a call that allows to read files from IPFS. IPFS is an open source distributed file system which references the content by hash. This means that if you access a certain file, it will always be the same file, and your network will be able to reach the consensus.

**My project consists of 4 parts:**

- The external worker that reads data from US weather service and deposits it to ipfs and sends a transaction to the Weatherman smart contract to point it to a new data source
- The Weatherman smart contract that reads JSON from IPFS and transforms it into a better format (GEOJSON is pretty bulky)
- The Advice contract that calls the Weatherman contract, calculates average temperature for the next 12 hours and suggests what you should wear according to the calculation
- Static HTML page hosted on GitHub that talks to the Weatherman contract and to the Advice contract and displays the data

The required changes to the Orbs core were very localized and consisted of around 500 lines of code (mostly tests). It shows how much potential Orbs has as a platform and that the core principles behind its architecture are correct. The project also made a very good impression on other devs because oracles are obviously a pain point for the Ethereum community.

I really enjoyed the conference, the hackathon, and the city of Denver, and hope to visit next year!
