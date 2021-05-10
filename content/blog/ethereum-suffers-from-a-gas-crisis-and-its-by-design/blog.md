---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/ethereum-suffers-from-a-gas-crisis-and-its-by-design/bg.jpeg
blogUrl: ethereum-suffers-from-a-gas-crisis-and-its-by-design
date: 2018-07-09
title: Ethereum Suffers from a Gas Crisis, and It’s by Design
author:
  - ../common/authors/OdedN.md
type:
short_description: It is far from the first time, but gas prices on Ethereum skyrocketed again last week, this time as a result of a [silly marketing gimmick](https://www.coindesk.com/new-crypto-exchange-draws-fire-over-controversial-business-model/) most Ethereum users shouldn’t have cared about in the first place. Apparently, Vitalik Buterin and Vlad Zamfir have been looking into [alternative transaction pricing models](https://ethresear.ch/t/first-and-second-price-auctions-and-improved-transaction-fee-markets/2410) to mitigate such crises.
---

It is far from the first time, but gas prices on Ethereum skyrocketed again last week, this time as a result of a [silly marketing gimmick](https://www.coindesk.com/new-crypto-exchange-draws-fire-over-controversial-business-model/) most Ethereum users shouldn’t have cared about in the first place. Apparently, Vitalik Buterin and Vlad Zamfir have been looking into [alternative transaction pricing models](https://ethresear.ch/t/first-and-second-price-auctions-and-improved-transaction-fee-markets/2410) to mitigate such crises.

Assuming it _can_ be implemented, this could be good news for Ethereum users — the pricing strategy in a second-price auction is much more intuitive for the average user (instead of betting “what would be the minimum gas price I can offer that will get my transactions through”, user should ask herself “at what gas price would I prefer my transactions not to go through”). Yet, both methods fail to deliver what users really need: predictable and economical pricing.

The problem lies in the fundamental assumption of market-determined fees: Transaction processing is a resource in short supply. Indeed, the only way to distribute a limited resource fairly and efficiently is by determining a market price. But processing of transactions doesn’t have to be a limited resource. It was so in blockchain’s early generations, and perhaps it remained so in newer networks _just_ because it is profitable to miners and investors.

### Diseconomies of Scale: Why it is Bad to Consider Block Size a Limited Resource

In the end, public blockchain networks are platforms that should enable the dApps built on top of them to thrive. Mostly, success means growth in user-base and customer reach, letting apps enjoy network effects and create more value as they grow.

Normally, software products enjoy economies of scale — as their user base grows, the per-user cost declines, allowing them to reach wider audiences. However, platforms in which capacity is a limited resource creates a state dubbed a _diseconomy of scale._ In these ‘diseconomies,’ cost disadvantages increase as a company or project scales. Per-unit costs increase as the audience grows, until reaching an equilibrium where the marginal benefit per user equals the cost per user, effectively halting any further growth of the app.

On shared platforms, the situation is even worse. The barrier to growth is reached at the platform level. So, even if an app reached sufficient audience to enjoy network effects before its growth was halted, it would remain at risk of being crowded out of the platform as other apps scale or the number of other apps grows and costs increase.

### How Ballooning Costs are Avoided on Orbs

We designed Orbs to enjoy economies of scale on a platform, and consequently for the dApps using the platform to implement such economies of scale. Each dApp lives on its own virtual chain — an intelligent form of sharding inherent to the [Orbs infrastructure](https://www.orbs.com/technology) — so it does not compete on block space with other apps. The architecture of virtual chains in Orbs avoids joint bottlenecks so dApps aren’t in conflict with one another for growth opportunities.

Fees for operating apps inside virtual chains are paid periodically (usually monthly), and sized by the amount resources allocated to it. This is in contrast to per-transaction fee models which take more computing power.

Those fees are also dependent on the fluctuating gas costs, an issue not present with Orbs as fees are pegged to the cost of infrastructure, as well as the fact prices for both computing and storage capacity are set by subscription and can only change with each new cycle.

Validators are paid according to the amount of resources they _actually_ need to deploy. In the end, they need to pay for servers whether or not their reserved capacity was utilized or not. Not surprisingly, this is very much like how app developers pay for cloud servers that run their backends.
