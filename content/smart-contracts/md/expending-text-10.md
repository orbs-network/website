---
layout: partials/common/text-with-title
linesLimit: 3
title: "Fees wallets: generalFeesWallet and certifiedFeesWallet"
readMoreButton: read more
readLessButton: read less
---

The fees wallets maintain the subscription fees paid by virtual chains. Two separate instances of fees wallets are deployed one for general virtual chains fees and one for certified virtual chains fees.

The fees wallets store the subscription fees in 30 days buckets, to provide an accurate division of the fees for each time period. The two fees wallets client, the feesAndBootstrapRewards, collect the paid fees for the time period since the last collect.
