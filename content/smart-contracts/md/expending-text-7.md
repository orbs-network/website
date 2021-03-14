---
layout: partials/common/text-with-title
linesLimit: 3
title: stakingRewards
readMoreButton: read more
readLessButton: read less
border: true
---

The stakingRewards contract manages the staking rewards state of the participants in the PoS ecosystem. The staking rewards architecture is based on the rewards per share architecture common in framing pools. The contract architecture was designed for the Orbs PoS architecture which is based on 3 levels: global allocation, committee guardians receiving their share based on their weight, and delegators receiving a portion of their guardian rewards based on their stake.

The staking rewards contract is updated upon two events: an update to a delegator’s stake and a change in a guardian’s committee membership. A participant may claim his staking rewards that are staked in the staking contract and the system state is updated accordingly. The staking withdraws funds from the stakingRewardsWallet holds tokens up to the total unclaimed amount for all participants.
