---
layout: partials/common/text-with-title
linesLimit: 3
title: feesAndBootstrapRewards
readMoreButton: read more
readLessButton: read less
border: true
---

The committee contract manages the current committee state. The committee contract holds the current committee members and their weights. Upon an effective stake change notice from the election contract, the committee contract updates the committee member weight and emits an update event. On a request to join the committee, the committee member checks that the candidate is qualified to join.

If the candidate’s weight is higher than the committee member with the lowest weight, the candidate will join the committee instead of the minimal weight guardian. Upon a change in the committee members list or their certification, the contact notifies the stakingRewards and FeesAndBootstrap contracts on the leaving and joining members to update their rewards state.
