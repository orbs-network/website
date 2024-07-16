---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/OIP-6-Relief-for-Multichain-bridged-ORBS-Token-Holders/bg.jpg
blogUrl: OIP-6-Relief-for-Multichain-bridged-ORBS-Token-Holders
date: 2023-09-21
title: "OIP-6: Relief for Multichain-bridged ORBS Token Holders"
author:
  - /blog/common/authors/MatanErder.md
type:
short_description: "The Orbs team has submitted a new draft OIP, with a proposal to offer relief to multi-chain bridged ORBS token holders on BNB Chain, Avalanche and Fantom, and offer them the option to replace these tokens with the new Axelar-bridged ORBS tokens"
---

Since 2022, the Orbs project has undergone a process of transition to community governance for major network decisions, including the introduction of Orbs Improvement Proposals, the official process for suggestions to improve the project.

The Orbs team has submitted a new draft OIP, with a proposal to offer relief to multi-chain bridged ORBS token holders on BNB Chain, Avalanche and Fantom, and offer them the option to replace these tokens with the new Axelar-bridged ORBS tokens

This draft OIP can be viewed here:
https://github.com/orbs-network/OIPs/issues/7

We welcome you to review the draft and make comments and suggestions, whether by adding comments in Github or discussing on [Telegram](https://t.me/OrbsNetwork) or in the governance page of the Orbs [discord](https://discord.com/channels/829255795827933236/1004049084597928017). The discussion is planned to continue for a period of about 1 week, so please feel free to make your contributions.

Once rough consensus has been reached on final language for OIP-6, the team will present the final draft as a governance vote on Snapshot for the approval of the entire Orbs PoS Universe.
We look forward to another productive and substantive discussion.


<div class='line-separator'> </div>



### Draft: OIP-6: Relief for Multichain-bridged ORBS Token Holders 

_Category:_ 

Governance, Development, Project Resources

_Description_

Over the past two years, the Orbs project has seen a major expansion of its ecosystem as it has established itself as part of the world of DeFi. At the foundation of this expansion, which makes Orbs’ integration across the world of DeFi possible, is the bridging of the ORBS token from its original home on Ethereum to other chains.

For several alternative chains - specifically, BNB Chain, Avalanche and Fantom - the bridge was provided by the Multichain project. As has been [reported](https://cointelegraph.com/news/multichain-stops-operations-over-lack-of-funds) in the media, Multichain has ceased operations and the bridges are no longer reliably functional. 

In order to respond to this situation, new bridges to these three chains provided by [Axelar](https://www.orbs.com/Orbs-integrates-with-Satellite-by-Axelar/) have been recently opened. This has resulted in the creation of a new official ORBS token contract on each of these chains. In parallel, various ORBS-token infrastructure (such as liquidity pools on various DEXs) are being updated to utilize the new ORBS tokens and replace the previous ones. 

However, token holders who hold the old version of the ORBS tokens bridged via Multichain are currently holding ORBS tokens that may no longer have any function on the new chain and also are not bridgeable back to Ethereum. Accordingly, it is proposed to develop a mechanism to relieve this situation and allow these holders to exchange the previous bridged ORBS Tokens with the new version. 

The mechanism will be a smart contract, deployed to each of the affected chains, that will allow holders of a bridged Multichain token to exchange them for the new, updated version of the ORBS Token on a 1:1 basis. Anyone holding Multichain-bridged ORBS tokens will be able to send those tokens to the smart contract and receive a corresponding amount of Axelar-bridged ORBS tokens to the same sending wallet. 

If the community approves, the Orbs core team will develop and deploy this smart contract. The smart contract will then be funded with new tokens that will be removed from the Long-Term Reserve Pool, bridged to the affected chains via Axelar and deposited in the smart contract. The amount of tokens needed to provide relief to all affected holders who are not affiliated with the project is approximately 4 million. 

Project tokens that were bridged for purposes of facilitating liquidity pools or other DeFi infrastructure on the affected chains will not participate.

_Benefits_

The Orbs project is, at its root, community driven. When something happens that harms community members, the project community should do what it can (within reason) to help. This will benefit the project as a whole by demonstrating that the Orbs project community takes care of its members and is a good actor in the space. 

Furthermore, in this case, the entire ecosystem benefits from having participants across a variety of blockchains. Failing to provide a solution for current Multichain-bridged ORBS tokens would remove these holders from the ecosystem and the project.  

Deploying this solution would preserve significant value for token holders and demonstrate that the Orbs community solves issues facing its members.  

_Risks:_ 
There is always a risk of a mistake or bug in the smart contract. Although Orbs developers will perform tests and simulations and believe that the code is functioning properly, a mistake or bug could cause the smart contract to either fail to deliver the tokens to entitled holders or allow someone who is not entitled to withdraw them instead. 

Another negative element to disclose is that this use of reserve tokens would increase the total number of ORBS tokens in the circulating supply. However, in relation to the overall circulation, the number of required tokens is minimal. 

_Specification:_ 

The exchange smart contract is under development and will be available on Github.

_Responsible Parties:_  

Orbs core team members will design the exchange smart contract, and, if approved, will deploy it to the BNB Chain, Avalanche and Fantom blockchains. The Orbs team will utilize ORBS tokens from the Long-Term Reserve Pool.

_Voting:_  

Standard rules of the Orbs Snapshot.org space.

_Conclusion:_ 

The community should consider approving the use of 4,000,000 Long-Term Reserve Pool tokens to create a mechanism for holders of Multichain-bridged tokens on BNB Chain, Fantom and Avalanche to exchange these tokens for new ORBS tokens bridged to these chains via Axelar. 




