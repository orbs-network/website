---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/TON-Verifier-Major-Update-Getters/bg.png
blogUrl: TON-Verifier-Major-Update-Getters
date: 2023-04-10
title: "TON Verifier Major Update: Getters"
author:
  - /blog/common/authors/ShaharYakir.md
type:
short_description: "TON Verifier, the official tool for verifying smart contracts on The Open Network (TON), has undergone a significant update to support Getters."
---

**TON Verifier, the official tool for verifying smart contracts on The Open Network (TON), has undergone a significant update to support Getters.** 

### What is TON Verifier? 

https://verifier.ton.org/ is a key due diligence tool everyone should consider using before interacting with a TON contract. Verifier is vital for users' security and trust in various TON dApps because users can only see bytecode on the various block explorers. Still, they don’t know if the source code actually being run is the same, so they don’t know what is running on the contract.

To verify a contract, the developer types in the contract address in TON Verifier, uploads the FunC source files and specifies the compiler settings (file order, compiler version, etc.). Then, the app sends the source code to the compiler backend, which verifies that the source compiles to the desired code cell hash (see section 3.1.4 in the [TVM whitepaper](https://ton.org/docs/tvm.pdf)), meaning that it’s guaranteed to match the same bytecode as the contract address in question. 

_TON Verifier is a tool developed by the [Orbs](https://www.orbs.com/) team and powered by Orbs' decentralized network of permissionless PoS Guardians, as well as independent community participants from The Open Network. Anyone can run a node to enhance the security of Verifier if they choose so._


### Introducing Getters 


![screenshot](/assets/img/blog/TON-Verifier-Major-Update-Getters/image1.png)


Getters is easiest explained as a tool to read critical contract information. This is most similarly compared to the “Read contract” tool on [Etherscan](https://etherscan.io/token/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa#readContract). A user interface for Getters is crucial when interacting with smart contracts as it allows users to do further due diligence by making it more accessible to read contract data. 

Users interacting with jetton contracts need to be able to verify the admin address for a contract and other configurations. With a UI, the information can be presented in a user-friendly format, making it easier for non-technical users to access and understand the data stored in the smart contract. Without such a UI, users have to construct the code executing the Getters manually, which may be difficult and time-consuming. 


Verifier already displays the source code of jettons, which assists the user in knowing what the code does. The latest addition of Getters invocation within Verifier now provides the ability to also query the contract’s data based on its source code. Since FunC, as opposed to Solidity, does not have a concept similar to ABI, the Getters configuration needs to be parsed directly from the code, in this case using a wasm binary of a tree-sitter [FunC language binding](https://github.com/ton-community/vscode-func).

Even with this addition, querying and making sense of Getters results can be cumbersome when dealing with nontrivial datatypes stored as complex cell structures. The Getters UI does try to parse known structures within cells, such as addresses, but more complex schemes require further manual parsing.

Over time the Orbs team plans to improve the tool to support more complex datatypes, but it already fills a sizable void since, until now, users did not have a way to interact with contracts in such a simple manner. One of these use cases is determining who is the admin of a specified contract and discerning if it has been revoked. 

### Beyond Verifier 


This is the first major upgrade to Verifier since it was added as an official tool of The Open Network. Over 110 contracts on TON have been verified, allowing a level of due diligence for the network that wasn’t possible before. 

Integrations into major TON explorers are currently underway and now are being further extended to Getters. The SDK in [ton-community Github](https://github.com/ton-community) allows any TON explorer to embed Verifier into their front end and now utilize the getting functionality. 



For assistance using Verifier join: https://t.me/tonverifier

Docs: https://github.com/orbs-network/ton-contract-verifier

Orbs Twitter: https://twitter.com/orbs_network



