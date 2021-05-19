---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/before-eos-ehtereum-ppcoin/bg.jpeg
blogUrl: before-eos-ehtereum-ppcoin
date: 2018-06-25
title: "Before EOS and Ethereum: How much has Proof-of-Stake evolved since PPCoin?"
author:
  - /blog/common/authors/DavidY.md
type:
short_description: _This is Part II of a series on Proof-of-Stake’s growing influence in crypto and blockchain, as well as issues its implementation still faces. This is an expanded version of a talk I gave for Blockchain Academy on June 11, 2018._
---

_This is Part II of a series on Proof-of-Stake’s growing influence in crypto and blockchain, as well as issues its implementation still faces. This is an expanded version of a talk I gave for Blockchain Academy on June 11, 2018._

_Check out the_ [_previous post_](https://medium.com/orbs-network/on-stake-and-consensus-a05e52daa496) _for a high level introduction to PoS as a paradigm shift from PoW._

_In this post we will investigate the_ [_PPCoin system_](https://peercoin.net/assets/paper/peercoin-paper.pdf) _as a PoS case study. From this early attempt at PoS we will understand some of the general challenges the PoS paradigm must resolve in order to yield resilient and secure blockchain systems._

[PPCoin was launched on 19.8.2012](https://chainz.cryptoid.info/ppc/#!crypto) as the first blockchain to actually incorporate Proof-of-Stake, or PoS. It is not a pure PoS blockchain, but a hybrid one with interchangeable use of Proof-of-Work (PoW) and PoS to form blocks (checkout this [block explorer](https://mintr.peercoinexplorer.net/chain)). Put another way, a PoS block can be proposed on top of a PoW block or vice versa.

The main motivation behind PPCoin’s creation was Bitcoin’s diminishing returns: As the reward for mining a PoW block reduces, so will the incentive to mine them (unless fees are dramatically increased, which people would like to avoid). Since PoS blocks are much cheaper to produce and should serve as a long term solution, the rewards they entitle are much smaller but remain constant, aiming at a conservative 1% yearly inflation rate.

This is a departure from the way PoW models mint new coins. The core idea of PPCoin was to include proofs of **_coin age_** consumption in blocks (rather than proofs of having done intensive computational work). A 10-unit coin (i.e., UtxO with value 10) that was created 90 days ago is said to have 900 _coin days_ of coin age.

#### Forming PoS Blocks in PPCoin

First, we note that PoW blocks are found similarly to Bitcoin’s blocks. PoS blocks are different. Each PoS block must spend an old coin, thus consuming its coin age. An old _coin_ is eligible to create a PoS block at time _time_in_seconds_ if:

![](/assets/img/blog/before-eos-ehtereum-ppcoin/1*6JHRxDbht1u2IEe5yxngwA.jpeg)

Where,

- **_coin_** is a UtxO that has been around for timeweight(_coin_) (to limit the power of very old coins, it was bounded by 90 days), and whose value is value(_coin_). Multiplied, we get the coin’s _coin age_.
- **_time_in_seconds_** is simply the current time, in precision of seconds. PPCoin, as Bitcoin, relies on the assumption that honest nodes have synchronized clocks (with minor deviations). A node should reject a block whose timestamp is later than its current time, or earlier than that of the block it extends.
- **_d_** is a tunable difficulty parameter whose goal is to have stakeholders find PoS blocks once every 10 minutes on average.
- **_prev_blocks_data_** is the most interesting parameter in the formula and also the trickiest one. Its job is to make sure the coins that satisfy the formula (and are thus eligible for PoS blocks) aren’t known in advance and their choice is non-manipulable. This parameter accounts for the system’s fairness, or the process in which stakeholders are chosen to produce blocks (we sometime refer to this process as *leader election* — a stakeholder should be chosen with probability proportional to the total coin age she owns, and without knowing in advance when will she be chosen). We’ll check several alternatives for _prev_blocks_data_ and see that they are all problematic.

If the formula is satisfied, the owner of _coin_ can build a block, include in it a _coinstake_ transaction that spends _coin_ for a new transaction output, whose value is slightly larger than value(_coin_) (by 1/100 for each year of coin age consumed, equivalent to a 1% yearly inflation rate).

The main difference between a PoS block and a PoW block is the _nonce_ field. In a PoS block, each coin in the blockchain has one attempt per second to be elected (i.e., satisfy the formula). If the attempt succeeds, the stakeholder in control of the _coin_ can publish a block. Otherwise, she would have to wait one second and only then try again. This is a good place to emphasize two differences relative to Proof-of-Work mining:

- In PoW, miners’ coins don’t play a role in the process of finding valid blocks.
- More importantly, in PoW, miners get as many attempts per second as their hardware allows to find a valid block. We saw in the last post that as of June 2018, the Bitcoin network made [~35 million tera hashes per second](https://blockchain.info/charts/hash-rate?timespan=all&scale=1) — *much* more than the one attempt per second (per coin) in PPCoin.

#### Fair Leader Election

This all seems very promising until now. Let’s examine the system more deeply by looking at _prev_blocks_data_. Here are three possible alternatives:

- _prev_blocks_data_ = null. If we have no _prev_blocks_data_ in the formula, anyone looking at the blockchain would be able to “see into the future” and find out which coin would be eligible to publish a PoS block at what time. This completely eliminates the unpredictability of the block creation process. However, the problem doesn’t end there — a clever stakeholder would be able to tweak its UtxOs such that she would be eligible to propose a new block in the near future. PPCoin would then become a fancy PoW system, in which the work is manifested through an expensive process of looking for “good” coins.
- _prev_blocks_data_ = previous block’s hash. Here, the problem of “seeing into the future” is much less severe as _prev_blocks_data_ changes every block. The problem however, is that the proposer of a block can choose its block such that a specific coin would be eligible for a PoS block in the near future. This makes the leader election process highly manipulable. Worse, a relatively strong stakeholder could build (with only minimal cost) a rather long hidden chain if she splits her coins correctly. She could then double-spend using the hidden chain. Tweaking blocks in order to manipulate the leader election process is generally referred to a _grinding attack_.
- _prev_blocks_data_ = previous PoW block’s hash. Naturally, this choice mitigates the problem of _grinding attacks_ as miners are unlikely to relinquish valid PoW blocks they found (in PoW, [_selfish mining_](https://arxiv.org/pdf/1311.0243.pdf) can be seen as a form of grinding, which is rather limited). This choice also limits “seeing into the future” — now, it would only be possible to “see” as many seconds as it takes for the next PoW block to be found. The problem with PoS though remains. A simple analysis shows that a stakeholder with ¼ of the stake would be eligible to generate six sequential PoS blocks once every 4⁶=4096 blocks in average (if her coins were split correctly). This is of course true also for PoW blocks, the difference is that a potential attacker would know **in advance** whether she obtains a long sequence of PoS blocks and plan her attack accordingly. Building a hidden PoW chain (for a miner with < ½ of the hash rate) bares a great risk and thus miners are strongly disincentivized to try such an attack. In PPCoin though, if for instance the PoW block rate is set to sixhours, then if a stakeholder is to find out she has a six-long sequence of blocks in the near future she could use it to execute a six-long reorg. That would be a hidden chain attack without cost. Additionally, it would be very hard to keep PoW miners around if the block rate is so slow. If we make it faster, our PoS system is no longer very “Proof-of-Stakey”.

The analysis above should have convinced you that having a fair stakeholder election process isn’t easy to design. However, this is not the only problem with PPCoin. Another interesting problem is that of _rational forks_.

#### Rational Forks

To understand this problem, let’s rethink PoW for a second — a miner in a PoW-based chain that knows a single tip constructs a block on top of it and checks its validity. She immediately gets a response. If the block is valid, she publishes it. Otherwise, she increments the nonce and tries again. The point is that at any point in time her compute resources are fully utilized. Thus, if our miner was introduced with an alternative tip she would have to decide how to split her resources. Her best strategy is to devote her resources where it’s most likely that the network would include her block, if indeed she were lucky to find one, as a part of the canonical chain.

Now, let’s consider what happens in PPCoin. Similarly to PoW, a stakeholder tries to extend the tip she knows and immediately gets a response. If her block is valid, she publishes it. Otherwise, she must wait one whole second before her next attempt. During this second her compute resources are unused. Thus, as she waits, she has nothing to lose (and little to gain) by pointing her resources where potential blocks are less likely to become part of the canonical chain. Specifically, if a stakeholder is presented with two competing tips (at the same height), she is unlikely to tie her hands behind her back and try to extend only one of them. She is more likely to opt to gain more (expected) rewards by keeping both forked chains.

If such a strategy is enforced by all stakeholders the chain would suffer frequent reorgs and the system would be much less stable. This problem deteriorates as the block interval decreases and thus a PoS system in the spirit of PPCoin wouldn’t enable scaling or lower confirmation times.

#### “Nothing-at-Stake”

Another way to think of the above problem is what’s known as _nothing-at-stake_. Stakeholders may attempt attacking the main chain by building alternative (secret) chains. They would try to extend recent blocks all the time until at some point they find a sequence of blocks. Since these attempts are practically free, they have nothing to lose. If they see the main chain becomes much longer than their hidden fork they would simply abandon it and try again from scratch with a more recent block. It is important to mention that while the attack takes place they could try to extend the main chain as well to make sure they don’t suffer any reward losses. Conducting such an attack would eventually succeed, but worse, it would bare no cost to the attacker.

The main reason for the nothing-at-stake problem in PoS systems is the fact that blocks are “cheap” to produce and don’t require “work”. In PPCoin, this problem is directly related to the way leaders are elected to produce blocks. We’ll try to separate the two problems in the next posts and discuss ways to mitigate each one. But first, how did the PPCoin developers mitigate these problems in their system.

The analysis above relies on [this paper](http://www.cs.technion.ac.il/~idddo/CoA.pdf) (section 2) by Iddo Bentov et al.

#### Compromising on Decentralization? Fairness and Incentives

To make sure stakeholders don’t manipulate the election process of future coins for PoS blocks, a rather complicated function was chosen for _prev_blocks_data_ (look [here](http://wiki.peercointalk.org/index.php?title=ComputeNextStakeModifier_function) for more details). PPCoin developers designed _prev_blocks_data_ to reduce the influence a stakeholder has by choosing her block this way or the other. However, it is difficult to assess to what extent this is actually achieved. In the next post, we will discuss “low-influence functions” which are another option to achieve this.

Additionally, the PPCoin developers addressed the problem of rational forks (and hidden chain attacks) via a _checkpoint mechanism_. Checkpoints disincentivize any attempts to build hidden chains — any long reorg would simply be ignored by the checkpoint mechanism that de facto determines the “true” chain.

Of course, the problem with developers checkpoints is that they serve as a point of centralization that the system is dependent on for stability. In addition, it seems the leader election process is vulnerable to manipulation by the stakeholders.

As we’ll see in the next few posts, these were indeed the problems PoS system designers came to solve: 1) generating unpredictable and non manipulable randomness for leader election and 2) coping with the cheap production of blocks (both for short-range attacks like _chain convergence_ or _hidden chain attacks_, and for long-range attacks like _syncing new nodes_).

Another issue we need to relate to is that in PoS systems, at least the one offered by PPCoin, stakeholders gain very little rewards and are thus less motivated to actively engage with the block production process. Participation level might then become a problem as many stakeholders may stay offline for long periods of times.

#### Towards the next posts

At this point, I’d like to mention that there were three major evolution steps in PoS design. First attempts tried to mimic Bitcoin’s PoW quite naively and were prone to many vulnerabilities. These attempts include PPCoin (and its descendants [Nxt](https://bravenewcoin.com/assets/Whitepapers/NxtWhitepaper-v122-rev4.pdf) and BlackCoin) and Iddo Bentov’s [Proof-of-Activity](https://eprint.iacr.org/2014/452.pdf) and [Chains-of-Activity](https://arxiv.org/pdf/1406.5694.pdf).

Later attempts incorporated a _Byzantine fault tolerance layer_ (BFT) over the native chain selection rule. In a sense, the longest chain selection rule was replaced for more secure alternatives based on a thirty-year-old body of research into BFT consensus algorithms such as [PBFT](http://pmg.csail.mit.edu/papers/osdi99.pdf). BFT algorithms typically satisfy mathematical properties, but rely on specific assumptions that don’t have to be met in a real-world implementation. Particularly, BFT chain selection rules can reduce the need for synchronous communication to guarantee consistency (which enables a significant speedup in the block rate), but assume that only a super-minority of the participants don’t follow the protocol honestly.

We will discuss this point in detail in the following posts, but I’ll say now that incentivizing correct participation has great importance in PoS design. First attempts at repurposing BFT algorithms for PoS were made by [Tendermint](https://allquantor.at/blockchainbib/pdf/buchman2016tendermint.pdf) and [Algorand](https://arxiv.org/pdf/1607.01341.pdf).

Both in traditional BFT algorithms and in modern PoS suggestions, the role of proposing blocks and validating them is played by the same entities. A third generation of PoS systems, led by Casper FFG, separates block production from block validation. One service continuously spits blocks, forming a tree-like data structure through hash chaining. A separate validation service determines an ever-growing finalized branch within the tree through a BFT protocol driven by PoS.

This approach reduces some of the difficulties in implementing PoS-based blockchains by relying on a PoW-based block production service. It enables a gradual migration to PoS by incorporating the PoS service atop a functioning PoW chain. This is _exactly_ what Ethereum is planning with Casper FFG, with the intention of replacing the PoW block production service for one that relies on PoS at a later time.
