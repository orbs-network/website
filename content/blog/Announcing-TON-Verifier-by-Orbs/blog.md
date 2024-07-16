---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Announcing-TON-Verifier-by-Orbs/bg.jpg
blogUrl: Announcing-TON-Verifier-by-Orbs
date: 2022-12-15
title: "Announcing TON Verifier by Orbs"
author:
  - /blog/common/authors/ShaharYakir.md
type:
short_description: "Today we are introducing TON Verifier - an open-source application to publish verified source code for on-chain contracts on the TON chain. Ton Verifier is a tool developed by the Orbs team and powered by Orbs decentralized network of permissionless PoS Guardians."
---

### TON Verifier

Today we are introducing [TON Verifier](https://tonverifier.live/) - an open-source application to publish verified source code for on-chain contracts on the TON chain.

Ton Verifier is a tool developed by the [Orbs](https://www.orbs.com/) team and powered by Orbs decentralized network of permissionless PoS Guardians.

### Verified source code is vital 

Verified source code is an important aspect of smart contracts, as it provides transparency and allows users to assess the integrity and security of a contract. Trust is a key factor when dealing with blockchains and cryptocurrency, and providing verified source code is an important building block for achieving that trust.

Smart contracts tend to deal with financial balances and transactions, either directly or indirectly. Therefore, interacting with a contract without having its source code is dangerous. This is because without verified source code, we’re essentially trusting the dapp or developer to do what it claims to do.

For example, a smart contract could allow an owner role to replace its code completely, or leave a backdoor, allowing it to drain funds.

Every due diligence process for a protocol requires verifying the sources according to the bytecode on-chain - just as one would never sign a real estate agreement in a language you can’t read. By providing verified source code, parties who interact with the contract are able to inspect it in a human-readable form, which increases overall transparency and security.

### What is TON Verifier

TON verifier allows smart contract developers to upload source code for these contracts, alongside a signed proof that it compiles to the same bytecode as a given address on TON.

To verify a contract, the developer types in the contract address in Ton Verifier, uploads the FunC source files and specifies the compiler settings (file order, compiler version etc.). Then, the app sends the source code to the compiler backend, which verifies that the source compiles to the desired code cell hash (see [section 3.1.4](https://ton.org/docs/tvm.pdf) in the TVM whitepaper), meaning that it’s guaranteed to match the same bytecode as the contract address in question.

If there is a match, the backend will provide a signed BoC to the app, intended for the user to send as a transaction to the verifier registry and sources registry (more on that below).

If compilation does not succeed, or results in a different hash, the backend will refuse to sign, and instead try to assist the user by suggesting possible measures to achieve the correct hash.

<iframe src="https://www.youtube.com/embed/8ybqbStct9A" title="How to use TON Verifier by Orbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### A decentralized solution

Verified source code is not a new concept in blockchains. Etherscan has been providing this service for the Ethereum network, but it raises an interesting question - who actually is the owner of these sources? Would Etherscan allow exporting all of it for posterity? What happens in case Etherscan goes down, decides to charge for it or ceases to offer this service? Since Etherscan verified sources are entirely centralized, the Ethereum ecosystem relies on these sources, but does not own them in any way.

At Orbs, we are always advocating for decentralization as much as possible. That is the reason why we proposed [TEP-91](https://github.com/ton-blockchain/TEPs/pull/91), which specifies how a multi-verifier source registry would work. This way, users do not have to trust the Orbs-run backend. Any party can set up their own verifier, register it to the verifier registry, and assign their own backend to that verifier.

The sources are also stored in IPFS (and will be migrating to TON storage, when it becomes available), meaning any party can pin them and create another copy. TON Verifier also provides a means to conveniently download the source code for any verified contract.

We plan on adding multi-verifier features to TON Verifier, such as displaying proofs from other verifiers and syncing verifications between verifiers as the solution grows, and encourage more verifiers to participate in verifying source code for the benefit of the TON community.

### Verified source code is not risk-free

We usually expect the smart contract developer to publish the source code using TON Verifier before announcing it to the world. This would reduce the possibility of a malicious party publishing code that compiles to the same bytecode, but contains misleading comments and variable names, which do not affect the resulting bytecode.

The original developer could also be malicious. For that reason, it is essential to be diligent, and read the code carefully. It’s important, therefore, to remember that what’s being verified is the fact that the source code compiles to the same code cell hash as the contract in question, as opposed to the integrity of comments and variable names.

In the case that source code is suspected to be misleading, it is possible to flag it (currently via the [support group](https://t.me/tonverifier)) so that future users can become aware of potential risks.

### Integrating TON Verifier into the TON ecosystem

Ton verifier was designed with integrations in mind, treating them as a core feature.

Since proofs are on-chain, and source codes are on IPFS, no Orbs infrastructure participates when making an integration. Integrations merely have to rely on these proofs having been made by Orbs, and therefore display the source code for any contract that was verified.

We encourage developers on TON to integrate with the solution, as we offer a [backend and UI SDK](https://github.com/ton-community/contract-verifier-sdk/) to do so, including data fetching from TON, IPFS and code highlighting for FunC.

### Moving forward

The announcement of TON Verifier follows our successful release of [Minter](https://minter.ton.org), named the official tool for deploying Jettons (alt- tokens on TON). Since then, we’ve seen over 4,300 developers minting more than 470 tokens. We hope to see TON Verifier achieve the same level of success and become a fundamental part of developing smart contracts on TON.

We built this tool to improve transparency and security for TON developers, and are happy to contribute to TON’s growth and resilience. Join the Orbs official [Telegram channel](https://t.me/OrbsNetwork) to learn more about Orbs activities in the TON ecosystem and how you can get involved.

For assistance using verifier join: https://t.me/tonverifier

Docs: https://github.com/orbs-network/ton-contract-verifier

Orbs Twitter: https://twitter.com/orbs_network



