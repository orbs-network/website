---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: delegations
readMoreButton:
  - /ko/_shared/buttons/read-more-btn.md

readLessButton:
  - /ko/_shared/buttons/read-less-btn.md
border: true
---

The delegations contract manages the delegation database for each participant in Orbs PoS. The delegation contract holds for participant his selected guardian and the participant’s self-stake as well as the stake delegated to the participant. On each change in a participant’s delegation, self stake or delegated stake, the contract notifies the stakingRewards contract that calculates the rewards accordingly.
