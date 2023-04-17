---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Introducing-TON-Unfreezer-by-Orbs/bg.jpg
blogUrl: Introducing-TON-Unfreezer-by-Orbs
date: 2023-04-17
title: Introducing TON Unfreezer by Orbs
author:
  - /blog/common/authors/ShaharYakir.md
type:
short_description: "TON Unfreezer is a tool contributed by the Orbs network for TON developers that need to unfreeze their contracts that have entered the frozen state due to running out of the balance reserved for paying storage fees."
---

[TON Unfreezer](https://unfreezer.ton.org/) is a tool contributed by the [Orbs network](https://www.orbs.com/) for TON developers that need to unfreeze their contracts that have entered the frozen state due to running out of the balance reserved for paying storage fees.

Every contract deployed on-chain in TON must ‘pay rent’ occasionally from its TON coin balance. The more data the contract stores in state, the higher the rent. These costs are significantly higher if the contract is deployed to the masterchain. If the contract runs out of gas for ‘rent,’ it may become frozen. This cleanup mechanism ensures the system doesn't waste resources unless fees can be paid for consuming these resources.

During the freeze, both the code and data cells of the frozen contract will be deleted. The system remembers the hashes of these two cells to allow the contract to be unfrozen and recovered. A frozen contract still retains its address and its TON coin balance.


![screenshot](/assets/img/blog/Introducing-TON-Unfreezer-by-Orbs/image1.png)


This is where the [TON.unfreezer](https://unfreezer.ton.org/) by Orbs comes into play. The tool uses an archive node to find the old values of the code cell and the data cell from before the freeze. Then, the tool sends a message to the frozen contract with some TON coin and the code cell and data cell.

This unfreeze process works by the user sending the frozen contract TON coins for gas, so it can pay its rent costs. Then, you need to send a message that contains the contents of the code cell and the data cell at the moment of freezing. If the contents of both cells match the hashes, the system will recover the contract and use the supplied cells to restore the deleted data. With TON Unfreezer, this process can now be easily done by everyone with an intuitive, user-friendly UI.

TON Unfreezer joins a growing number of contributions that the Orbs team has made to The Open Network. The tool has already been adopted by the foundation's official domain and integrated with their GitHub repository. 

If you’d like to learn more about using Unfreezer, please join: https://t.me/tonunfreezer

For happenings with the Orbs protocol, follow us on [Twitter](https://twitter.com/orbs_network) and join our [community](https://t.me/OrbsNetwork) to get involved. 



