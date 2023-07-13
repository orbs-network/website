---
layout: partials/shared/opening-box
title: My limit price was hit but my order was not executed, why is that?
color: "#E61EA9"
---

When setting up a limit order and specifying a limit price, users will see in the UI the minimum amount of destination tokens they will receive if the order is filled. Only takers making bids equal or better than this amount will be eligible to fill the order. This amount takes into account gas costs and trading fees.

Therefore, if the current market price hits the limit price but the takers cannot satisfy the requirement of the minimum amount output because of additional gas costs & fees, the order will not be executed. The order should get executed once the market price exceeds the limit price, including the additional costs.

In other words, as the fees are paid from the output token amount, the limit price includes the gas & trading fees and so users should take this into account when setting up the price. For example, a very small order’s gas fees can total a very large percentage of the order output, reflecting an actual limit price that is not competitive with the spot market price.
