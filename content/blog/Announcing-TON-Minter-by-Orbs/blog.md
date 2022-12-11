---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Announcing-TON-Minter-by-Orbs/bg.jpg
blogUrl: Announcing-TON-Minter-by-Orbs
date: 2022-11-15
title: "Announcing TON Minter by Orbs"
author:
  - /blog/common/authors/ShaharYakir.md
type:
short_description: "Today we're introducing Minter - an open-source tool to launch jettons (similar to ERC-20 tokens) on the Ton network. Minter was previously known as jetton.live and was created by the Orbs team."
---

### Minter

Today we're introducing [Minter](https://minter.ton.org) - an open-source tool to launch jettons (similar to ERC-20 tokens on EVM networks) on the Ton network. Minter was previously known as jetton.live and was created by the [Orbs](https://orbs.com/) team.

### What is Minter?

Minter allows you to easily deploy new Jettons on the TON blockchain. First, go to https://minter.ton.org and connect your wallet. Currently, Chrome extension wallet and Tonhub are supported, but TonKeeper support is coming very soon.

Then, you select a name, symbol and other properties of your new token and simply initiate a transaction on the TON chain.

This will cause a new Jetton Minter contract to be created. Minter is a contract responsible for yielding Jetton Wallet contracts. Since the tool allows you to specify any amount of initial tokens to be minted, a new wallet with the specified token balance will be created and associated with your TON wallet address.

![Minter](/assets/img/blog/Announcing-TON-Minter-by-Orbs/image1.png)


### History

The [Jetton standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) (akin to ERC-20 on Ethereum) has existed since March '22. The jetton.live tool was launched in June '22, as theOrbs team saw that there wasn't a standard tool to create new Jettons and stepped in to develop one for the benefit of the TON ecosystem.

With the tool being recognized by [TON Community](https://t.me/toncoin/473), the community helped by opening issues and PRs to improve it and fix bugs. Since then, over 300 new Jettons have been deployed. These tokens are used to support development in the TON ecosystem, facilitate usage of DEXes on TON, such as [TonSwap](https://tonswap.org/), and issue utility tokens for new projects on TON.

### Safety

Our experience in decentralization drove us to make the tool opinionated in how it protects token creators and users. The tool opts to store the metadata of new jetton’s only on-chain, even though the [metadata standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md) recognizes both off-chain and on-chain as valid storage options.

This design choice is intended to keep users safe from changes or disappearance of token symbols and decimals because they were stored in an unpinned IPFS address or a 3rd party backend server.

Altering such metadata is still allowed, but the token admin is encouraged to revoke its admin privileges (also supported on the tool) once metadata is finalized on-chain. In addition, a warning is clearly displayed for any token for which admin privileges have not been revoked.

![Minter](/assets/img/blog/Announcing-TON-Minter-by-Orbs/image2.png)


Revoking the admin also protects from additional coins being minted, causing a token to devalue.

Lastly, the tool is completely open source and served from GitHub pages, which means that users are able to verify that it indeed deploys the contracts from the [Minter-contract repo](https://github.com/ton-blockchain/minter-contract).

More on this at the [Minter contract repo](https://github.com/ton-blockchain/minter-contract#jetton-metadata-field-best-practices).

### What's changing?

Today, jetton.live is being renamed as Minter. In the process, we have also contributed its [dapp](https://github.com/ton-blockchain/minter) and [contracts](https://github.com/ton-blockchain/minter-contract) to the ton-blockchain org, which means it is now the TON Foundation's official tool for deploying Jettons.

In this transition, we have also worked closely with the Foundation to design the tool to align with the official TON style guide, and we're also introducing a completely overhauled UI experience.

For us at Orbs, this is a welcome opportunity to contribute to the fast-growing TON ecosystem. Join the Orbs official [Telegram channel](https://t.me/OrbsNetwork) to learn more about Orbs activities in the TON ecosystem.
