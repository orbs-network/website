---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: committee
readMoreButton: read more
readLessButton: read less
border: true
---

The [committee](https://etherscan.io/0x1a4c7891d2d04b2cd413b98bc3283c8d992f5fa7) contract manages the current committee state. The committee contract holds the current committee members and their weights. Upon an effective stake change notice from the election contract, the committee contract updates the committee member weight and emits an update event.
