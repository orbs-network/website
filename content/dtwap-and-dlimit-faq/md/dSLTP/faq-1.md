---
layout: partials/shared/opening-box
title: Should I use a stop-loss limit or stop-loss market?
color: "#1EE6CF"
---

Both order types have their advantages and risks, and choosing between them depends on your priorities.

-   **Stop-loss market orders** ensure that your order will be executed once the stop price is triggered. However, in fast or volatile markets, slippage can occur, and the executed price may be significantly worse than the trigger price. This means the amount of output tokens received could be lower than expected.

-   **Stop-loss limit orders** protect against receiving a worse price than your specified limit. Once the stop price is triggered, the order will execute only at the limit price or better. The downside is that if the market price falls below your limit, the order may not execute at all.

**In summary:**

- Stop-loss **market orders** prioritize execution but not price.

- Stop-loss **limit orders** prioritize price but not execution.