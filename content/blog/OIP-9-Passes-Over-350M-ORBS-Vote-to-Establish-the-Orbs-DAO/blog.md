---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/OIP-9-Passes-Over-350M-ORBS-Vote-to-Establish-the-Orbs-DAO/image1.png
blogUrl: OIP-9-Passes-Over-350M-ORBS-Vote-to-Establish-the-Orbs-DAO
date: 2026-08-17
title: "OIP-9 Passes: Over 350M ORBS Vote to Establish the Orbs DAO"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "OIP-9, the proposal to establish the Orbs DAO, has passed with 351.97 million ORBS voting to approve — zero against, zero abstentions, and quorum cleared more than three times over."
publish_at: "2026-08-17T12:00:00Z"
---

The vote is in. OIP-9, the proposal to establish the Orbs DAO, has passed.

Between July 30 and August 6, staked ORBS holders cast their votes on Snapshot. The result was unambiguous: **351.97 million ORBS voted to approve**, with zero votes against and zero abstentions. The quorum requirement was 100 million staked ORBS. The community cleared it more than three times over.

This is not a symbolic milestone. The DAO now holds real, on-chain authority over defined areas of the Orbs protocol, and everything it controls can be independently verified by anyone. Here is exactly what that means.

## What the DAO governs

At launch, the DAO's mandate covers four areas. Anything not listed here remains outside the DAO's authority and can only be added through a future OIP vote.

**1. Protocol parameters.** The DAO Multisig is set as the Functional Manager in the Orbs PoS smart contract architecture, giving the DAO control over defined protocol parameters, including PoS staking reward rates.

**2. Guardian certification.** The DAO Multisig is also set as the Certification Manager on the Certification contract, giving the DAO authority over Guardian certifications and revocations.

**3. Major network upgrades.** All major network upgrades, including the remaining Orbs V5 milestones and any future versions, require approval by an OIP vote.

**4. New protocol deployments.** Deploying new protocols and product modules that utilise the Orbs network requires approval by an OIP vote.

The first two areas are enforced on-chain through multisig roles hardcoded in the protocol contracts. The last two are governed off-chain, backed by a binding commitment that no such change will be made without an approved OIP vote. Our aspiration is for every area of DAO authority to eventually be enforced on-chain.

## The DAO on-chain

The Orbs DAO lives on-chain as a single multisig wallet, deployed at the same address on Ethereum and Polygon:

- **Address:** [`0x95899d7be0eeee6Af05C4D4B90A66B3dd7Aa4369`](https://etherscan.io/address/0x95899d7be0eeee6Af05C4D4B90A66B3dd7Aa4369) ([Polygonscan](https://polygonscan.com/address/0x95899d7be0eeee6Af05C4D4B90A66B3dd7Aa4369))
- **Threshold:** 2-of-4
- **Roles:** Functional Manager (Orbs PoS architecture) and Certification Manager (Certification contract)

The multisig is operated in the initial phase by four Orbs team members. The owner addresses can be verified against the contract on both chains at any time:

- `0x551ba5E928860FddE68Bf721730186d4dAC1F367`
- `0xee36B237159459bbbae577908010bF1DE9662fB7`
- `0xd53a0556d0C24c4Bd56f8b148bb750842Bc9ad4e`
- `0x7f2F96597358458D6ac04b8562C6148FC61Fe47b`

The transfer of protocol roles to the DAO Multisig is complete and recorded on-chain:

- [Functional Manager transfer (Ethereum)](https://etherscan.io/tx/0x5edff02107905efe3a5fb1376802bee4a4c20f34ce8c15aed68dc95b03b51e70)
- [Certification Manager transfer (Ethereum)](https://etherscan.io/tx/0x35b27ac4b5768a7b13a616d0655ba4d38b6e8b842680c711ebbd34c47e1da47f)
- [Functional Manager transfer (Polygon)](https://polygonscan.com/tx/0xd49923232e02c9afe4a34b35a6ab0aa9fcb3cf2eeb14e25f458311065d50dc1c)
- [Certification Manager transfer (Polygon)](https://polygonscan.com/tx/0x8be0c9f5369dd1ab02a5414e14a87c983736cd5bc33c0784d0bc989b2359cf58)

## How a decision gets made

Every DAO decision follows the same path:

1. **Propose.** An OIP is drafted and discussed with the community
2. **Vote.** Staked ORBS holders vote on Snapshot under the proposal's stated rules
3. **Finalise.** Quorum and result are confirmed and the outcome is recorded
4. **Prepare.** The multisig builds the transaction and verifies it against the approved OIP
5. **Sign.** The required threshold of signers independently review and approve
6. **Execute.** The transaction runs on-chain
7. **Publish.** The transaction hash and outcome are published

Voting power belongs to ORBS staked in the Orbs PoS contract at each proposal's snapshot block. Guardians vote on behalf of their delegated stake by default, and any delegator can override that by casting their own vote. Votes typically run for 7 days with a quorum of 100 million staked ORBS, roughly 10% of total stake.

In a genuine emergency, where failing to act promptly risks financial loss or material harm to the project and a vote cannot be arranged in time, the core team may act first to the extent needed to mitigate the risk. Any such action must then be brought to a Snapshot vote for ratification, together with a full explanation.

## Verify everything

Nothing here requires trust:

- The multisig contract is verified on Etherscan and Polygonscan
- The owner set and threshold are readable directly from the contract
- The Functional Manager and Certification Manager roles are readable from the PoS and Certification contracts
- Every execution is a public transaction, and every decision is a public vote on Snapshot

## What comes next

The DAO's authority is designed to grow in stages. Future OIPs are expected to expand it into areas such as protocol revenue, burn mechanisms, liquidity strategies, grants programs and tokenomics design. Each expansion requires its own community vote.

To the 23 voters and the 352 million ORBS behind them: thank you. This is governance with real authority, built on a business with real products, real integrations and real revenue. Now we build on it together.

## Resources

- [OIP-9: Establishing the Orbs DAO](https://github.com/orbs-network/OIPs/issues/10)
- [OIP-9 vote on Snapshot](https://snapshot.box/#/s:orbs-network.eth/proposal/0x3401d773f66e162766985e531dc50743d321eb2065d8254cfaf1ec0c7a09f43b)
- [OIP repository](https://github.com/orbs-network/OIPs)
- [Orbs Snapshot space](https://snapshot.box/#/s:orbs-network.eth)
- [Orbs staking](https://staking.orbs.network/)
- [Orbs DAO documentation](https://docs.orbs.network/v3/governance/orbs-dao)

<div class='line-separator'> </div>

**About Orbs**

Orbs is a decentralized Layer-3 (L3) blockchain designed specifically for advanced on-chain trading. Utilizing a Proof-of-Stake consensus, Orbs acts as a supplementary execution layer, facilitating complex logic and scripts beyond the native functionalities of smart contracts. Orbs-powered protocols, including dLIMIT, dTWAP, dSLTP, Liquidity Hub, and Perpetual Hub, push the boundaries of DeFi by introducing CeFi-level execution to on-chain trading.

With a global team of over thirty dedicated contributors based in Tel Aviv, London, New York, Tokyo, Seoul, Lisbon, and Limassol, Orbs continues to innovate at the forefront of blockchain technology.

For more information, visit www.orbs.com or join the community:

Telegram: https://t.me/OrbsNetwork

X: https://x.com/orbs_network
