---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/OIP-5-Recovering-Compromised-Wallets/bg.png
blogUrl: OIP-5-Recovering-Compromised-Wallets
date: 2023-08-10
title: "OIP-5: Recovering Compromised Wallets - How the Orbs Community Stepped In"
author:
  - /blog/common/authors/IdanAtar.md
type:
short_description: ״In the ever-evolving world of blockchain, security breaches can wreak havoc on unsuspecting users. We've seen this firsthand, as several Orbs Delegators reached out to the project with an alarming issue: malicious actors had compromised their blockchain wallets.״
---
In the ever-evolving world of blockchain, security breaches can wreak havoc on unsuspecting users. We've seen this firsthand, as several Orbs Delegators reached out to the project with an alarming issue: malicious actors had compromised their blockchain wallets.  

While the security issues faced by the Delegators related to the private keys for their wallets on underlying blockchains and not with the Orbs network or its technology, the Orbs community is capable of  finding solutions even for the most complex challenges. 


Here's how this particular problem was resolved.

### The Challenge

Several Delegators informed their respective Guardians and the Orbs team that attackers had gained control of their private keys. With access, these malicious entities were in the process of unstaking tokens and transferring them to their own wallets. Understandably, these Orbs Delegators were desperate to retrieve their tokens.

### The Innovative Solution

The staking contracts for Orbs V3, like all previous and future versions, does not include any super-user powers or backdoors that can be used to transfer or impact staked ORBS tokens without the participation of the staker. However, the smart contract does contain manager roles for purposes of future-proofing and security. One of them is a “migration manager” that can open a pathway to migrate staked tokens, upon user’s request.

While the staking contract migration manager wasn't originally designed for this purpose, Orbs contributors saw potential in it to help. They devised a special smart contract template with these unique features:

- **Source Address:** Only tokens staked from a pre-specified address can migrate to this smart contract. Any other attempts fail.
- **Cool-down Period:** A 14-day waiting period aligns with our main staking contract's timeline.
- **Destination Wallet:** Post the cool-down period, tokens are transferred to a new, secure wallet chosen by the Delegator. A specific function in the migration contract ensures this exclusive transfer.

*_It should be noted, as was explained [here](https://www.orbs.com/OIP-5-Recover-Compromised-Funds/), that the migration manager only has the ability to add a potential migration destination - it cannot, under any circumstances, transfer tokens or force users to participate in the migration. Every user that will choose to migrate must perform a dedicated transaction by themselves and move their tokens._

The plan was put forward for community discussion as part of **[OIP-5](https://www.orbs.com/OIP-5-Recover-Compromised-Funds/): Policy to Enable Individual Migration Paths to Allow Delegators to Recover Compromised Funds**. 

Following community consensus ([See the vote here](https://snapshot.org/#/orbs-network.eth/proposal/0xcdd9c48f8b58ffae57428d312d0d94f5224ca6551072f707047fab56e2441b60)), the proposed solution was rolled out for the two compromised wallets: one on Ethereum and another on Polygon.

### The Recovery Process

**Initiation**

The first step was to send a transaction from the compromised wallet to the Orbs staking contract. This kicked off the migration.

**The Hurdle with Polygon**

An astute attacker had seized control of the Polygon wallet. This individual had bots monitoring all fund movements, hindering any efforts to send MATIC for transaction gas. 
After researching multiple strategies, the Orbs team developers finally got the better of the attacker, by outpacing their bot and managing to send MATIC to start the migration.

**Ethereum**

This process was straightforward. The migration request was promptly sent without any issues.

**Final Step**

With migration requests in place, a 14-day cooldown was necessary. Post this period, the victims successfully moved their tokens to a new address, ready to be staked again.

### Summary and Lessons Learned

In this era of digital innovation, it's paramount that we stay one step ahead of potential threats. Anyone using Orbs or other blockchain technology should be extremely careful with their security practices. 

The Orbs team, together with the community managed to bring forward and successfully execute an innovative solution to a complicated situation.

At Orbs, our commitment to our Delegators' security remains unwavering. We hope that by sharing our experience, others can benefit and fortify their digital assets against potential threats.

