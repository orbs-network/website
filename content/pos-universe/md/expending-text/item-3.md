---
layout: partials/shared/expendable-text-box
linesLimit: 3
title: PoS on Ethereum
readMoreButton: read more
readLessButton: read less
border: true
---

Being a hybrid Blockchain, Orbs has always been able to utilize the benefits of both the Orbs PoS architecture along with the benefits of Ethereum - an external objective blockchain for the PoS logic.

ORBS token, staking, delegation and voting already operate over Ethereum contracts, utilizing Ethereum’s value as an objective auditor, thus the Orbs platform’s architecture runs the core of the election logic on Ethereum. The entire election logic, reward calculation and distribution are carried out using Ethereum contracts providing multiple advantages.

First, it provides a high level of transparency, in particular to light clients. Orbs clients rely on the elected set of validators as the foundation on which applications’ data correctness is based. The ability of any application running on top of Orbs to validate the elected validators set by a simple light client, with no need to constantly audit the election process and PoS logic, is of high value to business applications.

Second, as the token, the subscription payments and the staking are performed on Ethereum, a valid state of the elected validator nodes set on Ethereum is required for full automation of Orbs fees and rewards distribution.

Third, the PoS over PoW architecture provides additional security to the network. The use of two networks allows the Orbs Network to enjoy the aggregate protection of the combined networks, as any attacker would be required to incur the costs of attacking them both. Specifically, using Ethereum, which has a robust ecosystem whose participants are, in large part, impartial regarding what happens on the Orbs Network, makes it difficult for an attacker to exploit Ethereum to launch an attack on Orbs. The security advantages of this architecture manifest in a variety of ways. For example, it provides a measure against long-range attacks, in which the attacker creates an alternative chain starting with the same genesis block that is indistinguishable from the valid chain, and then misleading users to use the malicious chain. PoS architectures are susceptible to long-range attacks because there is no extra cost to creating long chains, unlike in PoW chains, where creating a long malicious chain would involve intensive computational resources. Thus, PoS typically requires applications to audit all the network traffic in order to validate the current PoS state. Orbs’ architecture avoids this problem by taking advantage of the security provided by Ethereum.

Finally, the use of this hybrid architecture ensures the integrity of elections on Orbs, since the Orbs Guardians are not entrusted to process their own election. Processing the elections on the Ethereum network provides an external guarantee that the Orbs Guardians cannot manipulate the election process.
