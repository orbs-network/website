---
layout: partials/shared/expendable-text-box
linesLimit: 3
title: "PROTOCOL WALLETS: STAKING REWARDS WALLET AND BOOTSTRAP REWARDS WALLET"
readMoreButton: read more
readLessButton: read less
border: true
---

The stakingRewardsWallet and bootstrapRewardsWallet hold the protocol fund allowing the relevant rewards contract to withdraw funds up to the maximal rate that was set. The protocol wallets provide a simple, and thus secure, mechanism to store the protocol funds. The protocol wallets are disconnected from the PoS contracts governance and management infrastructure and are managed by two types of administrators: a functional administrator that sets the wallet’s client and a migration administrator that controls the withdrawal of funds.
