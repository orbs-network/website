---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/who-controls-your-blockchain/bg.jpeg
blogUrl: who-controls-your-blockchain
date: 2018-05-03
title: Who Controls Your Blockchain?
author:
  - ../common/authors/TalKol.md
type:
short_description: "This post was originally published on_** [**_Hackernoon_**](https://hackernoon.com/who-controls-your-blockchain-5b8bf7ec7f1a)"
---

**_This post was originally published on_** [**_Hackernoon_**](https://hackernoon.com/who-controls-your-blockchain-5b8bf7ec7f1a)**_._**

Consensus plays a core part in blockchain design. Probably the first question we must ask ourselves when considering any blockchain is — *consensus among whom exactly?*

In other words, what powers are at play in this blockchain? Who makes the decisions? Who holds the political power? This power may include day to day decisions like confirming a transaction, and this power may include fundamental decisions like major modifications to the protocol — increasing or decreasing fees is a good example.

Just like in any other area of life, there’s no single answer that is right for every scenario. It all depends on what you’re trying to accomplish. A blockchain used to store value like Bitcoin will probably make a different decision than a blockchain used for supply chains.

This means that we must start by defining our target use case. For Orbs, the project I’m part of, the use case is well defined — blockchain infrastructure for large-scale mainstream consumer apps. If a mobile messenger with millions of users were to tokenize (several have already expressed intent such as Telegram, LINE and Kik), we would want Orbs to be the infrastructure platform of choice.

Consensus works best when the dominant group making the decisions is comprised of like-minded individuals that share the same general interests. When two types of groups with conflicting interests dominate the power, the likelihood of hard forks or stalemate in advancement increases significantly.

As an example take the infamous [SegWit2x](https://en.wikipedia.org/wiki/SegWit2x) ordeal in the Bitcoin community that almost ended in a hard fork. Bitcoin users, one dominant power group, and miners, another dominant power group, have interests that are clearly misaligned. For example, one group is ultimately interested in reducing fees and the other in increasing them.

If it were technically possible to provide adequate security in Bitcoin with one dominant group only, Bitcoin users, while taking miners out of the game, many governance conflicts would be smoothed over and the distribution of political power would be healthier.

Platforms based purely on PoW place the power in the hands of _miners_. Becoming a competitive miner requires a high degree of specialization — access to the latest ASICs in large numbers, cheap electricity and cold weather.

Are _miners_ the ideal dominant controlling group for our consumer application use case? Application developers — companies like Telegram, LINE and Kik — would probably make ineffective miners as this isn’t their core competence. Since they are the target customer of the infrastructure, this would give us at least two dominant conflicting political groups, which isn’t ideal. The interest of miners is to profit as much as possible from the infrastructure, which clearly isn’t aligned with the interest of app developers — who rely on using it efficiently to operate their business.

Platforms based purely on PoS place the power in the hands of _investors_. These may be _financial speculators_, such as venture capital, whose primary interest is profiting from future gains in the asset value. Other models try to distribute stake to consumers directly, in an attempt to place the power in the hands of _end users_.

Are these the ideal dominant controlling groups for our consumer application use case? Let’s start with _financial speculators_ such as venture capital. History shows the financial sector [dominates](https://www.statista.com/statistics/222122/us-corporate-profits-by-industry/) corporate profits above any other sector, making app developers unlikely to hold the majority of wealth by themselves. Looking at the traditional investment world, the interest of venture capital is to profit as much as possible from their investment, the infrastructure in this case, which is also misaligned with the interest of app developers — who rely on using it efficiently to operate their business.

One may claim that this approach would incentivize app developers to acquire stake in the infrastructure, but this upfront investment is more likely to push app developers towards infrastructure solutions that don’t have this barrier of entry. Forcing app developers to become stakeholders in the infrastructure sounds great on paper, but ultimately goes against their interests of avoiding lock-in and finding the most efficient means of running their business.

What about _end users_? Are they the ideal dominant controlling group for our consumer application use case? First, looking historically at how wealth is normally [distributed](https://en.wikipedia.org/wiki/Distribution_of_wealth) in the population, half of the world’s wealth belongs to the top 1%. This means that power is unlikely to end up in the hands of the average joe. Second, don’t forget we’re focusing on infrastructure. End users are unlikely to hold stake in infrastructure tokens. This goes against the interests of app developers who’ll focus their user base on adopting their own application tokens. Third, the average consumer is unlikely to even care whether the infrastructure is decentralized or not, making them poor candidates for political power as they’ll probably be indifferent to vote one way or another over protocol decisions.

Designing an optimal political landscape for our consumer application use case, we’ve eliminated domination by _miners_, _investors_, _financial speculators_ and _end users_. Who’s left? Well, we kept mentioning one group — *app developers.*

Are _applications_ the ideal dominant controlling group for our consumer application use case? For starters, as they are the target customer of the infrastructure, this would leave us with one dominant controlling group whose interests are nicely aligned. Different apps are likely to want similar things from the infrastructure, low operational fees for example. Bear in mind that one dominant archetype does not impact decentralization as these apps are individually different, each running its own business having its own interests and maintaining its own separate user base.

Beyond the process of elimination, it’s easy to see that under our use case, applications are actually inevitably the one group that is already in control. What is the main asset of companies like Telegram, LINE and Kik — their user base. It’s the prerogative of the application developer to choose which blockchain infrastructure to use. If a more competitive infrastructure solution comes along, the application developer is free to migrate. The millions of end users who’ll be transitioned throughout the migration process will have little say on the matter.

It’s no coincidence that the three trailblazing consumer applications we’ve mentioned — Telegram, LINE and Kik — are all trying to build and launch on their own blockchain infrastructure solutions where they’ll be in control over their own destiny.

We’re designing a brand new blockchain infrastructure with one clear dominant controlling group in mind — the _applications_ running on top of it.

Now, once we’ve made this conscious design choice, we can design a consensus algorithm to carry out this task effectively. Which algorithm is this? The Helix consensus algorithm — our novel solution whose academic white paper is available [here](https://orbs.com/helix-consensus-white-paper). We’re also designing a governance scheme that will allow the applications to exercise dominance over the decision making process for infrastructure and protocol modifications as well as transaction validation. More on that in one of my next posts.

**_This post was originally published on_** [**_Hackernoon_**](https://hackernoon.com/who-controls-your-blockchain-5b8bf7ec7f1a)**_._**
