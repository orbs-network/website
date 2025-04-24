---
layout: partials/shared/opening-box
title: How should I configure my dTWAP order?
color: "#E61EA9"
---

Users need to define 3 main parameters when setting up a dTWAP order:

- 1\. **No. of Intervals**: Allows the user to specify the number of individual trades. The UI slider starts with 1 trade and allows increasing the amount of trades or manually inputting the total number in the field directly. Please note, the maximum number of intervals may be limited based on the total order size to prevent excessive gas costs.

- 2\. **Trade Interval**: sets the time gap between each individual trade. The UI starts with the minimum allowed (2 mins), which leaves the minimum amount of time for the taker bidding war and block settlement between each chunk. The user can set it to be any duration desired. A trade will never execute before this time elapses after the previous trade.


- 3\. **Max Duration**: the maximum time during which the total amount of all individual trades making up the full dTWAP order may be executed. After this deadline the trade expires, regardless of actual amounts swapped. To reach full trade execution (100% of the total order amount swapped), users should allow time for all chunks to execute, and at least the interval between each chunk to elapse. Note that all chunks may not execute in limit orders, depending on whether the price stays within the set parameters. The default recommended duration is calculated by multiplying the number of intervals by the trade interval, and then doubling this amount in order to serve as a buffer to allow sufficient time for on-chain activity. This  “recommended” max duration is the default, unless the user changes it manually, at which point it is up to the user’s selection (note that setting a duration that is shorter than the above default may result in a partially filled order).

In addition to the above, users can choose to execute each trade chunk at market or limit. These parameters provide significant flexibility to the user, allowing them to customize their dTWAP orders taking into account factors such as market conditions, price volatility, gas fees, etc.
