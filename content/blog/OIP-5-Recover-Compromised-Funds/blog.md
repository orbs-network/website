---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/OIP-5-Recover-Compromised-Funds/bg.jpg
blogUrl: OIP-5-Recover-Compromised-Funds
date: 2023-05-16
title: "OIP-5: Policy to Enable Individual Migration Paths to Allow Delegators to Recover Compromised Funds"
author:
  - /blog/common/authors/MatanErder.md
type:
short_description: "The Orbs team has submitted a new draft OIP, with a proposal to adopt a policy to open  migration pathways under certain circumstances, to allow delegators who have suffered a security breach that compromised their wallets to recover their staked Orbs tokens."
---

Since 2022, the Orbs project has undergone a process of transition to community governance for major network decisions, including the introduction of [Orbs Improvement Proposals](https://github.com/orbs-network/OIPs), the official process for suggestions to improve the project. 

The Orbs team has submitted a new draft OIP, with a proposal to adopt a policy to open  migration pathways under certain circumstances, to allow delegators who have suffered a security breach that compromised their wallets to recover their staked Orbs tokens. This draft OIP can be viewed here: 

https://github.com/orbs-network/OIPs/issues/6 

We welcome you to review the draft and make comments and suggestions, whether by adding comments in Github or discussing on [Telegram](https://t.me/OrbsNetwork) or in the governance page of the Orbs [discord](https://discord.com/channels/829255795827933236/1004049084597928017). The discussion is planned to continue for a period of about 3-5 days, so please feel free to make your contributions. 

Once rough consensus has been reached on final language for OIP-5, the team will present the final draft as a governance vote on Snapshot for the approval of the entire Orbs PoS Universe.

We look forward to another productive and substantive discussion. 

<div class='line-separator'> </div>


**OIP-5: Policy to Enable Individual Migration Paths to Allow Delegators to Recover Compromised Funds**

_Category:_ 

Governance, Development, Parameters 

_Description:_

This proposal asks the community to consider adopting a policy of opening migration paths from the Orbs staking smart contract for the purpose of allowing delegators whose wallets are compromised to recover their funds.
The staking contracts for Orbs V3, like all previous and future versions, does not include any super-user powers or backdoors that can be used to transfer or impact staked ORBS tokens without the participation of the staker.
However, the smart contract does contain manager roles for purposes of future-proofing and security. One of them is a migration manager that can open a pathway to migrate staked tokens. This was designed to allow for the proposing of a staking contract migration to the community in the event of a network upgrade, so that stakers can move their tokens to a new staking contract without being subject to the 14 day cooldown. The migration manager only has the ability to add a potential migration destination - it cannot, under any circumstances, transfer tokens or force users to participate in the migration. Every user that will choose to migrate must perform a dedicated transaction by themselves and move their tokens.

This role is visible in the current staking smart contract, available here - https://etherscan.io/address/0x01d59af68e2dcb44e04c50e05f62e7043f2656c3#readContract 
 
It is very important to stress that this manager does not have the power to actually transfer any tokens, and can certainly not destroy or seize any tokens. Stakers have the full autonomy to withdraw their tokens from the system, migrate them to a contract or keep them in the current contract, all in accordance with their choice.
 
The Orbs team has never used this migration role and will never do so without the community’s approval. This OIP is the first request to consider utilizing this role, and is being proposed to assist a community member.
 
In recent months, several Delegators have reached out to the team for help. According to these Delegators, in separate incidents, malicious actors took control of their private keys and are attempting to unstake their tokens and transfer them to the attacker’s wallet. The Delegators have asked the team if there was any possibility of removing their tokens from the staking contract to an uncompromised wallet. While so far this has only affected a few Delegators, this is an issue that could impact others, so the Orbs team has looked into a solution that could be used to help these Delegators and any others in the future facing this issue.

While not the original purpose of the migration manager, the team researched the possibility of utilizing the migration pathway to provide a solution. They developed a special smart contract template that can be deployed on the blockchain and added as a migration destination to help a specific Delegator each time a situation like this arises. Each smart contract will, once tokens migrate there, automatically transfer the tokens to a new wallet designated by the specific Delegator. Each smart contract is hard coded with the following features:

- Source address – only tokens staked from a specified address will be able to migrate to each new smart contract. Anyone else trying to utilize this pathway will result in a failed transaction.
- Cool-down period – all smart contracts will be subject to the same 14-day cooldown period as the main staking contract.
- Destination wallet – once the cool-down period has been completed, each smart contract will be able to transfer the tokens to the new, secure, wallet designated by the specific Delegator. This wallet is the only destination to which these tokens can be sent, which is accomplished by calling a specific function in the migration contract.

If the community approves, the Orbs core team will, in the event that a Delegator faces a security issue and requests assistance, deploy a new instance of this smart contract and use the migration manager wallet to add this smart contract as a destination for migration from the staking smart contract. This will allow the affected Delegator to recover their funds. The team proposes that this option will only be deployed in the event that the Orbs Tokens at risk have a minimum value of $10,000.

_Benefits:_

The Orbs project is, at its root, community driven. When something happens that harms a community member, the project community should do what it can (within reason) to help. This will benefit the project as a whole by demonstrating that the Orbs project community takes care of its members and is a good actor in the space. Deploying this solution would help individual users recover significant funds and demonstrate that the Orbs community shares these values. 

_Risks:_

Generally speaking, this proposal should not present any risks to the general community or to the project, since any new migration pathway can only be used by those delegators who affirmatively choose to use it. 

There is always a risk of a mistake or bug in the smart contract, although Orbs developers have performed tests and simulations and believe that the code is functioning properly. In this case, the smart contract could fail to deliver the tokens to the final address. This risk would only impact the Delegator and not the community at large.

It is also possible, although unlikely, that the smart contract could accept deliveries of tokens from other users if there is a mistake in the hard-coding that is designed to ensure that the contract only accepts from the specified Delegator’s wallet. However, this could only occur if other Delegators affirmatively try to use this migration path and thus the risk to other stakers is minimal.

_Specification:_ 

The migration smart contract designed by the Orbs core team can be viewed on Github at - https://github.com/orbs-network/orbs-migration-contract. If this proposal is accepted, each time a security issue arises in which a Delegator has Orbs tokens with at least $10,000 in value at risk, a smart contract of this type will be deployed with the relevant parameters and added as a migration path. 

_Responsible Parties:_ 

Orbs core team members have designed the migration destination smart contract, and, if approved, will deploy it to the Ethereum blockchain in cases when Orbs tokens worth more than $10,000 are at risk. The Orbs team currently controls the migration manager wallet and will add this new migration destination only upon the approval of the community in this vote.

_Voting:_ 

Standard rules of the Orbs Snapshot.org space.

_Conclusion:_ 

The community should consider approving a policy to use the migration manager role in the Orbs staking contract to assist stakers 
  
