---
layout: partials/shared/simple-md
---

On each change in a participant’s delegation, self stake or delegated stake, the contract notifies the stakingRewards contract that calculates the rewards accordingly.
In addition, the delegations contract notifies the elections contract upon any change in a participant’s delegated stake, masking the delegator’s notation from the election contract.
