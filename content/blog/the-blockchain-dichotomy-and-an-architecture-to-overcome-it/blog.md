---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/the-blockchain-dichotomy-and-an-architecture-to-overcome-it/bg.jpg
blogUrl: the-blockchain-dichotomy-and-an-architecture-to-overcome-it
date: 2019-04-15
title: The Blockchain Dichotomy and an Architecture to Overcome It
author:
  - /blog/common/authors/TalKol.md
type:
short_description: "Trying to unlock mainstream adoption for public blockchain is one of the hardest challenges in the industry today. Real businesses are yet to see the value in public blockchain technology and adoption crawls. I believe this is largely caused by the blockchain dichotomy: the polarization of infrastructure solutions in the industry today. If this indeed is the cause, we can design architectures around it. Will this be enough to make mainstream adoption possible?"
---

_Trying to unlock mainstream adoption for public blockchain is one of the hardest challenges in the industry today. Real businesses are yet to see the value in public blockchain technology and adoption crawls. I believe this is largely caused by the blockchain dichotomy: the polarization of infrastructure solutions in the industry today. If this indeed is the cause, we can design architectures around it. Will this be enough to make mainstream adoption possible?_

...

There’s a feeling in the industry that blockchain is slow to deliver on its promise. The impact of this technology on the world is still small. This may be the result of unrealistic expectations due to the abundance of hype, but there’s no argument that the market is slow to mature.

We are past the point of demonstrating the conceptual innovation in blockchain. It is undeniable that this technology is capable of solving problems that we’ve previously had no solution for. But why are mainstream businesses barely using it to solve real world problems? Why is there so little adoption?

I talk to many tech companies. Almost all of them have looked into the technology. Many have even assigned a product manager to analyze the field. But when I ask this product manager what immediate value they see in public blockchain, they struggle to give a straightforward answer. Unsurprisingly, most of them don’t have concrete plans to incorporate the technology in their roadmaps. Most of them even struggle to provide one solid use-case where it can be used.

### **The blockchain dichotomy**

I believe adoption is slow because our industry is severely polarized. Solutions are moving between two opposite extremes - and mainstream adoption is falling right in the gap.

On the one hand, we have public blockchains like Ethereum, Tezos and Polkadot. Beautiful solutions, but their approach to ‘publicness’ focuses on absolute decentralization of businesses. Their public offering resonates mostly with pure dapps, a new type of business model that is just emerging. They aim for a new Internet, where middlemen like Uber Ltd are replaced with new decentralized Ubers, incorporating peer-to-peer token economies instead of the traditional for-profit model of the business world. The problem these infrastructures are solving today is not in high demand from existing mainstream businesses and their optimizations make them too expensive and impractical for popular use.

On the other hand, we have private and permissioned blockchains like Hyperledger. They are pragmatic and easy to use, but provide questionable benefit over traditional databases. They don’t focus on the value of permissionlessness and therefore cannot give strong external guarantees to their users. I believe these solutions miss out on what is truly disruptive about blockchain and where the big value awaits.

Is it possible to bridge this dichotomy? Or is this polarization inherent to the nature of the technology itself?

### **What are we trying to solve, anyways?**

Before we can start thinking about architectures for bridging dichotomies, we need concrete definitions for what we’re trying to solve. The value-add of the technology isn’t clear to mainstream businesses. So, what is the purpose of the public blockchain?

The first thing people say as a response to this question is usually _decentralization_ - we’re trying to decentralize aspects of business. When trying to pitch decentralization to a business, the first question asked is will decentralization make me more profitable? The industry is struggling to provide a convincing answer to this question.

I prefer a different answer. I see pragmatic blockchain technology as the infrastructure to build applications that provide three interesting guarantees to users: _auditability_, _forkability_ and _governance_. I won’t go into detail about each guarantee, it is covered in a [previous post](../defining-the-public-blockchain/). These guarantees can help make businesses more profitable, see analogies from the [open source movement](https://www.orbs.com/blockchain-as-the-next-evolutionary-step-of-the-open-source-movement/).

Now, that we have a concrete answer, we can explore how these guarantees are actually given.

### **Block producers and validators**

_Block producers_, _validators_, _miners_ - are all similar terms in blockchain architecture. They refer to the entities in the network that are charged with selecting transactions, packing them inside blocks and signing these blocks as part of the consensus process. Every block that passes consensus is added to the chain, thus creating the _block chain_.

The first interesting distinction we’re making in Orbs is separating between _block producers_ and _validators_. Block producers are the ones proposing blocks, validators are the ones signing and verifying them.

The consensus process in the network adds blocks to the chain one after the other. When work starts on a new block, one of the _block producers_ chooses transactions that will go into this block and packs them inside. This includes executing the transactions, recording the changes in state and so forth.

Now, that a new block is proposed, it must undergo consensus. This block is sent to _validators_ which verify that the block follows the protocol. They verify that indeed the transactions are valid, that execution is correct, the state changes add up and so forth. If valid, they sign the block. When enough signatures are collected - beyond the consensus threshold - the block is accepted and added to the chain.

Many blockchain architectures today use the same entities for both tasks. _Block producers_ usually act as _validators_ for each other. There is normally only one group.

Making the separation between the two possible in the Orbs architecture provides some interesting benefits and in my eyes plays a major part in the solution.

### **Proof-of-stake and a public pool of validators**

At the heart of the Orbs ecosystem is a permissionless pool of validators that is elected by ORBS token holders. I will not go into the specifics of the Orbs proof-of-stake architecture and how _guardians_ and _delegators_ work together to accomplish this task. See [relevant posts](https://www.orbs.com/the-orbs-pos-universe-archetypes/) on the subject.

I will only emphasize that the purpose of the Orbs incentives model is to actively maintain a quality pool of trustworthy validators that act in the best interest of the network and uphold the protocol. These validators are public in essence, chosen in a decentralized and permissionless way, as common in other proof-of-stake models prevalent in the industry.

### **Virtual chains and governance autonomy of apps**

Another important element of the architecture is _virtual chains_. The Orbs network runs multiple isolated virtual chains in parallel on the same physical infrastructure of nodes and validators. Every app would normally run on its own virtual chain under the illusion of having its own dedicated blockchain.

There are many benefits to this approach, from infinite horizontal scalability (virtual chains are inherently sharded) to the ability to provide apps with dedicated and reserved resources that guarantee performance.

The most important benefit though is not related to performance, it has to do with _isolation._ Different virtual chains are isolated, particularly in regard to governance. Every virtual chain has its own chain of blocks advancing independently and its own instance of the consensus algorithm executing in parallel.

This means that if an app has a catastrophic bug, like in the case of [The DAO](https://medium.com/swlh/the-story-of-the-dao-its-history-and-consequences-71e6a8a551ee), an extreme governance decision like changing history would not impact the other virtual chains. Their blocks would not be affected.

Every app is required to declare and implement its governance model as a set of smart contracts running in its virtual chain. This enables each virtual chain to make its own autonomous governance decisions, like choosing its consensus algorithm. What else should we let every app control?

### **Can apps choose block producers and validators?**

If an app is free to make governance decisions in its virtual chain, the immediate question becomes: Can an app choose its own _block producers_? Moreover, can an app choose its own _validators_?

It turns out this question is one of the most profound ones any blockchain infrastructure has to answer. Let’s explore the matrix of possibilities:

#### **1\. Apps can’t choose their own block producers, apps can’t choose their own validators**

If we’re not letting the app choose the identities of either group, this means both groups must be designated by the network. In the Orbs case, it means both groups come from the permissionless validator pool elected by ORBS token holders according to the Orbs proof-of-stake model.

This approach takes us to the extreme “public” side of the blockchain dichotomy. It is similar in concept to how blockchains like Ethereum and Tezos work today. Apps running on these blockchains must naturally accept the public miners of these blockchains - assembled using incentives systems unrelated to the app.

#### **2\. Apps can choose their own block producers, apps can choose their own validators**

If we’re letting the app choose the identities of both groups, the app does not rely on the public validator pool at all. This means effectively that the app’s _block producers_ and _validators_ are subject to the governance model of the app itself.

If the app governance is permissioned (eg. some entity under the app calls the shots), these groups will be permissioned. If the app governance is permissionless (eg. proof-of-stake using the app’s secondary token), these groups will be permissionless but subject to the app’s own incentive model - not the network’s. The repercussions from this are vast and probably deserve their own dedicated blog post.

This approach takes us to the extreme “private” side of the blockchain dichotomy. It is similar in concept to how blockchains like Hyperledger work. Apps running on these blockchains control their own private fate.

These are the two extremes we’re well familiar with. Is there a third option?

#### **3\. Apps can choose their own block producers, but cannot choose their own validators**

Now things are beginning to get interesting under the Orbs architecture. _Block producers_ can be chosen by the app - subject to whatever governance model the app has (permissioned or permissionless), but the _validators_ are designated by the network - coming from the Orbs public and permissionless validator pool elected by ORBS token holders.

It seems that this approach does not fall under any of the extremes of the dichotomy. It falls somewhere in the middle.

And this is exciting.

### **Back to our three guarantees**

We’ve defined earlier pragmatic blockchain technology as the infrastructure to build applications that provide three interesting guarantees to users: _auditability_, _forkability_ and _governance_.

Let’s explore forkability for a minute because it’s arguably the most interesting of the three. Forkability is the ability of every app user to fork the app at will, with all of its code and data. The ability to fork creates a healthy balance of power. If control of the app is abused and a community of users or partners feel wronged by whichever app governance model was chosen, this community can easily run its own duplicate instance of the app. They are not held hostage. If this does not happen and the app remains the popular fork, this means no other fork is doing a better job. This sums up forkability.

So, what do we need in order to guarantee app users the ability to fork?

This is actually pretty simple. All they need is access to all the blocks in the app’s virtual chain. Since smart contracts are stored on state, and state changes are stored on blocks, both code and data will be available this way.

The act of forking a virtual chain is trivial on Orbs. The platform allows you to create a new forked virtual chain instance at the click of a button, containing all blocks from the original virtual chain.

But how can we guarantee access to the app’s blocks? How can we guarantee that the blocks we are shown are indeed the real blocks and not some alternate history?

We can do that if an external pool of validators has verified access to the original blocks; A pool of validators that is not under the direct control of the app; A public pool of validators. Just like the one elected by the ORBS token holders under the Orbs Universe!

### **Comparing the matrix of choices**

Both extremes of the dichotomy are possible under the Orbs architecture but both have significant disadvantages for the mainstream.

Forcing the public pool of network validators for the app’s _block producers_ and _validators_ is the “public” extreme. It is possible to give the three guarantees this way, but the hosted app becomes absolutely decentralized. This would be expensive and impractical for many mainstream businesses. Nevertheless, this approach is supported and works well for pure dapps.

Giving the app full control of its _block producers_ and _validators_ is the “private” extreme. It is very practical for mainstream businesses, but it turns out that it is **not possible** to give the three guarantees this way. Therefore, this approach misses out on what we’ve defined as the value-add of blockchain. The app might as well run on a plain old database instead.

But what about the third option? Control over _block producers_, but no control over _validators_.

Forcing the public pool of network validators for the app’s _validators_ turns out to be enough to provide us with all three guarantees. This means the value-add of blockchain is there. Yet, giving the app control of its _block producers_ makes a big difference - it makes the solution suddenly much more practical for mainstream businesses. Why is that?

### **Control of block producers is important for mainstream adoption**

Giving a mainstream app control of its _block producers_ alleviates many of the fears of decentralizing too aggressively. It makes the process of migrating to blockchain feasible for existing businesses.

First, it takes care of concerns about _security_. This may seem counter intuitive, but for mainstream apps, switching to the fully decentralized security model of blockchain actually adds risk. Uber does not have substantial security concerns, it’s perfectly confident in own its ability to secure its own app in a centralized way. Uber will not switch to blockchain for the security. If anything, Uber will avoid switching to blockchain for the fear of giving an unknown group of anonymous nodes full control of its own security.

Controlling its _block producers_ will allow Uber to act as its own block producer. If they don’t trust anyone else, they can even be the only block producer, keeping their fate in their own hands. External validators only verify blocks, they don’t propose them. Even if all _validators_ collude against Uber, they won’t be able to change data or steal anything. The maximum damage they can do is impact the liveness of the app. And that’s not necessarily a bad thing, because if Uber itself is compromised by bad actors, these validators will prevent bad actors from doing damage to the users.

Second, this reduces costs, dramatically. One of the biggest downsides of blockchain for mainstream businesses is that running on blockchain is thousands of times more expensive than the alternative. The value-add of blockchain has to be immense for this to make sense. And this unfortunately isn’t the case for most apps.

Running a _validator_ is significantly cheaper than running a _block producer_. _Validators_ can be stateless. For Uber, running its own _block producers_ is not very different cost-wise from running its own servers as it does today. The extra costs of blockchain are reflected in the overhead payment for the validators of the public pool.

Third, the focus on adding guarantees for users, and not on absolute decentralization. The idea is not to tear down Uber and replace it with a new fully decentralized Uber. This is not practical, particularly not for Uber Ltd. We’re not trying to build a new Internet. We’re trying to improve existing apps and make them more attractive to users and partners by helping them offer stronger guarantees. Defining the value-add of public blockchain as the ability to give these guarantees, and not as absolute decentralization, suddenly makes the value-add of blockchain applicable for the mainstream.

### **Gradual and responsible decentralization for apps**

The Orbs architecture provides apps with several degrees of control that make migration to blockchain a potentially _gradual_ process. This stems from our realization that most existing businesses cannot decentralize overnight.

How is this made possible for an app?

First, by giving it autonomous governance. The fact that every virtual chain is free to make its own governance decisions, means that decisions of one app do not affect another. **Every app can decentralize in its own pace.**

Second, by controlling its _block producers_. An existing app can start by being its own only _block producer_. The platform is still able to provide the three guarantees in this case. As the app is ready to trust additional partners, for example when expanding its ecosystem, it can add additional _block producers_ from trusted partners. The final step will be making its _block producer_ pool permissionless. The app can do this under its own incentive model or use the public permissionless validator pool of Orbs for the task. This would make the final step into the “public” extreme of the dichotomy - but only if and when the app is ready.

If desired, it is also possible for the app to start from the “private” extreme of the dichotomy and even control its own _validators_. As we’ve seen before, the benefit of blockchain in this case is small, because the three guarantees will not be given. The value-add of blockchain will not manifest. Nevertheless, apps that only desire to be _public-ready_ can start experimenting with the technology this way.

Third, by evolving its own governance model. The governance model of an app is implemented as smart contracts running on its virtual chain. This governance model can start centralized with one entity making all decisions. This gives existing apps control but doesn’t impact the platform’s ability to offer the three guarantees. As the app’s desire to decentralize grows, this governance model can be upgraded to a more decentralized one. If the app has its own token economy, for example, it can use stake based votes on its own secondary token to make internal governance decisions in a purely decentralized way.

### **Conclusion**

The blockchain dichotomy is holding blockchain adoption back. Solutions today are either overly decentralized on the “public” extreme or overly permissioned on the “private” extreme. We can either tear down existing applications and build a new Internet or stay behind with the old Internet and miss out on everything blockchain can offer.

Separating between _block producers_ and _validators_ may provide the missing flexibility. Allowing _block producers_ to remain “private” while forcing _validators_ to become “public” allows mainstream applications to retain a level of control and keep infrastructure costs sane.

This approach is still able to offer the public essence of blockchain - of open ecosystems and trustless decentralized collaboration that can make businesses more competitive. Allowing existing apps to give strong guarantees to their users and partners - _auditability_, _forkability,_ and _governance -_ is what public blockchain should really be about.

I believe that the dichotomy we’re seeing today will gradually disappear. Both extremes will have to take steps to become closer. Solutions on the “public” extreme like Ethereum and Tezos will become more appealing to the mainstream by adopting architectures like separating block producers and validators. Solutions on the “private” extreme will add Byzantine fault tolerance and other ideas from public blockchains to provide stronger guarantees to their users.
