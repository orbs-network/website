---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Orbs-V5-Update/image1.jpg
blogUrl: Orbs-V5-Update
date: 2026-06-02
title: "Orbs V5 Update: Upgrading the Execution Layer for On-Chain Trading"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "Committee Sync MVP is live on Arbitrum and Ethereum — V5 upgrades the execution layer underneath Orbs trading protocols with broader Guardian verification and less per-chain overhead."
publish_at: 2026-06-02 09:00
---

## TL;DR

*Orbs V5 development has hit a major milestone: the **Committee Sync MVP** is live on Arbitrum and Ethereum, continuously syncing the L3 sub-committee state on-chain. V5 is the next evolution of the same mission we've been on: enabling fast, reliable, secure on-chain trading. With V5, we're upgrading the execution layer that already sits underneath Orbs trading protocols — same job, better rails.*

<div class='line-separator'> </div>

When we [announced Orbs V4](https://www.orbs.com/Announcing-Orbs-V4/) two years ago, the goal was clear — make the L3 production-grade for the rapidly growing demand from our DEX trading protocols. Since V4, Orbs has processed **over $14B in volume** across [dTWAP](https://www.orbs.com/dtwap/), [dLIMIT](https://www.orbs.com/dlimit/), [Liquidity Hub](https://www.orbs.com/liquidity-hub/), and [Perpetual Hub](https://www.orbs.com/perpetual-hub/), with [dSLTP](https://www.orbs.com/dsltp/) and [Orbs Agentic](https://www.orbs.com/agentic) joining the lineup more recently. 30+ DEX integrations across 10+ chains, $3.2M+ in protocol revenue, and 1B+ ORBS staked securing the network.

V5 keeps that focus and sharpens it. Orbs is — and remains — **the execution layer for on-chain trading**. What V5 changes is *how* that execution gets verified on the destination chain. Same job always done — enabling DEXs to offer advanced trading features they can't run efficiently on-chain themselves — done with lower per-chain overhead, broader Guardian verification, and less integration friction.

## The Gap V5 Closes

Advanced on-chain trading — TWAPs, limit orders, stop-loss and take-profit, perps execution, agentic trading — needs continuous monitoring and computation that no L1 or L2 can run cost-effectively for thousands of users in parallel. That gap is exactly what Orbs has been filling.

The prevailing alternatives across the industry are still painful:

- **Centralized keepers** — fast but a single point of failure
- **Bridges** — high-risk fund custody and a long history of catastrophic exploits
- **Per-chain re-verification of state** — gas-prohibitive and fragmented

V4 already addressed this differently — using L3 PoS Guardians to execute and sign off-chain trading logic that on-chain contracts can trust. V5 takes that same architecture and rebuilds the propagation layer so the verification happens with less overhead, broader Guardian participation, and across more chains.

## What V5 Adds: Committee Sync

V5 adds **Committee Sync** — a new mechanism for propagating the L3 committee's authoritative state to EVM chains via collected Guardian signatures.

How it works in the context of Orbs trading products:

1. An Orbs executor (running dTWAP, dLIMIT, dSLTP, Perpetual Hub, Liquidity Hub, or Agentic logic) produces a signed action off-chain — same as today.
2. The Orbs L3 PoS Guardian network verifies that executor's identity and registers it in a decentralized registry.
3. **Committee Sync** propagates that registry state to target chains using collected Guardian signatures.
4. The smart contract on Arbitrum, Ethereum, or any supported chain checks the local registrar and executes with security guarantees enforced by the Orbs PoS Guardian set — committee threshold, Guardian signatures, and registry rules — all verifiable on-chain.

The key principle: **we sync using signatures, not by centralized locked funds.** No liquidity flows through Orbs infrastructure. There's no bridge, no honeypot, no custody. There's just authoritative state — produced by the L3 committee under threshold signing rules — replicated cheaply across chains.

## How V5 Compares to Common Alternatives

**What flows across chains**

- Centralized Keepers: Trigger calls only
- Bridges: Liquid funds
- Orbs V5 Execution Layer: Authoritative signatures only

**Trust model**

- Centralized Keepers: Single operator
- Bridges: Limited multisig / committee
- Orbs V5 Execution Layer: Decentralized PoS Guardians

**Triggering**

- Centralized Keepers: Centralized
- Bridges: Centralized or limited committee
- Orbs V5 Execution Layer: Client-side, permissionless, deterministic

**Primary risk**

- Centralized Keepers: Operator failure / censorship
- Bridges: Custody / exploit drains funds
- Orbs V5 Execution Layer: Lower custody risk — no funds held by Orbs

**Infrastructure**

- Centralized Keepers: Proprietary
- Bridges: Proprietary
- Orbs V5 Execution Layer: Open node software, run by Guardians

Same Orbs we've been for nine years — operating a decentralized PoS network signing real production traffic — with a meaningfully better mechanism for getting that work proven on the chains where the trades actually settle.

## Phase 1 — Subnet Sync MVP — Is Live

Phase 1 is already deployed and operational on Arbitrum and Ethereum:

- Smart contracts deployed and syncing
- Active sub-committee members signing
- Nonces being propagated and verified on-chain
- Dashboard showing all sync events
- A specialized subnet running the propagation layer, with state updates signed by the L3 committee and posted on-chain — no manual triggering in the propagation path

## What's Coming Next in V5

Phase 1 is the foundation. The roadmap from here:

- **Multi-chain scaling** — dynamic chainID support so Committee Sync extends to every major EVM chain (Base, Polygon, BSC, Sonic, Linea, Avalanche, Berachain, Monad, and more)
- **Nonce versioning and signature persistence** — so historical state can be queried and replayed
- **Subnet expansion** — more specialized nodes, broader geographic distribution, deploying to the entire Orbs network
- **VM-Lambda backend stabilization** — RPC abilities for subnets (already shipped), full backward compatibility with Rvault and Auto-compound scripts powering existing dTWAP/dLIMIT/dSLTP flows
- **V5 Installer rollout** — the new node software that brings every Guardian onto the V5 architecture, including eth-reader sync stabilization

Current estimate: ~5–6 weeks of concurrent calendar work, with full delivery in roughly 11–12 weeks assuming no major issues. Things take the time they take, and we'd rather ship something solid than something fast.

## What V5 Means For You

If you're an **Orbs ecosystem user**: nothing breaks. Every existing product — dTWAP, dLIMIT, dSLTP, Liquidity Hub, Perpetual Hub, Orbs Agentic — keeps running with all of our partners, with a stronger, more verifiable foundation underneath.

If you're a **DEX or protocol team**: the trading features you already integrate from Orbs become cheaper to verify, easier to extend across chains, and more decentralized end-to-end. Same products, better plumbing.

If you're an **Orbs Guardian**: your role expands. The same signing work you do today now propagates further, with less per-chain overhead and more value per signature.

If you're an **ORBS holder**: every chain V5 expands to, and every product that benefits from the new execution layer, creates more opportunities for network usage, throughput, and protocol revenue.

## Closing Thoughts

V3 introduced Layer 3. V4 made it production-grade. **V5 makes the execution layer leaner, more decentralized, and more chain-agnostic.**

We're still building the most reliable, decentralized execution layer in crypto for on-chain trading — battle-tested by billions in volume, with no known exploits and no material downtime. V5 upgrades the rails underneath for even stronger execution.

Committee Sync is the first step; the rest of V5 rolls out from here.

<div class='line-separator'> </div>

*Learn more: [orbs.com/overview](https://www.orbs.com/overview)*

*Stake ORBS: [staking.orbs.network](https://staking.orbs.network/)*

<div class='line-separator'> </div>

**About Orbs**

Orbs is a decentralized Layer-3 (L3) blockchain designed specifically for advanced on-chain trading. Utilizing a Proof-of-Stake consensus, Orbs acts as a supplementary execution layer, facilitating complex logic and scripts beyond the native functionalities of smart contracts. Orbs-powered protocols, including dLIMIT, dTWAP, Liquidity Hub, and Perpetual Hub, push the boundaries of DeFi by introducing CeFi-level execution to on-chain trading.

With a global team of over forty dedicated contributors based in Tel Aviv, London, New York, Tokyo, Seoul, Lisbon, and Limassol, Orbs continues to innovate at the forefront of blockchain technology.

For more information, visit www.orbs.com or join our community:

Telegram: https://t.me/OrbsNetwork

X: https://x.com/orbs_network
