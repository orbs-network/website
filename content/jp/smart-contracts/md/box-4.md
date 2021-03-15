---
layout: partials/common/box
image: /assets/img/smart-contracts/img-4.svg
---

##### registryAdmin

The committee contract manages the current committee state. The committee contract holds the current committee members and their weights. Upon an effective stake change notice from the election contract, the committee contract updates the committee member weight and emits an update event. On a request to join the committee, the committee member checks that the candidate is qualified to join.
