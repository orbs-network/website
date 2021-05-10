---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-technology-update-april-2020/bg.jpg
blogUrl: orbs-technology-update-april-2020
date: 2020-04-02
title: Orbs Technology Update April 2020
author:
  - ../common/authors/Eddy.md
type:
short_description: ## **Happy One-Year Anniversary to the Orbs public blockchain!**
---

## **Happy One-Year Anniversary to the Orbs public blockchain!**

From here in Far-East Asia, I remember a beautiful event we had here in my hometown to celebrate the birth of the Orbs Network as if it were yesterday. The 2019-20 season will remain a most memorable time in the history of Orbs, our mainnet was launched and initial tokens were distributed during the final days of March 2019. Since then, all the times we walked through the industry’s water and fire, you guys have been with us at our side. Representing Orbs team, I would like to give honor and thanks to you who are willingly reading this: While some processes were not easy as we originally hoped, the most important thing is that we overcame huge hurdles and survived enough during this special year-zero. Now, one year later, we are fresh to the fight, ready to write the next chapter in history. With this post, let's recap the last humble season with a celebration to our very first birthday all together while drawing a hopeful future in mind.

Yours,

**Eddy Kim**

Orbs Korea

![(With Ido, BEFORE the outbreak and resulting social-distancing)](/assets/img/blog/orbs-technology-update-april-2020/image1.png)

_(With Ido, BEFORE the outbreak and resulting social-distancing)_

##### **March 19’** — Orbs public network launch

##### **April 19’** — 1st Elections: 15 Validators are elected to operate the network

##### **July 19’** — 1st rewards distribution, 18M ORBS distributed to 1,448 participating addresses

##### **October 19’** — 1st application launched: Open Rights

##### **November 19’** — Validator node reputation and network triggers features launched

##### **November 19’** — 1st Validator voted out by Guardians

##### **December 19’** — 2nd application launched: Invoices notarization

##### **March 20’** — 1st year anniversary, 700M ORBS participating in the Orbs Universe

# ![](/assets/img/blog/orbs-technology-update-april-2020/anniversary-orbs-graphic-scaled.jpg)

#### **Aaaaaand on to this month’s R&D update:**

# Ethereum Writer and Improvements to the Staging Environment

_Update from Orbs contributor_ [_@talkol_](https://github.com/talkol)_:_

After a long time I was involved mostly with business aspects in the project, I'm transitioning to a more hands on R&D role and working closely with members of the core dev team. My favorite thing in the world is writing code, so I want to take ownership of a few code projects in V2.

One of the services I'll jump into for V2 is "service1", a very descriptive name, which I'll probably rename to "Ethereum Writer". This node service is in charge of sending information automatically from the node to the Ethereum contracts of V2 (for example automatic vote out transactions). The service is going to poll the local virtual chains, extract reputation information from them and use it to make aggregated decisions for the elections. This will be the first service that sends transactions to Ethereum. I'm planning to implement the service in TypeScript so I can make use of Ethereum's popular web3 library and rely on the V2 contract TypeScript testkit.

Another thing I was working on is improving the staging environment. When a contributor wants to propose a new version, they need an easy way to set up a test network so they can verify their new version is indeed working as expected. It's true that the project has many E2E tests for this purpose, but these tests are usually confined to a single service or two. The only way to test \*all\* the services together (from Nebula to Boyar to Management Service to ONG) is using something like the staging network. Creating a staging network involves some dev ops efforts like allocating IPs on AWS and I noticed that many contributors lack this knowledge. The new staging environment is automated and \*heavily\* documented, explaining everything you need to do in order to spin up your own test Orbs network with multiple nodes. You can take a look at the repo [here](https://github.com/orbs-network/release-to-staging) and play with it yourself!

Another passion project of mine is something related to the COVID pandemic. This pandemic had a big influence on everybody I know so naturally I was looking to contribute to the global efforts of fighting it. I had a few brainstorm sessions with other project contributors and Daniel Peled suggested a very cool idea — create a mobile app that encourages people to self-quarantine.

How would that work? Once you install this mobile app, you will specify your home location and commit to staying there. This will start a timer that counts how long you've stayed in self-quarantine. The app will also monitor your location in the background and make sure you're not leaving the self-quarantine area (100 meters for more than 10 minutes). If you leave the area, you fail the challenge and the timer resets. This means that as long as the timer is running, you have a cool proof that you've stayed in self-quarantine, and the app will encourage you to share this progress (online) with friends and family. You can take a look at the app source code here: [https://github.com/talkol/corona-challenge](https://github.com/talkol/corona-challenge). As. always, it's open source. I decided to implement the app in a framework I'm not familiar with called Flutter (from Google) which relies on a programming language I've never used called Dart (also from Google). It's always fun to learn new technologies so I try to choose dev tools I'm not familiar with from time to time just to keep the learning experiences going :)

# Track and Trace Pilot

_Update from Orbs contributor_ [_@noambergIL_](https://github.com/noambergIL)

## **![](/assets/img/blog/orbs-technology-update-april-2020/image5.png)**

We are helping with a pilot of using the blockchain as a neutral, public and permanent notary for supply-chain tracking for an interesting consumer goods company.

The general idea is to have a unique identifier on the product  be read throughout its journey - from manufacturing all the way to the consumer, and written to the blockchain.. This data can be analyzed with BI databases in real-time or after the fact to find anomalies. For example, if a package scanned as 'reached retail' in country X then is re-scanned in another country, this could be a potential theft.

Since this data is sensitive commercial data, the  idea is to use a very smart multi-signature key encryption that can allow different data-consumers to read only some of the data. For example, the production company can see all the location-data of products but cannot see the name of actual delivery personnel, whereas the delivery company cannot see retail inventory or sale data, but can view which of its employees scanned the products during delivery routes to make sure they are legit.

As part of designing the pilot, we have created a small five-part demo architecture. Two very simple node js servers deployed on Heroku: One that acts as a gateway to register data on the blockchain and one that polls the blockchain for new scanned events and extracts the data. The "product-data'' is written to a simple PostGreSQL relational DB acting as the BI DB. Fourth, we have created a simple BI-like-UI that reads the data from the BI db and shows the alerts and location. And lastly, we also used [expo.io](http://expo.io/) to create a simple Android app to mimic ahand-held QR code scanner.

With this setup, we’re able to show a flow mimicking the future process. Using multiple android phones and some chocolate bars with unique QR codes printed on them, we mimicked scanning and moving products from one point in the system to another.

# PoS V2

_Update from Orbs contributor_ [_@noambergIL_](https://github.com/noambergIL)

I'm currently working in [ONG](https://github.com/orbs-network/orbs-network-go) on a service called _ManagementService_. This service is going to be the interface inside the node for the external data that controls the node in 4 key aspects: Topology (who the node can talk to), Committee (who is allowed to create and validate blocks), Subscription (is the current VC being paid for), Protocol Version (what is the correct PV to use). Today these are defined when the node starts. In POS V2 their information is queried from Ethereum and changed via a consensus there.

I decided to create a management service in small increments. First, using some refactoring skills I separated the Committee and Topology from the general configuration and "hid" them behind Provider interfaces. This allowed me to extract and focus all the code that deals with "getting" them into one (actually two as I did this in two different refactors) place. Once this was done and all tests work (as we didn't change behavior yet) I did another refactor to move to a new service and then to add the Protocol Version and Subscription data (which were practically hard-coded before this). The new management service is almost a facade as it has the latest data and a simple polling mechanism. It hides the actual data acquisition in two Providers. A memory version of the provider is a backward-compatible and easy to tweak version for tests and our Gamma. A file version reads data from an external file or URL.

All these refactoring had almost no effect on the node and I was able to merge them to master with no ill effect.

The next step is the big one; add the system that allows the node to CHANGE these 4 properties under consensus as their values change on Ethereum. On that, I'll update you next time!

# Infrastructure, Security & Stability

_Update from Orbs contributor_ [_@netoneko_](https://github.com/netoneko)_:_

One of my goals was to prepare our infrastructure for v2 which requires many changes in [Boyar](https://github.com/orbs-network/boyarin) and [Nebula](https://github.com/orbs-network/nebula). I did a big refactor of Boyar removing some complexities and solutions that did not pass the test of time (for example, the separation between Boyar the executable and underlying Strelets library), added another flow that allows to bootstrap the whole system from the management service.

On AWS, to improve the stability of the system, the decision was made to move from [EBS](https://aws.amazon.com/ebs) backed storage to [EFS](https://aws.amazon.com/efs) (the proof of concept of EFS was done and tested in early December 2019). EFS is an Amazon storage system that provides NFS interface. A major advantage of that is that NFS file system can be mounted to multiple machines at once. We faced a lot of hardships trying to overcome the instability that EBS limits brought to us. Right now EFS is fully supported in Boyar and Nebula. To Boyar, EFS is some kind of a special mount point (/var/efs to be precise) of "bind" type, meaning that Docker Swarm expects to find /var/efs on every member of the cluster so it does not really matter where the container runs. In Nebula, EFS resource is created when the user first provisions the node, and on destruction it gets detached from the Terraform state and later can be imported again.

Another improvement that is going to make it to v2 is the [signer service](https://github.com/orbs-network/signer-service) (developed in May-June 2019). The goal of the service is to safeguard the keys — if the virtual chain for some reason is compromised, those attacked won't be able to recover the node key. Since the service is in a separate container, the virtual chain can only sign messages via an RPC call. The service has been running on Demonet for almost a year now. The codebase is extremely stable, which is why we decided that it should be extracted into a [separate repo](https://github.com/orbs-network/signer-service) and the release process should be decoupled from the ONG release process.

During the extraction it became evident that [ONG](https://github.com/orbs-network/orbs-network-go) and the signer have some shared code, the most important being the crypto library. The copy of the crypto library is also used in _orbs-client-sdk-go_ and all the projects that are derived from it. It became evident that the tech debt must be paid, and the crypto library was extracted into a [separate repo](https://github.com/orbs-network/crypto-lib-go).

# The Committee Contract

_Update from Orbs contributor_ [_@vistra_](https://github.com/vistra)_:_

One of the major architectural shifts in Orbs V2 is the migration of some of the network management logic to Ethereum. Validator registration, staking and delegation, committee elections, and fee distribution logic will all run mostly on top of Ethereum smart contracts. While this greatly simplifies the overall system architecture and adds transparency and robustness to the network, the need to implement a significant amount of logic in Solidity (the most popular Ethereum smart contract programming language), has its complexities and challenges.

Those familiar with Ethereum smart contracts know that a fundamental challenge in writing them is the topic of gas usage (i.e. how expensive the contract is to use). In order for a transaction to be cheap, the underlying contract code must, among other things, avoid reading or writing persistent storage (state) as much as possible. This is especially relevant to one of the contracts [@ronnno](https://github.com/ronnno) and I have been working on — the [Committee](https://github.com/orbs-network/orbs-ethereum-contracts-v2/tree/master/contracts) contract. Its main task is to decide on the active set of committee members and standby validators at any point in time. The committee is the set of validators that essentially run the network — they are allowed to suggest and close new blocks. The standby validators are allowed to replace a committee member if one leaves or becomes unavailable.

There are many factors used for deciding which validators are allowed to join the committee, become a standby, or neither. These include the amount of stake they have, how much delegations they received, if (and when) they last transmitted an _“I'm prepared”_ signal, and so on. Taking all these factors into account and to properly prioritize all validators, while keeping the transactions cheap and gas efficient, is not entirely trivial. For example, the contract keeps a sorted list of validators with a sorting-criteria based on the above factors and updates it on any change to these factors. A trivial sorting algorithm would read the entire list from the state, sort it, and write it back — a very expensive sequence of operations. If we assume that each factor-change alters the position of at most one validator, this can be improved by "bubbling" that validator up or down the list.

An even better approach is to use a linked list, which allows changing the position of a single validator with O(1) state writes instead of O(n).  Such considerations make the committee contract one of the most complex smart contracts we wrote so far and demonstrates how unconventional Solidity programming is compared to standard programming environments.

# Improvement of Node-Level Services

_Update from Orbs contributor_ [_@amir-arad_](https://github.com/amir-arad)

I've been working on the new [node management service](https://github.com/orbs-network/management-service) (previously named "service 2"), I need to read from the new "PoS2" contracts, analyze and enrich the data, and serve it to the internal node services as configurations.

Seeing as the new contracts are only \*mostly\* done (there's a big difference between mostly done and all done), I tried to figure out how best to work concurrently with the Ethereum contracts contributors, so that I can enjoy the internal tools they're using to run tests and simulations, and stay up-to-date when they make changes to the draft.

We've worked together to produce a rough [test-kit](https://github.com/orbs-network/orbs-ethereum-contracts-v2/tree/master/test) for the new contracts, and publish it to NPM. That was exactly what I needed: I will use the kit in my workflow to set up a local ganache server with the right contracts and state, and they will re-publish the kit when things change on their side. I also get to peek at their workflow, make suggestions and offer faster and, maybe, better tools to use ([https://www.npmjs.com/package/typechain](https://www.npmjs.com/package/typechain)).

That approach turned out to be a nice win for the project R&D efforts, as the testkit was picked up by the [staging environment](https://github.com/orbs-network/release-to-staging) efforts (!) to produce quick up-to-date staging environments for end-to-end integration testing.

# Block Sync v2

_Update from Orbs contributor_ [_@gadcl_](https://github.com/gadcl)_:_

The Orbs v2 upgrade introduces a new block sync design based on block headers-first, where synchronizing the blockchain involves confirming the block headers, and then using them to verify the blocks.

A new validator obtains the most recent Orbs PoS state from Ethereum and uses it to connect to the network and to verify the block synch. Under the PoS model, the current stake points toward the trusted under consensus fork. The design applies this by downloading block headers in a reversed direction, from the blockchain tip to the genesis.

I'm working on rewriting the sync mechanism to accommodate these changes in [ONG](https://github.com/orbs-network/orbs-network-go).

# Block Sync bugfix

_Update from Orbs contributor_ [_@gadcl_](https://github.com/gadcl)_:_

The Orbs [status page](http://status.orbs.network/) last week indicated a problem in one of the validators whose node became stuck and didn't participate in consensus. Further investigation of the logs revealed a race condition between the block sync and the consensus service, which resulted in the block sync getting stuck in an infinite loop - an interesting edge case bug!

The block sync began a sync flow due to a delay in the consensus of a block. It then acquired the block from a validator who already succeeded in committing it to its blockchain. During the block sync validation step, the consensus service committed new blocks and advanced the validator's blockchain state. When the block sync validation attempted to query, what was now an old unavailable state, it failed and retried endlessly.

I created a [fix](https://github.com/orbs-network/orbs-network-go/pull/1543) that canceled this endless state polling in the block sync flow, falling back to retry the entire sync flow starting from the validator's updated blockchain state. This fix was deployed as part of version 1.3.10. Status page so far is green :)

...

**See also:**

- [Summary of the 4th Orbs Rewards Distribution](https://www.orbs.com/4th-orbs-rewards-distribution-summary/)
- [Orbs own koltal talks to Bryce & Pizzamind of Crypto 101 Podcast to discuss decentralized Web 3.0 and what the internet of the future really looks like](https://soundcloud.com/crypto101podcast/ep-316-and-the-future-of-the-internet-looks-like-w-tal-kol-co-founder-orbs)
- [The Blockchain Show interviews Danny Brown Wolf on fake news and the advantages of permissionless blockchain in authenticating data](https://www.theblockchainshow.com/156-orbs-danny-brown-wolf/)

...

# Working From Home: Orbs Core Team Remaining Sane

## **![](/assets/img/blog/orbs-technology-update-april-2020/image4-e1585848543120.png)**

Needless to say, this last month was a real shakeup, but all things considered -- work is going pretty smoothly! Aside from keeping connected with regular meetings and updates, the team finds creative ways to make collaboration fun during these difficult times. Fun things like challenges, a company WFH cookbook (yes some of us can cook), and even Orbs Zoom Trivia!

I (Nate) asked some other core team members to send me a general update on their work from home experiences:

https://twitter.com/orbs\_network/status/1242073656802578432

**Ran Hammer:** _Working from home is extra challenging when you have a toddler and a pregnant wife with you at home._

_I have my WFH setup in the MAMAD (Israeli for safe room) where I store my bikes and general mess. My MacBook, big 5k screen and mini-mech keyboard are my weapon of choice for productivity and I am managing to get most of the work done from home without too much friction._

## **![](/assets/img/blog/orbs-technology-update-april-2020/image3.png)**

**Oded Noam:** _To maintain sanity after a long day of work, I try to go out for a short bike ride at the Tel Aviv park (while keeping distance from other riders/joggers)._

_Luckily, we have a wonderful babysitter, who's able to take care of my little girls and give us – wife and me – the quiet time we need to focus on our work. Our neighbors gave us their folding picnic table, which now serves as a desk in our bedroom/office._

_So far WFH works well. The downside is that scheduling has become more complicated, because we both take a lot of video calls and we need to ensure we don't both have calls at the same time. On the other hand, I don't snack as often as I did in the office, so until now the COVID-19 outbreak only made me healthier._

\[caption id="attachment_8242" align="alignleft" width="523"\]![My WFH setup, my chicken coup, and my garden. Quarantine has never been this good.](/assets/img/blog/orbs-technology-update-april-2020/image6.png) _My WFH setup, my chicken coup, and my garden. Quarantine has never been this good._\[/caption\]

**Jonathan Noam:** _Since I travelled to the US for detailed discussions with the customer of one of our more exciting new users (a world-leader in consumer goods), I was required to be quarantined for 14 days. Have just passed the halfway mark during the time of this photo and so far, so good. I am fortunate to have the perfect setup for WFH so can't complain too much :)_

https://twitter.com/orbs\_network/status/1239937777590042630

**Mayo Hotta:** _I have not noticed any shutdown, this is just how I dress on laundry days. Why do you ask?_
