---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/bg.jpeg
blogUrl: how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper
date: 2018-05-10
title: How to Run a Blockchain on a Deserted Island with Pen and Paper
author:
  - /blog/common/authors/TalKol.md
type:
short_description: "Note: This post by [_@talkol_](https://medium.com/@talkol) was originally featured on HackerNoon. If you wish to comment or clap, please visit the_ [_original publication here_](https://hackernoon.com/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper-899949ec555b)."
---

_Note: This post by_ [_@talkol_](https://medium.com/@talkol) _was originally featured on HackerNoon. If you wish to comment or clap, please visit the_ [_original publication here_](https://hackernoon.com/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper-899949ec555b)_._

If you’re ever stranded on a deserted island, knowing how to run the process of *decentralized consensus* — or in other words, operate a very simple blockchain by hand — can prove to be very useful. All you need is some fellow survivors, this post, a pen and a few pieces of paper.

If you’re not certain this skill is useful for your survival, be sure to read [my last post](https://medium.com/@talkol/why-decentralized-consensus-blockchain-is-good-for-business-5ff263468210) on how blockchain can vastly improve island life.

Let’s go back to that original story and go through the process with our fearless heroes, who just crashed on a deserted island somewhere in the South Pacific — **Hugo**, **Sawyer**, **Kate** and **Jack**.

A short recap: the gang is trying to implement _IslandCoin_, a revolutionary new currency that will bring an end to the island’s crippled barter economy. The gang has agreed it’s fair if each of them starts with 100 coins. Since they don’t have metal to mint actual coins, they’ll have to make do with a few pieces of paper. Riddled with trust issues, the gang hasn’t been able to agree on one person to keep track of balances. Their only option is to maintain the balances _together_.

We’ll start with what is probably the simplest blockchain implementation for our island use case. In future posts we can explore other implementations and tie them to concepts like _Proof of Work_ and _Proof of Stake —_ this will help us see their benefits and drawbacks. But for now, let’s start as simple as it gets.

What are we trying to achieve? It’s very simple actually — all we’re trying to do is maintain a simple table of balances on a piece of paper. This table will show how many coins each of our heroes has. The trick is, because we can’t have _one_ piece of paper that holds the only source of truth — we’re going to have to keep things equal and let each of the gang maintain their own version — this is the _decentralized_ part. And naturally, we’re also going to hope that all 4 pieces of paper eventually show the same thing — this is the _consensus_ part.

So what would this piece of paper look like?

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*lcFfUboJfzFlgOKHj77QEg.png)

This paper is the _first_ one we agree on — that’s why it’s marked as day 1. Where did these balances come from? We’ve previously agreed it’s fair that each of the gang starts with 100 coins. We’re also going to need one of the survivors to write this paper. It doesn’t really matter who, so let’s take Hugo. He will be the one to publish this paper to everybody and make sure they each save a copy (the island has an amazing photocopy machine, I forgot to mention).

Since coin balances are expected to change, we’re going to create a new updated piece of paper at the end of every day. It may not always be Hugo who publishes the update though — we want to keep things as fair as possible after all.

Another important part, due to the lack of mutual trust in the group, is having each of the gang confirm the status update individually. An easy way to achieve this is having each one of the survivors sign each of the papers — but only if they agree with what’s written on it.

How many people need to sign a paper for it to be considered final and approved? We need to reach _consensus_, so a majority will do. Since we have 4 people in total, a majority is at least 3 out of 4. The paper above was signed by all four so it’s definitely final. Why don’t we want to require all four signatures on all papers? Because this will allow one individual to jeopardize the entire process. If Sawyer goes on a fishing trip for a few days, the gang can’t update balances until he gets back — this gives one person too much power. Why do we even need a majority? Why isn’t 2 out of 4 signatures enough? Because if we only require 2 out of 4, we may end up with 2 people (like Hugo and Sawyer) signing one version of balances, and the other 2 people (Kate and Jack) signing a different version that doesn’t match. We can’t have two conflicting versions of reality both considered final.

On the morning of the second day, Kate wants to buy a tomato. Hugo sells tomatoes for 2 coins each. She wants to transfer 2 coins to Hugo. Kate takes a new piece of paper and writes the transfer on it:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*RxkRElLi-s1bC3etoROohA.png)

It’s Kate’s first action ever, so she labels it as such. In addition, Kate signs this paper. We have to have her signature to make sure nobody else can forge a transfer request on her account.

The end of the second day is approaching and the gang wants to publish an updated set of balances. Hugo published the paper for the first day and collected everybody’s signatures. It makes sense to take turns doing so. The gang agrees to use a simple rotating order: Hugo, Sawyer, Kate, Jack, Hugo, Sawyer, and so forth. This means that publishing the status paper for day 2 is Sawyer’s responsibility. The paper he publishes reflects Kate’s transfer:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*k1OztwCQK0VCEj2q0lksuw.png)

This paper that Sawyer made isn’t final yet because it’s only signed by Sawyer. He needs to collect more signatures. Sawyer goes through the gang and asks each one to verify and sign it. This paper is very easy to verify. First, the verifier needs to look in his own collection of papers and find the status paper that shows the balances for the previous day (day 1 in this case). Next, the verifier needs to go over the new list of transfers. In this case, we only have one transfer by Kate. This transfer is easy to verify, we can make sure it’s indeed signed by Kate and we can make sure Kate indeed has enough coins in her balance to give this amount to Hugo.

Once every island inhabitant completes their verification process and signs the paper, Sawyer now has a final status paper for day 2 to publish to everybody. Everybody makes a copy and goes to sleep happy and content.

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*Q5eXmxUT_ApsMmryyMW9EQ.png)

Day 3 is upon us. The system is working well and everybody is excited to spend their coins. Hugo wants to buy some firewood from Sawyer for 10 coins. Sawyer wants to get some pills from Jack for 25 coins and Jack is hungry for a tomato and wants to give Hugo 2 coins to buy one. They each create a piece of paper detailing their transfer:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*ycX4055SkQtlxdWD-8lUbA.png)

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*bctWuCZFNwQQUUujmReiog.png)

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*pp0Wt7y_zErceqjSajZlLQ.png)

As evening approaches, the person publishing today’s balances is Kate. To make sure Kate includes these transfers in her paper proposal, they each need to give her a copy of their transfer request. It actually makes sense to give copies to everybody because the person wanting to perform a transfer doesn’t necessarily remember whose turn it is to publish today’s update.

Jack lingers with getting the copy of his transfer request to Kate and by the time he brings it to her, her balance status of the day is already written:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*tBS7xHCuxj_23NZyHt-oBA.png)

Jack is frustrated that this balance status doesn’t include his own transfer. This means Hugo won’t receive Jack’s payment for the tomato, and won’t give Jack the tomato for dinner. Jack is going to go to sleep hungry tonight. He storms out to look for something else to eat and doesn’t sign Kate’s paper proposal for the day. Luckily, Kate is able to get enough signatures from the rest of the gang:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*ZmnafqZRmDwnG2zoymt17g.png)

Kate managed to get 3 signatures on the paper, each verifying that the balances indeed match the transfers and yesterday’s balances. We have a majority, so this status sheet is considered final.

It’s day 4 and nobody knows where Jack is. He went fishing the night before, got caught out in a storm and didn’t return to camp. It might be problematic because it’s Jack’s turn today to publish the balance update.

Kate wants to make a couple of transfers today, she writes them on a piece of paper and gives a copy to everybody:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*teHs2E8mXwau6ES-h0rwXw.png)

Evening approaches and Jack isn’t back yet. The gang had previously agreed that it’s his turn to publish the balances, but he’s nowhere to be found, so this day’s balance update is skipped.

It’s day 5, and Hugo is the one responsible for publishing the daily update. It’s been raining for a few days and Hugo wants a warmer place to sleep. He asks Sawyer to build him a small wooden hut. Sawyer wants 200 coins for the job. It’s a bit of a problem because Hugo only has 98 coins. Hugo has a crazy idea though, he is the one publishing the balance sheet today, so why not add a crazy transfer of this amount to Sawyer anyways?

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*qP6qC5W3o5Cb5G5L6c9Hlg.png)

There are no other transfers today. Hugo has Kate’s transfers from yesterday though, and Jack’s transfer from the day before that didn’t make it in eventually. He adds all of those, together with his new crazy transfer:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*J6AZfUSvAvINSQtWHy1Zpw.png)

Hugo signs this update although his transfer doesn’t really make sense. To make this status update final, he needs to collect 2 more signatures. When he approaches Sawyer and Kate, they notice that on the previous final balance sheet (from day 3), Hugo had 92 coins. How can he send 200 to Sawyer? They refuse to sign this balance sheet until he fixes this error and removes this invalid transfer. He reluctantly agrees and publishes a new balance sheet which is correct. They eventually sign it:

![](/assets/img/blog/how-to-run-a-blockchain-on-a-deserted-island-with-pen-and-paper/1*U405dZX7lZmgSicmn8-EFA.png)

This balance update is final because it has 3 signatures.

It’s the morning of day 6. Jack finally comes back to camp. He had a rough couple of days with the storm and all. He wasn’t part of the discussions in the last two days and missed announcements of new transfers and publications of new balance updates. He’s actually unsure how many coins he has. He finds the first fellow survivor he sees and asks for the latest updates he missed. He is given the final update for day 5 and the approved update Kate that published on day 3.

It’s easy for Jack to synchronize back with the rest of the gang. He can see that these balance updates were indeed signed at least 3 times, so he can be relatively safe that they’re ok. He can also perform the calculations himself based on these updates and the latest update he has (from day 2). This will allow Jack to participate in today’s transfers just like he didn’t miss anything.

The system seems to be working well. It’s true that it’s a bit simplistic, but it’s enough for what these island inhabitants need. Well, we can’t have a functioning blockchain without a white paper! The gang sits down and celebrates the accomplishment by publishing this magnificent one:

Why is this considered a blockchain? For starters, each piece of paper published daily represents a _block_. Each block is numbered and points to the previous one — forming a chain of blocks. In order to verify the current state of balances, any observer must start from the beginning of the chain (day 1 — the _genesis block_) and verify each of the blocks one after the other in succession. The balances are built incrementally.

Is this an ideal blockchain implementation? Probably not. It can be improved in many ways. For example, it only supports these 4 inhabitants. What happens if another survivor crashes on the island? Will this protocol be able to accommodate them? This protocol is also currently _permissioned_, how can we turn it to be _permissionless_? What if we wanted to modify it to use _Proof of Work_ or maybe _Proof of Stake_?

Well, we’re going to explore these ideas in the next posts in this series.
