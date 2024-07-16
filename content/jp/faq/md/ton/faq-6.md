---
layout: partials/shared/opening-box
title: What is TON Single Nominator?
color: "#B01EE6"
---

The Single Nominator smart contract enables secure validation for TON blockchain via cold wallet - a simple firewall contract that is [easy to review.](https://github.com/orbs-network/single-nominator/blob/main/contracts/single-nominator.fc)

This is an alternative simplified implementation for the [Nominator Pool](https://github.com/ton-blockchain/nominator-pool) smart contract that supports a single nominator only. The benefit of this implementation is that it's more secure since the attack surface is considerably smaller. This is due to massive reduction in [complexity](https://github.com/ton-blockchain/nominator-pool/blob/main/func/pool.fc) of the Nominator Pool that has to support multiple third-party nominators.
Learn more [here.](https://github.com/orbs-network/single-nominator)
