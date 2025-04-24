---
layout: partials/shared/mappers/blog-mapper
image: 
blogUrl: dTWAP-dLIMIT-Disclosure-2025-04-03
date: 2025-04-03
title: "dTWAP/dLIMIT Disclosure 2025-04-03"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "Orbs’ dTWAP/dLIMIT protocol has been operating for over three years across eight chains and 15 DEXs and has a strong track record of reliability. As an open protocol, anyone can place bids on orders and fill them on the source chain, with Orbs Network takers acting as reliable participants to ensure smooth execution."
---

### Summary

Orbs’ [dTWAP/dLIMIT protocol](https://www.orbs.com/dtwap/) has been operating for over three years across eight chains and 15 DEXs and has a strong track record of reliability. As an open protocol, anyone can place bids on orders and fill them on the source chain, with Orbs Network takers acting as reliable participants to ensure smooth execution.  

Recently, we noticed new activity on the BNB Chain where a wallet was interacting with the system by placing orders with very low gas prices. While initially, this wallet seemed to be behaving normally and filling orders at market prices, upon further analysis, we identified that **36 specific orders** were filled at prices outside the expected range in rare cases. These rare instances occurred due to the following reasons:

**1\.** Orbs takers didn’t bid on specific chunks. This happened due to occasional disruptions between the takers and the source chain or temporary RPC or network issues or where internal taker logic does not bid on a chunk in a specific block.  
**2\.** The order was a market order without downside price protection, which allowed the order to be filled at an unfavorable price.

These cases, though rare, led to 36 orders experiencing less favorable outcomes. Importantly, the activity was isolated to the BNB Chain and PancakeSwap, with no other chains or integrations affected.


### Immediate Actions and Improvements

In response, the Orbs team swiftly implemented on-chain defensive measures to prevent the wallet from continuing to fill orders at unideal prices. Additionally, we upgraded the dTWAP contract by integrating a permissioned exchange adapter. This adapter ensures that only verified takers can place bids, eliminating the risk of such occurrences moving forward.

The upgrade has already been deployed on PancakeSwap, and we are confident it will safeguard against similar situations. As a precaution, we recommend that users cancel and resubmit any existing dTWAP/dLIMIT orders placed before the upgrade at 15:45 UTC. 

The malicious wallet ([0x38ac1f80c033a86ece34dbc2d8dc0f37eb64a96a](https://bscscan.com/address/0x38ac1f80c033a86ece34dbc2d8dc0f37eb64a96a)) appears to be a very active wallet with history on BNB, funded by centralized exchanges, whom we have contacted in an attempt to prevent further activities. In addition, the wallet’s owner recently purchased the ENS domain "orbs.bnb" — likely to create confusion and obscure their actions. For the avoidance of doubt, the wallet is not affiliated with Orbs in any way and is using Orbs trademark without consent. We are reporting this wallet to Binance, BSCScan, and other relevant platforms to ensure that appropriate action is taken.

### User Compensation

The Orbs team's dTWAP monitoring tools quickly identified the issue and enabled immediate action. However, **36 orders were impacted during this period, with a total value of $152,496.26 associated with the affected orders.** The Orbs team has fully reimbursed the affected users by sending the equivalent token amount directly to their wallets.

The list of affected wallets can be found [here](https://docs.google.com/spreadsheets/d/1hdkhoVapYc0Q1nAgZjwRskbTjDFHPRGAiAB7esPoRSw/edit?usp=sharing).

All 36 order wallets have been fully reimbursed, with the Orbs team sending a total value of $152,496.26 across all impacted wallets. Each wallet received the respective amount of destination tokens based on what they were originally intended to receive in targeted chunks.

### Next Steps

Orbs is a decentralized Layer-3 (L3) blockchain infrastructure focused on building advanced on-chain trading protocols in DeFi. Transparency, security, and accountability are core values for Orbs, and we are committed to ensuring the continued safety and integrity of our platform.

Although no users reported unfavorable outcomes or discrepancies with their funds, we proactively disclosed the incident to the community and worked closely with PancakeSwap to ensure full resolution. Additionally, we have fully reimbursed all affected users from our own treasury, ensuring they were made whole.

The swift response and effective remediation steps taken by the Orbs team highlight the resilience of the protocol and our ongoing commitment to securing our ecosystem. We continually work to improve our contracts. While several independent audits were completed when the protocol was first implemented ([1](https://drive.google.com/file/d/1xUZN5RrNvszaPDJuJjfeG3ig14Vo2aaE/view),[2](https://drive.google.com/file/d/1ASt3_mWwtQ0IfKqBHebnj_KGJWntaNJs/view)) we remain committed to ongoing security through additional audits, bug bounties, and other proactive measures to minimize future risks.

We are actively working to identify the owner of the wallet involved and are engaging with centralized exchanges, on-chain analytics firms, and relevant authorities to ensure accountability.
