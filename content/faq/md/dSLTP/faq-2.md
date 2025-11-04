---
layout: partials/shared/opening-box
title: For a stop-loss limit order, how far apart should the trigger and stop price be?
color: "#1EE6CF"
---

It is recommended to set a **gap of at least 2%--3%** between the trigger price and the limit price to ensure the stop-loss order has a chance to execute.

When specifying a limit price, users will see in the UI the minimum amount of output tokens they will receive if the order is filled. Only Takers making bids equal or better than this amount will be eligible to fill the order. This amount takes into account gas costs and DEX's usual trading fees.

If Takers cannot satisfy the requirement of the minimum amount output because of additional gas costs & trading fees, the order will not be executed. 

Therefore, if there is a tiny small difference between the trigger and limit prices, orders may not execute as the taker will not be able to guarantee the minimal output token amount specified by the limit price. Setting a wider gap improves the likelihood that your stop-loss limit order will be filled successfully.