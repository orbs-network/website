---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Announcing-Orbs-V4/bg.jpg
blogUrl: Announcing-Orbs-V4
date: 2024-02-06
title: "Announcing Orbs V4: Taking layer 3 architecture to the next level"
author:
  - /blog/common/authors/RanHammer.md
type:
short_description: "The Orbs project is developing V4 - the next major release of the Orbs Network protocol- with the primary goal of increasing the efficiency and robustness of Orbs Layer 3 technology to handle the increase in traction and meet future demand expectations."
---

### TL;DR

_The Orbs project is developing V4 - the next major release of the Orbs Network protocol- with the primary goal of increasing the efficiency and robustness of Orbs [Layer 3](https://www.orbs.com/overview/) technology to handle the increase in traction and meet future demand expectations._


<div class='line-separator'> </div>


At the beginning of 2022, Orbs first introduced [Orbs 3.0](https://www.orbs.com/Orbs3.0/) with its novel Layer 3 (L3) architecture - a separate layer on top of EVM and non-EVM L1s and L2s to enhance the capabilities of smart contracts and DeFi applications. Orbs 3.0 was version 3 of the Orbs Network protocol; we’re now due for a new version and a substantial node upgrade.

As part of the previous version, the project launched its two L3 [execution services](https://www.orbs.com/execution-services/): Orbs Lambda and Orbs VM, allowing developers to extend smart contracts with L3 decentralized backend services executed by Orbs PoS Guardians, relieving projects of the need to rely on centralized backend solutions.

As presented in various Orbs community meetups and roundtable discussions, 2023 was planned to be the year of usage, integrations, and recognition. With 2023 drawing to an end, it has more than exceeded expectations! 

![YearPlan](/assets/img/blog/Announcing-Orbs-V4/image1.png)


On the EVM front, Orbs has released multiple flagship protocols for DEXs: [dTWAP](https://www.orbs.com/dtwap/), [dLIMIT](https://www.orbs.com/dlimit/), and [Liquidity Hub](https://www.orbs.com/liquidity-hub/). dTWAP and dLIMIT protocols have already been integrated by many leading DEXs, such as Quickswap on Polygon, Spookyswap on Fantom, and Thena on BNB Chain, and is fast becoming the standard for advanced orders on DEX-AMMs. 

Liquidity Hub has been recently launched with a strong design partner, Quickswap, as the default for their main swap flow. It is expected to become the go-to solution for liquidity aggregation for DEX-AMMs. Last but not least, the [Open DeFi Notification Protocol](https://www.orbs.com/notifications/) continues growing steadily with new integrations, increased users, and active notifications.

For non-EVM, Orbs has become one of the major stakeholders and contributors to the Open Network (TON), a top 10 project by market cap. Orbs is providing L3 backend services for major TON infrastructure tools such as [TON.vote](https://ton.vote/), the leading no-code DAO governance voting platform, and [TON Access](https://www.orbs.com/ton-access/), a decentralized RPC network for TON dApps. In addition, Orbs has contributed several products that have become official tools of the TON project, including [TON Minter](https://minter.ton.org/), [TON Verifier](https://verifier.ton.org/), [Single Nominator](https://www.orbs.com/Orbs-contributes-Single-Nominator-Smart-Contract-for-TON-Validators/), and more…

While the existing Guardian validator architecture and the current node implementation have served the project well, the Orbs protocol must continue evolving to meet the needs of tomorrow. The above L3 use cases powered by Orbs require the highest levels of robustness and dependable operation as they interact with user funds (as in the case of dTWAP, dLIMIT, and LH) or provide backend services to crucial infrastructure tools (such as TON.access and TON.vote).

**Following the current trajectory, and as more and more dApps continue to integrate Orbs’ products, 2024 is expected to bring substantial growth in the network’s usage. In order to ensure that the Orbs network is ready to meet this uptick in demand, the Orbs team and contributors have started working on the next major iteration of the network - Orbs V4, detailed in this blog post.**

So, after this rather long but necessary overview, let’s see what exactly Orbs V4 is…

### Orbs V4's main goals and features

Layer 3 (L3) is the foundational concept and technology developed by the Orbs project. As L3 services gain more and more traction, the network must show flexibility and adaptability for the challenges that arise and be forward-looking for the scaling needs of the network.

![goals](/assets/img/blog/Announcing-Orbs-V4/image2.png)


Orbs V4 will address these issues head-on, with emphasis on more efficient node implementation and other necessary upgrades, as listed below:

- **Increase capacity to handle demand:** L3 scaling is the number 1 goal! Supporting greater production traffic without significantly increasing Guardian node operation costs is one of the main goals.
- **L3 as a first-class citizen:** The concept of L3 was introduced in the previous version as an add-on to our vchain-centric architecture. With the success of L3, we’re now giving L3 the center stage while placing less emphasis on vchains.
- **Production resilience and robustness for unattended admin:** The success of our DEX trading protocols means our uptime must be higher than ever. We want to reduce our manual monitoring efforts and ensure the network handles issues automatically and gracefully.
- **L3 Activity dashboard to replace traditional block explorer:** Our old block explorer Prism is no longer relevant. It’s time for a new dashboard-style explorer to track the activity of all L3 protocols powered by Orbs.
- **The new version of Tetra staking wallet:** Revamped and friendlier version of the Tetra staking wallet we all know and love. We plan to redesign the wallet and align it with the modern design language of the Orbs brand.
- **New upgrade protocol for faster update rollout:** As new software versions of the node are published, Guardian nodes are upgraded. The rollout process today is entirely manual. We plan to automate it to support more frequent upgrades.
- **“Bring your own machine”:** The current node implementation is geared towards deployment on AWS. We plan to remove this affinity to increase decentralization and support all hardware equally.
- **Industry-standard node installer:** We plan to deprecate Polygon, the Orbs node installer CLI, and replace it with a new node installer that is far simpler and automatic. This will reduce the technical barrier required from node operators.
- **Improving auditability of core orchestrator:** Opening the Orbs protocol codebase for contributions and involving Guardians and the community in reviewing new software versions is a decentralization goal. Rewriting and simplifying the core orchestrator will bring us closer to this goal.

Let’s examine further some of the major points above…

### Future-proofing Layer 3 scaling

We have been pleasantly surprised with the amount of uptake Orbs L3 protocols are receiving, and demand is rising much faster than previously anticipated. As the load on L3 use cases powered by Orbs increases, this naturally means that nodes operated by Orbs Guardians run under heavier workloads than in the past. As such, Orbs is planning several changes to address this and ensure demand is met effectively in upcoming years.

Firstly, as mentioned earlier, Orbs will be requiring a higher minimum machine spec than previously for Guardian validator nodes. The previous spec was set several years ago and needs to be revised for the expected increase in L3 usage. The new spec balances price and performance and should provide system resource capacity and confidence now and in the future!

Secondly, the new architecture is being optimized for Orbs Lambda and Orbs VM use. This means changes from Docker image deployments to how the protocol handles internal network traffic within a Guardian node validator.

Finally, Orbs is also rewriting and updating many of its core node services (such as those that read and write to the Ethereum blockchain for election consensus) to lower their resource footprint, ensure their code conforms to today’s best software design practices, and allow for a cleaner separation of concerns between services.

### Enhanced network robustness and reliability

The health and uptime of the Orbs validator network as a whole and our individual Guardians' success are paramount for powering Orbs L3 use cases! This is particularly important now as significant trade volumes of popular DEXs like QuickSwap are processed using Orbs technology.

Operational excellence and reliability require a well-designed system that is adequately maintained and evolves with the needs of its users, as well as good observability and appropriate processes in place to diagnose and promptly address issues when they arise. 

Orbs is taking steps to improve on all the above in V4! 

### Simpler and easier setup for Guardians

Some Guardians have encountered challenges setting up their validator nodes for the first time. Feedback has been that it can be too complex and manual, as well as being too AWS-centric. That’s why Orbs has developed a “one size fits all'' installation script to get a new node up and running quickly. 

Guardians will simply have to bring a Linux machine (we will support the most popular Linux distributions) that meets a few minimum spec requirements (CPU, memory, disk space, etc.), download our new installer, and be guided through the node setup process with a single start command.

### New user-facing tools and features

In addition to the above node infrastructure upgrades, Orbs V4 will include new user-facing tools and features to increase the visibility of the Orbs network status while powering the various L3 products and tools.

The dashboard will include features like a tracker for transactions routed using Orbs dTWAP, dLIMIT, and Liquidity Hub, metrics such as total value enabled, and much more…

Lastly, the Orbs team will also revamp the [Tetra](https://staking.orbs.network/), the Orbs multi-chain staking wallet, to interact with the Orbs staking contracts on Ethereum and Polygon.

<div class='line-separator'> </div>


### A word on tokenomics 

As Orbs layer 3 technology matures and multiple L3 use cases are rolled out, the Orbs project enters an exciting new phase—Orbs Tokenomics!

Orbs is launching a call for grants under the OEGP, seeking research and proposals on the uses and utility of Orbs tokens to refine the token model. 

Do you have an idea? We want to hear it! 

Check out the full call for grants on the [Orbs website](https://www.orbs.com/Lets-Talk-About-Orbs-Tokenomics/).

Tokenomics stands as a cornerstone in any crypto project, where the right incentive mechanism can propel the protocol to success, while a poorly designed system may lead to its demise. Given this critical importance, it demands a cautious and meticulous approach

Even established projects such as Uniswap are continuously fine-tuning the role of their native tokens, like UNI. Teams and contributors engage in extensive research, aiming to arrive at the most optimal design. 

Recognizing this complexity, Orbs is gathering insights and opinions from the Orbs Community, stakeholders, and ecosystem experts—a vital step in shaping Orbs Tokenomics.



<div class='line-separator'> </div>


Orbs is positioning itself as a leader of this new blockchain stack layer, giving it a unique advantage and a great stepping stone in the DeFi and Web 3.0 space. 

Orbs use cases such as dTWAP and dLIMIT, which have been in production for over a year, enabling high trading volumes on multiple DEXs and chains without major issues. Liquidity Hub is expected to be the standard for liquidity aggregation for DEXs as part of their main swap flow. Consequently, we expect substantial growth in usage of Orbs L3 services, and the Orbs network must ensure that it is ready to meet an accelerated increase in demand.

**Orbs V4 is the next evolution of the Orbs technology, making it more robust and efficient to scale for the next wave of L3 usage.**

The Orbs team looks forward to working with the Orbs Guardians, major stakeholders, and the Orbs community on this next exciting milestone in the Orbs project development to take the vision to its fullest potential.

The Orbs team and contributors will write further pieces diving deeper into technical aspects of the system in the future, including challenges Orbs has faced and how we overcame them.

Follow the official Orbs [Twitter](https://twitter.com/orbs_network) and [Telegram channel](https://t.me/OrbsNetwork) for more updates on Orbs V4! 






