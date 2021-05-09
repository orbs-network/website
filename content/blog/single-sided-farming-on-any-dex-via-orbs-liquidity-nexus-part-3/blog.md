---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3/bg.jpeg
blogUrl: blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3
date: 2021-04-12
title: Single Sided-Farming on Any DEX Via Orbs Liquidity Nexus — Part 3
author:
  - ../common/authors/TalKol.md
type:
short_description:
---


_The Orbs_ [_Liquidity Nexus protocol_](https://www.orbs.com/introducing-orbs-liquidity-nexus-liquidity-as-a-service/) _introduces CeFi liquidity to DeFi._

_Now, take any DEX, whether it’s SushiSwap or PancakeSwap, and choose a popular pool like ETH/USDC or BNB/BUSD._

_The CeFi capital provides the stable side — USDC or BUSD. The DeFi capital provides the crypto side — ETH or BNB. Now, let them farm together._

_Read_ [_part 1_](https://www.orbs.com/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-1/) _and_ [_part 2_](https://www.orbs.com/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-2/) _of this series first._

...

## Classic double-sided farming through vaults

The concept of DeFi vaults was popularized by [Andre Cronje](https://twitter.com/AndreCronjeTech) under [yearn.finance](https://yearn.finance/vaults) and was an instant hit with the DeFi community. The idea is simple — allow multiple farmers to supply liquidity together and manage the position automatically through smart contracts in order to increase yield efficiency with actions like compounding (taking the daily rewards, selling them back to the base liquidity assets and increasing the position to generate compound interest).

A notable vault project that followed is [harvest.finance](https://harvest.finance/) which expanded on the idea with a holistic token economy. Harvest’s staking token [FARM](https://www.coingecko.com/en/coins/harvest-finance) captures 30% of the farming profits as a fee, but is also used to incentivize more farmers to participate by distributing it in addition to the underlying yield to increase total APY.

Aggregated yield farming vault products have become very popular on BSC as well, with notable projects like [acryptos](https://acryptos.com/) and [autofarm.network](https://autofarm.network/) — the leader of the pack with over $1.5 billion of mind-boggling TVL at the time of writing.

So what does a classic double-sided vault look like? Let’s take one that is farming ETH/USDC liquidity rewards on Uniswap/SushiSwap/1inch:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3/1_3UFPBgNSAyhMr9_rkrqrdA-1030x434.png)

1. DeFi (_Type A_) player deposits ETH and USDC in the vault contract — harvest.finance for example. Often, vaults prefer users to technically deposit LP tokens directly but the two are interchangeable.
2. The vault contract deposits the ETH/USDC in the DEX pair contract — [SushiSwap](https://etherscan.io/address/0x397ff1542f962076d0bfe58ea045ffa2d347aca0) for example, in return for LP tokens.
3. LP tokens are deposited in the LP farming rewards contract — Sushi’s [Masterchef](https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd) for example, and start earning SUSHI rewards.
4. Periodically, the vault claims the SUSHI rewards, sells them for ETH/USDC and cycles back to step 2.

## Single sided-farming via Orbs Liquidity Nexus

The idea we’ve been building towards in this series of posts is single-sided farming. One of the potential methods to introduce this concept to relevant target audiences is through a vault. Since vaults cater to _Type A_ participants (see previous posts for definition), the vault will only represent one of the sides — the ETH side.

The other side, USDC in our example, is provided by _Type B_ participants. Since they’re not frequent travelers in DeFi space, we can rely on the Liquidity Nexus protocol to bridge them in.

What would that look like?

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3/1_fu-3x-EspMc46G2XFGsBcg-1030x466.png)

1. DeFi (_Type A_) player deposits ETH in the vault contract. This would have to be a new vault of course, taking ETH only, contributed to one of the existing vault projects like harvest.finance and accepted by its governance.
2. CeFi (_Type B_) player deposits USDC through the Liquidity Nexus protocol into the Nexus contract. This piece of the puzzle makes single-sided farming possible and implements the logic discussed in the previous post.
3. The ETH vault contract pairs newly deposited ETH with available USDC waiting in the Nexus contract. This pair of ETH/USDC in equal value is deposited by the Nexus contract in the DEX pair contract — [SushiSwap](https://etherscan.io/address/0x397ff1542f962076d0bfe58ea045ffa2d347aca0) for example, in return for LP tokens.
4. LP tokens are deposited in the LP farming rewards contract — Sushi’s [Masterchef](https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd) for example, and start earning SUSHI rewards.
5. Periodically, the ETH vault claims the SUSHI rewards through the Nexus contract, sells them for ETH and cycles back to step 3.

## ETH-only vaults are rare and desirable

If you have experience with DeFi, you probably know that ETH-only strategies are not common. Even when they’re found, they usually offer low APYs. This is the current ETH-only strategy on harvest.finance:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3/1_FQvFQmvCa_JM7SP_qKfJiA-1030x447.png)

As you can see, the internal APY of the vault is quite low — only 0.41% (the rest is FARM rewards incentive to participate). The straightforward strategy employed by this vault is supplying the ETH as collateral to [Compound](https://compound.finance/), and earning both the supply interest and the COMP rewards. This also explains why the APY is relatively low, lending ETH doesn’t pay very much.

Using the Liquidity Nexus protocol, we can develop a new type of ETH-only strategy that generates much higher APY. The APY should be even higher than double-sided farming of ETH/USDC on Sushi. Why? Because our single-sided tokenomics favor the ETH side in rewards and give it more than half, in exchange for taking more of the IL risk — see the previous post if this point is unclear.

This result is quite attractive for existing vault projects like harvest.finance since chasing the highest APY for their users is exactly their bread and butter.

The result is also quite attractive for the _Type A_ DeFi players, because the strategy is single-sided and requires a core crypto asset they normally hold a lot of (ETH) — without the annoying balancing act of acquiring USDC in equal value.

And last but not least, the result is also quite attractive for the _Type B_ CeFi players, because the strategy from their side requires USDC only and minimizes exposure to crypto volatility — while providing APY that is significantly higher than normally received in CeFi.

## Applicable for any DEX

Another advantage of this approach is that it requires zero changes to the underlying DEX. The method supports the existing versions of Uniswap, SushiSwap, 1inch, PancakeSwap and many others right out of the box.

## Implementation

Now that we have a clear architecture in mind, it’s time to dive into the implementation. We are going to implement the yellow section of the above diagram — the Liquidity Nexus contract.

As the [rekt leaderboard](https://rekt.news/leaderboard/) has taught us, vaults are delicate and subject to nuance. Successful vaults can manage millions if not hundreds of millions of dollars in value, making them prime targets for manipulation.

From our experience, exploits can roughly be divided to 2 types:

- Economic attacks — Issues that stem from logical problems regardless of which language the code is implemented in. One example that comes to mind is the notorious use of a flash loan to [steal $25M](https://rekt.news/harvest-finance-rekt/) from the USDC and USDT vaults of harvest.finance.
- Implementation attacks — Issues that stem from implementation nuances of the virtual machine or compiler of the specific language used to write the contracts. Most contracts are written in Solidity, which comes with a wide range of [known attacks](https://consensys.github.io/smart-contract-best-practices/known_attacks/).

It seems that the first type is the more successful as of late, which leads us to believe that many implementations often overlook the economics and jump into the bits and bytes a tad too quickly. To counter, let’s dedicate the first phase of our implementation to a pure economic simulation.

## Phase 1 — economic simulation

The Github repo is available here: [https://github.com/defi-org-code/single-playground](https://github.com/defi-org-code/single-playground)

What makes a successful simulation? First of all — rapid prototyping. Writing a simulation should be easier and faster than writing the real thing. Since we want to focus on logic alone, we can choose any language. It wouldn’t make much sense to rely on a strict and safe language like Solidity because its defensive nature makes development too slow. We need a language that cares less about the details and will let us focus on the big picture instead.

JavaScript comes to mind.

The second challenge of a simulation is modeling the world around us. Since we’ll be implementing the yellow section of the above diagram — the Liquidity Nexus contract — we need to mock everything else. This sounds like a complicated task but it really isn’t. Let’s take Sushi for example. There’s no need to accurately implement Sushi in all its glory, a rough behavior will do.

Consider this short and sweet simulated version of Sushi — [sushi.js](https://github.com/defi-org-code/single-playground/blob/master/sushi.js)

The power of a simulation comes from giving the developer convenient tools to experiment with various attacks. We’ve already mentioned flash loans as something to be careful of. But what would an attacker use a flash loan for in our case? It could serve as a way to manipulate ETH price for a short while in the Sushi ETH/USDC pool. Instead of spending a few hours modeling a flash loan and everything it entails, let’s take advantage of our simulation and do something much simpler — let’s give our attacker a direct way to [change ETH price](https://github.com/defi-org-code/single-playground/blob/master/sushi.js#L38). This will allow us to model attack vectors easily via automated testing.

The repo has 3 branches that are interesting to explore:

1. [master](https://github.com/defi-org-code/single-playground/tree/master) — The classic straightforward double-sided vault implementation (control group without any single-sided complexities).
2. [crazy-idea1](https://github.com/defi-org-code/single-playground/tree/crazy-idea1) — Single-sided vault based on ERC20-compatible vault shares, where all ETH depositors share IL together. This approach is open to economic exploitation, which is shown in the tests.
3. [no-shares](https://github.com/defi-org-code/single-playground/tree/no-shares) — A better single-sided vault implementation that isolates IL between ETH depositors. Does not support ERC20-compatible shares though in a straightforward way (more on this in a future post).

There are multiple interesting things we’ve learned from performing these simulations. I’ll expand on them in a different post though, as they require some background and a lot more detail.

## Phase 2 — Solidity implementation

The Github repo is available here: [https://github.com/orbs-network/nexus-sushiswap](https://github.com/orbs-network/nexus-sushiswap)

Now, that the economic simulation is complete, the result of phase 1 provides us with a better understanding of the economics and a clear specification for the contract logic.

The next phase would be to take this logic and implement it in Solidity. This process is a little slower because you never want to rush Solidity code. This will be the production code that manages significant amounts of money, so a defensive coding style is advised.

Integration with the outside world is much easier in this phase since we can use the actual mainnet implementations of all third-party contracts we rely on — like [SushiSwap ETH/USDC pair](https://etherscan.io/address/0x397FF1542f962076d0BFE58eA045FfA2d347ACa0). This means we don’t need to mock anything, even for tests.

Testing is a little more cumbersome in this phase since we’re testing directly on Ethereum mainnet. Test scenarios may take more work to implement, but the added benefit is that we’re testing the real thing — as close as possible to what production will look like if the contract was actually deployed to mainnet. This is possible due to Ganache’s awesome mainnet forking ability which can also be easily [activated on Hardhat](https://hardhat.org/guides/mainnet-forking.html).

Our team has a fetish for E2E testing — there’s no better way to prove your code works than showing a passing test. Take a look at the extensive [test suite](https://github.com/orbs-network/nexus-sushiswap/tree/ffd6931e51ef077a1a021e53cd8d3de7f61cfe7b/test).

This test for example demonstrates that using strategy 1 (defined in the previous post), the USDC supplying side withdraws the same amount of USDC it originally deposited, even if ETH price moves:

![](/assets/img/blog/single-sided-farming-on-any-dex-via-orbs-liquidity-nexus-part-3/1_UDA84-Qw1cMNPjseCwJCKA-1030x457.png)

The sharp-eyed among you may ask how _changeEthPrice_ works in this phase, because it can’t be as easy to implement as in the simulation. It actually works the hard way, by swapping over and over until the price actually moves in the desired amount — you can see the implementation [here](https://github.com/orbs-network/nexus-sushiswap/blob/ffd6931e51ef077a1a021e53cd8d3de7f61cfe7b/test/test-base.ts#L102).

## Learn more

If you’re curious about what we’re working on and don’t mind seeing work-in-progress that hasn’t been properly announced yet, feel free to follow us on Github:

- [https://github.com/orbs-network](https://github.com/orbs-network) — The Orbs project on Github
- [https://github.com/defi-org-code](https://github.com/defi-org-code) — DeFi.org Accelerator innovation labs (some of the ideas originate there first)

...

_Notes_

This document details a project which is currently being researched by the Orbs team and ecosystem contributors. The project is currently in concept mode and is being portrayed herein as currently envisioned by the Orbs team.

Orbs is a decentralized project driven by community contribution and guidance. The product and functionality detailed in this document therefore constitute a mere proposal assembled from community feedback and are subject to change continuously as new requirements arrive. This document provides no guarantee that any offering, product or specific feature will become fully or partially developed.

The information contained in this document shall not form the basis of, or be relied upon in connection with, any offer or commitment whatsoever in any jurisdiction.


