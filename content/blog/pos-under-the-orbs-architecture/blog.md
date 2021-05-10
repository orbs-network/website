---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/pos-under-the-orbs-architecture/bg.jpeg
blogUrl: pos-under-the-orbs-architecture
date: 2019-04-24
title: PoS Under the Orbs Architecture
author:
  - ../common/authors/DavidY.md
type:
short_description: _The blockchain industry makes heavy use of buzzwords. Terms like "public" and "private" are thrown around but what do they actually mean? Is this the right way to define a blockchain? Does a private blockchain really exist? Maybe we should even take one step back and ask - what is a blockchain, actually?_
---

_The blockchain industry makes heavy use of buzzwords. Terms like "public" and "private" are thrown around but what do they actually mean? Is this the right way to define a blockchain? Does a private blockchain really exist? Maybe we should even take one step back and ask - what is a blockchain, actually?_

...

### The need for concrete definitions

How do you define blockchain?

This sounds like a funny question, but try asking it 10 different industry experts and you will probably get 10 different answers. Is there even one correct answer? Maybe the better question should be "what does blockchain mean for you?"

It is important for anyone working in this industry to attempt to answer this question for themselves. The hard part of defining buzzwords is avoiding the temptation to rely on a different set of buzzwords for the task. A good definition needs to be razor sharp. It needs to make things easily distinguishable. Anyone should be able to take your definition and easily distinguish whether something in question falls under the definition or not.

### The dry technical definition of blockchain

When writing the Orbs position paper, I originally used a very dry and technical definition - "blockchain is the technology of _decentralized consensus_". Each of these terms can be defined separately. _Decentralized_ systems are those who are not controlled by any single entity. _Consensus_ is the process of several independent entities reaching a shared view of reality. The actual definitions were a bit longer, and one can refer to the original text for the specifics.

But there is a problem with this definition. The problem is that it does not cover the _public_ aspects of blockchain. What is a _public_ blockchain? Is there such a thing as a _private_ blockchain? Many companies are building private blockchains, so naturally this concept exists.

To dig into these questions we should be asking ourselves something slightly different. What is the value in blockchain? What does this technology add to the world? What innovation can be accomplished with this technology that previously did not exist?

### So, what is the value in blockchain?

We should be careful though not to be confused with the value of _specific applications_ of blockchain. So far, the killer app of blockchain is digital assets - cryptocurrencies like Bitcoin that aren't controlled by a centralized bank. It is easy to see the value in those. But this is not what we're asking. We're not asking about specific applications - we're asking something deeper about the nature of this technology as a whole.

This is another question that is difficult to give a razor sharp answer to. People usually say things like _collaboration_ \- blockchain allows different entities to work together on solving a problem. They use terms like _trustlessness_ \- these different entities are not required to and probably shouldn't trust each other.

I'm not satisfied with these answers because they are still not concrete enough.

### Blockchain provides guarantees

From my perspective, blockchain begins with the subject of _multi-player systems_. A _system_ provides a solution for some business need. A _multi-player system_ is one that is used by multiple different and independent entities. This is a very broad field since almost every interesting system in the world has several different users.

Let's take advertising as an example. An advertising system takes an _advertiser_, looking to promote something, and sets them up with a _publisher_, looking to rent real estate they own, where _end-users_ will be exposed to said promotion. This system for example has three archetypes of independent entities, each composed of many different individuals.

**Blockchain takes a multi-player system and provides a set of guarantees to the players in this system.**

### Exploring systems for multiple players

Before diving into the specifics of which guarantees are provided, we should point out that these multi-player systems are almost never operated by all players equally. Let's explore this observation first.

For a system to work, it needs to be operated by someone. There could be a single operator or there could be multiple. Going back to our advertising example, a popular real-world example is Google AdWords (now Google Ads). It serves multiple entities but is operated by a single entity - Google Ltd.

The fact that we can have more than one operator isn't yet the main innovation. The field of _distributed systems_ is not new and has been in existence for several decades at least. The Internet, for example, is a communication system that is not operated by a single operator and was invented well before blockchain.

Almost every practical system would not be operated by all players equally. There could be many reasons why. For one, this would be terribly inefficient. The overhead cost of operation is usually proportional to the number of operators, so increasing it indefinitely is less than desirable. A different reason could simply be timing. Not every player starts using the system at the same time, so naturally the system had to operate before some of the newer players joined in. A different reason could be lack of interest. Operating the system requires effort that not all players are willing to spend.

If not all players are operating the system equally, let's divide the players into two groups. Please forgive this coarse separation, we're doing so for simplicity of the argument. The first group, which usually is the smaller one, we'll call the group of "full" operators. This may not even be a group, it could be an individual. The second group will be everybody else.

### Back to the guarantees

Blockchain technology provides every member of the group of non-operators with a set of guarantees. These guarantees would probably be articulated differently by different people, but I observe three distinct ones:

1. **Auditability** The rules of how the system operates, often called "the protocol", must be known to every member of the group of non-operators. Every member is able at will to examine the output of the system and audit by themselves that these rules have been followed.
2. **Forkability** If a member of the group of non-operators is unhappy with how the system is operated, they can fork the system at any time. Forking the system means they can operate a new copy of the system that is identical to the original in any way up to the point of the fork. This means that all data and code required to operate the system are guaranteed to be available.
3. **Governance** Governance is the process by which decisions that change the rules of the system are made. Governance must be declared, meaning all players are shown the process by which rules can change. Governance is also enforced, meaning the mechanics of how rules change is guaranteed to work as declared.

I could have listed these guarantees without splitting players to operators and non-operators. These guarantees are naturally provided to every member of the operator group as well. The reason I have chosen to emphasize the group of non-operators is because this is where the innovation lies.

Systems that could have provided these guarantees to operators only are not particularly new and have existed before blockchain. The true innovation in blockchain is the ability to provide these guarantees to players that are (often willingly) outside the operator group.

How exactly blockchain provides these guarantees is outside the scope of this post, but will be focused on in a later post.

### The value in these guarantees

A multi-player system does not have to provide any guarantees about anything. Let's take our example of Google AdWords. Since Google Ltd. is the only operator, all players (advertisers, publishers and end-users) are members of the non-operator group. They are not able to audit the rules of how the system operates (for example, highest bid wins). They could not become operators. They could not fork the system because its code is proprietary and its database secret. Governance is not declared outside Google Ltd. being able to change any of the rules at any given time.

Every interesting system in the world serves multiple players. Practically none of these systems today provide any of these guarantees. These guarantees are simply not a necessity of life. The world can work just fine without them.

But, and here comes the big but - **systems that will provide their users with these guarantees have an advantage over those that don't**. Providing these guarantees makes systems more competitive. All systems essentially compete over the group of non-operators - as they are considered the users of the system. With all other things being equal, users will always prefer to receive these guarantees than not receiving them.

Providing these guarantees does not come cheaply. This is why not every multi-player system in the world should run over blockchain. But as blockchain technology advances and becomes more efficient, this cost is lowered and more systems come to benefit from it.

### How these guarantees make systems better

In a sense, the most important guarantee of the three is the second - the ability to fork. This guarantee represents beyond all others why giving these guarantees pushes us to design better systems.

If a system gives its users the freedom to leave at any time, yet these users choose to stay and the system remains popular, this system must be doing something right. Forkability provides a healthy environment of checks and balances. It allows systems to constantly evolve to their best possible form by enabling the right to exit.

As a developer, I see this behavior in action every day in the world of open source. Open source libraries encourage forks. Anyone can take TensorFlow, a leading framework for AI published by Google, and create their own improved fork. All the code is out there. The community would jump on that improved fork and use it instead if it proved to be more effective. The fact that the popular fork is still TensorFlow by Google shows that it is doing something right.

### Public and private blockchains

And this brings us back to the debate of private and public. Personally, I don't like the terms "public" and "private" because they are confusing. Is something _public_ just because it is connected to the Internet? Is something private just because it isn't?

The word public in the context of blockchain has a more profound meaning. The way I see _public blockchain_ is by how the three guarantees are provided. Take forkability for example. I'm not familiar with a way to provide the group of non-operators with this guarantee without relying on _external_ validators.

For me, the fact that these validators are external to the system and aren't part of the operator group is the real underlying meaning behind the word public. The _public_ part has more to do with the validators being public than the system itself.

So, if we refrain from adding the terms _public_ and _private_, we are left with simply _blockchain_.

So what is a blockchain? We've circled back to our original question.

**Blockchain is a technology that can provide systems with all three guarantees. Simple. If it is able to provide these guarantees, it is a blockchain. If it is unable to provide these guarantees, it isn't.**

### Can blockchain provide value to a closed system?

Let's take a theoretical system for example, I'll use an extreme one to make a point.

Consider a country that by law has divided its cellular broadband frequencies between 5 mobile providers. This is legally a closed system, as there won't be any more than these 5 companies participating. Since they are sharing bandwidth, these companies use a system to avoid collisions in frequency allocation. Only 4 companies desire to be system operators. The fifth company prefers not to be an operator but still uses the system.

Can blockchain provide such a closed system with value?

According to the definition above, the answer is yes. Since the fifth company is a member of the non-operator group, there is value in providing it with guarantees that would otherwise be given to operators only. These guarantees could not be provided without the innovation in blockchain.

Does the public essence of blockchain interfere with this system being closed? No. This system can remain closed, simply for lack of interest to anyone else, and still enjoy the value.

We need to be careful with closed systems though. It is too easy to miss out on the core value of blockchain in this scenario. It is easy to design a system that provides no hard guarantees. For example, relying on consensus algorithms like Raft that aren't Byzantine fault tolerant. By definition - the inability to deal with Byzantine behavior undermines the guarantees we've been talking about. When this is the case and a system cannot deal with Byzantine behavior, we should not only avoid calling it _private blockchain_, we should avoid calling it _blockchain_ at all.

### Conclusion

So what is a blockchain - a technology that can provide multi-player systems with guarantees of auditability, forkability and governance.

How do we cope with the public/private debate? We move past the limitations of this overly simple rhetoric and focus on a given use case. Is there value in providing these guarantees under this use case? If so, using blockchain for this use case makes sense.
