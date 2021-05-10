---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/pos-ecosystem-elections-update-may-2019/bg.jpg
blogUrl: pos-ecosystem-elections-update-may-2019
date: 2019-05-14
title: PoS Ecosystem Elections Update May 2019
author:
  - ../common/authors/OdedW.md
type:
short_description: Hi all! The first month of the Orbs Network has completed, and I’m excited to share the network status and our experience with the elections. Since the launch of the production-ready Orbs platform and its release to the community, the Orbs core development team has continued to monitor its progress and work to develop improvements to propose to the community of participants in the Orbs network. This post will describe what we’ve learned so far, the problems the network has encountered and the fixes we’ve proposed to the Validators running the protocol.
---

Hi all! The first month of the Orbs Network has completed, and I’m excited to share the network status and our experience with the elections. Since the launch of the production-ready Orbs platform and its release to the community, the Orbs core development team has continued to monitor its progress and work to develop improvements to propose to the community of participants in the Orbs network. This post will describe what we’ve learned so far, the problems the network has encountered and the fixes we’ve proposed to the Validators running the protocol.

During the first elections, the Orbs network’s voting system encountered a few issues. One of them was in an edge case that is interesting to discuss, while another led to an exciting first system contract upgrade. In addition to supporting the Validators and Guardians who oversee and operate the core network, the Orbs development team will keep working to improve the Proof-of-Stake interface we developed as an add-on to the production network, which can serve as a reference implementation for others to develop their own delegation, voting, and status viewing interfaces. In the last month, we’ve improved its functionality based on your feedback. Keep it coming!

We hope you’ll join the community of developers working to build the Orbs network and invite you to continue the conversation at [https://community.orbs.network](https://community.orbs.network/).

## **Elections**

Orbs’ production network had been running a virtual chain for election processing (ID 1100000), successfully completing 8 election periods to date (May 5th). There are 16 Guardians, 14 Validators and over 1000 Delegators participating in the Orbs PoS ecosystem. No Validators have been voted out by the Guardians at this point.

There are two methods for delegation in Orbs. The first is by sending a delegate transaction to the voting smart contract (can be done using a delegation UI). The second is by sending a symbolic 0.07 ORBS to the address you want to delegate to. Reviewing the delegations, we see that approximately 60% of the delegations were done using the symbolic tokens transfer. In addition, we’ve noticed that a significant number of tokens have moved from exchange-owned accounts to user accounts that delegated them to participate in the PoS ecosystem.

During the first few elections, we’ve identified some issues that are interesting to discuss:

#### First election rewards bug - Elections contract fix

Immediately after the first election event, the Orbs core team identified a bug in the reward calculation. To prevent confusion, as an immediate patch the reward page has been updated to show the correct rewards (instead of reading them from the blockchain). We then developed a proposed fix for the rewards calculations. In order to better understand the issue and its fix, we should note that the election calculations on top of the Orbs platform are performed in a system smart contract. System smart contracts operate like any other smart contact, maintaining a state under consensus, only that their code is part of the Orbs core codebase. A fix to a system contract code needs to be developed in a way that is contingent on the existing contract state.

The fix proposed by the Orbs core team was accepted and deployed by the Validators and successfully fixed the state and calculation code. The fix demonstrated the ability of the Orbs network to upgrade a contract, which in the future may be applied to regular contracts based on the virtual chain governance.

#### Non-deterministic state order writes

The second issue the Orbs team identified was a scenario where, due to non-deterministic behavior in Golang, different Validators occasionally attempted to update the state in a different order. It is interesting to note that the Validators did receive the same results, only in a different order (i.e. A=1, B=2 vs B=2, A=1). Since the state update is agreed upon in consensus, which assumes the same update order, the Validators did not manage to achieve consensus in cases where there was a mismatch in the order. Understanding the issue wasn’t trivial, as it was reflected as occasional multiple view changes in the LeanHelix consensus, indicating difficulty in reaching consensus on a block with elections calculation transactions. The issue raised the question what is the right behavior and whether the protocol should enforce state update order within a transaction, or just require that the state update at the end of the transaction execution will match, allowing a more convenient and flexible design.

A fix that ensures an in-order update in the elections contract was accepted and deployed by the Validators. A change that allows out of order writes within a transaction may be discussed for future protocol versions. In addition, the team is working on a proposed improvement to the Orbs consensus to detect disagreement related to non-deterministic execution under consensus and remove the related transaction, preventing a scenario where the entire block is rejected. The team’s research on consensus of non-deterministic data will be discussed in a separate post.

#### Good Samaritan optimization

The process of mirroring delegation data from Ethereum to Orbs and performing the elections calculation is triggered by external transactions. The transactions trigger a code that queries Ethereum on a transaction, verifies it is indeed a valid delegation transaction and records it under consensus on the Orbs platform. Anyone may send these transactions and the system is resilient to attacks such as double, or past, delegation transactions mirroring. To ensure that these transactions are sent, several cron jobs were deployed to monitor Ethereum and mirror the transactions. For the first elections, we configured these cron processes to work slowly, allowing us to monitor and verify that they work correctly. Once we saw that they work successfully, we’ve updated and optimized their code for better performance. Notice that the “Good Samaritan” cron jobs are not part of the protocol codebase and may be run by anyone. In upcoming proposals for protocol revisions, we intend to propose the introduction of innovative triggered execution to the protocol, which would allow smart contracts to trigger execution without the need for an external trigger by a transaction.

### **PoS Interface**

During the first month of our network operation, the Orbs core team collaborated with the community of Validators and Guardians, working together to improve network stability and make delegation and voting easier and clearer. For example, the Orbs team has gathered extensive feedback from the Guardians and Validators regarding the reference delegation/voting UI we developed as an add-on ([https://orbs-network.github.io/voting/](https://orbs-network.github.io/voting/)), and have improved it significantly, adding a clear indication regarding next elections, improving the rewards reporting and delegation flows. Several Guardians have also created their own rewards calculators and delegation interfaces.

#### New improvements introduced to the reference interface:

- Improved table display for small-resolution screens
- Address copy functionality in the Guardians and Validators lists
- New indication of whether a Guardian has cast a valid vote for the upcoming elections
- Display the block height of next elections
- Enable deep link with the account address as a query parameter for the rewards page
- Display current delegation status
- A fix to the delegation status after a delegation update

...

It’s been an exciting month for the Orbs network, thanks for taking the time to read and get more involved. We’ll keep updating you and share our experiences. Please keep sharing your feedback and contribute. For more information on the Orbs PoS universe and how to participate, please visit [https://www.orbs.com/orbs-universe/](https://www.orbs.com/orbs-universe/)
