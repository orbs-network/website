---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs/bg.jpg
blogUrl: LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs
date: 2023-12-15
title: "Liquidity Hub and Thena: Continuing the Standard Set by Orbs"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: 
---

### THENA, a prominent DEX on BNB Chain has integrated Liquidity Hub by Orbs!

As a result, THENA's traders will now have access to additional liquidity on the BNB Chain network, which wasn't previously able to be tapped via the standard AMM. Liquidity Hub, powered by Orbs' L3 technology, provides lower fees, MEV protection, gasless transactions, increased capital efficiency, simplified UI, and more. This integration is the second of its kind for Liquidity Hub by Orbs and one of few in all of DeFi that is aggregating liquidity from both on-chain and off-chain sources to a DEX.

Liquidity Hub is a fully decentralized, permissionless, and composable DeFi protocol developed by the Orbs project and powered by the Orbs Network. At no additional cost, THENA's traders will now have access to all of the liquidity BNB Chain offers.

[Orbs](https://www.orbs.com/) is a decentralized protocol executed by a public network of permissionless validators using PoS, staked with tens of millions of dollars in TVL. Orbs pioneers the concept of L3 infrastructure, by utilizing the Orbs decentralized network to enhance the capabilities of existing EVM smart contracts, opening up a whole new spectrum of possibilities for Web 3.0, DeFi, NFTs, and GameFi.

### How Liquidity Hub Works

Liquidity Hub is a [layer 3 (L3)](https://www.coingecko.com/learn/what-are-layer-3s-crypto) infrastructure software that provides an optimization layer above the AMM. This technology taps external liquidity for better price quotes and lower price impact.

Instead of the typical swap that searches for the best route within the DEX's limited liquidity pools, Liquidity Hub enhances this process by utilizing additional liquidity sources:

1.  On-chain solver auction: Third-party solvers who compete to fill swaps using on-chain liquidity like AMM pools or their own private inventory.

1.  Decentralized orders via API: Decentralized orders are accessible using API, enabling institutional/professional traders, such as market makers, to submit bids and compete to fill swaps.

![](/assets/img/blog/LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs/img1.jpg)

Liquidity Hub allows DEXs to attempt to execute trades without going through the AMM and experiencing price impact. If the layer cannot execute the trade at a better price than the AMM, the transaction will return to the AMM contract and execute as usual.

Therefore, Liquidity Hub can only improve a trader's experience. If Liquidity Hub isn't competitive, meaning it would only execute at a worse price for the user or can't execute at all, the swap will be routed through the AMM contract directly as usual.


![](/assets/img/blog/LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs/img2.png)

![](/assets/img/blog/LiquidityHub-and-Thena-Continuing-the-Standard-Set-by-Orbs/img3.png)


### Liquidity Hub Architecture & Product Spec

Liquidity Hub is operated by a mix of an on-chain contract (deployed right next to the AMM contract) and backend logic (still running on-chain via Orbs decentralized L3 nodes). In any case, the Liquidity Hub on-chain contract protects end-users and ensures their funds are safe, and significant price manipulations cannot occur.

Regular users attempting to swap don't have to know that Liquidity Hub exists. The Liquidity Hub contract guarantees that the execution price of the swap will be better than the execution price on the AMM contract. In other words, it will be avoided if Liquidity Hub isn't competitive. No trust is involved since this guarantee is implemented at the contract level.

Part of the Liquidity Hub logic is implemented off of the DEX's underlying chain (off-chain risks can be mitigated using Orbs L3 as further described below). Since the data structure is held off-chain, adding and removing orders from the Liquidity Hub will take a few milliseconds (without waiting for a new block to be closed) and will not cost gas. These properties are attractive for market makers because they are on par with CEXs.

All funds are held on-chain in a non-custodial manner. Participants who place an order in Liquidity Hub keep their funds in their wallet. The Liquidity Hub contract will be approved to initiate the transaction that sends the funds from the account on match. Verification of orders will always take place on-chain through the Liquidity Hub contract. The contract will verify that the execution upholds both sides' requirements and that the execution price is better than the AMM. On match, the funds will be exchanged between the parties directly on-chain.

**Below are the key product specs of Liquidity Hub:**

1.  No Change in the DEX UI for Users: The integration of Liquidity Hub maintains the familiar user interface of the DEX, ensuring a seamless and intuitive trading experience.

2.  API for Solvers + Decentralized Order Interface for Market Makers (MMs): The hub offers an efficient API for solvers and a decentralized interface for Market Makers, streamlining liquidity provision and trading.

3.  Nominal to Zero Latency Execution for MMs: Trades are executed with minimal to zero latency, enabling users to capitalize on real-time market movements.

4.  Token Spending Approval by Users on MetaMask: Users authorize token spending through MetaMask, maintaining control and security over their transactions.

5.  Funds Remain in the User Wallet Until Trades Execute: Users' funds stay in their wallets until trade execution, enhancing the security and trust of the trading process.

6.  Gasless Trades for Users: The Liquidity Hub offers gasless trades for users, significantly reducing the cost of transactions.

Continuing the Standard 

The Liquidity Hub protocol, powered by [Orbs L3 technology](https://www.orbs.com/overview/), has become the industry standard for achieving the best price without leaving the DEX.

To date, the protocol has been implemented by QuickSwap on Polygon and now Thena on BNB Chain, facilitating over 12 million dollars of trading volume.

For any questions regarding Liquidity Hub, please join our [Telegram channel.](https://t.me/OrbsNetwork)

Further readings:

-   [Liquidity Hub Website](https://www.orbs.com/liquidity-hub/)

-   [GitHub](https://github.com/orbs-network/liquidity-hub)

-   [dTWAP Whitepaper](https://www.orbs.com/white-papers/dTWAP/)

-   [Layer 3 Blockchains Explained](https://www.coingecko.com/learn/what-are-layer-3s-crypto)

<div class='line-separator'> </div>

About Orbs

[Orbs](https://www.orbs.com/) is a "Layer-3" public blockchain infrastructure project powered by PoS, pioneering on-chain innovation since 2017.

Orbs is a separate execution layer between L1/L2 solutions and the application layer as part of a tiered blockchain stack, enhancing the capabilities of smart contracts and powering protocols such as[  dLIMIT](https://www.orbs.com/dlimit/),[  dTWAP](https://www.orbs.com/dtwap/), and[  Liquidity Hub](https://www.orbs.com/liquidity-hub/).

The project's core team comprises more than thirty dedicated contributors from Tel Aviv, London, New York, Tokyo, and Seoul.

For more information, please visit www.orbs.com, or join our community at: 

Telegram: https://t.me/OrbsNetwork 

Twitter: https://twitter.com/orbs_network