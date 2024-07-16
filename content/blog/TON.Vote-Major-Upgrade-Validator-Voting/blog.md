---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/TON.Vote-Major-Upgrade-Validator-Voting/bg.png
blogUrl: TON.Vote-Major-Upgrade-Validator-Voting
date: 2023-09-11
title: "TON.Vote Major Upgrade: Validator Voting"
author:
  - /blog/common/authors/Shawn.md
type:
short_description: "TON.Vote, the no-code governance platform for The Open Network (TON) has implemented a major upgrade: Validators can now participate in DAO governance votes by utilizing MyTonCtrl!"
---

[TON.Vote](https://ton.vote/), the no-code governance platform for The Open Network (TON) has implemented a major upgrade: Validators can now participate in DAO governance votes by utilizing MyTonCtrl! 

Validators hold a significant portion of the ecosystem's stake but were previously unable to vote as funds were staked in the elector contract. Now every voice can be heard on TON, validator or otherwise.


![screenshot](/assets/img/blog/TON.Vote-Major-Upgrade-Validator-Voting/image1.png)


For the unfamiliar, [MyTonCtrl](https://github.com/ton-blockchain/mytonctrl) is a console application that serves as a convenient wrapper for fift, lite-client, and validator-engine-console. It has been specifically developed to streamline wallet, domain, and validator management tasks from the command line. Nearly every validator uses MyTonCtrl to manage their positions. Validators are responsible for maintaining the network, in return they receive some rewards. 

If you’re a validator looking for more information about how this works and the generic command line prompt used to vote, please refer to TON.Vote’s documentation [here](https://github.com/orbs-network/ton-vote#supported-strategies). Further, if you’re looking to support contracts other than the newly supported ones, the contributors in the TON.Vote support group can get you sorted [here](https://t.me/TONVoteSupportGroup).

The reason validators could not vote is that the funds used to validate the network are held in a dedicated contract. They would need to withdraw their entire position from the elector wallet, and then transfer to another wallet, thus losing money in both gas fees & downtime. If all the stake is removed from validation, who will be left to maintain the network? Now, by leveraging MyTonClrl operational wallets, validators can vote by sending a small amount of TON alongside the message of how they’d like to vote. 

Validator voting will not be enabled by default. It is an option that can be readily toggled on and off by proposal creators and can be decided after taking into account your relevant community.  

### TON.Vote’s Success To-date

TON.Vote is a completely decentralized, on-chain, and trustless DAO voting platform built exclusively for the TON ecosystem. It is also the official DAO voting platform of the TON Foundation.

As of writing, TON.Vote has been used by over 24,000 governance particpants. All of which have had their voice heard on the future of The Open Network, maintaining decentralization whilst promoting the core values of DeFi. The 24,000 users have voted on proposals totaling over 5.2 million TON, across 32 individual project spaces, which have hosted 40 proposals. This is in addition to the numerous NFT projects and jettons.

Since launching, TON.Vote has seen incredible growth alongside Orbs' other projects on The Open Network. [Minter]( https://minter.ton.org/), [Verifier](https://verifier.ton.org/), and [Access](https://www.orbs.com/ton-access/) are accelerating decentralization and core DeFi values of the entire ecosystem. 

Orbs continues to facilitate decentralization on TON and is currently in the process of developing additional tools for tracking validator-exclusive vote happenings on the network. We continue to listen to project and user feedback, incorporating it whenever possible to best service all needs. Thank you as always for building with us.



<div class='line-separator'> </div>

**About Orbs**

Orbs is a blockchain infrastructure project. It has been around since 2017, with the network and token live since 2019. The current focus of the project is on use cases supported by the network and technology.

The most used apps on Orbs now are dTWAP and dLIMIT - these are limit order and TWAP protocols that are 100% decentralized, EVM compatible, and can integrate with most DEXs. Currently live with multiple DEXs such as QuickSwap, SpookySwap, Thena, Chronos, and more.

The project's core team consists of more than thirty dedicated contributors spanning from Tel Aviv, London, New York, Tokyo, and Seoul.

For more information, please visit www.orbs.com or join our community at: 

Telegram: https://t.me/OrbsNetwork 

Twitter: https://twitter.com/orbs_network 
