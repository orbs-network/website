---
layout: partials/shared/expendable-text-box
linesLimit: 3
title: FEES AND BOOTSTRAP REWARDS
readMoreButton: read more
readLessButton: read less
border: true
---

The feesAndBootstrapRewards contract manages the fees and bootstrap rewards state of the guardians. The fees and bootstrap rewards architecture is similar to the architecture of the stakingRewards contract. The contract architecture is based on 2 levels: global allocation, committee guardians. The feesAndBootstrapRewards collects fees from two instances of fees wallets the certificated and general virtual chains fees. In addition the feesAndBootstrapRewards withdraws bootstrap rewards from the bootstrap wallet. It may hold tokens up to the total unclaimed amount for all guardians.
