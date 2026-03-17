---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Introducing-Orbs-Agentic/image1.png
blogUrl: Introducing-Orbs-Agentic
date: 2026-03-17
title: "Introducing Orbs Agentic — The DeFi Agent Execution Layer"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "Orbs Agentic is a new execution layer for autonomous DeFi agents, powered by Orbs L3 infrastructure and secured by cosigned oracle verification."
---

*Autonomous execution backed by cosigned oracles*

<div class='line-separator'> </div>

The next wave of DeFi UX won't look like humans clicking around a DEX UI. It will increasingly look like software — AI agents that monitor markets, manage positions, and execute strategies continuously, with humans setting objectives and risk constraints rather than manually placing every trade.

This isn't a distant idea. The agent ecosystem is moving quickly: LangChain, CrewAI, Eliza (ai16z), MCP (Model Context Protocol), and OpenAI GPT Actions make it straightforward to give an agent "tools" that can read state and take actions. The missing piece in DeFi is less about reasoning and more about execution: a secure, production-grade layer that agents (and users) can trust for on-chain trading.

That's what we've been building. Today we're introducing **Orbs Agentic** — an execution layer for autonomous DeFi agents, powered by the same Orbs L3 infrastructure that already processes billions in on-chain volume.

## The Agent Economy Is Coming to DeFi

Over the past year, "agents" went from demos to something developers ship. Modern agents can plan multi-step workflows, call external services, and adapt based on outcomes.
DeFi is an obvious fit for this style of automation: TWAP execution, limit orders, periodic rebalancing, routing across liquidity sources, managing collateral thresholds, and basic operational tasks like monitoring positions. These are all activities where 24/7 automation is simply better than manual execution.

We're already seeing early agent-driven flows in the wild: bots that manage positions, execute DCA schedules, and run simple cross-protocol strategies. What's holding back broader adoption isn't "can an agent call a contract?" (it can). The real bottlenecks are:

- **Safety** (how you bound behavior and verify intent)
- **Execution quality** (routing, price protection, and deterministic conditions)
- **Operational reliability** (retries, partial fills, and edge cases)

As tool standards mature and wallets become safer to automate, a growing share of on-chain actions will be initiated by agents. Protocols that make secure execution easy for agents will be in a better position as this shift accelerates.

## What Is Orbs Agentic?

Orbs Agentic is the execution layer that sits between AI agents and DeFi protocols.
When an agent needs to execute a swap, place a limit order, run a TWAP strategy, or set a stop loss, it calls an Orbs Agentic tool. The Orbs Network handles the rest: execution logic, routing, and — critically — **cosigned oracle verification,** so the trade can be independently checked before it's allowed to proceed.

From the agent's perspective, Orbs Agentic exposes a single execution interface with composable parameters.

Instead of calling different endpoints for different order types, the agent defines execution parameters such as token pair, amount, timing, and price constraints. The Orbs Network handles routing, verification, and execution.

By adjusting these parameters, the same interface supports multiple execution behaviors including market swaps, limit orders, TWAP strategies, stop-loss orders, and take-profit orders.

The agent doesn't need to understand Orbs' L3 architecture or Proof-of-Stake mechanics. It makes a tool call and receives an executed, verifiable on-chain outcome. In practice, execution follows a simple intent-based flow. The agent prepares the order parameters and signs them using EIP-712 typed data. If the token hasn't been approved yet, the wallet sends an approval transaction. The signed order intent is then submitted to the Orbs relay network, which handles routing, verification through the cosigned oracle, and on-chain execution.

Another important property of this execution model is that agents do not need to manage gas. Once the order intent is signed and submitted, execution is handled by the Orbs Network infrastructure. The transaction is broadcast and executed on-chain by the network, allowing agents to operate without maintaining gas balances or handling RPC failures.

A simple example: an agent monitoring a portfolio decides it wants to accumulate into a position over the next 6 hours with defined slippage and max price impact. Instead of writing bespoke execution logic (and hoping it behaves under stress), it can call a TWAP-style execution flow via Orbs-backed infrastructure, get deterministic parameters, and rely on verification before execution.

It's also important what Orbs Agentic is *not*: it's not a new wallet, not a custodial layer, and not "AI trading." It's infrastructure for execution — the part that should be boring, measurable, and dependable.

Orbs infrastructure currently operates across multiple major EVM ecosystems, including Ethereum, BNB Chain, Polygon, Arbitrum, Base, Avalanche, Sonic, and Linea. This allows agents using Orbs Agentic to execute strategies across multiple networks using the same execution model.

## Why Orbs? Because it already exists.

This isn't Orbs "doing AI" for a headline. It's a natural extension of what Orbs has been running in production for years.

Since 2017, the Orbs Network has operated as a **Layer 3 blockchain** — a decentralized backend layer that enhances existing chains and DeFi protocols without asking them to migrate or replace their core architecture. Orbs uses **Proof-of-Stake** consensus, secured by a validator set (Guardians).

In practice, Orbs' "L3" model focuses on adding execution and coordination logic *around* the base chain (and around existing AMMs/perp venues): it can provide off-chain computation where appropriate, and then enforce outcomes via on-chain transactions, with decentralized verification in the loop. This is why Orbs products integrate into DEXs cleanly — they improve execution without requiring the DEX to become a new chain.

That same infrastructure powers execution products that many DeFi users already rely on:

- **dTWAP** — decentralized time-weighted average price orders
- **dLIMIT** — decentralized limit orders with on-chain execution guarantees
- **dSLTP** — decentralized stop-loss and take-profit orders with on-chain execution guarantees
- **Liquidity Hub** — liquidity aggregation and optimized execution across sources
- **Perpetual Hub Ultra** — advanced perpetual trading execution

These aren't whitepapers. They're live products integrated into **PancakeSwap, SushiSwap, THENA, QuickSwap, SpookySwap**, and more. Combined, they've processed **$14.1B+** in on-chain volume.

## The Cosigned Oracle — Why Agents Need Orbs

Autonomous execution changes the threat model. The question isn't only whether a trade can be executed — it's whether it can be executed **safely**.

Agents can be compromised. They can operate on stale or manipulated inputs. They can make bad inferences. And if an agent holds a hot private key with unilateral control, a single failure can become a total loss.

Orbs Agentic addresses this with the **cosigned oracle** — a verification layer designed to independently validate agent-initiated transactions before they execute.
At a high level:

1. **The agent decides** what it wants to do (swap/order/strategy), based on its policy and inputs
2. **The agent submits** execution parameters via an Orbs Agentic tool
3. **The Orbs cosigned oracle verifies** the request against objective constraints (e.g., slippage bounds, price/reference checks, and execution conditions) using decentralized oracle data
4. **Only if the request passes verification**, it is cosigned and can be executed on-chain

This splits responsibilities cleanly: the agent handles strategy, while the network provides an independent verification step. The agent can't quietly bypass verification, and the oracle can't originate actions without the agent's intent. It's a security primitive aimed at making automated execution safer by default.

Concretely, verification can cover things an agent should not be "trusted to get right" in isolation: whether the quoted price is within bounds of a reference price, whether the requested slippage is reasonable, whether an order's trigger condition actually holds, or whether an execution route matches the intent expressed in parameters.
In practice, this is the moat: agents can replicate "call a DEX router," but they can't easily replicate a decentralized, cosigned verification layer backed by a live PoS network.

## How Agents Connect

From an agent developer's perspective, Orbs Agentic is exposed as standard tool integrations. We're planning to publish execution tools across major agent frameworks and standards, including:

- **LangChain** tool integrations
- **MCP** (Model Context Protocol) servers
- **OpenAI GPT Actions**
- **CrewAI** tool definitions
- **Eliza (ai16z)** plugins

An agent built on any of these can discover and use Orbs execution tools in a native way — without bespoke integrations. The goal is simple: if an agent needs reliable on-chain execution, it should be able to "pick up" the Orbs tool just as it picks up any other capability.

For crypto-native builders, the important part is that the tool is explicit. They're not a vague "trade" endpoint; they're structured actions with parameters that can be logged, simulated, and bounded. That's what makes them usable in production agent systems with policies, auditability, and monitoring.

In other words: the agent framework handles planning and decisioning; Orbs Agentic tool handles execution in a way that's compatible with guardrails. That includes clear inputs/outputs, deterministic behavior, and the ability to reason about "what will happen" before anything is signed and broadcast.

## What This Means for the Orbs Community

For the Orbs community, Orbs Agentic is a new interface to an existing capability: decentralized execution.

**More volume through existing infrastructure.** Agent-initiated flow that routes through Orbs Agentic leverages the same L3 execution layer and validator network that powers dTWAP, dLIMIT, dSLTP and Liquidity Hub today.

**A new distribution surface.** Historically, Orbs products reached users primarily through DEX integrations (human traders on PancakeSwap, SushiSwap, etc.). An agentic tool adds an additional path: developers building automated strategies that can route through Orbs without waiting for a front-end feature to be added.

**A clearer security story for automation.** As automation becomes more common, verification becomes the differentiator. The cosigned oracle is designed to make "agent execution" compatible with the expectations of DeFi power users: verifiable constraints, decentralized checks, and a model that doesn't rely on trusting a single bot.

**The ORBS token's role.** Orbs runs on Proof-of-Stake, with ORBS staked by Guardians operating validator nodes. Those validators underpin the network services used for execution and cosigned verification. If agent-driven execution grows, the network's verification workload becomes more important — reinforcing the role of stake-backed security.

Just as importantly, this approach aligns with how sophisticated users already think about automation: you can experiment at the strategy layer, but you want the execution layer to be hardened, monitored, and designed around adversarial conditions.

## What's Next

We're shipping Orbs Agentic in phases:

**Phase 1 (Now):** A proof-of-concept is live. Agents can execute swaps and conditional orders through Orbs' infrastructure using the current execution model, and integrations are being published across major agent frameworks.

**Phase 2:** The full cosigned oracle architecture rolls out — including executor wallet contracts, a hybrid 2-of-2 multisig model for agent-wallet security, and an on-chain trust score system. The intent is to make secure agent execution not just an Orbs product feature, but an **open standard** that protocols can adopt.

The vision is straightforward: as DeFi shifts toward more automated, tool-driven usage, Orbs becomes a default execution layer for agents — focused on secure, verifiable, and efficient execution.

We've spent years building execution infrastructure for DeFi. Orbs Agentic extends that foundation to a new class of users: autonomous agents.

## Join the Conversation

If you're building in the agent ecosystem — or you're simply tracking how automation changes DeFi — we'd like your feedback.

- Follow updates on Twitter/X: [@orbs_network](https://x.com/orbs_network)
- Join the discussion on [Telegram](https://t.me/OrbsNetwork)
- Explore the [Orbs website](https://orbs.com) for technical details

<div class='line-separator'> </div>

*Written by Ran Hammer, CBO at Orbs*
