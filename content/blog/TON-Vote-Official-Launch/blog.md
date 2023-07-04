---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/TON-Vote-Official-Launch/bg.jpg
blogUrl: TON-Vote-Official-Launch
date: 2023-06-13
title: "TON.Vote Official Launch: Kicking Off Our No-Code Governance Platform With 4 Cutting-Edge Partners"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "After successfully soft-launching TON.Vote with the TON Foundation as its initial user, Orbs is proud to announce the rollout of a permissionless governance solution for any project building on TON that requires DAO governance tools. In this endeavor, Orbs has teamed up with renowned TON dApps, including ston.fi, EvAA, TON Punks, and Fanzee, who are our official launch partners!"
---

After successfully soft-launching TON.Vote with the TON Foundation as its initial user, Orbs is proud to announce the rollout of a permissionless governance solution for any project building on TON that requires DAO governance tools. In this endeavor, Orbs has teamed up with renowned TON dApps, including [ston.fi](https://ston.fi/), [EVAA](https://evaa.finance/), [TON Punks](https://tonpunks.org/), and [Fanzee](https://fanz.ee/), who are our official launch partners!

The open platform allows any DAO on TON to conduct governance votes using its own governance token (jetton or NFT). Any holder of this token can vote on proposals published by the project and vote results are calculated according to the majority of token holders. TON.Vote architecture is inspired by [snapshot.org](https://snapshot.org), the de-facto standard on EVM for governance, which is used by the leading DAOs on EVM like Uniswap, Aave, Sushi and Arbitrum. 

### Kicking off TON.Vote with TON Foundation

This official release marks the culmination of Orbs' collaboration with the TON Foundation, serving as the primary design partner for the TON.Vote’s development. Taking their input into account, the Orbs team diligently built [TON.Vote](https://ton.vote/) to fulfill the specific requirements of The Open Network and the various projects within its ecosystem. In a beta testing phase, TON.Vote has already facilitated two successful governance votes for the Foundation.

The first vote was titled ["Proposal of TON Tokenomics Optimization"](https://t.me/toncoin/760). The community was asked if Genesis mining wallets that had been inactive for 48 months should be frozen. This vote was held to combat the uncertainty around these 171 wallets that held more than 20% of TON’s total supply. After the 7-day voting period, the community voted “Yes” to freeze the 171 Genesis wallets. Over 1.4 million TON coins were cast in the vote.

![Screenshot1](/assets/img/blog/TON-Vote-Official-Launch/image1.png)


The subsequent vote played a crucial role in determining the prize rankings for the highly anticipated 'Hack-a-TON' x DoraHacks competition. Orbs played an instrumental role in facilitating the voting process and co-hosted events in collaboration with TON Foundation team members and prominent community members. The collective efforts resulted in an impressive participation, with over 695,000 TON tokens utilized in the voting process

### How TON.Vote Works

TON.Vote is a no-code platform. To create a space for your DAO, you’re not required to manually deploy any smart contract or develop any special integrations to your DAO jetton or NFT. The platform is compatible with any existing jetton or NFT on TON mainnet.

All votes on TON.Vote occur on-chain, with a new contract automatically generated when a new proposal is created. This contract includes a reference to the Merkle tree of all votes, which will be stored on IPFS. This allows anyone to independently verify the accuracy of these votes. In the current version, users send transactions to the contract along with a comment (yes/no/abstain). These transactions are processed off-chain to calculate the final results. The open source client of every viewer is able to perform the full verification process client-side, guaranteeing a trustless system that does not rely on any centralized entity.

In future iterations, users will only need to sign a digital signature from their wallets, which will be securely stored in IPFS. Additionally, the vote will be validated through wallet signatures and will be gasless, pending the adoption of a standard wallet signature across all leading TON wallets.

One of the most important benefits of TON.Vote is that it allows voting with any existing TON jetton or NFT and does not require deploying a special new jetton contract. The system prevents duplicate voting without limiting the tokens in any way. Voters are not required to lock their tokens or limit their transferability during an active vote.

Read more about TON.Vote architecture in the published [white paper](https://www.orbs.com/white-papers/ton-vote/).

### The Orbs Component 

TON.Vote also relies on Orbs' L3 technology, with the Orbs Guardians providing an extra layer of assurance to the already robust voting system. In addition to independent validators and manual chain checking, Orbs Guardians verify that the UI's displayed votes are accurate and match those stored in the smart contract data. By cross-checking the information presented on the front end, the Orbs Guardians verify that there is no mismatch of data, reinforcing the entire process's transparency. 


### Decentralizing The Open Network

Four esteemed TON dApps have joined the official launch of TON.vote:
- [Ston.fi](https://ston.fi/): One of the leading DEXs on TON
- [EVAA Protocol](https://evaa.finance/): The first decentralized lending protocol on TON and a winner of the Hack-aTONx community vote
- [TON Punks](https://tonpunks.org/): A leading NFT & Play2Earn project on TON
- [Fanzee](https://fanz.ee/):  A fan engagement platform on TON

![Screenshot2](/assets/img/blog/TON-Vote-Official-Launch/image2.png)


The four launch partners, as well as any other dApp in the growing TON ecosystem, will now be able to give the power to determine the direction of the protocol and other highly consequential decisions to their communities. TON.Vote will enable a new era on The Open Network, with DAOs, NFT protocols, and other community-driven protocols leveraging this technology. 

If you’re a protocol looking to set up a voting space with TON.Vote, please join the support group on Telegram: [@TONVoteSupportGroup](https://t.me/TONVoteSupportGroup)

Learn more about TON.Vote:

- [Github](https://github.com/orbs-network/dao-vote)
- TON.Vote [White paper](https://www.orbs.com/white-papers/ton-vote/)




