---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: stakingRewards
readMoreButton:
  - /_shared/buttons/read-more-btn.md

readLessButton:
  - /_shared/buttons/read-less-btn.md
border: true
---

The [stakingRewards](https://etherscan.io/0xB5303c22396333D9D27Dc45bDcC8E7Fc502b4B32) contract manages the staking rewards state of the participants in the PoS ecosystem. The staking rewards architecture is based on the rewards per share architecture common in framing pools. The contract architecture was designed for the Orbs PoS architecture which is based on 3 levels: global allocation, committee Guardians receiving their share based on their weight, and delegators receiving a portion of their Guardian rewards based on their stake.
