---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/bg.jpg
blogUrl: Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators
date: 2023-04-04
title: Orbs is proud to contribute Single Nominator Smart Contract for TON Validators
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "Single Nominator is a new TON smart contract that enables secure validation for TON blockchain via an air gapped cold wallet.The contract is designed for TON validators that have enough self stake to validate by themselves without relying on third-party nominators."
---



### The Go-to Solution for TON Validators

[Single Nominator](https://github.com/orbs-network/single-nominator) is a new TON smart contract that enables secure validation for TON blockchain via an air gapped cold wallet.The contract is designed for TON validators that have enough self stake to validate by themselves without relying on third-party nominators.

The contract provides an alternative simplified implementation for the core team’s [Nominator Pool](https://github.com/ton-blockchain/nominator-pool/) smart contract that supports a single nominator only. The benefit of this implementation is that it's more secure since the attack surface is considerably smaller. This is due to a massive reduction in complexity of the Nominator Pool that has to support multiple third-party nominators.

The Single Nominator smart contract has undergone a thorough [security audit](https://github.com/orbs-network/single-nominator/blob/main/certik-audit.pdf) by TON’s most reputable auditor [Certik](https://www.certik.com/), which is also the major auditor of the TON blockchain itself and has recently announced a [partnership](https://twitter.com/CertiK/status/1608146781690384388?ref_src=twsrc%5Etfw) with TON to audit future projects on the network.


The Single Nominator smart contract code is implemented and maintained by [Orbs Network](https://www.orbs.com/). Orbs is one of the most prominent ecosystem contributors to TON, with projects like TON Minter and TON Contract Verifier. Orbs is also a participant in TON’s ecosystem fund in an effort to support ecosystem growth. 

**Single Nominator is intended to be the go-to solution for TON validators that have enough stake to validate by themselves.**


### Comparison of existing alternatives

Assuming that you are a validator with enough stake to validate by yourself, there are currently 3 main alternative setups you can use with MyTonCtrl:

**1. Using a Hot Wallet**

This is the simplest setup where MyTonCtrl is connected to the same standard wallet that holds the staking funds. Since this wallet is connected to the Internet, it is considered a hot wallet. 

This method is the most insecure because an attacker can compromise the private key since the private key is stored on a machine connected to the Internet. With this private key the attacker can send all staking funds to anyone.

![option1](/assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/image1.png)


**2. Using Restricted-wallet**

This setup replaces the standard wallet with the [restricted-wallet](https://github.com/EmelyanenkoK/nomination-contract/blob/master/restricted-wallet/wallet.fc) smart contract that allows outgoing transactions to be sent only to restricted destinations such as the Elector and the owner's address.

The restricted wallet is unmaintained (it was replaced by [nominator-pool](https://github.com/ton-blockchain/nominator-pool)) and has unresolved attack vectors like gas drainage attacks. Since the same wallet holds both gas fees and the stake principal in the same balance, an attacker that compromises the private key can generate transactions that will cause significant principal losses. In addition, there's a race condition between the attacker and the owner when trying to withdraw due to seqno collisions.

![option2](/assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/image2.png)


**3. Using Nominator Pool**

The [nominator-pool](https://github.com/ton-blockchain/nominator-pool) smart contract was the first to introduce a clear separation between the owners of the stake (nominators) and the validator that is connected to the Internet. This setup supports up to 40 nominators staking together on the same validator.

![option3](/assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/image3.png)


The nominator pool contract is somewhat complex due to the support of 40 concurrent nominators. In addition, the contract has to protect the nominators from the contract deployer because those are separate entities. This setup is considered secure but is very difficult to audit in full due to the size of the attack surface. Using this solution makes sense mostly when the validator does not have enough stake to validate alone or wants to do a rev-share type model with other third-party stakeholders.

As can be seen, the above 3 options each have their own drawbacks and security risks. 

Introducing the fourth option into the mix - 

**4. Single Nominator**

[Single Nominator](https://github.com/orbs-network/single-nominator) is a very simplified version of the nominator pool that supports a single nominator and does not need to protect this nominator from the contract deployer as they are the same entity.

![option4](/assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/image4.png)


If you have a single nominator that holds all stake for validation, this is the most secure setup you can use. On top of the simplicity, this contract provides the owner with multiple emergency safeguards that can recover stake even in extreme scenarios like Elector upgrades that break the recover stake interface.


### Mitigated Attack Vectors

The Single Nominator contract mitigates possible attack vectors as follows:

- The validator node requires a hot wallet to sign new blocks. This wallet is inherently insecure because its private key is connected to the Internet. Even if this key is compromised, the _Validator_ cannot extract the funds used for validation. Only _Owner_ can withdraw these funds.
- Even if _Validator_ wallet is compromised, _Owner_ can tell _SingleNominator_ to change the validator address. This will prevent the attacker from interacting with _SingleNominator_ further. There is no race condition here, _Owner_ will always take precedence.
- SingleNominator balance holds the principal staking funds only - its balance is not used for gas fees. Gas money for entering election cycles is held in the Validator wallet. This prevents an attacker that compromised the validator from draining the principal via a gas spending attack.
- _SingleNominator_ verifies the format of all operations given by _Validator_ to ensure it doesn't forward invalid messages to the Elector.
- In an emergency, for example if _Elector_ contract was upgraded and changed its interface, _Owner_ can still send any raw message as _SingleNominator_ to recover the stake from _Elector_.
- In extreme emergency situations, _Owner_ can set the code of _SingleNominator_ and override its current logic to address unforeseen circumstances.

Some of these attack vectors cannot be mitigated using the regular [Nominator Pool](https://github.com/ton-blockchain/nominator-pool) contract because that would allow the person running the validator to steal funds from its nominators. 

**This is not a problem with Single Nominator because Owner and Validator are owned by the same party.**


<div class='line-separator'> </div>


### Another TON product contributed by Orbs

Since first [announcing](https://www.orbs.com/Expanding-to-The-Open-Network-TON/) its expansion to TON, the Orbs project has been increasingly active in the TON ecosystem, developing and contributing key infrastructure tools for the growing TON network, as can be seen in the ecosystem map below.

![ecosysten](/assets/img/blog/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/image5.png)


As a major stakeholder and builder on TON, Orbs is running its own validator nodes. After analyzing the existing alternatives, the Orbs team has decided to develop in-house the Single Nominator smart contract. This solution provides better security for teams who are both staking their own funds and are running a TON validator node.

This tool, which we believe is currently the most secure and robust tool to run a validator node on TON, is now offered to the community, as a free open source product. The Single Nominator smart contract has undergone a thorough [security audit](https://github.com/orbs-network/single-nominator/blob/main/certik-audit.pdf) by Certik and has been verified by TON Verifier (another open source tool by Orbs). This combination sets a new standard for deploying new smart contracts on TON: audit by a reputable auditor such as Certik and contract verification by TON Verifier.

The Orbs project is proud to be a major contributor to the TON ecosystem. Stay tuned for more announcements in the near future!

