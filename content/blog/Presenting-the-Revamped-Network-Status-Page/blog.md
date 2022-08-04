---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Presenting-the-Revamped-Network-Status-Page/bg.jpg
blogUrl: Presenting-the-Revamped-Network-Status-Page
date: 2022-08-04
title: "Presenting the Revamped Network Status Page"
author:
  - /blog/common/authors/YuvalAviguy.md
type:
short_description: "The last few months have been very exciting for the Orbs project, with the rollout of Orbs 3.0. Orbs 3.0 introduces 2 major protocol upgrades, which are already live and running on the Orbs network: 1) PoS V3: The Orbs network Proof-of-Stake mechanism, powering the network by utilizing multi-chain staking on Ethereum and Polygon. 2) Layer 3: Orbs value proposition - acting as a separate layer on top of existing EVM-based L1s and L2s to enhance the capabilities of smart contracts and DeFi applications."
---

The last few months have been very exciting for the Orbs project, with the rollout of [Orbs 3.0](https://www.orbs.com/Orbs3.0/).

Orbs 3.0 introduces 2 major protocol upgrades, which are already live and running on the Orbs network:

- PoS V3: The Orbs network Proof-of-Stake mechanism, powering the network by utilizing [multi-chain staking](https://www.orbs.com/polygon-staking/) on Ethereum and Polygon.
- Layer 3: Orbs value proposition - acting as a [separate layer](https://www.orbs.com/Orbs-A-Re-introduction/) on top of existing EVM-based L1s and L2s to enhance the capabilities of smart contracts and DeFi applications.

Some of you may have noticed the above network upgrades already reflected in the Orbs network status page - 

[http://status.orbs.network/](http://status.orbs.network/)

In case you haven't, no problem, that’s what I’m here for!

Here is a short overview of the revamped Orbs status page…


### Multi-chain Staking on Ethereum and Polygon


As of march 2022, Orbs network supports staking on Polygon network as well as Ethereum, for Delegators and Guardians.

Staking on Polygon addressed one of the key feedback items from the community following the V2 launch: high costs for Orbs Delegators on Ethereum as a result of gas spikes. Since launch, Polygon staking has been extremely well-received by the community, [boosting inclusion](https://www.orbs.com/Orbs-Staking-Auto-compound-is-Now-Live-on-Polygon/) and participation of Orbs token holders in the Orbs PoS.

The status page monitors key parameters of the Orbs PoS and the proper operation of the Orbs Guardians’ nodes. 

Here are some key things to look at:

![status1](/assets/img/blog/Presenting-the-Revamped-Network-Status-Page/image1.png)


A quick glance at the Status page in un-expanded mode can confirm if the network is functioning properly - if everything is in order it will show up green.

At the top of the page you will find the addition of **Matic contracts**:
- Shows total staked in Polygon staking smart contracts
- Turns yellow up on error, for instance - no staking unstaking events for 3 days

In addition, status for each **Guardian node** is also displayed according to his order in the committee.

![status2](/assets/img/blog/Presenting-the-Revamped-Network-Status-Page/image2.png)


The expanded view will display the following additional information:

- **Matic Writer**
  * Equivalent to Ethereum writer on the Polygon network
  * Turns yellow up on transaction and community related errors
- **Polygon Chain**
  * Equivalent to Ethereum reader on the Polygon network
  * Turns yellow if a chain sync related error occurs


### Moving Towards Layer 3 Architecture

The Orbs team recently introduced two [new services](https://www.orbs.com/network/) as part of Orbs L3: Orbs VM and Orbs Lambda. As development on these new services advances, additional adjustments will be added to the status page.

![status3](/assets/img/blog/Presenting-the-Revamped-Network-Status-Page/image3.png)


The first phase includes the following information:

- **Core services**
  * Core services are reduced to a list of V icons in this order: Boyar, signer, Logger, EthereumWriter, Matic Writer.
  * Each V represents a core service and tooltip which shows the Status field.
  * Turns into X and paint the box in yellow upon an error in each of the services.

- **vm-keepers**
  * This is the first L3 use case service, which in time will be changed to vm-lambda.
  * It uses a leader selection amongst the committee nodes, and all should show the same leader in a single point in time.
  * Turns yellow upon failure of transaction execution of any of the keepers’ tasks.

- **vm-notifications**
  * Another orbs-vm use case: The [Open DeFi Notification Protocol](https://defi.org/notifications/).
  * Notification audit process is done randomly on all nodes.
  * Number of successfully performed audits are shown in the box
  * Status box turns yellow upon error in status.




<div class='line-separator'> </div>



That's all for now!

Stay tuned for more information and updates in the official Orbs [Telegram channel](https://t.me/OrbsNetwork).
