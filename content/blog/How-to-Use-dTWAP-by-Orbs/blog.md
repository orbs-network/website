---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/How-to-Use-dTWAP-by-Orbs/bg.png
blogUrl: How-to-Use-dTWAP-by-Orbs
date: 2023-08-07
title: "How to Use dTWAP by Orbs"
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "6 DEXs across 4 chains have integrated the dTWAP protocol powered by Orbs, bringing this order type to DeFi in a decentralized manner. Users can use this tool to create dTWAP orders by following the directions below."
---

### Introduction to dTWAP

TWAP (Time-weighted Average Price) is a common order type used in CeFi that breaks an order into smaller trade sizes and executes them at regular intervals. The main goal of a TWAP order is to reduce the order’s price impact. It can also be useful if a user wants to implement a dollar-cost averaging strategy (DCA) and buy a certain token on a consistent schedule (i.e. once a month).

Therefore, TWAP is best used when the order size is large compared to the available liquidity, or when a user anticipates a high price volatility period with no clear up or downward trend.

6 DEXs across 4 chains have integrated the dTWAP protocol powered by Orbs, bringing this order type to DeFi in a decentralized manner. Users can use this tool to create dTWAP orders by following the directions below. 


### How to set up a dTWAP order


1. Go to the exchange page and select the TWAP order option.

![screenshot1](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image1.png)


2. Select the “From” and “To” tokens and enter the amount you wish to trade.

   In this example we chose 400 USDC as the “From” tokens and ETH for the “To” tokens, meaning we want to buy ETH with 400 USDC.

![screenshot2](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image2.png)


3. The UI enables both dTWAP-market orders, which execute all trades at the available market price, and dTWAP-limit orders, which only execute individual trades if they are within the price limit set by the user.

   In this example we chose to execute the TWAP orders at market price.

![screenshot3](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image3.png)


4. Next, we specify the TWAP parameters. There are 3 main parameters that control the effectiveness of the dTWAP order:

- **Total trades:** Allows the user to specify the number of individual trades that their order will be broken into. The UI slider starts with 1 trade and allows the user to increase the amount of individual trades, or allows the user to manually input the total trades in the input field directly.

  Users should note that there is a certain tradeoff when specifying this parameter: more trades means smaller individual trade size, which means smaller price impact. However, more trades also means more transactions and higher overall gas fees.

  In our example we set the total trades to 4.
  Meaning we broke down our total trade size of 400 USDC into 4 smaller trades of 100 USDC each. 

- **Trade Interval:** Sets the time gap between each individual trade. The UI starts with the minimum allowed (2 mins), which leaves the minimum amount of time for the taker bidding war and block settlement between each chunk. The user can set it to be any duration desired. A trade will never execute before this time elapses after the previous trade.

  Again users should be mindful when setting this parameter: longer intervals would allow arbitrageurs a longer window to close any price discrepancies on the affected pools and bring the reserves back to equilibrium (on par with spot price). However, it would take longer for the order to be filled would add uncertainty to the final fill price, especially in times of heightened volatility

  In our example we set the trade interval to 2 minutes.
  Meaning there will be 2 minutes of delay between each individual trade.

- **Max Duration:** The maximum time during which the total amount of all individual trades making up the full dTWAP order may be executed. After this deadline the trade expires, regardless of actual amounts swapped. 

  Note that all chunks may not execute in limit orders, depending on whether the price stays within the set parameters. 

  The default recommended duration is calculated by multiplying the number of intervals by the trade interval, and then doubling this amount in order to serve as a buffer to allow sufficient time for on-chain activity. (note that setting a duration that is shorter than the above default may result in a partially filled order).

  In our example we set the Max. duration to 16 mins.
  We left the max. duration at the default 16 mins which means that the TWAP order will be canceled after 16 mins.

As can be seen, these parameters provide significant flexibility in customizing each order, taking into account factors like market conditions, current gas fees, etc.

![screenshot4](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image4.png)


5. Press “Place order”. Double check your order details, accept the disclaimer and press “Confirm order”.

![screenshot5](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image5.png)


6. Once the transaction is processed, you will be able to see your order’s status in the order history section, under “Open orders”. Users can set up real-time notifications to get an alert when their TWAP order gets filled using the [Open DeFi Notification Protocol](https://www.orbs.com/notifications/).

  Open orders can be canceled at any time by expanding the order and clicking the “Cancel Order” button.


![screenshot6](/assets/img/blog/How-to-Use-dTWAP-by-Orbs/image6.png)



### Things to take into consideration

- Orders are executed in smaller trades over a specified period of time and are subject to market conditions and other risks.
- Your trade may be executed at a price that is significantly different from the current market price (although not worse than your limit price, if you set one), which could result in significant losses. If the available market price is worse than the limit price you have set, some of the trades of your order may not be executed, resulting in a partially filled order.
- The trades are based on a decentralized protocol that utilizes off-chain takers which compete to fill orders. These takers are entitled to request a fee, which the protocol removes for the winning taker from the output tokens.
- Takers may take into account gas fees for your transactions when setting their fees, which may result in fluctuations in the fee amounts.



### How does the dTWAP protocol work?

The dTWAP protocol defines two main actors: 

**Makers** - The first entity in the dTWAP protocol are DEX traders that submit new orders to the dTWAP EVM contract. They set all order parameters such as limit price and expiration. Maker orders are sent to the dTWAP smart contract, which enforces these requirements in a trustless manner.

**Takers** - Incentivized third-party participants that monitor all live orders and submit bids on the best path to execute their next segment. The dTWAP contract selects the best bid and guarantees that the path that provides the best price to makers is the one executed. 

The protocol has been designed such that the presence of one honest taker (i.e, a taker who charges only reimbursement for gas fees) should result in an output amount that is as close as possible to spot market prices.



### Powered by Orbs

The dTWAP protocol is developed by [Orbs](https://www.orbs.com/) and powered by Orbs’ [L3 technology](https://www.orbs.com/overview/).

Orbs Network has dozens of independent validators running Proof-of-Stake consensus with over $100 million staked. The network has been running in mainnet since 2019. All Orbs Network validators are takers and participate as honest bidders in the protocol, guaranteeing that orders are executed 24/7 with high redundancy and best price.


### Troubleshooting and FAQ

Still unsure of something? Having trouble with your order? Be sure to check the [FAQ section](https://www.orbs.com/dtwap-and-dlimit-faq/).


### Additional resources

You can find more information about dTWAP in the following links:
- [FAQ](https://www.orbs.com/dtwap-and-dlimit-faq/)
- dTWAP telegram [support group](https://t.me/dTWAPSupportGroup)
- [dTWAP webpage](https://www.orbs.com/dtwap/)
- [Whitepaper](https://www.orbs.com/white-papers/dTWAP/)
- [Github](https://github.com/orbs-network/twap)
- PeckShield [security audit](https://github.com/orbs-network/twap/blob/master/Audit-Report-PeckShield.pdf)

