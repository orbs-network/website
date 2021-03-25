---
layout: partials/blog/blog-body
---

The final season of [Game of Thrones]('') is currently airing. The long-anticipated conclusion to the epic battle over The Iron Throne – rule over the Seven Kingdoms of Westeros.

Consider the “final episode” _(don’t worry, this is all made up, no spoilers here)_: The last battle is upon us; The northern armies led by the Starks approach the battlefield; the armies of Daenerys are there too; and so are the Lannister armies, led by Cersei. John Snow, ever the responsible adult, proposes an alternative: “Instead of bloodshed, why don’t we just have a democratic election?” Everybody nods in agreement. The soldiers cheer. Credits.

Cersei volunteers to run the elections. House Lannister places voting booths in all reaches of Westeros and every citizen in the Seven Kingdoms writes their desired ruler’s name on a ballot. The ballots are then all shipped to King’s Landing where Cersei counts the votes and announces the winner.

The process goes through and Cersei is excited to announce that she won. Would you trust these elections?

As it turns out, not all democracies are equal. If you’re interested to see the leaderboard, check out how every country ranks at the [2018 Democracy Index:]('')

![2018 Democracy Index:](/assets/img/blog/pos-external-oversight/img1.jpeg)

Most of the countries in the list, notably those with the low ranking in red, openly pride themselves as being democratic and celebrate periodic elections where the populous get a chance to choose their leaders. But evidently, some democratic processes are prone to manipulation allowing existing leaders to maintain their positions of power regardless of where the populous tries to shift it.

Pseudo-democracies are not the only ones with problems. There are issues with the top 15% in the list. Take a look at the US for example, number 25 in the list and the historical epitome of modern democracy (no cynicism intended). “[Gerrymandering](https://www.washingtonpost.com/news/wonk/wp/2015/03/01/this-is-the-best-explanation-of-gerrymandering-you-will-ever-see/)” is one example of a US problem where the political party in power can draw lines between voting districts that are favorable to itself.

Democracies are complicated to implement, the nuances are plenty. And through their analysis and criticism, we have the chance to improve on them. To design processes that better guarantee their purity and withstand corruption.

Proof-of-Stake systems behave in a very similar way. Voting, or the degree of influence, is based on ownership of stake instead of citizenship, but otherwise, the process is prone to similar nuances and must be designed to withstand manipulation. We must also continuously criticize PoS implementations so we have the chance to improve them.

And surely – there is plenty of criticism of PoS in the crypto world. The spectrum ranges from belief that the problems of PoS are solvable, debating the pros and cons of various implementations, to outright skepticism whether PoS can work at all.

Take for example the views of Joseph Lubin, co-founder of Ethereum and founder of ConsenSys, from the recent [Deconomy](https://www.youtube.com/watch?v=IaWxIwaGvLQ&ab_channel=readerleading): “How about EOS? As has been debated endlessly, a platform controlled by 21 crypto bros is just not all that decentralized. They can collude and censor if they wish. Governments and other well-resourced actors can bribe them or force them to act against their will and against the well being and the security of the people using the platform”.

Let’s try to analyze Lubin’s argument why EOS, the dominant PoS implementation to date, is flawed. The 21 elected nodes of EOS “can collude and censor if they wish.” But what would happen if these nodes indeed collude against the interests of the entire network? If the effects aren’t minor, like a decline in token price, stakeholders will spring to action and just replace the colluding nodes. Elections on EOS rely on stake of the entirety of the network, and the majority of stake is assumed to be honest. So where’s the risk?

The risk is only if the colluding nodes could prevent their own replacement. The core of the matter, in my opinion, is that they are the ones running the elections. They are the ones counting the votes.

This isn’t all that different from Cersei counting the Westeros votes by herself.

The majority of PoS implementations are **closed systems**. The voting process is part of the protocol and the protocol is executed by nodes running the network, that are chosen according to the protocol. There is an essence of circular trust here.

### What about Proof-of-Work algorithms? Is PoW prone to the same circular trust weakness?

Not really. Albeit its shortcomings in terms of efficiency and cost, PoW has several wonderful properties making it an excellent choice for decentralized trust. The primary of which is strong [objectivity](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/).

**Objectivity** (I’m using Vitalik’s definition here) means that a new node coming onto the network with no knowledge except (i) the protocol definition and (ii) the set of all blocks and other “important” messages that have been published can independently come to the exact same conclusion as the rest of the network on the current state.

What does this mean? Let’s say I’m an observer of the network and I want to be convinced that the state presented by the nodes in the network is indeed the “correct” one. Am I able to verify everything all by myself?

I can easily verify the amount of work in PoW by myself (that’s the point, hashes are easy to verify but hard to produce). And since PoW algorithms work according to the longest chain rule, I can objectively know which competing portrayals of the state (competing forks) is the right one.

You can say, in a sense, that the work itself is **external to the system**, and since the system is not closed anymore and does not vouch for itself using itself only, it becomes very trustworthy.

The objectivity property is unique to PoW (and similar methods like [VDFs](https://eprint.iacr.org/2018/601.pdf)) but missing from most PoS implementations, leading to the circular trust weakness of a closed system.

Why is the lack of objectivity painful in PoS networks? The core offering of these networks is trust. As clients of the network, we should be able to verify the correctness of the relevant state and transactions. Verifying the correctness of data requires knowledge of the elected validators, since they are the ones allowed to sign blocks. In order to verify the elected validators, one can attempt to verify the election calculations. However, the calculations and the votes reside on the chain itself, signed by the same validators that we’re trying to verify in the first place. This cyclic dependency prevents the client from objectively verifying the correctness of their data. There are workarounds like trusting one of the validators, but these solutions are suboptimal. When our core offering is trust, we should hold ourselves to a higher standard.

If we could add objectivity to PoS, this will provide us with the missing **external oversight** – and give us a PoS implementation that is much more trustworthy. This will also give a pretty good answer to Lubin’s fears that the elected nodes in the system can collude and censor (particularly regarding the voting process that elects them).

So, is it possible to use PoW for this purpose without affecting the efficiency of PoS? There is a straightforward way to do this and it’s actually pretty simple. All you have to do is store the votes externally – preferably on a different decentralized network that is based on PoW.

Going back to our Westeros example, this would mean that the voting booths where the ballots are stored, will no longer be under Lannister control. The voting booths will be controlled by somebody else (external to the Game of Thrones universe) that will guarantee the sanctity of the elections. Once the elections have been made, whichever king is elected is free to rule inside Westeros without external involvement.

The last part is important. If we are to maintain the efficiency of PoS, the rest of the network operation – mainly executing smart contracts on the PoS network, storing the state under consensus, doing everything a blockchain does – must not rely on PoW anymore. The only thing PoW will provide is an **external guarantee of objectivity** that will let any observer confirm that the PoS network is not colluding and has indeed been purely elected.

This is how this approach is different from layer 2 solutions. Second layers delegate all security and trust to the base layer. The base layer can overturn smart contract results, for example, or override state modifications made by the second layer. Our approach will still make the PoS system retain its own security and trust and thus hold value of its own.

### So how would that work in practice?

The natural choice for a PoW network to store election votes is Ethereum. It is popular and obviously secure enough (in terms of hash power) as a standard of trust to be sufficiently disconnected incentives-wise from our own PoS network, and its smart contracts offer the flexibility for a proper integration.

If storing election votes on Ethereum is a simple solution, why don’t we see more PoS blockchains taking this approach?

One reason may be ego. Many PoS systems position themselves as potential “Ethereum-killers” – the scalable place to run apps until Ethereum reaches its own scalability milestones. Elections are also a crucial part of your solution, and using somebody else for a crucial part may “leak” some of your own perceived value to this somebody. We don’t share these views at Orbs. We see enormous value in existing ecosystems that have already been built. Not everything has to be replaced. We attempt to use existing infrastructures where they show advantage in order to make our own solution better.

Another reason this approach is difficult for many PoS blockchains is the utility of the token used for staking. Most PoS systems rely on the token for settlement related to the main purpose of these platforms – running apps. In other words, app developers use the token to pay nodes for running their apps.

Performing staking on Ethereum will also mean the utility of payment for app execution will have to be done on Ethereum as well. Since most PoS systems rely on a per-transaction gas model and aim for very high transaction throughputs, this would make Ethereum fees (in Ether) extremely high and inefficient – and thus miss the whole point of the efficiency of PoS.

This is another place where the Orbs architecture comes to our advantage. We’ve made a product decision long ago (see the original [Position Paper](white-papers)) to have apps pay monthly subscription fees to Orbs nodes for executing their apps, instead of a per-transaction gas model. This product decision brings multiple benefits crucial for a pragmatic app execution platform such as predictable fees and the ability for apps to subsidize their users’ fees to encourage adoption (the same way Facebook subsidizes your Messenger costs and doesn’t charge you for their infrastructure fees per sending each chat message). This is part of our strategy to bring the AWS product experience to app developers in blockchain.

Apps on Orbs run on [virtual chains](https://www.orbs.com/white-papers/blockchain-virtualization-a-necessity-for-real-world-dapps/) that have dedicated and isolated resources. Subscriptions for resource dedication in virtual chains are paid monthly (or even longer if you want to guarantee future data availability). Making the payment once a month on Ethereum means Ether fees are negligible. There will be no impact on the efficiency of PoS.

The Orbs network is a PoS-based blockchain. It relies on the ORBS token which is used for paying infrastructure fees for running apps and also for staking and electing validators. The voting process is performed on Ethereum and thus ORBS is an ERC20 token.

Orbs is not a layer 2 for Ethereum though. Orbs does not delegate security and trust to Ethereum, and holds its own value in its permissionless validator pool based on the PoS ecosystem of the ORBS token and its incentives model. Ethereum provides an **external objective guarantee** that any observer can verify that elected nodes on Orbs are indeed the ones the stakeholders voted for. For this important governance function, Ethereum is a crucial component in the Orbs design.

Apps running on Orbs are not executed on Ethereum, allowing them to fully enjoy the efficiency and decentralization in PoS, extremely low operation fees, extremely high scale and many other Orbs-specific benefits such as governance isolation, smart contracts in any language and more.

Learn more about Orbs [here](white-papers).
