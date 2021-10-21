---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/bg2.jpg
blogUrl: Introducing-Open-DeFi-Notification-Protocol
date: 2021-10-21
title: Introducing Open DeFi Notification Protocol
author:
  - /blog/common/authors/TalKol.md
type:
short_description:
---


_As those of you following Orbs know very well, the Orbs team has been super focused on untapping the potential of Orbs in the DeFi space. With its unique hybrid architecture, the Orbs project is designed for interoperability with EVM compatible blockchains such as Ethereum, Binance Smart Chain, Polygon and, Avalanche, which are the leading venues in terms of asset liquidity and user engagement._ 

_As part of this process, and in parallel to its massive ecosystem expansion, Orbs has, together with Binance and Moonstake, launched the DeFi.org Accelerator to help bootstrap new DeFi projects and protocols with dozens of teams applying and pitching great ideas._ 

_One of the promising protocols born in the DeFi.org Accelerator is the Open DeFi Notification Protocol - an open initiative to provide users with decentralized and free mobile notifications for on-chain events. We believe this is a critical piece of the DeFi infrastructure puzzle and its impact on the industry will be massive._

_Orbs is proud to be a primary design partner to help implement the protocol. We are contributing many of the integrations to the most popular DeFi projects out there (like Sushi and Aave) and helped design a decentralized architecture of how it can be implemented. Orbs is also contributing its network of decentralized Guardians and will run the protocol as an app over the Orbs Network and utilize Orbs Network’s unique consensus as a service architecture to provide for decentralized infrastructure execution!_

<div class='line-separator'> </div>

The following is an excerpt from the [official DeFi.org blog post](https://medium.com/@defiorg/introducing-open-defi-notification-protocol-95a8712a94e0) announcing the protocol:


### Notifications — important when money is at stake

One of the current challenges involved  with taking a loan on Compound or Aave is that prices are volatile. If users aren’t careful, collateral value can drop and they will be liquidated. Personally, I have always felt that if I knew that somebody would wake me up in the middle of the night to adjust my position when this happens, I would sleep much better.

The same thing is true with AMM’s like Sushi or PancakeSwap. When users buy a newly released moonshot, they run the risk that its price can collapse at any moment. If users had a sure way to be alerted of stop loss, this risk would be much less scary. Also when providing liquidity, particularly when degen farming, if the price moves too much or TVL increases and my reward share drops, users can easily find themselves on the wrong side of IL vs farming profits. When users are not on top of things, there’s a real risk of losing money.

Another example that I’ve never understood is the concept of timelock contract upgrades. This popular pattern permits the project core team to upgrade contracts via 12–24 hour timelock delay. Since these upgrades can usually migrate user funds, users are expected to review them and remove their funds until certain about the new code. How can anyone realistically monitor these upgrades without a notification?

The great thing about DeFi is that all the data is out there. DeFi is a fully transparent financial system with every single event recorded on the ledger, yet a dependable mobile notifications service is not so easy to find. The Orbs team has designed a protocol that fills this need.


### Protocol design goals


**1. Notifications should be free for users — no subscription fees or ads**

We believe that mobile alerts for DeFi positions should be a free core blockchain service accessible to anyone, much like MetaMask or Etherscan.

**2. Dependable — never miss an alert**

When money is involved and you’re about to be liquidated, you can’t afford to miss a notification. The protocol should be redundant enough to wake you up in the middle of the night with various degrees of nagging alerts.

**3. Multi network support — Ethereum, BSC, Polygon and more**

The DeFi ecosystem is constantly expanding to new networks like Polygon and Arbitrum. The protocol should be chain agnostic and designed to integrate with any ecosystem that wishes to plug in.

**4. Community-led and open — public and decentralized alert nodes**

Core blockchain services should be as decentralized as possible. Allow any developer to contribute code, any project to integrate and any validator to help run nodes.


### A polished user experience


Watch a video of a user in action setting up a notification in Aave to monitor health factor getting low (risk of liquidation):

<iframe src="https://www.youtube.com/embed/TNhu7YN5rIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. An open-source web component can be integrated right inside Aave web frontend to let users set up notifications right from Aave’s UI. This is not mandatory though.

2.The user downloads the mobile app “DeFi Notifications” for iOS or Android and scans their address QR in MetaMask or the position QR in Aave UI. No other registration is required.

3. The user chooses the type of notification to receive — those are contributed by the Aave developer community. Dozens of supported DeFi projects show up right in the app. Any project contributor can add more.

4. The user approves push notifications on their mobile device. Alert sound can be fully customized to gain your attention. Alternatively, they can select a Telegram message or even a Twilio phone call.

5. Decentralized protocol alert nodes start to monitor new blocks for the user, looking for on-chain events that trigger a notification. In the second phase after launch, the Orbs Network is planning to  provide consensus-as-a-service through its Orbs Guardian validator nodes for this purpose.


### Ridiculously easy to integrate a new project

Let’s say you’re missing notifications on a new unsupported DeFi project like [Alpaca Finance](https://www.alpacafinance.org/).

The good news is that any Alpaca contributor can integrate notifications, not just the Alpaca core team. All it requires is implementing a simple JavaScript web3 class that extracts the notification from the chain data.

This class is then contributed via PR to the protocol [Github repo](https://github.com/open-defi-notification-protocol/projects). The whole process takes about 30 minutes for somebody familiar with the project’s smart contracts. There’s no need to run any backend, develop any UI or make any modification to the project’s smart contracts.

Here is the integration that allows Aave users to get notified when their position health factor drops below 1.1:

![code](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image1.png)

Once the PR is accepted, the project will immediately appear inside the mobile app with this new notification type enabled. You can control the project label, logo and colors by adding a small JSON file next to the class.

![code](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image2.png)

When a new user registers for this notification in the app, the protocol’s alert nodes will start executing the newly contributed JavaScript web3 class against every new mainnet block to extract fresh notifications. When any fresh notification is returned, the alert nodes will trigger a push notification and send it to the user.

The app and protocol are in beta and their use is subject to risks. Use of the app is subject to the terms and conditions set forth at [https://defi.org/defi-notifications-terms-of-use/index.html](https://defi.org/defi-notifications-terms-of-use/index.html). 

<div class='line-separator'> </div>

![logo](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image3.png)

**Become involved and contribute:**

**[https://github.com/open-defi-notification-protocol](https://github.com/open-defi-notification-protocol)**

**Another user experience video showing [notifications in Sushi](https://youtu.be/ecdgzJ7tA1g)**

**Proudly contributed by [Orbs](https://www.orbs.com) to the [defi.org](http://defi.org/) accelerator**


<div class='line-separator'> </div>


### More Projects from Orbs and DeFi.org

The [DeFi.org](http://defi.org/) Accelerator is dedicated to supporting research, development of open-source software, and community engagement. The accelerator looks for projects that are built on the principles of fair distribution, community ownership, innovation, responsible approach to risk, sustainable economics and composability with the broader ecosystem.

Here are additional projects launched under the DeFi.org accelerator:

#### MyNFT.fyi

_Do you own an NFT? Prove it with MyNFT.fyi_

MyNFT.fyi is an easy-to-use tool for showcasing your NFT profile image with a complete on-chain proof of ownership.
 
Check it out [Here](https://mynft.fyi/?utm_source=blog&utm_medium=defiorg).

![myNFT](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image4.png)



#### DeFi Twitter Trends Dashboard

This awesome new tool is essentially a Twitter crawler that aggregates for you the most popular #hashtags, $cashtags, @accounts, and 🔗URLs, all wrapped up in a dashy looking dashboard!

You can access this awesome new tool from the defi.org website, or at the following link:

[https://twitter.defi.org/](https://twitter.defi.org/)


![trends](/assets/img/blog/Introducing-Open-DeFi-Notification-Protocol/image5.png)










