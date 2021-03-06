---
layout: partials/shared/expendable-text-box
title: Virtual Chains

readMoreButton:
  - /_shared/buttons/read-more-btn.md

readLessButton:
  - /_shared/buttons/read-less-btn.md
extra:
  - extra.md
---

Every application running on Orbs typically runs on its own virtual chain. Virtualization provides applications with an isolated environment while utilizing a shared physical infrastructure of nodes. Each virtual chain maintains its own separate chain of blocks, state, and runs its own concurrent instance of consensus. All Orbs validators run all virtual chains in parallel, making the permissionless pool of validators completely shared and staked across the full network. This provides applications with the security and decentralization of the entire network while maintaining a strong degree of independence.

Consensus on transactions of different virtual chains can be run independently and are run concurrently on separate resources. The ledgers of virtual chains can also be maintained independently and their compute can be performed in parallel. Moreover, the isolation of state for each virtual chain reduces the memory requirements of the network’s virtual machine.
