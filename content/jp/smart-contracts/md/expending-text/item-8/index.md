---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: feesAndBootstrapRewards
readMoreButton:
  - /jp/_shared/buttons/read-more-btn.md

readLessButton:
  - /jp/_shared/buttons/read-less-btn.md
border: true
---

The feesAndBootstrapRewards contract manages the fees and bootstrap rewards state of the guardians. The fees and bootstrap rewards architecture is similar to the architecture of the stakingRewards contract. The contract architecture is based on 2 levels: global allocation, committee guardians. The feesAndBootstrapRewards collects fees from two instances of fees wallets the certificated and general virtual chains fees.
