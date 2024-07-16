---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/how-to-use-dLIMIT-by-Orbs/bg.png
blogUrl: how-to-use-dLIMIT-by-Orbs
date: 2023-08-17
title: How to Use dLIMIT by Orbs
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "6 DEXs across 4 chains have already integrated the dLIMIT protocol powered by Orbs, bringing this order type to DeFi in a decentralized manner. Users can use this tool to create limit orders by following the directions below."
---

### Introduction to limit Orders

A limit order is a tool from CeFi in which users can buy or sell assets at a specified price or better, instead of relying on the market price at the time of execution. In a limit order, while the price is guaranteed, the order being executed is not - limit orders will be executed only if the price meets the order qualifications.

6 DEXs across 4 chains have already integrated the dLIMIT protocol powered by Orbs, bringing this order type to DeFi in a decentralized manner. Users can use this tool to create decentralized limit orders by following the directions below. 

The dLIMIT protocol for DEXs ensures that limit orders are executed at an optimal price and at fair fees, in a decentralized and reliable manner.

### How to set up a limit order

In this tutorial, we'll use the dLIMIT UI from [Quickswap DEX](https://quickswap.exchange/#/) on Polygon.


1. Go to the exchange [page](https://quickswap.exchange/#/swap?currency0=ETH&currency1=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&swapIndex=0&isProMode=false) and select the limit order option.

![screenshot1](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image1.png)


2. Select the “From” and “To” tokens you wish to trade. In this example we chose USDC and ETH respectively, meaning we want to buy ETH with USDC.

![screenshot2](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image2.png)


3. Enter the amount you wish to trade. Notice the limit price will show the current market price which will then estimate the output amount of destination tokens (ETH).

![screenshot3](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image3.png)


4. Set the desired limit price. Trades will ONLY be executed when the available market price is better than or equal to the limit price. The destination token output amount will update accordingly. Press “Approve”.

   In the example below, we wish to buy ETH when the price is $1,900 or better. The amount of ETH received will be equal or greater than 0.2368 ETH. Only bids equal or better than this amount will be eligible to fill the order. This amount takes into account gas costs and fees.


**Important note:** As the fees are paid from the output token amount, the limit price includes the gas & trading fees and so users should take this into account when setting up the price. For example, a very small order’s gas fees can total a very large percentage of the order output, reflecting an actual limit price that is not competitive with the spot market price.
  
![screenshot4](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image4.png)



5. Press “Place order”. Double check your order details, accept the disclaimer and press “Confirm order”.

![screenshot5](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image5.png)


6. Once the transaction is through, you will be able to see your order in the order history section, under “Open orders”. Users can set up real-time notifications to get an alert when their limit order gets filled using the [Open DeFi Notification Protocol](https://www.orbs.com/notifications/).

![screenshot6](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image6.png)


7. Open orders can be canceled at any time by expanding the order and clicking the “Cancel Order” button.

![screenshot7](/assets/img/blog/how-to-use-dLIMIT-by-Orbs/image7.png)

### Things to take into consideration

- Your order may not be executed if the available market price is worse than the limit price you have set.
- The trades are based on a decentralized protocol that utilizes off-chain takers which compete to fill orders. These takers are entitled to request a fee, which the protocol removes for the winning taker from the output tokens. 
- Takers may take into account gas fees for your transactions when setting their fees, which may result in fluctuations in the fee amounts.
- When specifying a limit price, users will see in the UI the minimum amount of destination tokens they will receive if the order is filled. Only takers making bids equal or better than this amount will be eligible to fill the order. This amount takes into account gas costs and trading fees.


### How does the dLIMIT protocol work?

The dLIMIT protocol defines two main actors: 

**Makers** - The first entity in the dLIMIT protocol are DEX traders that submit new orders to the dLIMIT EVM contract. They set all order parameters including the limit price. The dLIMIT contract enforces these requirements in a trustless manner.

**Takers** - Incentivized third-party participants that monitor all live orders and submit bids on the best path to execute their next segment. The dLIMIT contract selects the best bid and guarantees that the path that provides the best price to makers is the one executed.

The protocol has been designed such that the presence of one honest taker (i.e, a taker who charges only reimbursement for gas fees) should result in an output amount that is as close as possible to spot market prices.


### Powered by Orbs

The dLIMIT protocol is developed by [Orbs](https://www.orbs.com/) and powered by Orbs’ [L3 technology](https://www.orbs.com/overview/).

Orbs Network has dozens of independent validators running Proof-of-Stake consensus with over $100 million staked. The network has been running in mainnet since 2019. All Orbs Network validators are takers and participate as honest bidders in the protocol, guaranteeing that orders are executed 24/7 with high redundancy and best price.


### Troubleshooting and FAQ

Still unsure of something? Having trouble with your order? Be sure to check the [FAQ](https://www.orbs.com/dtwap-and-dlimit-faq/) section, or join the telegram [support group](https://t.me/dTWAPSupportGroup).


### Additional resources

You can find more information about dLIMIT in the following links:

- [FAQ](https://www.orbs.com/dtwap-and-dlimit-faq/)
- dLIMIT telegram [support group](https://t.me/dTWAPSupportGroup)
- dLIMIT [webpage](https://www.orbs.com/dlimit/)
- [Whitepaper](https://www.orbs.com/white-papers/dTWAP/)
- [Github](https://github.com/orbs-network/twap)
- PeckShield [security audit](https://github.com/orbs-network/twap/blob/master/Audit-Report-PeckShield.pdf)


