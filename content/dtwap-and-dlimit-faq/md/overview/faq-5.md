---
layout: partials/shared/opening-box
title: Should I use a dTWAP-market or dTWAP-limit order?
color: "#E61EA9"
---

When choosing between a dTWAP-market and dTWAP-limit order, consider the following:
A dTWAP-limit order provides a safeguard by ensuring a minimum output token amount based on a specified limit price. However, if the market price at execution is less favorable than the limit price, the order may only partially fill or remain unfilled by the order's expiration.
Conversely, a dTWAP-market order guarantees full execution by the order's expiry, but each segment of the order is executed at the available market price. This can result in unexpected prices, especially during periods of high volatility or when liquidity drops, potentially causing significant price impact.
