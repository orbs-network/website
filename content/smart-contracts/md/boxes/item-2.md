---
layout: partials/shared/boxes/box
image: /assets/img/smart-contracts/img-2.svg
---

##### initializationAdmin

The initializationAdmin is responsible to initialize the contracts state, from administrative parameters to network migrated state such as delegations, or guardians list. The initializationAdmin is set to the contract deployer and his actions may be considered as an extension to the contact constructor. The initializationAdmin is a highly privileged role, targeting migration periods, it can not be transferred and the role is revoked once initialization is completed.
