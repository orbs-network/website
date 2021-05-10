---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/what-stops-a-successful-app-from-forking-a-blockchain/bg.jpeg
blogUrl: what-stops-a-successful-app-from-forking-a-blockchain
date: 2018-05-28
title: What Stops a Successful App from Forking a Blockchain?
author:
  - ../common/authors/TalKol.md
type:
short_description: "Note: This is a longer version of a post originally published in Blockonomi —_ [_What Prevents Apps from Forking Your Blockchain?_](https://blockonomi.com/apps-forking-blockchain/) _If you enjoy this post, please make sure to visit and share the original."
---

_Note: This is a longer version of a post originally published in Blockonomi —_ [_What Prevents Apps from Forking Your Blockchain?_](https://blockonomi.com/apps-forking-blockchain/) _If you enjoy this post, please make sure to visit and share the original._

![](https://cdn-images-1.medium.com/max/800/1*dcSRaTT3RAveCwnv-zyFWw.png)

Apps running on top of blockchain infrastructure will always act according to their own best interest. I don’t think this realization surprises anyone.

What may be surprising to some is that apps are the ones in power in the blockchain infrastructure game. I just recently wrote a blog post about it — [Who Controls Your Blockchain?](https://medium.com/orbs-network/who-controls-your-blockchain-5b8bf7ec7f1a) — well, now more than ever it’s clear that apps do.

#### The Stellar fork by Kin

[Kin](https://kinecosystem.org/) by Kik Interactive is one of the first large-scale consumer apps to transition to blockchain . The main goal for Kin is to create a cryptocurrency ([KIN](https://coinmarketcap.com/currencies/kin/)) to be used by millions of end users of digital services like Kik. Kin is a decentralized app that runs on top of a blockchain infrastructure.

I’ve had the pleasure of working closely with Kin from its inception, leading blockchain engineering in Kin for the past seven months. Kin needs an immediate term blockchain solution in production in order to meet its business goals to become the mostly used cryptocurrency by consumers. To achieve this, due to the scalability limitations on Ethereum, Kin is launching its digital services ecosystem on the [Stellar blockchain](https://www.stellar.org/) instead.

So what’s the big news? It was recently announced by the Kin Foundation that this launch is not going to be on Stellar main net — it’s going to be on a [Stellar fork](https://www.coindesk.com/chain-mobile-app-kik-fork-stellar-fee-free-blockchain/).

Why would Kin do that? Forking a blockchain is difficult. Keeping a blockchain infrastructure in production is a massive undertaking. Securing value by yourself is a big risk and dealing with the scalability issues the consumer world brings is a task that emerging next generation infrastructure projects are just beginning to solve. So why defocus from just creating your app and decide to deal with this complexity yourself?

It’s all a question of control. Taking your destiny into your own hands.

The immediate reason is that Kin needs to scale quickly and Stellar fees are paid per wallet. If you plan to onboard as many users as possible, a fee model that grows directly with the number of users and is highly susceptible to churn and fraud works against your immediate interests. As stated by Kik’s CEO Ted Livingston:

_“While originally, the team had thought it could just subsidize the transaction fees, they soon realized that it would have to put lumens in people’s wallets to do that. As such, they theorized that bad actors could then just create a bunch of wallets and scrape up the lumens, in an effort to secure enough money to make an impact on the network.”_

The Stellar fork would allow Kin to change the fee model and avoid paying infrastructure fees to Stellar main net nodes altogether.

If an app is unhappy with the model a blockchain infrastructure is providing, it will simply abandon it and move to another blockchain, or just fork it — like Kin has decided to do. This is a good example that eventually, the app is in control. And it will take its end-users wherever it goes.

#### It’s much more than fees — it’s about governance

Who controls how high or how low fees are on Stellar main net? This is a classic governance question as the fee model is a core part of the protocol. The Stellar validator nodes are the ones making this decision, they are free to choose whether fees are increased or reduced.

In January, validators decided to decrease fees:

> Quick Update | Validators on the [@StellarOrg](https://twitter.com/StellarOrg?ref_src=twsrc%5Etfw "link") network just voted to lower the base reserve to 0.5 [#XLM](https://twitter.com/hashtag/XLM?src=hash&ref_src=twsrc%5Etfw "link") which makes the cost of creating accounts and orders inexpensive again: [https://t.co/2KqKu61aAY](https://t.co/2KqKu61aAY "link") [#blockchain](https://twitter.com/hashtag/blockchain?src=hash&ref_src=twsrc%5Etfw "link") [#cryptocurrency](https://twitter.com/hashtag/cryptocurrency?src=hash&ref_src=twsrc%5Etfw "link") — Stellar (@StellarOrg) [January 12, 2018](https://twitter.com/StellarOrg/status/951615519572021248?ref_src=twsrc%5Etfw "link")

What prevents the validators from voting on increasing fees tomorrow? Well, nothing theoretically. If higher fees work in their best interest, they are free to increase them to the detriment of the apps running on top.

#### What does this mean for blockchain design?

Making protocol decisions that work against the interest of apps is likely to cause an adoption problem. If the fees you charge for infrastructure are too high — apps will find a cheaper alternative. If you create barriers of entry, like forcing apps to buy stake upfront and be locked-in to a specific project — apps will find an alternative that doesn’t have this lock-in. If the governance model you propose places a different group in control — apps will find an alternative where they’re not stripped of power.

This understanding is one of the core principles upon which [Orbs](https://www.orbs.com/) is designed. The Orbs blockchain places apps in control and works together with these apps to make sure the protocol evolves according to their best interest, all while still enjoying the benefits of a completely decentralized environment.

Governance on Orbs is performed using a permissionless federation where any app can join and take part in making protocol decisions. The model is built to strip power both from miners who have a hash power advantage over apps and from financial power groups who have more control over stake than apps. Infrastructure fees on Orbs are designed to be the lowest possible, pegged to the actual infrastructure cost. In addition to the use of a subscription model and monthly billing for transactions, this avoids the issue of fluctuating gas costs.

#### How do blockchain infrastructure projects avoid forks?

Some infrastructure projects create barriers to make forks difficult. A good example is [Hashgraph](https://www.hederahashgraph.com/) where patents and intellectual property protections prevent users from forking the protocol. How will this strategy fair with apps? As long as apps will be able to find a parallel solution that provides roughly the same abilities, they are likely to prefer the solution without lock-in.

Take a look at the Windows vs. Linux battle for servers and cloud computing. Initially, Microsoft Windows had a performance advantage due to the large corporate funding its development. Ultimately, it was only a matter of time until Linux caught up. The Linux permissive license, freedom of use, open source code base and lack of lock-in ultimately crowned it as the undisputed king of cloud computing.

Another popular method of reducing the incentive to fork revolves around security. This is premise of many PoW networks like Bitcoin. The security of the network is directly related to the amount of hash power. Forking the project will not maintain the hash power of the original network, making the more popular fork significantly more secure.

This method works well for use cases where Proof of Work is a good fit — store of value for example like Bitcoin. It seems that practically none of the next generation projects aimed for large scale consumer apps is based on PoW. It’s evident that there are other means of securing these networks that are easier to scale. EOS and Stellar, for example, are only running with a couple of dozen of nodes and presumably are secure enough without PoW. Forking these systems will not have a great impact on their degree of security.

A different tactic for avoiding infrastructure forks by apps is creating lock-in with methods like placing the infrastructure token in the hands of end users. This is the case with Ethereum for example. For an end user to use an app over Ethereum, they must keep an Ether balance and pay the infrastructure fee directly. If an app wants to migrate away from Ethereum, it will have difficulty to do so because its user base now has a stake in Ether.

Creating infrastructure lock-in for apps is a very dangerous approach. The best interest of a consumer app is maintaining its freedom of choice regarding infrastructure. If a better infrastructure solution pops up, the apps that will migrate to it will gain a competitive advantage over those who can’t. In addition, apps are likely to want their user base to adopt their own application token and not the infrastructure’s.

Another incentive for avoiding forks is a thriving ecosystem. This is mostly relevant if you’re aiming for professional traders, investors and the secondary market. Take Ethereum’s ERC20 standard, for example. It’s well integrated in exchanges and wallets. Switching an app token to run over a solution that is less integrated in this space will have an impact on liquidity and professional trade.

This also appears to make little difference with apps today. Kin has chosen to launch digital services on Stellar although Stellar has a significantly smaller integration ecosystem for secondary tokens. How did Kin avoid the impact on liquidity and professional trade? by running Ethereum and Stellar side by side. It is possible to allow different target audiences of the token (professionals vs. consumers in this case) to rely on different blockchain implementations according to their needs, and switch between implementations seamlessly with technologies like atomic swap. Professional traders aren’t the typcial end users of mass market consumer apps and their needs can be addressed by using Ethereum in parallel.

#### So what’s the best way to avoid forks?

Forking the infrastructure is always going to have a price. Owning the responsibility for maintaining a working blockchain infrastructure environment takes a toll. It requires focus and effort as this isn’t a small task. Security and scalability are issues that entire dedicated projects are focused on. Keeping up with the latest infrastructure technology advancements of this crazy space is even difficult for teams that were formed for this sole purpose. Apps will always have a hard time doing this in parallel to focusing on development of their app itself.

Take a look at centralized infrastructure solutions — platforms like AWS, Microsoft Azure and Google Cloud. Why don’t centralized apps “fork” them and maintain their own infrastructure data centers? Well, they used to initially, but now it’s actually cheaper not to. An app will always prefer to focus on its core business as long as it doesn’t gain anything significant by doing something else. In the case of AWS for example, cloud providers have become so efficient that delegating the infrastructure task to them makes more business sense. Practically every modern centralized app today, Kik Messenger included, is running on third-party cloud infrastructure.

This is exactly the approach we’re taking in Orbs. There is no benefit for apps in forking Orbs. The apps are already in control, they are the ones making governance decisions. They are isolated from one another with virtual chains. The fees are designed to be as low as possible and tied directly to the actual cost of infrastructure. There are no barriers of entry like buying stake upfront and there’s zero lock-in. Orbs is designed to be the most efficient infrastructure solution from an app standpoint, providing an inherent, intelligent sharding system through blockchain virtualization and _virtual chains_.

Even better, there are actually great incentives not to fork. A specialized ecosystem of contributors maintaining the latest version of the protocol and keeping up with the latest infrastructure requirements — issues like privacy and aggressive sharding that next generation solutions are only starting to address. A network that improves its security as more apps join it. The consensus process of Orbs is not limited to a small number of nodes. The Helix consensus algorithm maintains the same level of performance even when the number of nodes increases and more nodes must participate in the consensus process. More nodes means greater security, because adversaries must attack more entities in order to take control of the network.

And most importantly — Orbs gives apps the ability to focus their resources and energy on what they know how to do best — building their app.
