---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/blockchain-to-eliminate-voter-fraud/bg.png
blogUrl: blockchain-to-eliminate-voter-fraud
date: 2020-12-17
title: Blockchain to Eliminate Voter Fraud
author:
  - /blog/common/authors/NettaKorin.md
type:
short_description: "including solid advice on how to address concerns of domestic voter fraud. And yet, here we are again. Sadly, there have been multiple instances of fraud claims in America across the years: "
---

, including solid advice on how to address concerns of domestic voter fraud. And yet, here we are again. Sadly, there have been multiple instances of fraud claims in America across the years:

- Barack Obama in his first campaign for Senate in 2008 knocked his opponents off the ballot for his senate race by invalidating the voting petition signatures of three of his challengers (one of them was the incumbent) \[3\].
- In 2016 a group of activists urged Hillary Clinton to challenge the results of the presidential election in the states of Wisconsin, Michigan and Pennsylvania, and urged for a recount claiming that election results in those states could have been manipulated or hacked \[4\].
- Before the 2016 elections, supporters of both sides raised alarm bells about voting machines which are easily hacked within a few minutes \[5\]\[6\].
- In 2020, Trump supporters claimed fraudulent votes of people long passed,  double voting by the use of maiden names, and more.

The above examples highlight two very concerning examples of voter fraud - specifically identity theft and machine hacking.  At the Hexa Foundation, we believe that blockchain technology can help eliminate both, while preserving voter anonymity.

Perhaps Americans on both sides of the aisle have had enough with being unsure as to the validity of the results of their elections. Shy of adopting the more primitive approach to voting of one finger dipped in dye per one vote cast, it may be time to clean house and create a system in which all people have confidence. A system that allows for transparency and trust.

Securing this kind of system would be an immense challenge given all that is at stake. Its bread and butter would naturally be network security in order to prevent external intervention in voting data. However, this is an obvious element and challenging as it may be, it doesn’t fully address the fraud allegations that we mentioned above which repeatedly turn up each election.

Preventing identity theft is probably the easiest use case for blockchain. This problem may be summarized in one of two undesired outcomes: either an individual can not cast her legitimate vote due to the fact that someone else has already voted on her behalf, or individuals illegally cast multiple votes, _e.g._ using an individual’s maiden name to cast an additional vote, stealing a deceased individual’s identity to vote, or multiple other manipulations. This problem is known in the blockchain jargon as “double spending”, and we can safely say that it has been solved, and can not occur if using blockchain.

In a nutshell, blockchain protocols allow digital scarcity in various shapes and forms. Regardless of what is transferred they rely on consensus algorithms to make sure, _before_ the transaction is carried out, that whenever Alice tries to send X items to Bob, she has _at least_ X items. In our case, each individual who is entitled to vote will have a balance of a single vote in his voting platform wallet. Once the vote is cast, that would be it.

Of course, for the system to work, each individual needs a unique ID identifier, which is currently not the case in the US. Therefore, this unique ID may be linked to the individual’s SSN and those who do not have it would be required to provide other means of identification in order to be registered to vote. The subsequent call for action would not only be issuing these digital wallets based on the current voters ledger, but also making sure that it is frequently and properly updated. This would prevent potential frauds, such as issuing a wallet to a deceased person. It doesn’t matter whether a federal bureau (e.g. the Census Bureau) or state secretaries are responsible for it, as long as the voter ledger is maintained and is up to date.

The next example of fraud, hackable voting machines, can be solved with the use of the advanced cryptography that blockchain is based on. Though the gritty details are beyond the scope of this blog post, a general description will highlight the full potential:

Blockchain is a distributed database, however it may also be looked upon as a sophisticated messaging system that allows sharing information with other participants, each at a different access level. This introduces an innovative and useful feature that is one’s ability to prove that she _has_ a certain piece of information, without sharing _what_ it is. Combined with blockchain’s immutability the platform may overcome hacked voting machines, as follows:

- Alice votes for candidate A at a “clean” voting machine. Her vote is cast _simultaneously_ to the electoral general ledger _and_ to her cryptographical wallet. Furthermore, she receives a cryptographically signed confirmation that her vote for candidate A was successfully cast.
- Bob votes for candidate A, however, he doesn’t know that the voting machine he’s using is rigged by hackers and casts a vote for Candidate B instead. Same as Alice, after voting he is immediately notified that his vote for _candidate B_ was successfully cast. In that case, he could _immediately_ notify the election committee that something is wrong. As explained above, he is able to prove **_on the spot_** that the wrong vote was cast on his behalf, **_without(!)_** revealing what his vote was \[7\].

From the user’s perspective, these features would be trivial. The cryptographic wallet would be accessible on the internet, preferably using a smartphone in order to verify votes on the spot, but not necessarily. The private key, which provides the access to the user’s wallet could be secured with a combination of elements, ID, passwords, etc., to prevent identity theft.

Election integrity is among the key preconditions for democracy. It is a base foundation of a government’s legitimacy and, thus, the reason that individuals are willing to surrender certain aspects of their freedoms to it, under the social contract theory.  It is easy to laugh off election results of “democracies” in which rulers are elected at a +99% of voters majority.  However, what about so-called _genuine_ democracies? Should the people not be able to fully trust election results there?  The Heritage Foundation provides information on thousands of instances of voter fraud in the US alone \[8\].  If the right steps are taken, future generations will feel secure that their leaders were indeed voted into office truthfully.

Fraud, to some extent, is inevitable at events of such magnitude, complexity and stakes. It would indeed be interesting to know whether fraud has tipped the scale in past elections. However, it is much more important to make sure that it never happens again and that election integrity is maintained at all costs. The solution involves multiple technologies, blockchain is one.

...

#### References

\[1\] [https://edition.cnn.com/2019/046/us/hart-family-crash-inquest-searches/](https://www.nytimes.com/2018/09/06/us/election-security-expert-panel.html)

\[2\] [https://www.nytimes.com/2020/10/18/us/elections/voting-machines-paper-ballots.html](https://www.nytimes.com/2020/10/18/us/elections/voting-machines-paper-ballots.html)

\[3\] [https://edition.cnn.com/2008/POLITICS/05/29/obamas.first.campaign/](https://edition.cnn.com/2008/POLITICS/05/29/obamas.first.campaign/)

\[4\] [https://nymag.com/intelligencer/2016/11/activists-urge-hillary-clinton-to-challenge-election-results.html](https://nymag.com/intelligencer/2016/11/activists-urge-hillary-clinton-to-challenge-election-results.html)

\[5\] [https://www.theguardian.com/tv-and-radio/2020/mar/26/kill-chain-hbo-election-hacking-documentary](https://www.theguardian.com/tv-and-radio/2020/mar/26/kill-chain-hbo-election-hacking-documentary)

\[6\] [https://twitter.com/JustinGrayWSB/status/1042087535575531525](https://twitter.com/JustinGrayWSB/status/1042087535575531525)

\[7\] Our underlying assumption is that the network isn’t compromised, which is a precondition for the integrity of any digital voting platform

\[8\] [https://www.heritage.org/voterfraud](https://www.heritage.org/voterfraud)

...(/assets/img/blog/blockchain-to-eliminate-voter-fraud/Screen-Shot-2020-11-08-at-9.39.27.png)

**Hexa Foundation** is a nonprofit organization focused on using blockchain to create social impact. The organization was co-founded by Netta Korin, also co-founder of Orbs, Israel’s largest blockchain infrastructure company.  Netta comes to the Foundation following years of experience in business, government and non-profit industries. **Netta** worked as a Senior Advisor in the Israeli Ministry of Defense to General Yoav (Poly) Mordechai, Head of CoGAT. Prior to that position, Netta worked as a Senior Advisor to Deputy Minister Dr. Michael Oren in the Prime Minister’s Office in Israel, focusing on Palestinian issues. Netta has held board positions in several non-profit foundations in both Israel and the United States. The Hexa Foundation aims to use blockchain for social impact and harness the mind power of our ecosystem and network to help solve the region’s and the world’s most pressing humanitarian problems.

**For more information please contact Netta Korin** ([netta@hexa.org](mailto:netta@hexa.org))

...

_**© All Rights Reserved to Hexa Foundation Ltd. (CC)**_

_The Hexa Foundation Ltd. (CC) permits the free use of this document, subject to the conditions set forth below._ _The use of this document is permitted for private and personal use only. It is prohibited to copy and to use, or allow others to use, this document for any purpose, whether commercial or non-commercial, other than private and personal use._ _The contents of this document are permitted for use on an as-is basis. The reader or any third party shall not have any claim or demand against Hexa Foundation Ltd. (CC) with respect to any of the contents of this document. Hexa Foundation Ltd. (CC), including its employees and representatives, shall not have any liability for any damage to the reader or any third party that occurs, directly or indirectly, as a result of the use of this document or the information contained therein._
