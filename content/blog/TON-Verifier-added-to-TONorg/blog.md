---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/TON-Verifier-added-to-TONorg/bg.jpg
blogUrl: TON-Verifier-added-to-TONorg
date: 2023-01-30
title: "TON Verifier by Orbs has Been added as an Official Tool to TON.org"
author:
  - /blog/common/authors/Shawn.md
type:
short_description: "As previously announced last month, Orbs has launched TON Verifier, an open-source application to publish verified source code for on-chain contracts on The Open Network. Today we’re announcing that TON Verifier has been officially adopted by the TON Foundation!"
---

As previously [announced](https://www.orbs.com/Announcing-TON-Verifier-by-Orbs/) last month, Orbs has launched TON Verifier, an open-source application to publish verified source code for on-chain contracts on The Open Network.

Today we’re announcing that TON Verifier has been officially adopted by the TON Foundation and can be found in the following ton.org domain: https://verifier.ton.org/. In addition, Verifier can be found on the TON [Apps page](https://ton.app/utilities), under the “utilities” section.

![screenshot](/assets/img/blog/TON-Verifier-added-to-TONorg/image1.png)


Verifier will also be added to the foundation’s smart contracts and will no longer be hosted by Orbs, making Verifier the official tool for verifying smart contracts on TON. 

_TON Verifier is a tool developed by the Orbs team and powered by Orbs' decentralized network of permissionless PoS Guardians, and independent community participants from the open network. Anyone can run a node to secure Verifier if they so choose._ 

### What is TON Verifier? 

TON verifier allows smart contract developers to upload source code for TON contracts, alongside a signed proof that it compiles to the same bytecode as a given address on TON. This is vital as users can only see bytecode, but they don’t know if the source code is the same, which means they don’t know what is actually running. 

To verify a contract, the developer types in the contract address in TON Verifier, uploads the FunC source files and specifies the compiler settings (file order, compiler version etc.). Then, the app sends the source code to the compiler backend, which verifies that the source compiles to the desired code cell hash (see section [3.1.4](https://ton.org/docs/tvm.pdf) in the TVM whitepaper), meaning that it’s guaranteed to match the same bytecode as the contract address in question.

 If there is a match, the backend will provide a signed BoC to the app, intended for the user to send as a transaction to the verifier registry and sources registry (more on that below). 

If compilation does not succeed or results in a different hash, the backend will refuse to sign, and instead try to assist the user by suggesting possible measures to achieve the correct hash.

<iframe src="https://www.youtube.com/embed/8ybqbStct9A" title="How to use TON Verifier by Orbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Looking ahead

TON Verifier follows [Minter](https://minter.ton.org/), which was contributed by Orbs and adopted by the foundation of The Open Network as well. Orbs continue to believe in the thesis that The Open Network will be the blockchain of mass adoption, as the project grows increasingly intertwined with the Telegram messaging app. 

So far, Verifier has verified over 110 contracts on the open network. Well-known projects on TON are also in the process of integrating Verifier into their front end, which will rapidly accelerate Verifiers usage once complete. Minter, which is currently hosted by the foundation’s contracts, has helped 1,600+ developers in January deploy over 815 jettons to the fast-growing TON ecosystem. 

For assistance using Verifier join: https://t.me/tonverifier 

Docs: https://github.com/orbs-network/ton-contract-verifier 

Orbs Twitter: https://twitter.com/orbs_network
