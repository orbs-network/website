---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/an-introduction-to-proof-of-stake-and-the-future-of-consensus - a-talk-by-orbs-head-of-research/bg.jpeg
blogUrl: an-introduction-to-proof-of-stake-and-the-future-of-consensus - a-talk-by-orbs-head-of-research
date: 2018-06-17
title: An Introduction to Proof-of-Stake and the Future of Consensus — a Talk by Orbs’ Head of Research
author:
  - /blog/common/authors/DavidY.md
type:
short_description: _This is Part I of a series on Proof-of-Stake’s growing influence in crypto and blockchain, as well as issues its implementation still faces. This is an expanded version of a talk I gave for Blockchain Academy on June 11, 2018._
---

_This is Part I of a series on Proof-of-Stake’s growing influence in crypto and blockchain, as well as issues its implementation still faces. This is an expanded version of a talk I gave for Blockchain Academy on June 11, 2018._

https://www.youtube.com/watch?v=Ha4Tt8RYYow

To quote Vitalik, “In a PoS system, a blockchain appends and agrees on new blocks through a process where anyone who holds coins inside of the system can participate, and the influence an agent has is proportional to the number of coins (or ‘stake’) it holds. This is a vastly more **efficient alternative to PoW** ‘mining’ and enables blockchains to operate without mining’s high hardware and electricity costs.”

So PoS is supposedly an “efficient alternative to PoW,” but what are PoW-based blockchains good for anyway?

![](https://cdn-images-1.medium.com/max/1200/1*ok0ooJhfPgWo0idxU9iK1w.png)

David Yakira speaks at Blockchain Academy (Photo by [Gedalyah Reback](https://medium.com/@gedalyahreback_49565))

It depends on whom you ask — *miners* are attracted to Bitcoin because it distributes approximately 18 million USD every day (for a 12.5 bitcoin block reward and assuming a $10,000 BTC price tag) in an ongoing lottery. Tickets for this unprecedented lottery are bought with SHA256 computations. A major benefit PoW has is that the more tickets sold, the more secure the network becomes.

Secure for what exactly? Well, secure for maintaining a state under consensus among an open set of participants. Bitcoin uses this to implement p2p currency — the state under consensus is the UtxO set and users can change it using a limited set of operations. Ethereum is more general purpose with a Turing complete scripting language to update a general state.

We, the _users_, like Bitcoin because it serves as an alternative to store value. The main difference between this alternative and other alternatives is _trust_. When interacting with Bitcoin, users don’t need to trust any single entity and there is no single point of failure that the system relies on. At the very basic level, users don’t rely on anyone in order to transact and don’t need anyone’s permission in order to “open an account.” Their money can move _only_ by gaining control of a secret key.

On a higher level, users have real weight in the decision-making process and can influence the network’s direction one way or another (e.g., increase the total supply of coins or merge a new consensus rule or a new feature). For me, [this](http://realtimebitcoin.info/) simple website demonstrates Bitcoin’s power nicely— every minute or so, someone trusts the Bitcoin network enough to transfer hundreds of thousands of dollars worth of Bitcoin.

Back to Vitalik’s quote.

PoS is an “efficient alternative to PoW” in the sense that security should be much cheaper to attain. In PoW, the security of the system is pegged to the amount of meaningless hashes the network computes in a time unit, which is pegged to the amount of energy the network burns.

Making this more concrete — the estimated number of tera hashes per second the Bitcoin network is performing is [about 35,000,000](https://blockchain.info/charts/hash-rate?timespan=all&scale=1). The network’s energy consumption is estimated at around [70 TWh per year](http://www.cashmatters.org/blog/cryptocurrency-not-so-eco-friendly/) — comparable to the _Czech Republic_. PoS is an approach to restrain the energy consumption while maintaining the same level of security (and decentralization or _“trust-less-ness”_).

We strive for a value-securing system that is not pegged to an external resource and where security is not derived from burning energy in the physical world, but from the value stored within the system itself.

In a sense, a PoS system is recursive, augmenting the value it stores implies better security which further allows the value to increase and so on.

It seems so appealing that many top researchers and engineers around the world have been dedicating significant time to try and develop PoS systems. On the other hand, there are many researchers that claim that PoS is inherently flawed ([here](https://download.wpsoftware.net/bitcoin/pos.pdf)’s a good example).

I will not get into this argument here. All I will say is that Bitcoin and PoW-based consensus have led to convince many that PoS-based consensus is highly desirable. Moreover, the very notion of PoS was conceived ([in this bitcointalk thread from July 2011](https://bitcointalk.org/index.php?topic=27787.0)) by looking at Bitcoin and its ingenious PoW mechanism (which first appeared in [this paper](http://www.hashcash.org/papers/pvp.pdf) as a means to combat junk email and was described as “a general computational technique for controlling access to a shared resource”).

Thus, in order to understand what we are aiming for in PoS, we must first isolate the key elements within the PoW paradigm that are to be mimicked. PoW based blockchains can be interpreted as:

1. **Leader election** — a procedure among a dynamic set of anonymous candidates in a non-detectable and non-predictable way. This is driven by the stochastic nature of the PoW process. In this random election process, candidates are weighted according to the amount of work they invest (neglecting 51% attacks and [selfish mining](https://arxiv.org/pdf/1311.0243.pdf)). Additionally, the election process supports a **_rate control_** mechanism (e.g., in Bitcoin a leader would be elected every 10 minutes in average). Finally, this leader election process does not require any communication — finding a valid PoW is what it takes to be elected.
2. **Chain selection rule** — enables all participants to agree on a single version of history. This works because an elected leader can notify the network of his election in negligible time. The following leader, by hash chaining, could confirm the previous leader. Fundamentally, this allows communication in Bitcoin to be modelled as synchronous.
3. A way to **distribute new coins** so as to incentivize the chain selection rule to converge into a single, agreed-upon, ever-growing history. The distribution of coins is also what drives miners to join the game in the first place.
4. And finally, a safe (and objective) way for **joining nodes** to get up-to-date with the “true” history.

In other words, PoW follows the principle of making history costly to create and rewarding participants that contribute to its majority version.

In the following posts, we will see attempts to mimic these elements while removing the need for mining, starting with the very first system to try PoS — [PPCoin](https://peercoin.net/assets/paper/peercoin-paper.pdf).

From the PPCoin case study we will understand the difficulties designing a PoS system. Specifically, generating common and non-manipulable randomness for leader election, incentivizing block producers (I’ll refer to them as _stakers_, stakeholders or validators interchangeably) to extend a **_single_** version of history, and incentivizing block producers to participate regularly.

Finally, I will discuss the Casper FFG proposal planned for [Ethereum](https://coinmarketcap.com/), the 2nd most valuable cryptocurrency as of this writing. This by far would be the most significant step for PoS thus far — it has the potential of

- Persuading the crypto community (particularly the Bitcoin community) of PoS’s merits
- Increasing the Ethereum network resilience, and
- Enabling scaling _and_ sharding solutions.

Or, it can show that PoS is pretty much useless, and in a more pessimistic scenario, with a bad implementation, can potentially destroy innocent stakers’ coins, reducing the trust in the system.

In any event, this indeed would be a very daring move for a system that holds around $60 billion as of May 2018.
