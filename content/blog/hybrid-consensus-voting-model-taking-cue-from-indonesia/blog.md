---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/hybrid-consensus-voting-model-taking-cue-from-indonesia/bg.jpg
blogUrl: hybrid-consensus-voting-model-taking-cue-from-indonesia
date: 2019-09-08
title: "A Hybrid Consensus Model for Voting: Taking a Cue From Indonesia"
author:
  - /blog/common/authors/AssafBielski.md
type:
short_description: (https://www.orbs.com/the-blockchain-dichotomy-and-an-architecture-to-overcome-it/) and explained how the Orbs Network’s’ Hybrid consensus enables enterprise adoption of a public blockchain. The separation of block producers and validators allows organizations to keep control over their blockchain application while fulfilling blockchain’s role in generating trust. This hybrid two-tiered consensus is the architectural key to bridge the app/dapp divide.
---

(https://www.orbs.com/the-blockchain-dichotomy-and-an-architecture-to-overcome-it/) and explained how the Orbs Network’s’ Hybrid consensus enables enterprise adoption of a public blockchain. The separation of block producers and validators allows organizations to keep control over their blockchain application while fulfilling blockchain’s role in generating trust. This hybrid two-tiered consensus is the architectural key to bridge the app/dapp divide.

Last month, the elections in Indonesia provided us with a real-life example for an implementation of such a hybrid model. In this case, manual centralized counting (akin to block production), was then validated on the Ethereum blockchain. I’ll review this example and illustrate how it highlights the need for the hybrid model and how it could be scalably implemented on the Orbs Network.

The Indonesian elections are extremely complex. The huge country has 195 million voters spread across 17,000 islands, which require more than 800,000 polling stations (for comparison, there are just over 100,000 stations in the US elections). Counting, collection, and transportation of the votes takes time and results are only announced more than a month after election day. This length of time is a fertile ground for vote tampering and indeed both sides accuse each other of such activity.

To make the process more reliable, each polling station is counting the votes locally at polls closure, and after 6 to 12 hours the count is completed and the results are summarised in a paper form. This form is then signed and photographed, and the photos often appear on social media. Of course, this makes it hard to determine if the photo is genuine when it was taken and whether it had been tampered with. This is where blockchain comes in.

The University of Indonesia, with the help of the startup [SettleMint](https://settlemint.com/), set to collect those forms, authenticate that they haven’t been doctored, and store them on a public blockchain. This record is immutable and time-stamped, so it cannot be changed in retrospect. Those characteristics provide a strong guarantee that tampering cannot take place at any time after the submission of the form, thus significantly limiting options for fraudsters.

This simple yet clever solution shows that with very little effort you can already harness the core benefits of blockchain to generate more trust in the election process. Importantly, such trust can only be generated through the usage of the public blockchain, which enables anyone in the world to review the data and leaves no room for manipulation.

At Orbs, we believe that there are many more opportunities to generate such value for various types of organizations, from SMEs to corporations and governments. A particularly interesting area is document notarization on the blockchain, such as in this case, and the Orbs team is working collaboratively with several organizations that may be interested in implementing such solutions on top of the Orbs Network.

## A Real-life Hybrid Model

Going back to our hybrid two-tiered model, you can think of the elections organizing committee as a permissioned chain, perhaps with a single node. This is not decentralized voting, as votes are cast and counted centrally (well, locally, but through centralized organization). This means that the government doesn’t need to put all its trust and the fate of the entire democratic process in a public blockchain network - this is unlikely to happen anytime soon and for good reason, the technology is too young. Alternatively, this means we are adding a layer of external verification to the process, executed by a global and independent group of validators (or miners) that have no interest in the election process itself. This way, control of the process remains with the state as it should be, but the oversight is external and immutable.

### How could we take this idea and build the future election system on top of the Orbs Network?

Let’s take this case further and think about how a holistic system can be built from the ground up, validating the entire process using a hybrid consensus model. When thinking of the elections of the future, a possible solution could be a digital, blockchain-based election process. Voters would be identified and receive a digital token that allows them to vote but still keep their vote anonymous, as was done in [Western Virginia](https://cointelegraph.com/news/west-virginia-secretary-of-state-reports-successful-blockchain-voting-in-2018-midterm-elections) in the US. The system that processes those transactions would be a virtual chain on the Orbs Network, and the block producers could be interested stakeholders: government entities the political parties and observers such as NGOs or foreign representatives. The blocks would be validated by the Orbs Network validators, enforcing execution and governance, thus making sure there is no misconduct on the part of the block producers. Throughout the process, the data on the ledger would be auditable and can be examined by anyone who wants to set up an audit node.

This way, blockchain enables both a seamless and tamper-proof election process. On the Orbs Network, authorities can maintain control over the process, without sacrificing the external guarantees that the process is trustworthy. We all know that globally from Indonesia to the US, this extra dose of trust is much needed.
