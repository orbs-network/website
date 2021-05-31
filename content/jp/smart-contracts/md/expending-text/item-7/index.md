---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: stakingRewards
readMoreButton: read more
readLessButton: read less
border: true
---

The stakingRewards contract manages the staking rewards state of the participants in the PoS ecosystem. The staking rewards architecture is based on the rewards per share architecture common in framing pools. The contract architecture was designed for the Orbs PoS architecture which is based on 3 levels: global allocation, committee guardians receiving their share based on their weight, and delegators receiving a portion of their guardian rewards based on their stake.
