---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/a-federated-model-can-protect-decentralized-platforms-from-some-players-having-too-much-power/bg.jpeg
blogUrl: a-federated-model-can-protect-decentralized-platforms-from-some-players-having-too-much-power
date: 2018-05-02
title: A federated model can protect decentralized platforms from some players having too much power
author:
  - /blog/common/authors/OdedN.md
type:
short_description: I’ve written about [consensus models](https://medium.com/p/c5fe1c24ef0c) in a general sense before. There, I briefly mentioned that I don’t believe consumers will be in the game of _permissionless decentralization_ even when consumer apps are. Here, I will try to elaborate on that.
---

I’ve written about [consensus models](https://medium.com/p/c5fe1c24ef0c) in a general sense before. There, I briefly mentioned that I don’t believe consumers will be in the game of _permissionless decentralization_ even when consumer apps are. Here, I will try to elaborate on that.

Permissionless decentralization is a brilliant concept, allowing a large group to agree to the contents of a ledger without anyone being in control of it. At the same time, it enforces the rules of a protocol onto everything that is written to it. It does so by letting anyone write to the ledger, so long as their addition is valid and is subsequent to other valid entries. That way, if someone proposes an invalid entry, nobody will add an entry subsequent to it because that would make the subsequent entry invalid.

This concept works well in communities where every user participates in validating the ledger history. In theory, it means users should write software that implements the protocol and validates transactions accordingly. In practice though, users download the source code of an open-source program to do this, to review and execute it.

This makes sense with crypto enthusiasts, with professional miners, and even in large enterprises. But _nobody_ should expect a consumer to download, review and execute the source code of validation software.

The result is, essentially, that the voting power of consumers would be delegated to the builders of the software they are using, regardless of how this voting power is determined (be it [Proof-of-Work, Proof-of-Stake, or something else](https://medium.com/orbs-network/its-not-about-pow-pos-the-two-main-families-of-consensus-models-c5fe1c24ef0c)).

Delegation is not necessarily a bad thing. _Delegated Proof-of-Stake_ systems, for example, are a great solution for utilizing a _permissioned_ consensus model in a permissionless context. But the distribution of consumer apps makes them a horrible delegate in the sense that it puts too much power in the hands of too few. Take mobile apps: of the [top 10 mobile apps in the US](http://www.nielsen.com/us/en/insights/news/2016/tops-of-2016-digital.html), apps owned by Google would get 51% of the voting power, and apps owned by Facebook 35%. Would the U.S. remain united if any single state controlled the majority of seats in congress?

Our conclusion is that the right model for consumer apps is a _federated model_ where each member has one vote, much like the UN General Assembly. Members represent their users (citizens) but their votes are not proportional to the population they represent; instead, each delegate has one vote regardless of their size. Though it isn’t perfect, such distribution of power seems to be the most practical way to pursue common goals without fear of any one powerful entity monopolizing the decision making process.
