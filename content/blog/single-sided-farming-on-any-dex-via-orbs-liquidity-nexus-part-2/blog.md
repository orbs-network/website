---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/bg.jpeg
blogUrl: blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2
date: 2021-04-07
title: Single Sided-Farming on Any DEX Via Orbs Liquidity Nexus — Part 2
author:
  - ../common/authors/TalKol.md
type:
short_description:
---


_The Orbs_ [_Liquidity Nexus protocol_](https://www.orbs.com/introducing-orbs-liquidity-nexus-liquidity-as-a-service/) _introduces CeFi liquidity to DeFi._

_Now, take any DEX, whether it’s SushiSwap or PancakeSwap, and choose a popular pool like ETH/USDC or BNB/BUSD._

_The CeFi capital provides the stable side — USDC or BUSD. The DeFi capital provides the crypto side — ETH or BNB. Now, let them farm together._

_Part 1 of this series is published_ [_here_](https://www.orbs.com/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1/) _(read it first)._

...

## Risks and rewards of liquidity farming

Most popular DEXes are similar in concept to [Uniswap](https://info.uniswap.org/pairs) and rely on the same risk/reward model. Some examples include [SushiSwap](https://app.sushi.com/farms/permanent), [1inch](https://1inch.exchange/#/dao/pools?network=1) and [PancakeSwap](https://pancakeswap.finance/farms). To understand how their incentives work, digging into the Uniswap model is probably enough.

Let’s assume we are providing liquidity on a ETH/USDC pool.

The classic Uniswap incentives model for liquidity providers is based on 3 main parts:

1. **Reward** — Swap fees. Every time a trader performs a swap on the pool (swaps ETH to USDC or USDC to ETH in our example), liquidity providers are awarded a swap fee of 0.3%. This fee is divided pro rata and increases the value of the LP tokens each provider holds.
2. **Risk** — Impermanent loss (IL). When a swap takes place, the price of the pair changes. Arbitrageurs usually work to mirror the external market price and are incentivized to continue swapping until the pool reflects it. As the price moves away from the point the liquidity provider entered, the liquidity provider accrues a loss. It is called “impermanent” because it is not made permanent until the provider removes liquidity, so if the price returns to the entry point, this loss disappears.
3. **Reward** — Farming rewards. Projects often distribute their governance token (UNI/SUSHI/1INCH/CAKE) to liquidity providers to further incentivize them to participate. This reward is divided pro-rata and according to time — usually a small amount every block. Not all pairs usually participate, so this is very dependent on the current incentives program each project’s governance has chosen to give.

## Is being a liquidity provider always profitable?

No. Since we have 2 main rewards and 1 main risk, it all depends on how they balance together. There are multiple factors at play here, like external market prices, how long the liquidity provider spent in the pool, the swap volume in the pool, total liquidity and so forth. Let’s go over some of them quickly:

- Trade volume — the more swap volume (people swapping through the pool), the more swap fees, better for the LP.
- Price change — the more price change (in ETH/USDC for example, it doesn’t matter if ETH goes up or down), the more IL, worse for the LP.
- Rewards/governance token price — if SUSHI goes up, farming rewards are more valuable, better for the LP.
- Total liquidity — the more TVL (Total Value Locked), rewards distribute over more farmers so each one gets less, worse for the LP.

Generally speaking, the popular farming pairs like ETH/USDC are usually profitable for liquidity providers. Why? Because if they weren’t, there would be no liquidity in them.

## Diving into impermanent loss

We mentioned that IL stems from price change between the two tokens in the pair. In our ETH/USDC example, this happens when ETH goes up or down in price compared to USDC.

How would a liquidity provider experience IL?

Let’s say that on day 1, ETH price is $2000, and the LP adds 100 ETH and 200,000 USDC (adding liquidity must be balanced). On day 30, when the LP removes liquidity, ETH price is higher and is now $2500. When the LP exits, they would not receive their original 100 ETH and 200,000 USDC back, instead they will receive 89.44 ETH and 223,606.80 USDC.

Is this good or bad? Since price of ETH moved, we know that it must be bad because we have IL. Let’s see how bad exactly:

The total USD value on exit (89.44 ETH and 223,606.80 USDC with ETH at $2500) is $447,213.60. If the LP had never participated in the pool, and kept their original 100 ETH and 200,000 USDC outside, the total USD value of their holdings would have been $450,000.00 (100 ETH and 200,000 USDC with ETH at $2500). This means the LP lost $2,786 which is about 0.62%.

Is this a bad deal? Usually no, assuming swap fees and rewards earn much more than this 0.62% loss.

The following table will help us explore IL as ETH price moves in various amounts (+25%, -25%, +50%, -50%, +75%, -75%):

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/1_8fucWsEI_LFkMZIZn31iLw-1030x242.png)

## Dividing IL between two parties

The concept we’re investigating in this series of posts is sourcing liquidity for ETH/USDC farming from two different parties — one party that provides the ETH and the other party that provides the USDC.

For discussion sake, let’s assume there are no swap fees, no farming rewards but ETH price changes — so we just have IL. How can we split IL between the two parties?

### Strategy 1 — all IL on the ETH side

In our [previous post](../single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1), we’ve seen that the different parties have different goals, so the risk does not necessarily have to be divided equally. The exciting parts of the Liquidity Nexus protocol actually come when things are asymmetric.

Let’s try to make things completely asymmetric and make the ETH side responsible for all IL. This can make sense because DeFi players providing ETH can be offered higher portion of the rewards (higher APY) in exchange of taking more of the crypto volatility risk. CeFi players providing the USDC will compromise on lower rewards (lower APY), particularly if their exposure to crypto volatility is limited.

How would that work in practice? Let’s go back to the numerical example from before. On day 1, ETH price is $2000. _Side A_ supplies 100 ETH and _Side B_ supplies 200,000 USDC. On day 30, when the sides want to remove liquidity, ETH price is higher and is now $2500. When the LP tokens are burned, instead of the original 100 ETH and 200,000 USDC, we now have 89.44 ETH and 223,606.80 USDC.

If _Side B_ does not suffer any IL, the fact that ETH price moved to $2500 should not affect it at all. Since our example only has IL and no rewards and no fees, _Side B_ should withdraw exactly the 200,000 USDC it originally deposited. Since we have 223,606.80 USDC available on exit, after returning the 200,000, we have 23,606.80 USDC remaining. We will naturally use this remainder to compensate _Side A_ as much as possible.

Let’s run the numbers and compare to the table from before:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/1_3KFuTfgeVYL5l1FBxp-bA-1030x164.png)

We can see that the IL for _Side A_ is roughly doubled, which makes sense because only one side is taking on all of it. A different and interesting way of looking at this strategy is saying that _Side B_ doesn’t actually really farm. Instead, _Side B_ is giving a loan of USDC to _Side A._ But this loan is much more efficient than those available on Compound and Aave. The efficiency stems from the fact that the collateral doesn’t just sit there, it is actively farming and generating high yield. Since contracts will implement this behavior, we can allow _Side B_ to reclaim their USDC at any time by automatically unwinding the LP position when they do so. In other words, even if the collateral is farming, there isn’t much added risk.

Another interesting edge condition worth mentioning is what happens if ETH value drops by 75%. It is true that this is a bit extreme, but exploring the extremes helps us fine-tune the economics. In this case, you can see that _Side A_, that provided the ETH, loses all of its capital.

Does this make sense? There’s no right or wrong answer. It may be justified by the following:

- If we look at this as a loan, it is normal to define boundaries where liquidations take place and expect the side risking liquidation to unwind the position before those happen. If _Side A_ notices that ETH price starts dropping, they can reasonably be expected to withdraw before suffering major losses.
- Our example is ignoring swap fees and rewards. In the majority of cases, swap fees alone are enough to counter IL. If this weren’t the case, all LPs would be losing money and nobody would provide any liquidity. If we add back the fees and rewards to this example, _Side A_ would no longer be losing all of their capital.
- This loss is impermanent, it only becomes permanent if liquidity is removed. If ETH dips by 75% in a short period of time, history so far showed that given enough time, it will bounce back. _Side A_ can simply remain in position until this hopefully happens.

Nevertheless, you may not like this behavior, so we can tweak the algorithm slightly to avoid it and divide IL in a different way:

### Strategy 2 — IL on ETH only if ETH goes up

Here’s another interesting alternative. Looking at the table of strategy 1, we can see that when ETH goes up, the model behaves nicely. The edge conditions come when ETH starts dropping, particularly to extremes of over 75%.

What if the USDC side shares some of the IL in this case? This wouldn’t give it complete protection against crypto volatility, but will be able to protect the other side from serious losses.

How would that work? If ETH goes up, we behave like in strategy 1. So let’s examine a case where ETH goes down with numbers in our previous example. On day 30, this time, when the sides want to remove liquidity, ETH price is lower and is now $1500. When the LP tokens are burned, instead of the original 100 ETH and 200,000 USDC, we instead have 115.47 ETH and 173,205.08 USDC.

Protecting _Side A_ to the fullest in this case would maintain its principal of 100 ETH. This would leave extra 15.47 ETH which we can use to compensate _Side B_ as it would incur a small loss. It’s an interesting question whether we want to keep this 15.47 ETH as ETH or swap it to USDC. On one hand, _Side B_ prefers to work in USDC, so swapping makes sense. On the other hand, if ETH just dropped in price, this might be a bad time to sell. Let’s leave this question open for now.

Let’s run the numbers and compare to the table from before:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/1_Blcfyf3fnoXXrnsFZVpvpw-1030x214.png)

One of the things I like about this strategy is that it has a nice back story. We have to share the IL risk somehow, there’s no working around it. If ETH goes up in price, the ETH supplying side just made a lot of money — meaning they can bear the IL on themselves and keep a happy smile. If ETH goes down, the ETH supplying side is already in the red, so this is the time to share the pain. The added bonus for the USDC supplying side is that when this happens, they’re actually buying some ETH for a low price — and buying the dip has a great upside potential.

### Strategy 3 — splitting IL down the middle

For completeness, let’s also present the numbers we get if we were to split IL equally between the two parties. The calculation is quite simple and has a very nice air of symmetry about it.

Back to our usual example.. On day 30, when the sides want to remove liquidity, ETH price is higher and is now $2500. When the LP tokens are burned, instead of the original 100 ETH and 200,000 USDC, we have 89.44 ETH and 223,606.80 USDC. _Side A_ has a small loss over its principal of 100 ETH, and _Side B_ has a small gain over its principal of 200,000 USDC. Can we find a number down the middle where both sides have the exact same loss over their principal?

The magic number is taking exactly 24,845.2 USDC and swapping it to ETH. This will give us 99.38 ETH and 198,761.60 USDC. This means both sides now share a slight loss. How slight? Exactly 0.62% over their initial principal investment. This 0.62% figure should be familiar — this is exactly the IL that we had earlier when doing standard double-sided farming.

Let’s run the numbers and compare to the tables above:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/1_Zka4CQ79BqRR9Tmw7UFQxw-1030x164.png)

This strategy is very symmetrical and this is indeed quite elegant, but I have to say that personally I don’t like it. When doing single-sided farming, the two parties are never equal. Forcing symmetry, though elegant, is not necessarily a good thing.

## Summary

The purpose of this post was to show how we can implement different strategies to share IL between two parties engaged in single-sided farming together. Each of these strategies may appeal to some and has advantages and disadvantages.

We’re not limited by these three alone. We can also mix them together and form interesting combinations, for example — take 50% of strategy 1 and 50% of strategy 3. So IL is not perfectly equal, but we do favor protecting the USDC side.

We haven’t mentioned the rewards when discussing these strategies either. If farming together yields 40% APY in SUSHI reward tokens, we still have an open question of how to divide the rewards between the parties. It makes sense to assume that if IL is not shared equally, so won’t the rewards. Naturally, the party exposed to more risk should also reap higher rewards.

## Learn more

If you’re curious about what we’re working on and don’t mind seeing work-in-progress that hasn’t been properly announced yet, feel free to follow us on Github:

- [https://github.com/orbs-network](https://github.com/orbs-network) — The Orbs project on Github
- [https://github.com/defi-org-code](https://github.com/defi-org-code) — DeFi.org Accelerator innovation labs (some of the ideas originate there first)

...

_Notes_

This document details a project which is currently being researched by the Orbs team and ecosystem contributors. The project is currently in concept mode and is being portrayed herein as currently envisioned by the Orbs team.

Orbs is a decentralized project driven by community contribution and guidance. The product and functionality detailed in this document therefore constitute a mere proposal assembled from community feedback and are subject to change continuously as new requirements arrive. This document provides no guarantee that any offering, product or specific feature will become fully or partially developed.

The information contained in this document shall not form the basis of, or be relied upon in connection with, any offer or commitment whatsoever in any jurisdiction.


