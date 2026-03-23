---
layout: partials/agentic/Oracle/index
statement: "Every execution is independently verified. No single agent, wallet, or operator can push a trade through without oracle cosignature."
---

The question isn't whether a trade can execute. It's whether it can execute safely.

1. Agent decides what to do based on its policy and market inputs.
2. Agent submits execution parameters via an Orbs Agentic tool.
3. Orbs cosigned oracle provides signed input and output token prices. Smart contracts verify execution parameters and enforce slippage and price conditions to protect the user (agent).
4. If the checks pass, the oracle cosigns the execution. The transaction is then verified and enforced on-chain by the smart contracts.
