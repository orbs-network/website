---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/bg.jpeg
blogUrl: orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks
date: 2021-05-13
title: The Orbs Ecosystem is Growing
author:
  - /blog/common/authors/EranPeled.md
type:
short_description:
---

The Orbs _[Liquidity Nexus protocol](https://nexus.orbs.com/)_ takes any DEX like SushiSwap and enables farming with ETH only in popular pools like ETH/USDC.

This opens the door for ETH-only strategies that yield over 60% APY.

The protocol integrates with the widely used Chainlink Price Feeds to protect against economic attacks carried out through flash loans. Let’s demonstrate some hypothetical exploits and how Chainlink prevents them.

<div class = 'line-separator '></div>

## The dream of single-sided farming

If you’ve ever participated in liquidity farming, you’re probably aware that liquidity always requires a pair. To farm SUSHI in SushiSwap’s ETH/USDC pool, you need equal parts ETH and USDC. To farm CAKE in PancakeSwap’s BNB/BUSD pool, you need equal parts BNB and BUSD.

If you’re long on crypto, you want to hold ETH (or BNB). Hodling stablecoins like USDC just to be able to farm painfully cuts into your crypto exposure. If ETH goes into another bull run, you’re at risk to miss out on half.

Wouldn’t it be great if you could get the same APY but use ETH only? No need to juggle anymore and balance your portfolio between pairs in order to make sure all of your assets are actively farming.

That’s what we’re trying to develop with Orbs Liquidity Nexus. We’ve realized that there’s a lot of USDC in the traditional CeFi world that wants to minimize crypto exposure. By sourcing this liquidity and pairing it with newly deposited ETH from DeFi, we’re able to let two different parties farm together! One party brings the ETH, the other party brings the USDC.

Read some of our previous posts to learn exactly how it works: [Introduction](https://talkol.medium.com/introducing-orbs-liquidity-nexus-liquidity-as-a-service-1c022c8f2d43), [Part 1](single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1), [Part 2](single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2), [Part 3](single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3). If you prefer code, see the contracts on [Github](https://github.com/orbs-network/nexus-sushiswap) or an [example harvest.finance vault](https://github.com/orbs-network/nexus-harvestfinance/tree/master/contracts/strategies/nexus) that utilizes them to get a high yield on ETH.

<div class = 'line-separator '></div>

## The flash loan monster

Following the ever-growing list of [DeFi exploits](https://rekt.news/leaderboard/), you’ll notice that many of recent exploits start with a flash loan. What exactly is a flash loan, and why are they seemingly so dangerous?

Flash loans are an amazing DeFi construct with no parallel in the CeFi world. They allow anyone to get practically any size loan without any collateral. Wanna borrow $300 million for a short while? No problem! Just make sure you return the loan before your transaction is done.

If you let people fool around with $300 million at their disposal, they can do some creative things like manipulating the market temporarily into extreme conditions. For instance, they can trigger a swap on the SushiSwap ETH/USDC pair that drops ETH price in this pair temporarily by 95%. Or push the ETH price temporarily up by 10x. These changes don’t cause a problem per se, but they do expose economic vulnerabilities in edge conditions that developers normally never expect to happen.

When people think about flash loan providers, they normally only consider lending platforms like [Aave.](https://docs.aave.com/developers/guides/flash-loans) Flash loans can actually also be taken from any Uniswap-like DEX (SushiSwap included), where they’re called [flash swaps.](https://uniswap.org/docs/v2/core-concepts/flash-swaps/)

In this post, we will demonstrate step-by-step how an attacker could use flash loans to manipulate Nexus single-sided farming to their own advantage if we’re not careful.

<div class = 'line-separator '></div>

There are two parties for single-sided farming. One party is sourced from CeFi and deposits in advance a large USDC reserve into the Nexus contract. This USDC sits in the contract waiting for ETH depositors. The second party is our dear DeFi player that deposits ETH. This ETH is immediately paired with available USDC from the reserve and starts ETH/USDC farming. Once the ETH depositor decides to withdraw, the ETH/USDC is unpaired, USDC is returned to the reserve and the ETH is returned to the ETH depositor (plus rewards of course).

Different ETH depositors are isolated from each other, so one ETH depositor cannot attack another ETH depositor. The attack vectors we’ll explore here involve an ETH depositor attacking the USDC reserve provider.

## Attack 1: dump the ETH price and exploit on exit

Let’s start by showing the hypothetical attack step-by-step:

1. Wait until there’s a large amount of available USDC in the Nexus reserve.
2. Deposit ETH in Nexus to pair against all available reserve USDC (add liquidity).
3. Take a huge flash loan of ETH (hundreds of millions of dollars worth).
4. Crash the ETH price in the SushiSwap ETH/USDC pair by swapping the entire huge loan amount in ETH to USDC.
5. Withdraw the ETH from step 2 in Nexus to unpair (remove liquidity).
6. Oh no! Some USDC is now missing from the reserve!
7. Return the ETH price to normal in the SushiSwap ETH/USDC pair by swapping back the USDC from step 4 back to ETH.
8. Return the ETH flash loan using ETH from step 7.

This attack is demonstrated in code in the Nexus test suite [here](https://github.com/orbs-network/nexus-sushiswap/blob/main/test/nexus-flashloan-test.ts).

### Analysis

This attack compromises the USDC reserve provider and allows the malicious ETH depositor to drain the USDC reserve. How is this possible?

The economic answer lies in the concept of [Impermanent Loss](https://academy.binance.com/en/articles/impermanent-loss-explained) (IL). IL is a part of life for liquidity providers and takes place whenever the price between the two assets of the pair changes. Splitting IL between the two parties is actually the main innovation of single-sided farming, we wrote an [entire post](single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2) dedicated to this topic. The IL splitting strategy Nexus implements is Strategy 1 — all IL on the ETH side. This means the ETH depositor takes all crypto volatility risk onto themselves in exchange for a larger cut of the farming reward. Theoretically, this means that the USDC reserve provider cannot lose money due to IL.

But not in an edge condition. If the ETH price drops quickly by over 75%, IL becomes so severe that the ETH depositor cannot make the USDC provider whole — even when giving them their entire principle. The USDC provider shares some of the loss in this extreme case. This is fine in normal day-to-day circumstances because the chances of this crash happening are slim.

However, using the flash loan, our attacker is able to artificially crash the ETH price by over 95%, causing a large loss to the USDC provider and cleverly gaining this loss as profit by swapping back at the lower price.

## Attack 2: pump the ETH price and exploit on enter

Let’s start by showing the hypothetical attack step by step:

1. Wait until there’s a large amount of available USDC in Nexus reserve.
2. Take a huge flash loan of USDC (hundreds of millions of dollars worth).
3. Pump the ETH price in the SushiSwap ETH/USDC pair by swapping the entire huge loan amount in USDC to ETH.
4. Deposit ETH in Nexus to pair against all available reserve USDC (add liquidity). Note that very little ETH is needed since ETH has become insanely valuable.
5. Return the ETH price to normal in the SushiSwap ETH/USDC pair by swapping back the ETH from step 3 back to USDC.
6. Oh no! Some USDC is now missing from the reserve!
7. No need to withdraw the ETH from step 4 in Nexus (remove liquidity), we can abandon it.
8. Return the USDC flash loan using USDC from step 5.

This attack is demonstrated in code in the Nexus test suite [here](https://github.com/orbs-network/nexus-sushiswap/blob/main/test/nexus-flashloan-test.ts).

### Analysis

This attack also compromises the USDC reserve provider and allows the malicious ETH depositor to drain the USDC reserve. What happens in this case?

IL strikes once again in the same edge condition. The ETH deposit in step 4 takes place when ETH price is artificially inflated to an extreme value so very little ETH is needed to pair the entire available USDC reserve. Once the ETH price is returned to normal, we have a similar 95% ETH price crash from the moment of deposit causing IL so severe that once again the ETH provider cannot make the USDC provider whole. Once again, this loss is cleverly gained as profit by swapping back at the lower price.

<div class = 'line-separator '></div>

## Chainlink Price Feeds to the rescue

The two attacks outlined above were possible because the ETH depositor could artificially cause extreme changes in the ETH price by manipulating the SushiSwap ETH/USDC pair itself. If the ETH price drops by over 75% at once, we reach an exploitable edge condition in the IL splitting algorithm.

How can we protect against such manipulation of ETH price?

The answer lies in the body of the question — bring in an external price oracle. Chainlink to the rescue. The ETH/USD Price Feed generated by Chainlink is infinitely more robust against manipulation than SushiSwap’s. Chainlink Prices fetch market data from many independent premium data aggregators (e.g. Amberdata, BraveNewCoin, Coingecko, etc), who each generate a volume-weighted average price across the entire crypto trading market (e.g. Binance, Coinbase, Uniswap, etc). To manipulate a Chainlink Price Feed, our attacker would need to manipulate the market-wide ETH price across numerous different trading venues, a substantially more difficult and expensive task.

Because market data is fetched from off-chain, [on-chain flash loans](https://blog.chain.link/flash-loans-and-the-importance-of-tamper-proof-oracles/) have zero effect on the data provided by the ETH/USD Chainlink Price Feed, entirely solving the issues presented in the theoretical examples above. In addition to this robust market coverage, we found numerous other security and cost benefits from integrating Chainlink Price Feeds into the Orbs Liquidity Nexus protocol including:

- **Secure Node Operators** — Chainlink Price Feeds are secured by independent, security-reviewed, and Sybil-resistant oracle nodes run by leading blockchain DevOps teams, data providers, and traditional enterprises. Chainlink nodes have a strong track record for reliability, even during high gas prices and infrastructure outages.

- **Decentralized Network** — Chainlink Price Feeds are decentralized at the data source, oracle node, and oracle network levels, generating strong protections against downtime and tampering by either the data provider or oracle network.

- **Reputation** — Chainlink provides a robust reputation framework and set of on-chain monitoring tools that allow users to independently verify the historical performance of node operators and oracle networks, as well as check the real-time prices being offered.

These benefits and more made Chainlink a clear solution to solving the economic exploits explained above. Additionally, integrating Chainlink was extremely easy and required just about 10 lines of Solidity code in the Nexus contract — in the form of a function modifier that verifies that the Chainlink ETH/USD price is close enough to the SushiSwap ETH/USDC price and reverts otherwise:

![img](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img1.png)

## How close is close enough?

The final constant we need to define is SPREAD_TOLERANCE, which controls how far the two prices can become before we revert. The prices are never exactly identical because they are updated through different mechanisms. The SushiSwap ETH/USDC price follows the market price when arbitrageurs perform swaps in the pair. The Chainlink ETH/USD price is aggregated across hundreds of exchanges to generate a market-wide, volume-weighted value that is updated every time the ETH price moves at least 0.5% in either direction.

Let’s plot the two ETH prices side by side in last week:

![img](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img2.png)

For perspective, we also added the ETH price on [Compound.](https://compound.finance/) We can see that all prices are pretty close and that actually Compound is a little less accurate than the other two.

To choose the value for SPREAD_TOLERANCE, let’s plot the percent difference between the SushiSwap ETH price and the Chainlink ETH price in the last 6 months:

![img](/assets/img/blog/orbs-integrates-chainlink-price-feeds-to-secure-single-sided-farming-against-flash-loan-attacks/img3.png)

We can see that the difference is normally less than 1% and in some extremes 2%. In our case, the attacks require a price manipulation of at least 75% — so any tolerance under 75% should do. It looks like **10%** is a good tolerance value all around — it’s sufficiently under 75% so attacks will be prevented, and it’s well over the 2% price difference that we see normally.

<div class = 'line-separator '></div>

## About Chainlink

Chainlink is the most widely used and secure way to power universally connected smart contracts. With Chainlink, developers can connect any blockchain with high-quality data sources from other blockchains as well as real-world data. Managed by a global, decentralized community of hundreds of thousands of people, Chainlink is introducing a fairer model for contracts. Its network currently secures billions of dollars in value for smart contracts across the decentralized finance (DeFi), insurance and gaming ecosystems, among others.

Chainlink is trusted by hundreds of organizations to deliver definitive truth via secure, reliable data feeds. To learn more, visit [chain.link](https://chain.link/), subscribe to the [Chainlink newsletter](https://link.us18.list-manage.com/subscribe?u=8969e6baa6d67e10213eff25b&id=fd9ea899a5), and follow [@chainlink](https://twitter.com/chainlink) on Twitter.

[Docs](https://docs.chain.link/) | [Discord](https://discord.com/invite/aSK4zew) | [Reddit](https://www.reddit.com/r/Chainlink/) | [YouTube](https://www.youtube.com/channel/UCnjkrlqaWEBSnKZQ71gdyFA) | [Telegram](https://t.me/chainlinkofficial) | [Events](https://blog.chain.link/tag/events/) | [GitHub](https://github.com/smartcontractkit/chainlink) | [Price Feeds](https://data.chain.link/) | [DeFi](https://www.chain.link/solutions/defi) | [VRF](https://chain.link/solutions/chainlink-vrf)

<div class = 'line-separator '></div>

## Learn more

If you’re curious about what we’re working on and don’t mind seeing work-in-progress that hasn’t been properly announced yet, feel free to follow us on Github:

- [https://github.com/orbs-network](https://github.com/orbs-network) — The Orbs project on Github
- [https://github.com/defi-org-code](https://github.com/defi-org-code) — DeFi.org Accelerator innovation labs (some of the ideas originate there first)
