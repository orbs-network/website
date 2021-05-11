---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-technology-update-january-2020/bg.jpg
blogUrl: orbs-technology-update-january-2020
date: 2020-01-09
title: Orbs Technology Update January 2020
author:
  - ../common/authors/OdedW.md
type:
short_description: Highlights:** Ver 1.3.5 released ⁂ A flow that identified a bug ahead of time ⁂ PoS architecture research ⁂ Onboarding of applications & new virtual chains ⁂ New monitoring tools
---

**Highlights:** Ver 1.3.5 released ⁂ A flow that identified a bug ahead of time ⁂ PoS architecture research ⁂ Onboarding of applications & new virtual chains ⁂ New monitoring tools

...

### _Intro_ _by_ [_@OdedWx_](https://github.com/OdedWx)

Since the last tech update there has been progress on multiple fronts. The network continues to progress with new applications joining and improvements are developed. The PoS ecosystem is active and a 3rd round of reward distribution was successfully completed. Improvements to the PoS architecture are in research along with work on integrating a staking contract. And new monitoring tools are being developed to provide a better environment to application developers and plays in the PoS ecosystem.

3 weeks ago an update to the network core code was deployed by the validators. Before deploying it on application’s virtual chains that are in production, the node code was deployed on a virtual chain used as a "canary in the coal mine" that doesn’t hold any critical assets or data. Even though the code was heavily tested including by Marvin - an innovative automated blockchain test environment - and on private networks, the deployment on the canary chain initially failed. Following a fast debug by the core team and several validators the root cause was identified and fixed. Due to Orbs virtual chains isolation architecture, the fail had no impact on any application virtual chain which later successfully deployed a fixed code (v1.3.6). The use of test methodologies has proven itself as a strong tool to maintain the applications’ stability while allowing upgrades and progress.

Based on the experience with Orbs PoS ecosystem and as a next step and as part of the work on the staking contract architecture, research activities are taking place to identify improvements to the PoS architecture. The research examines the different roles in the network, the requirements from each one and incentives and rewards used to drive their honest behaviour. An additional interesting aspect of the architecture is the relationship between Orbs and Ethereum. Orbs PoS architecture enjoys the objective auditing by Ethereum, as part of improvements to the architecture changes in the logic division between the two blockchains is being investigated.

The technical engagement team successfully helped two new virtual chains to onboard the network. Linet ([https://validate.linet.org.il/](https://validate.linet.org.il/)) on virtual chain 1970000 and Open Rights ([https://open-rights.org](https://open-rights.org)) on virtual chain 1960000. Linet is a receipts notarization application leveraging Orbs public blockchain to provide proofs of in immutable and in-time generation of client receipts.  Open rights is an open database for registered users’ content allowing them to protect their IP. Application fees have been distributed to Validators through the vchain subscription process.

As part of the process to make the network more friendly to applications, contributors and all PoS ecosystem players, new monitoring tools are being developed. A new monitoring tool that provides a view of the entire network status is currently under development. Once ready it will provide the players and in particular the Guardians with means to monitor the network health and validators’ operation.

...

## **Blockchain Core**

### _This segment was contributed by_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg)

This monthly update is more descriptive in nature, as most of the core team was (and still is) engaged as part of thePoS Architecture  Team, described below. In addition, significant effort was made to put Marvin (the testnet's testing framework) to first use. Also, a bugfix effort on v1.3.5 is described.

### **v1.3.5 deployment downtime incident**

On December 16th, virtual chain (VC) 5110 on mainnet was upgraded to v1.3.5. This VC is operated by Orbs Ltd. and is a pre-production VC that helps identify last-minute issues before upgrading the production VCs. Upon upgrade, the VC immediately stopped closing blocks. Most of the core contributor team stepped into an intensive research mode.

Another VC was started to confirm that failure to close blocks is not specific to that specific vVC, and indeed the new VC did not close blocks either.

Additional research uncovered the following:

- VC 5110 was running against an old list of validators. One of the validators had changed its Orbs address a while back, but the network topology (as defined in Boyar) the other validators used, still had the old address. This meant Gossip messages sent to that specific Validator could not reach it.
- An update to Lean Helix algo that was introduced on v1.3.5 changed the behavior of sending messages through Gossip to a specific list of Validators, rather than to all validators indiscriminately (the motivation was to cut redundant consensus traffic between nodes). Furthermore, a Validator would try sending a message to a list of Validators in a loop and if one the send operations failed, the loop would be cut short instead of skipping to the next Validator - this a previously undetected bug.

Following these discoveries, the bug in Gossip code was fixed and deployed to the above VCs as v1.3.6, and was confirmed to fix the issue - the network resumed closing blocks. Of course the address of that specific Validator was also updated, but the important thing was the network was made more resilient as a result of fixing this bug.

It took 2-3 hours to identify the root causes - this was a prime example of synergy between different  members and contributors, as all involved shared their knowledge of the system and quickly reached the correct root cause, then promptly had it fixed and deployed.

Thanks to using the pre-production VC at no time was any actual production VC involved in this - these were upgraded directly to v.1.3.6 after the bug was fixed.

Involved team members: [_@ronnno_](https://github.com/ronnno)_,_ [_@IdoZilberberg_](https://github.com/orbs-network/orbs-network-go/pulls/IdoZilberberg)_,_ [_@electricmonk_](https://github.com/orbs-network/orbs-network-go/pulls/electricmonk), [_@vistra_](https://github.com/vistra), _[@gadcl](https://github.com/gadcl), [@OdedWx](https://github.com/OdedWx),_ [_@netoneko_](https://github.com/netoneko)_, [@andr444](https://github.com/andr444),_ [_@jlevison_](https://github.com/jlevison)

### **Marvin** **—** **Flow complete!**

There was significant progress by @IdoZilberberg and [_@itamararjuan_](https://github.com/itamararjuan) with running automated tests on PRs and when merging code into master branch. The CI workflow of [orbs-network-go](https://github.com/orbs-network/orbs-network-go) repo will very soon run an endurance test and compare its results against previous runs on the master branch, and against tolerable performance thresholds. If the test fails, the new version is not released to Docker hub. In case this is a new PR being pushed, the developer is notified of the test results via Slack and Github.

The logic of "judging" whether the test passed or failed is called [Dredd](https://en.wikipedia.org/wiki/Judge_Dredd), and is part of [orbs-network/marvin](https://github.com/orbs-network/marvin) repo and also published to npm as [@orbs-network/judge-dredd](https://www.npmjs.com/package/@orbs-network/judge-dredd) so modifying it does not require rebuilding orbs-network-go.

### **PoS Architecture Enhancements**

Orbs PoS Universe has been active for more than 9 months already. We’ve been working to learn from the PoS architecture and identify areas that may be improved towards a sustainable architecture. A multidisciplinary team that includes both researchers and core developers has been working to research the subject and propose potential architecture improvements. The work focused on three aspects: the Ethereum - Orbs architecture, integration of the staking contract and investigation of potential improvements to PoS model.

The team reviewed and analyzed data of past elections and reward distribution. In addition, they reviewed the models and tools of other PoS projects trying to learn from their strong and weak points. As part of the research activity, the team has also started to collect inputs from players in the ecosystem.

The Orbs platform implements a PoS over PoW architecture, in which the ORBS token, delegation and voting operate over  Ethereum. The use of Ethereum as an objective platform for the PoS architecture provides an objective mechanism for the Orbs elections and incentive layer. The use of an external and objective platform prevents a scenario where the ones being elected are the ones monitoring their honest operation. In the current PoS architecture, the PoS delegations and votes are performed on Ethereum while the election calculations are performed on Orbs.

While looking into the boundaries between Orbs and Ethereum, the team has made an interesting observation in the tradeoff between liveness and consistency. In a distributed system there’s an inherent tradeoff between liveness and consistency and when designing a system architects need to favor one of them and try to maximize the other, relying on the incentive layer. For enterprise applications, finality and consistency appear to have the highest priority. An architecture where the elections are performed and calculated on Ethereum but on each state change, the currently elected set inaugurates the new one on Orbs seems to optimize both auditability on Ethereum and consistency due to a clear view of the elected set on Orbs.

Another interesting aspect in the Ethereum - Orbs architecture is the potential to reduce the Ethereum requirements to a light client. The team has been working on an architecture changes to allow both auditability, relying on past events and a light client architecture without a need to maintain past state.

...

## **Technology Engagement**

### _This segment was contributed by_ [@jlevison](https://github.com/jlevison) and [@netoneko](https://github.com/netoneko)

### **Orbs Network**

- Two successful application deployments on the Orbs network:
  - Linet on virtual chain 1970000 (blogpost to follow)
  - Open Rights on virtual chain 1960000 (blogpost to follow)
- See network status on [https://status.orbs.network](https://status.orbs.network)
- 3rd round of rewards distribution - [https://www.orbs.com/3rd-orbs-rewards-distribution-summary/](https://www.orbs.com/3rd-orbs-rewards-distribution-summary/)
- Orbs network upgrade v1.3.6 - [https://www.orbs.com/orbs-network-v1-3-6-fixes/](https://www.orbs.com/orbs-network-v1-3-6-fixes/)

### **Development**

- Updates to status page: now node status is stored in the database ([#3](https://github.com/orbs-network/status-page/pull/3)) and are used to send notifications via Telegram bot ([#4](https://github.com/orbs-network/status-page/pull/4), [#5](https://github.com/orbs-network/status-page/pull/5)) by [@netoneko](https://github.com/netoneko)
- Experimental plugin for JS smart contracts has new release process ([#10](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/10), [#12](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/12)) and an e2e test ([#11](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/11)) by [@netoneko](https://github.com/netoneko)
- JS smart contracts also feature improved performance ([#7](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/7)), interoperability with Go contracts ([#8](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/8)) and new helper functions ([#9](https://github.com/orbs-network/orbs-network-javascript-plugin/pull/9)) by [@netoneko](https://github.com/netoneko)
- Orbs node codebase now includes special build flag that enables JS smart contracts ([#1456](https://github.com/orbs-network/orbs-network-go/pull/1456)) and JS interoperability test ([#1453](https://github.com/orbs-network/orbs-network-go/pull/1453)) by [@netoneko](https://github.com/netoneko)
- New [Trash Panda](https://github.com/orbs-network/trash-panda/) service that proxies all requests to a number of nodes, combining the features of a load balancer and a relay that records all the passing transactions and can retransmit them if some node (or the whole network) is down - by [@netoneko](https://github.com/netoneko)
- New [Event Indexer](https://github.com/orbs-network/orbs-network-events-service) service that keeps track of all the events and allows querying them via HTTP API - by [@netoneko](https://github.com/netoneko)

### **Application Use Cases**

- Notary library’s main contract was rid of experimental libraries, allowing for deployment on mainnet ([#3](https://github.com/orbs-network/orbs-notary-lib/pull/3)) by [@netoneko](https://github.com/netoneko)
- [New identity service](https://github.com/orbs-network/identity) allows apps to track users with a UUID instead of keys and allows for identity recovery if the keys are lost or compromised - by [@netoneko](https://github.com/netoneko)
- [Example voting app](https://github.com/orbs-network/polls) that brings together in-browser wallet, identity service, and public key cryptography to keep voter’s choices secret until the end of the vote - by [@netoneko](https://github.com/netoneko)

### **Developer Experience**

- Prism now can show JS smart contracts ([#3](https://github.com/orbs-network/prism/pull/3)) by [@netoneko](https://github.com/netoneko)
- Subscription product - revisiting the subscription flow and redefining the tools and their implementation, to facilitate easier app launching on the Orbs network
- Monitoring product will provide an overview of the state of the network for Guardians and Validators. It will include the necessary information about the state of a Validator’s node and a state of each virtual chain that is run by these nodes.

![](/assets/img/blog/orbs-technology-update-january-2020/image1.png) ![](/assets/img/blog/orbs-technology-update-january-2020/image2.png)

...

Thats all from us this round; be sure to follow for steady, constant improvements to the network with technology updates like this one every month. See you in February!

Ciao,

\- [_@OdedWx_](https://github.com/OdedWx)
