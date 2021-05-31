---
layout: partials/shared/simple-md
---

The staking rewards contract is updated upon two events: an update to a delegator’s stake and a change in a guardian’s committee membership. A participant may claim his staking rewards that are staked in the staking contract and the system state is updated accordingly. The staking withdraws funds from the stakingRewardsWallet holds tokens up to the total unclaimed amount for all participants.
