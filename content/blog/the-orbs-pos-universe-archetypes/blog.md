---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/the-orbs-pos-universe-archetypes/bg.jpg
blogUrl: the-orbs-pos-universe-archetypes
date: 2019-04-01
title: The Orbs PoS Universe Archetypes — High Level Introduction
author:
  - ../common/authors/TalKol.md
type:
short_description: _The purpose of this short post is to give a high level introduction to the Orbs Universe and its proof-of-stake ecosystem. This post will not go into the specifics of the mechanics and will not go into exact numbers (this information is available here). Instead, we’ll focus on motivation and the main idea._
---

_The purpose of this short post is to give a high level introduction to the Orbs Universe and its proof-of-stake ecosystem. This post will not go into the specifics of the mechanics and will not go into exact numbers (this information is available here). Instead, we’ll focus on motivation and the main idea._

...

The ideas in this post are simplified to make the model easier to understand. The following posts on the topic go into the specifics in a more precise and accurate way.

### Validators

_Validators_ play an essential role in the Orbs network. They operate the Orbs nodes, run the consensus algorithm, sign blocks and approve transactions for the decentralized apps. Validators should also provide assurances that they’re good actors and indeed follow the protocol.

- **What skills are needed for being a good validator?** Operating a node in a high throughput network like Orbs requires technical proficiency. The node should have high availability, it has to be fast, it has to be kept secure and updated. Running a node is a full-time profession. We want validators who are committed to this task and will develop the expertise needed for performing it well.
- **What’s the incentive for being a validator?** Validators are compensated for their service to the network since they do the heavy lifting of running the protocol and provide assurances for honesty. Part of the payment comes from fees, paid by apps for running their virtual chains. Another part comes from rewards given from the token reserve whose purpose is attracting quality validators in the early bootstrap years of the network.
- **How many validators are needed?** The network requires between several dozens to several hundreds of validators. The issue here is how to know whether a validator is good. Validators can abuse their position and cause damage to the network.

One of the goals of the proof-of-stake model is making sure the best validators are selected. This voting process is based on stake because almost every other method is susceptible to manipulation.

### Optimizing the voting process

If stake in the network is used for voting and electing validators, we can identify two main goals for optimizing this process:

1. **Have as much stake as possible participate.** Electing validators is an important task. Since proof-of-stake models assume that the majority of stake in the network is honest, the more stake we get to participate, the harder it will be to manipulate the results and compromise the network.
2. **Encourage educated votes and proper due diligence.** If we could get all stake to participate but every voter would just choose a result randomly, would this benefit the network? Of course not. Votes are only meaningful if the voter has taken the time to make an educated selection.

It appears that these two goals are somewhat conflicting. Making an educated selection requires effort. The more effort we expect, the less participants we’ll find willing to make it. Pushing to increase the number of participants will naturally reduce the overall quality of participation.

One of the interesting things the model tries to do is solve this conflict.

### Guardians

If we want to increase the quality of votes, let’s try to characterize the ideal voter. We’ll call this voter a guardian because effort on their behalf — finding the best validators or rooting out problematic ones — is what’s essentially guarding the network and keeping it safe and secure.

- **What skills are needed for being a good guardian?** A good guardian can perform meaningful due diligence on a validator. This may require some technical proficiency like running an audit node to check who’s following the protocol or measure a node’s uptime. This may also require checking for reputation and trust by looking up company records for example. Due diligence has to be done continuously because voting is a frequent process. An elected validator that fails to perform must be taken out quickly. In addition, guardians are community leaders among stakeholders so ability to educate other stakeholders and increase overall participation is a valuable skill as well.
- **What’s the incentive for being a guardian?** Guardians are expected to remain on guard and vote frequently. They are compensated for this service with token rewards from the reserve. Beyond this hard incentive, as leaders among stakeholders, guardians often hold significant stake providing a soft incentive for the network’s well being.
- **How many guardians are needed?** The more guardians active in the network the better, but remember that we want them to be experts. Due to the amount of effort involved, it is reasonable to expect that at least in the early days of the network not many stakeholders will be committed enough to perform the task consistently. Creating experts is no easy task. Continuous monitoring and due diligence is a lot to expect from a random stakeholder. Statistics show that engagement starts low. What can we do if we want the majority of stake to participate?

### Delegators

_Delegators_ represent the silent majority, those on the opposite side of the engagement spectrum. To attract them to participate, we must reduce product friction to the absolute minimum and lower our requirements from them.

Instead of frequent voting, we expect delegators the minimum of a single action — choosing a guardian to vote on their behalf.

- **What skills are needed for being a good delegator?** No special skills, anyone can do it. Delegators who want to do more will become guardians and will actively participate in the frequent voting. But delegators unwilling to do more can still participate. Delegation is a very simple and frictionless process, no special tools required. If you can operate a standard Ethereum wallet and use ERC20 tokens, you will be able to delegate.
- **What’s the incentive for being a delegator?** Every participation provides value to the network and no matter how small, still requires some effort. Therefore, delegators who go to the trouble of selecting a guardian will be given token rewards from the reserve. This reward is given only if their guardian actually votes on their behalf. This will encourage delegators to replace guardians which become inactive. The reward for delegators will naturally be lower than the reward for guardians in order to encourage the maximum level of participation.
- **How many delegators are needed?** As many as possible. If a stakeholder has a choice between not participating at all or becoming a delegator, we want them to become a delegator.

### How everything fits together

Guardians are the representatives of stake. Every guardian must be active and is backed by delegators who chose them to vote on their behalf. Guardians vote using the stake they represent to choose the best validators. Validators do the heavy lifting of operating the network.

In summary, delegators choose guardians, guardians choose validators.

### Parallels from a familiar world

There’s not much new under the sun. Proof-of-stake is a form of governance. We can draw many parallels between it and delegative representative democracy, a system that has evolved for two millennia.

Active participation in government is reserved for professionals, as it requires commitment and dedication. These professional politicians vote frequently on all matters of state and must be properly educated for the task. They are similar to guardians. They are chosen by the general public in infrequent low friction elections in attempt to drive participation by the general public to the maximum. The general public in this regard is similar to delegators.

### Jump into the Orbs Universe

To get the full details about how the Orbs Universe PoS model works, jump on to [the documentation](https://www.orbs.com/proof-of-stake-ecosystem/).
