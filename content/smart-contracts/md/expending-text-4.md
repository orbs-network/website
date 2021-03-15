---
layout: partials/common/expendable-text-box
linesLimit: 3
title: delegations
readMoreButton: read more
readLessButton: read less
border: true
---

The delegations contract manages the delegation database for each participant in Orbs PoS. The delegation contract holds for participant his selected guardian and the participant’s self-stake as well as the stake delegated to the participant.

On each change in a participant’s delegation, self stake or delegated stake, the contract notifies the stakingRewards contract that calculates the rewards accordingly. In addition, the delegations contract notifies the elections contract upon any change in a participant’s delegated stake, masking the delegator’s notation from the election contract.
