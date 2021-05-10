---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-network-v1-3-6-fixes/bg.jpg
blogUrl: orbs-network-v1-3-6-fixes
date: 2019-12-19
title: Orbs Network — v1.3.6 fixes
author:
  - ../common/authors/YonathanL.md
type:
short_description: (https://www.orbs.com/getting-ready-for-round-iii-of-orbs-rewards-distribution/).
---

(https://www.orbs.com/getting-ready-for-round-iii-of-orbs-rewards-distribution/).

The problem originated in the Delegate event in the OrbsVoting contract Delegate function, which was not being forwarded. As the investigation continued, it was apparent that data is missing starting from around November 24th. This was a result of a network update that was made that day, when version 1.3.2 was made available to the network.

[Version 1.3.2](https://github.com/orbs-network/orbs-network-go/releases/tag/v1.3.2) included multiple fixes and improvements, one of which was an upgrade to the go-ethereum library used to enable access to Ethereum from within Orbs contracts. That version update includes changes to the way ABI is parsed by the library - if a partial struct is now given to the ABI parsing engine, it will fail the parse if it cannot find all the fields to unpack data to. Thus, when the elections and reward contact receives the delegate event transaction hash and validates the event within Orbs, the parsing was being made to a struct of:

**type Delegate struct {**

**Delegator \[20\]byte**

**To        \[20\]byte**

**}**

Instead of:

**type Delegate struct {**

**Delegator \[20\]byte**

**To        \[20\]byte**

**DelegationCounter \*big.Int**

**}**

This results in an error saying “delegationCounter’ field is missing.

The Orbs core team has introduced the following changes and fixes:

- Fixed the struct to properly unpack the ABI
- Wrote a test to check that the mirroring of the delegation event from Ethereum to Orbs Network works properly (the previous test wasn’t sufficiently “tight”).
- Adjusted the mirroring script to report the same error

The above fix is included in version 1.3.6 which was deployed on 17.12.2019. In addition, a fix to the calculated rewards was deployed, to ensure correct calculation.

As the network evolves, Guardians, Validators and the Orbs core team conduct checks to ensure that the behavior is correct and follows the spec. This is especially important for the rewards distribution process, which ensures the participants’ incentives and, thus, the security of the network.

Looking forward, the community is invited to develop an automated process to compare calculation results the control system and the actual - smart contract that manages the rewards.

The next reward distribution will happen at the end of December after election number 82, Ethereum block 9148900, more information can be found in Andrey’s post at [https://www.orbs.com/getting-ready-for-round-iii-of-orbs-rewards-distribution/](https://www.orbs.com/getting-ready-for-round-iii-of-orbs-rewards-distribution/)
