---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-Introduces-TON-vote/bg.png
blogUrl: Orbs-Introduces-TON-vote
date: 2023-03-02
title: "Orbs Introduces TON.vote: a No-code DAO Governance Tool for TON dApps"
author:
  - /blog/common/authors/Shawn.md
type:
short_description: "Over the last few months, Orbs has worked with the TON Foundation to create a governance platform for The Open Network. This platform needed to adhere to the web3 standards that all builders in the space strive for: decentralization, immutability, security, and transparency. With these core values in mind and the TON Foundation as our design partner, we’re excited to introduce TON.vote!"
---

GM,

Over the last few months, Orbs has worked with the TON Foundation to create a governance platform for The Open Network. This platform needed to adhere to the web3 standards that all builders in the space strive for: decentralization, immutability, security, and transparency. 

**With these core values in mind and the TON Foundation as our design partner, we’re excited to introduce [TON.vote](https://ton.vote/)!**


### What is TON.Vote?

TON.Vote is a completely decentralized, on-chain DAO governance platform built exclusively for the TON ecosystem. The core user base is anticipated to be TON DAOs, projects, and other TON-related communities requiring governance activities. It is most similar to [Snapshot.org](https://snapshot.org/#/), with a major caveat: all voting is decentralized and trustless. 

This is a major step forward for the entire TON ecosystem as there was no previous solution for governance before now. 


### Why is Governance Important? 

Put simply, governance is important as it decentralizes the control of a protocol and gives it to the community. Diving further, community governance adheres to the decentralized nature of cryptocurrency and protects user funds by ensuring no one person can make unilateral decisions. Some examples of this are: What do we do with the treasury? Should we allocate a % of our tokens as a grant? Who should the grant be given to? What are the next steps the protocol takes? Communities should vote to align themselves on these types of issues. 

The above are just a few examples of the limitless possibilities that governance unlocks. Decision-making is put into the communities hands instead of the founding team, and all parties should be able to participate in governance without censorship. To allow governance in one's project is to give up control; it’s a decision that shouldn’t be taken lightly. 


### How it Works

As mentioned, all of the voting happens on-chain, which is the main difference between Snapshot and TON.vote. A smart contract is deployed on-chain when a new proposal is created. This new contract includes a reference to the merkle tree of all the votes which will be stored on IPFS, and anyone can independently verify on-chain that these votes are accurate. In the current iteration, users send transactions to the contract with a comment (yes/no/abstain); these transactions are processed off-chain to calculate the final results. 

In future versions, users will only need to sign a digital signature from their wallets which will be stored in IPFS. Everyone will be able to verify these transactions independently to ensure no manipulation is happening by any one party. 


### The Orbs Component 

TON.vote also implements Orbs’ L3 technology, with the Orbs Guardians providing an extra layer of assurance to the already robust voting system. In addition to independent validators and manual chain checking, Guardians independently verify the accuracy of the displayed votes in the UI with those stored in the smart contract data. This extra level of verification ensures that there is no tampering with the votes, as they are stored in an immutable format. By cross-checking the information presented on the front end, the Orbs Guardians verify that there is no mismatch of data, reinforcing the entire process's trust and transparency.   

We want to create a decentralized voting system, but we also want the system to be gasless. While not in the current iteration, achieving this requires the layer-3 capabilities of Orbs guardians to tally the votes in a decentralized manner. Independent users can use either the TON RPC API or any of their choosing to verify that votes are accurate. See the guide on this [here](https://github.com/orbs-network/dao-vote#how-can-you-verify-the-results).


### Current Votes Happenings 

You may have noticed that the TON Foundation is already using TON.Vote for its governance needs. Orbs Guardians have already directly interacted with the Foundation to ensure the contract data is displayed correctly, thus proving our working use case. 

At the time of writing, over 1.1 million TON tokens have participated in the first governance vote on the network. Titled ‘[Proposal of TON Tokenomics Optimization](https://ton.vote)’, the community is asked to vote on whether genesis mining wallets should have their tokens frozen after 48 months of inactivity. If you haven’t already, be sure to cast your vote and celebrate this remarkable achievement for the entire network. 

![screenshot](/assets/img/blog/Orbs-Introduces-TON-vote/image1.png)


### Roadmap 

Over the following weeks, we will publish developer documentation for anyone who wishes to integrate TON.Vote with their TON community. After this process is complete, any project who wishes to have governance on TON can create their own space for proposals without needing assistance from Orbs. 

Additionally, in the current version votes are sent via TON transactions. In the future, governance participants can vote with signatures from their wallets. We also plan to allow support for [voting with NFTs](https://github.com/orbs-network/dao-vote#background), and collections will be able to weigh votes with rare traits if they so choose. 

As the TON network continues to grow, it will be exciting to look back and know that Orbs helped facilitate the first-ever governance vote on The Open Network. We look forward to this day and will continue building alongside you until then. 

