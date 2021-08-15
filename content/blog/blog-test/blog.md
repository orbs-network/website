---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/insights-into-orbs-rd-hackathon/bg.jpg
blogUrl: insights-into-orbs-rd-hackathon
date: 2019-05-30
title: Insights into Orbs’ R&D Hackathon
author:
  - /blog/common/authors/SergeyBolshchikov.md
type:
short_description: Last week in the Tel Aviv offices, Orbs’ core team conducted its very first Hackathon! Within just two days of brainstorming, coding and eating junk, the teams developed the very first real-use apps on the Orbs network.
---

Last week in the Tel Aviv offices, Orbs’ core team conducted its very first Hackathon! Within just two days of brainstorming, coding and eating junk, the teams developed the very first real-use apps on the Orbs network.

Aside from the obvious value derived from the new apps themselves, the goal of the hackathon was to put the network to real-world usage tests. What’s a better way to know how to improve the network than to use it ourselves? After all, if it’s not good enough for the core team, it’s not good enough for the general community of developers.

First, Orbs engineers met up to brainstorm logistics and use-cases they wanted to explore. After the session which resulted in 16 well-rounded ideas), and a celebratory breakfast, they split up into teams and got to work on a full belly. After 48 hours, the developers were asked to stop coding and gather in a showroom to present their projects to a panel of judges.

![](/assets/img/blog/insights-into-orbs-rd-hackathon/hackathon-wide-view.jpg)

The presentations were fun and educational, but more importantly, they demonstrated just how much can be accomplished in a mere 2 days even in separate teams. It’s become clear that with more time, and increased collaboration, the potential for Orbs Network is amazing.

Here are the judges’ favorite 4 apps developed and presented during the Hackathon:

### **[Digital ID](https://github.com/IdoZilberberg/digital-identity)**

[View source](https://github.com/IdoZilberberg/digital-identity)

The goal of this team was to prove specific properties about identity (e.g. being a senior citizen, having a driver's license, having a college degree) without having to present an ID card/driver's license, which discloses the full ID.

An Issuer (such as Ministry of Internal Affairs) performs KYC on the user and signs the ID which contains all properties.

This signature is publicly verifiable. Zero-knowledge proofs are the mechanism that allows verification of specific property without revealing any other properties.

Every verification of this property Blockchain allows for a trusted third party arbitration, thus guaranteeing fairness.

How is this use-case applicable to the real world? Take as an example: The situation where this product can allow senior citizens to purchase discounted public transport tickets without having to disclose their identity, only the property of "senior citizen".

### **[Anti-Scalping Ticketing System](https://github.com/orbs-network/tickets)**

[View source](https://github.com/orbs-network/tickets)

A scalping resistant ticketing system for large scale sporting events and music concerts. The system balances conflicting needs:

- Privacy
- Free transfer of purchased tickets
- Scalping resistance

Competing event organizers and venues trust-less sharing of ticket purchase history to intelligently detect scalping attempts before tickets are sold. Optional ID sampling at the gate provides a second control against illicit tickets trade. Ticket transferring mechanism requires high trust between transferring parties to discourage trade.

### **[Voting App](https://github.com/gilamran/voting-app)**

[View source](https://github.com/gilamran/voting-app)

Current voting systems are not reliable, and vote tampering is, unfortunately, a lingering concern.

Decentralized voting allows an authority to ask a group of chosen voters a question on any subject and prove that the votes are counted properly.

The potential usage are endless. The simple example from the open source world can be a vote whether a certain feature should be merged into the project. If the proposal collects the minimum required of votes, then the code is merged.

### **[Online IDE](https://github.com/orbs-network/sandkasten)**

[View source](https://github.com/orbs-network/sandkasten)

Orbs platform allows writing smart contracts in Go language. The development experience is bearable but it could be improved. The team decided to tackle the task by creating an online IDE where any developer can write code and execute it remotely right from the browser. This ability allows to provide valuable insights about the contract such its current state, visible event logs, and execute its methods:

![](/assets/img/blog/insights-into-orbs-rd-hackathon/image2-3.png)

...

**Retrospection**

The most important part of the hackathon was the presentation and conclusions stage; an hour of debriefing giving contributors the opportunity to talk about their development pain-points and the potential improvements that they would like added to the platform. It turned out to be quite a long list, one that would have taken a long time to curate if not for this group exercise (see image).

![](/assets/img/blog/insights-into-orbs-rd-hackathon/hackathon-notes.jpg)

Some of the major improvement suggestions became obvious, such as scaffolding for a smart contract project, richer support of data structures in smart contracts, improved debugging capabilities, monitoring, and more.

...

HUGE thanks to all who posted their ideas to the [Orbs Community board](https://community.orbs.network/) in the days leading up to the special day! We are looking forward in anticipation to the next Orbs hackathon, and hope to involve the global developing community to partake in this fun, productive event :)

![My team aka 'Best Team'](/assets/img/blog/insights-into-orbs-rd-hackathon/photo_2019-05-30_12-51-35.jpg)
