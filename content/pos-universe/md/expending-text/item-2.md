---
layout: partials/common/expendable-text-box
linesLimit: 3
title: A New Rewards Assignment and Distribution Architecture
readMoreButton: read more
readLessButton: read less
border: true
---

The Guardians are the key players responsible for network security and operation. Guardians are expected to build a community of Delegators that trust them to truthfully represent their and the network’s interests. Providing the Guardians with the ability to set the level of rewards that will be distributed to their respective Delegators tightens their relationships with their communities. Staking rewards are set by the Guardians, who determine how to split the rewards amongst their Delegators, while a minimum rate of compensation to Guardians is imposed by the protocol.

Guardians play an important role in the reward distribution process. A new automated mechanism to set the level of rewards that will be distributed to their Delegators was enabled at the protocol level and featured as part of the updated Guardian interface. The mechanism calculates the amount of rewards that each of the Guardian’s Delegators is entitled to, based on the Delegators’ stake over time and the allocated ratio. A maximum annual reward equal to 12% of total delegated stake is awarded, addressing the tradeoff between an appealing award and sustainable inflation (see Rewards). 1⁄3 of the rewards are guaranteed to the Guardians (i.e., up to 4% annual reward maximum), while the default values for the distribution application grant the remaining 2⁄3 to Delegators (i.e., up to 8% annual reward maximum). The new automated tool allows the Guardians to modify the Delegators’ rewards split.

This optimized reward distribution architecture provides a scalable and gas-efficient reward distribution that occurs through the protocol itself. Under this system, once the level of distributions is set by the Guardians, the respective rewards are distributed by the protocol directly to both the Guardians and the Delegators, on a continuous basis. Delegators and Guardians can then decide when they wish to claim their reward tokens.

This has multiple important benefits such as added flexibility to the Guardians and Delegators, who may claim the staking rewards at any point in time, significant reduction in costs for Guardians, and more.

To learn more of our distribution mechanism, read our documentation​ on GitHub (insert link).
