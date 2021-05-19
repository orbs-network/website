---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-update-august-2020/bg.png
blogUrl: orbs-update-august-2020
date: 2020-08-11
title: Orbs Update August 2020
author:
  - /blog/common/authors/EranPeled.md
type:
short_description: "In this update:** Orbs PoS Universe: The Age of Guardians ⁂ New Validator ⁂ ORBS Staking ⁂ Tech Updates ⁂ Online Meetup ⁂ Media Highlights ⁂ Q&A with Tal Kol ⁂"
---

**In this update:** Orbs PoS Universe: The Age of Guardians ⁂ New Validator ⁂ ORBS Staking ⁂ Tech Updates ⁂ Online Meetup ⁂ Media Highlights ⁂ Q&A with Tal Kol ⁂

...

## **Orbs PoS V2: The Age of Guardians is here!!**

![](/assets/img/blog/orbs-update-august-2020/Guardian-Shield.jpeg)

Hi everyone!

Boy, do we have an action-packed update for you this month! And it's all about the new and improved Orbs Proof-of-Stake mechanism: **The Age of Guardians**. Not only does Orbs PoS V2 have an awesome name (credit to Ran Hammer from the Orbs team), but it's also one of the most ambitious undertakings that the team has done up to date.

You’ll find everything you need to know about it in this month’s update.

Here we go...

## **Orbs PoS Universe: The Age of Guardians**

![](/assets/img/blog/orbs-update-august-2020/AoG-1030x576.png)

We are extremely excited to officially announce Orbs PoS V2: The Age of Guardians! 🛡

The Orbs Network launched in March of 2019. The successful mainnet launch has enabled the growth of the Orbs ecosystem across all vectors.

During Year 0 of the mainnet, development efforts were focused on building and maintaining a secure, stable and inclusive network. Now that this goal has been achieved and as the Network grows and scales, the Orbs team feels it is the right time to introduce Orbs V2 - a new architecture for the Orbs Universe.

Orbs V2 will emphasize usage and performance while empowering the Orbs Universe Guardians. Orbs V2 will enable the Orbs Universe Guardians to take an active role in building and maintaining a secure, scalable network, which will be the first choice for blockchain adoption, and to better manage and serve the network and its participants.

Over the past couple of months, the Orbs development team, together with prominent community members and stakeholders, has been hard at work building the next version of the Orbs PoS Universe. The following document is the culmination of this effort and serves as the compass for the development of the V2 protocol.

[ORBS POS V2 OVERVIEW DOCUMENT](https://www.orbs.com/white-papers/orbs-pos-v2-the-age-of-guardians/)

The Orbs Network is a community-based project and cannot succeed without the collective effort of all participants, including the Orbs development team, Guardians, users, and token holders. We encourage everyone to review this material carefully and get in touch with us through one of our community channels with questions and feedback.

### **Status update with Tal Kol**

Listen to Bar from the Orbs team talk to Tal about the current state of the Orbs project, including the much anticipated Orbs PoS V2: The Age of Guardians!

[![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-10-at-13.11.39.png)](https://www.youtube.com/watch?v=BecohhBUAV8)

...

## State of the Network

Another staking milestone has been achieved and there are now **OVER 1 BILLION ORBS** tokens locked in the new staking contract. A new record! Well done everyone! Keep it up!

### ![](/assets/img/blog/orbs-update-august-2020/1b-staked-1030x634.jpg)

### Remember to Lock Your Tokens to get Rewards

**FROM NOW ON ONLY LOCKED TOKENS WILL BE ELIGIBLE FOR STAKING REWARDS**

![](/assets/img/blog/orbs-update-august-2020/lock-your-tokens-1030x611.jpg)

Be sure to stake your tokens using the new Tetra wallet:

[https://staking.orbs.network/](https://staking.orbs.network/)

You can make sure that your tokens are properly locked here:

[https://orbs-network.github.io/voting/reward](https://orbs-network.github.io/voting/reward)

Learn more about the locking mechanism:

[Introducing Locking When Staking Orbs](https://www.orbs.com/introducing-locking-when-staking-orbs/#:~:text=When%20you%20stake%20your%20ORBS,withdrawn%20using%20your%20private%20key.)

### The network continues to grow! - New Validator Announcement

A new validator node recently joined the Orbs network, operated by **NEOPLY**, good luck!

...

## ORBS Staking

The new staking wallet: **CITADEL** announced earlier this month that they are supporting staking of ORBS tokens. ORBS is one of four tokens currently available for staking on the CITADEL wallet. The CITADEL team has been researching the Orbs network and has chosen it to be one of the first tokens to integrate onto their product.

This is very exciting indeed as we see more high-level participants investing valuable time and effort in expanding the Orbs ecosystem.

![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-11-at-9.38.28-1030x571.png)

Find out more about Citadel:

Link: [citadel.one](https://citadel.one/)

Telegram: [https://t.me/citadelofficial](https://t.me/citadelofficial)

...

## Tech Updates

#### This section was contributed by [@ronnno](https://github.com/ronnno)

During the last month Orbs V2 Beta network was successfully launched. The beta phase is the first stage in the rollout of Orbs V2. It is intended to test the new PoS model, new node deployment tools, node services architecture, automatic rewards distribution and node deployment tools. In addition, the Beta phase will allow to experiment with Ethereum contract upgrades, and to test the V2 Guardian registration and subscription interfaces.

The Beta network currently features 6 Guardians! alongside 4 test nodes that are run by Orbs LTD as placeholders until more Guardians join the beta network. Additional Guardians will join the committee in the coming days.

The heart of V2 is a suite of Ethereum smart contracts implementing our new PoS model. The contracts are connected to Orbs staking contract and implement different aspects of the PoS architecture. PoS functions implemented by these contracts include committee election, rewards assignment and distribution, guardians registration, virtual chain provisioning, and subscription payments. PoS contracts were deployed as part of the Beta phase and they are currently being evaluated. The contracts were designed to support upgrades and will be updated during the Beta phase.

In V2, existing node services are updated and several new node services are introduced. Node services now include an Ethereum management service, a node state machine and Ethereum writer, and an automated rewards distribution service. These services were released as part of the Beta phase and are currently being tested.

New and improved Boyar node manager now supports dynamic deployment of node services, and portions of its logic were migrated to upgradeable services. An enhanced node deployment CLI (Polygon), based on V1 Nebula, was developed to support V2 nodes.

Monitoring endpoints were added to all node services for easy maintenance and troubleshooting. A new logs delivery mechanism now allows uniform access to all node services logs, as well as virtual chain instances.

The team continues to develop and update the different UI/UX tools such as Tetra staking wallet to support V2 Guardians.  In addition, we are looking forward to the next challenges of creating a new Rewards Analytics tool, onboard new Guardians, and readiness for V2 Mainnet.

...

## Online Meet up in Korea

Our team in Korea started a regular online meetup. The first meetup was held on 30th July on Orbs Korea Youtube. There is also a corner that interviews a member of ORBS each month. Our own Ran Melanad was up as the first interviewee. Guess who will be next!

### [Watch the video📢](https://www.youtube.com/watch?v=vexYtOEdsuo)

!Watch: The video is in Korean! (Interview with Ran Melamed is in English)

...

# Media highlights

### World Economic Forum

Orbs co-founder, Netta Korin, talks about Orbs seizing opportunity in this [World Economic Forum article](https://www.weforum.org/agenda/2020/07/what-covid-19-taught-10-startups-about-pivoting-problem-solving-and-tackling-the-unknown/).

![](/assets/img/blog/orbs-update-august-2020/photo_2020-08-11_09-46-02.jpg)

### Twitter followers - a new record!

The Orbs network twitter account ([@orbs_network](https://twitter.com/orbs_network)), has reached 20K followers! This is a great achievement. We are committed to providing top quality content to all our followers.

[![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-11-at-9.47.22.png)](https://twitter.com/orbs_network/status/1284734020589441024)

...

# In case you missed it

[![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-11-at-9.49.46-1030x513.png)](https://www.orbs.com/guardians-of-blockchain-qa-with-orbs-co-founder-tal-kol/)

In case you missed it, here is a very interesting Q&A session with Tal on issues such as - The upcoming Orbs V2, Orbs in comparison to IBM and Facebook's Libra, and more...

We want to thank the Guardians of Blockchain for their contribution to this blog post.

\------------------

On another subject, read this very interesting piece on Uber:

[![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-11-at-9.51.33-1030x542.png)](https://www.theguardian.com/technology/2020/jul/20/uber-drivers-to-launch-legal-bid-to-uncover-apps-algorithm)

And then listen to Tal give this exact example when he talks about Orbs value proposition (starting from 9:25):

[![](/assets/img/blog/orbs-update-august-2020/Screen-Shot-2020-08-11-at-9.53.12.png)](https://www.youtube.com/watch?v=hbd0S_jk0SQ)

...

## Hello from the Orbs team

The Orbs team will not let COVID-19 🦠 slow it down!

By now we have totally mastered the whole working from home thing 👩🏼‍💻🧑🏻‍💻👩🏽‍💻 but we do hope to be fully back to the office soon.

We hope all community members are also staying healthy, happy and safe 🙏

![](/assets/img/blog/orbs-update-august-2020/photo_2020-08-11_09-55-35-724x1030.jpg)

...

Wow wow wow!

I know its a lot to take in -

During the upcoming month we’ll go over the main features of the Orbs PoS V2: The Age of Guardians, providing the community with more information and details.

Be sure to follow our official channels so that you don’t miss anything!

Stay safe and healthy,

Yours truly,

**Eran**
