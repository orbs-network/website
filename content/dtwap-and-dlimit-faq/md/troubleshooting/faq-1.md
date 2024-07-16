---
layout: partials/shared/opening-box
title: My limit orders seem to be using a lot of gas, why is that?
color: "#E61EA9"
---

The protocol uses an [English auction](https://en.wikipedia.org/wiki/English_auction) bidding war mechanism to ensure that the execution price is as close as possible to the limit price set by the user. As a result, the winning taker has to send 2 transactions: bid and fill. This means that a limit order costs twice as much in gas in comparison to a regular swap order. In addition, due to the bidding war taking some time between the bid and fill, takers add a small slippage percent as buffer to their bid expected output (similar to what a user would do when executing a normal swap through the UI) to ensure their transactions go through in a reasonable time but still will win the bid as best output.

In most L1/L2 gas fees are mostly negligible which means the benefits of the bidding process far outweighs the additional gas costs. Still, users should be aware of this in times of gas spikes or when executing very small order sizes.

To visualize an example, suppose a normal swap costs $0.20 and gas prices are constant over time. Using TWAP for the exact same route over 10 chunks will cost 0.2 x 10 x 2 = $4, at least.
