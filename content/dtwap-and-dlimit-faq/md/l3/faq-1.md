---
layout: partials/shared/opening-box
title: What is the role of the Orbs network in the protocol?
color: "#E61EA9"
---

The [Orbs Network](https://www.orbs.com/) is an open, decentralized and public blockchain infrastructure executed by a secure network of permissionless validators (known as “Guardians”) using Proof-of-Stake (PoS) consensus. Orbs is optimized to provide “L3” services, working in conjunction with existing L1 and L2 layers and acting as a “decentralized backend” that enhances the capabilities of EVM smart contracts. Orbs Network mainnet is live since 2019 and has dozens of active validators staked with over $100M.

The network provides its [L3 services](https://www.orbs.com/overview/) by operating as a decentralized serverless cloud that allows developers to design applications that extend the capabilities of their smart contracts without relying on traditional centralized server solutions. These applications are deployed to be executed by the Orbs Guardians in a decentralized way.

**As part of the dTWAP protocol, Orbs Guardians will run software utilizing [ORBS-VM](https://www.orbs.com/execution-services/) that acts as the single honest bidder that is required for the dTWAP protocol to run optimally,ensure the SLA and achieve prices that track the spot market price as closely as possible.**

The application run by Orbs Guardians will, in a decentralized manner, monitor the dTWAP Smart Contract. When an order has been sent and a chunk is open for bids, Orbs Guardians will automatically calculate and submit an honest bid. The fee component of the bid will include only a request to be compensated for the estimated gas fees.

By automatically creating honest bids that are hardcoded to only specify a minimal gas fee and utilizing the best available routing tools selected by the DEX doing the integration, the Orbs Guardians will provide a strong level of assurance that the trades executed through the DEX’s UI and the dTWAP contract track spot market prices as closely as possible.
