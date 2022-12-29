---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/announcing-support-for-ton-connect-2.0-in-minter-and-verifier/bg.jpeg
blogUrl: announcing-support-for-ton-connect-2.0-in-minter-and-verifier
date: 2022-12-29
title: "Announcing support for Ton Connect 2.0 in Minter and Verifier"
author:
  - /blog/common/authors/ShaharYakir.md
type:
short_description:
---

Just in time for Christmas, the entire TON development community has been working towards improving upon TON Connect 1.0. After months of hard work, the TON community has finally [released TON Connect 2.0](https://telegra.ph/TON-Connect-20-12-26) (TC2), a major step forward in improving the entire ecosystem.

Contributors have followed the protocol standard and have upgraded both TON Minter & TON Verifier to support TON Connect 2.0.

### What is TON connect and why is it important? 

In simple terms, TON Connect does the heavy lifting for dApp developers by publishing the list of supporting wallets and their connection details. This allows the dApp developer to create a dynamic list of wallets, each of which works with the same connection and transaction-sending API. This enables the dApp developer to focus on building the app and minimizing wallet-interaction logic to a minimum.

From a user perspective, any TON Connect 2.0 compatible wallet can interact with any TON Connect 2.0 compatible dApp. dApps will now be able to retrieve the user's wallet address and send transactions from the application to the wallet for approval. This will make everything from connecting to usage seamless.

Further, TON Connect 2.0 is an entirely open-sourced protocol and allows 3rd party wallet developers to integrate without friction, eliminating walled gardens.

### TON Minter and TON Verifier add support for TC2

This announcement follows the release of [TON Minter](https://www.orbs.com/Announcing-TON-Minter-by-Orbs/) and [TON Verifier](https://www.orbs.com/Announcing-TON-Verifier-by-Orbs/). Both tools are amongst the first to have adopted the TON Connect 2.0 standard, effectively adding the anticipated Tonkeeper support.

Minter has already assisted developers in deploying over 450+ Jettons and was added to the TON Foundation's official domain, while Verifier already covers a large portion (estimated 80%) of the contracts on the TON chain.

This means that both of these tools can now be used with Tonkeeper and future TON Connect 2.0 supported wallets. Tonkeeper is one of the most widely used wallets by TON community participants, and we expect usage of both verifier and minter to grow accordingly.

We believe it is important that these foundational tools adopt TC2, being an open protocol that supports the decentralization of the ecosystem of TON. This is why we are proud to have been early testers and adoption partners for TC2 and are looking forward to seeing more tools and wallets adopt it in the future.
