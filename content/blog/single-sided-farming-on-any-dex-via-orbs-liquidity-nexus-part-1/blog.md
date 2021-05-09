---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1/bg.jpeg
blogUrl: blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1
date: 2021-04-01
title: Single Sided-Farming on Any DEX Via Orbs Liquidity Nexus — Part 1
author:
  - /blog/common/authors/TalKol.md
type:
short_description:
---


_The Orbs_ [_Liquidity Nexus protocol_](https://www.orbs.com/introducing-orbs-liquidity-nexus-liquidity-as-a-service/) _introduces CeFi liquidity to DeFi._

_Now, take any DEX, whether it’s SushiSwap or PancakeSwap, and choose a popular pool like ETH/USDC or BNB/BUSD._

_The CeFi capital provides the stable side — USDC or BUSD. The DeFi capital provides the crypto side — ETH or BNB. Now, let them farm together._

...

## Not all liquidity is created equal

In the Orbs project, we’ve been experimenting with the idea of CeFi sourced liquidity in DeFi for a while now. One of the interesting things we’ve learned is that different capital providers have different risk appetites and different goals.

We learned that not all liquidity is created equal.

Consider two very different typecasts of capital providers that sit on opposite edges of the investor spectrum:

- **_Type A_** is a typical crypto ape. They are long on crypto. They hold a portfolio that is primarily exposed to volatile crypto assets. They hold a significant percentage in BTC, a significant percentage in ETH and a significant percentage in alts. For them, hodling USDC for too long feels like holding a melting ice cube as the global money printer goes brrr.
- **_Type B_** has a more traditional outlook. For them, high risk means allocating a large percentage of their portfolio towards NASDAQ. Their benchmark is fiat. Holding crypto assets is something they’ve only considered after seeing Tesla doing the same. But it’s a bit too avant-garde now, maybe next year, and definitely not more than 3% of the portfolio.

These two personas are polar opposites but we’ve been seeing a lot of both types lately.

_Type A_ is the crowd you usually see roaming the DeFi world. They’re already holding crypto assets, so applying these assets to DeFi is a natural way to push towards higher returns with crypto as a benchmark. Most DeFi products are designed towards them and speak their language. This crowd feels at home with MetaMask. Among all DeFi products, they particularly love vaults like [yearn.finance](https://yearn.finance/), [harvest.finance](https://harvest.finance/), [autofarm.network](https://autofarm.network/) and [acryptos](https://acryptos.com/) because those provide the best APY with the least amount of effort.

_Type B_ is the crowd you usually see roaming the CeFi world — corporations, institutions, family offices, classic hedge funds. They have access to large cash reserves, but often limit themselves to the standard instruments like bonds and securities. It’s very difficult to introduce them to the marvels of DeFi, because diving into DeFi requires first to dip your toes in crypto. As much as we would like to think BTC is becoming mainstream, it’s still held by a humblingly low amount of people. Education takes time.

The beauty of the Orbs Liquidity Nexus protocol is its potential to bridge _Type A_ and _Type B_ together and allow them to pool their capital together for a joint effort using trustless and decentralized smart contracts.

## Different appetites for risk = different rewards

If you were to design a yield-bearing position for both crowds, how would you optimize risk/reward to attract as much liquidity as possible?

- If you’re designing for _Type A_ — High APY is probably the most important metric. This crowd tends to throw its capital towards positions where the yield is maximal. This crowd is no stranger to risk. They often don’t even consider high exposure to volatile crypto assets as a risk at all (to be honest, dollars are also frightening to be long on). For them, dealing with [Impermanent Loss](https://academy.binance.com/en/articles/impermanent-loss-explained) (IL) is usually not an issue and they love farm rewards.
- If you’re designing for _Type B_ — The first order of business would be to minimize the exposure to crypto. They can’t have their portfolio suffer if ETH jumped up or down 20% overnight. They will definitely compromise on APY because they’re used to the yields of the CeFi world which are much lower. The concept of IL is more difficult for them to grasp because IL is triggered primarily by volatility in the crypto markets which they prefer not to be exposed to.

It seems that we have a match made in heaven. Two sides looking for quite different things. We can play off that.

## The dream of single-sided farming

The DeFi community has been toying with the idea of single-sided farming for quite a while now. If you’ve participated in farming at any point, you’re probably aware that farming usually comes in pairs. Why is that? It’s because normally farming rewards go towards incentivizing liquidity — and liquidity requires at least two sides.

What were the most popular farming positions so far in the short history of DeFi?

The first that comes to mind is probably SushiSwap. Taking the beautifully simple architecture of Uniswap and throwing in SUSHI — the LP (liquidity provider) rewards token, which was distributed to the most popular pairs on Uniswap to encourage the liquidity vampire attack.

In the second place, I’ll probably say — the Uniswap initial distribution of UNI, that came as a direct response to the Sushi vampire attack. These memorable four positions generated hefty yields and attracted the first very impressive TVL that surpassed $1B.

For the third, I’ll probably say — the initial distribution of 1INCH in the pools that were previously known as Mooniswap. The 1inch protocol did wonderfully and managed to amass impressive TVL very quickly, beating Sushi in APY simply because 2/3 of SUSHI rewards are locked for 6 months, and beating Uniswap easily.. well, because UNI are no longer distributed.

These three of the most successful farming positions in history are actually very similar in nature. All three are based on liquidity providers in Uniswap-like DEXes. All three focus on the most popular pairs on these platforms, which are usually ETH/USDC, ETH/USDT and ETH/WBTC.

If you’ve participated in any of the above, you probably know that the most annoying thing was allocating exactly 50% of each asset in order to farm. If your long-term portfolio normally has 60% BTC, 30% ETH and 10% USDC — good luck trying to create equally balanced pairs and effectively utilize all of your holdings.

This notion has made the idea of single-sided farming very appealing a long time ago.

## Alternatives to single-sided farming

Before we jump into single-sided farming, let’s explore the current alternatives. Largely, there are two:

1. Bite the bullet and exchange some assets for the duration of the farm — This approach is very simple. Instead of maintaining your original portfolio distribution of 60% BTC, 30% ETH, 10% USDC, just swap between them and change the allocations. What’s wrong with this approach? It defeats the idea of having long exposure to certain assets and using DeFi to maximize yields. If you’re long on BTC as a benchmark, swapping it for a whole bunch of USDC for a little APY doesn’t make sense. You’re about to lose a lot more if BTC were to go into another bull run. In addition, this approach suffers from slippage because swapping large amounts of base assets at once is the worst way to get a good price.
2. Lending — If you don’t want to buy these assets, why not borrow them? Isn’t this exactly what Compound and Aave were invented for? Well, they do solve a lot of the problems in alternative 1, but they bring in several new disadvantages. One of them is low utilization. Borrowing assets introduces a wasteful collateral ratio. If you place your BTC as collateral, you’ll only be able to borrow a significantly smaller amount of USDC. This means that much less of your capital will participate in farming. Another big issue is the fear of liquidation. If these assets suffer a volatile night and you sleep through a 20% price change, you might find yourself liquidated in the morning and be hit with losses. Nobody likes to lose sleep.

## Back to single-sided farming

Now that we’ve agreed that there no good alternatives to single-sided farming, the question arises — why is this so annoying to implement?

The answer in my eyes is much less a technology issue and more of a product one. Separating the two sides of farming sounds simple in theory. If you have a farming position that requires equal amounts of ETH/USDC, let one side bring in the ETH and the other side bring in the USDC.

It gets tricky though when you start splitting the rewards and splitting the risks — IL being the primary one.

An equal split along the middle doesn’t feel right, because by bringing in fundamentally different types of assets (USDC is stable for one), means the two parties are inherently unequal.

## Enter Liquidity Nexus

The beauty behind the Liquidity Nexus concept is the marriage between two sides looking for different things.

Taking the popular ETH/USDC example from before — It becomes quite natural to let _Type A_, the native DeFi players, supply the ETH. We can reward them with higher APY (not divide rewards equally), which is exactly what they’re looking for. In return, we will expose them to most (or even all) of the IL. It’s ok, because these are risks that they understand and enjoy.

It also becomes quite natural to let _Type B_, the native CeFi players, supply the USDC. They will happily compromise on lower APY if their exposure to crypto volatility and IL was reduced as well.

This is one example of what makes the liquidity nexus exciting.

In the next posts of this series, I’ll go into the details (and the code) of how we can implement single-sided farming. Stay tuned.

## Learn more

If you’re curious about what we’re working on and don’t mind seeing work-in-progress that hasn’t been properly announced yet, feel free to follow us on Github:

- [https://github.com/orbs-network](https://github.com/orbs-network) — The Orbs project on Github
- [https://github.com/defi-org-code](https://github.com/defi-org-code) — DeFi.org Accelerator innovation labs (some of the ideas originate there first)

...

_Notes_

This document details a project which is currently being researched by the Orbs team and ecosystem contributors. The project is currently in concept mode and is being portrayed herein as currently envisioned by the Orbs team.

Orbs is a decentralized project driven by community contribution and guidance. The product and functionality detailed in this document therefore constitute a mere proposal assembled from community feedback and are subject to change continuously as new requirements arrive. This document provides no guarantee that any offering, product or specific feature will become fully or partially developed.

The information contained in this document shall not form the basis of, or be relied upon in connection with, any offer or commitment whatsoever in any jurisdiction.


