---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/solution-against-snap-fraud/bg.jpg
blogUrl: solution-against-snap-fraud
date: 2019-11-28
title: The Blockchain-Based Solution to SNAP Fraud
author:
  - ../common/authors/NettaKorin.md
type:
short_description: ### About SNAP
---

### About SNAP

The Supplemental Nutrition Assistance Program (SNAP) is the name of the formerly known Food Stamp Program. It is the US Department of Agriculture’s largest program, in terms of both money spent and number of recipients[\[1\]](#_ftn1). It provides food purchasing assistance to low income Americans. According to USDA’s data[\[2\]](#_ftn2), approximately 40 Million individuals of 20 Million households received SNAP in Fiscal Year 2018. The total cost to the US taxpayer is estimated at $65 Billion that year and the average monthly payout was about $125 per participant. Combining these with US household data[\[3\]](#_ftn3), suggests that 15.5%[\[4\]](#_ftn4) of US households received SNAP support at some point in 2018. Astounding as it may be, it is still an improvement compared to 17.3% and 16.6% in Fiscal Years 2016 and 2017, accordingly, as shown in Table 1:

![Table 1: Individuals, households and total Cost of SNAP 2016-2018](/assets/img/blog/solution-against-snap-fraud/Table-Individuals-households-and-total-Cost-of-SNAP-2016-2018-1030x282.png)

Participants in the program are issued with an Electronic Benefits Transfer (EBT) card which functions like an ordinary debit card, except that it can only be used to purchase authorized food items at specific retailers approved by SNAP. The EBT is recharged on a monthly basis with the amount that the participating household is eligible for.

### SNAP Fraud

The most common abuse of SNAP is referred to as “trafficking”. It means an exchange of SNAP benefits for cash, unapproved items or other goods (_e.g._ controlled substances, firearms, ammunition, etc.). In some cases SNAP participants give away their EBT card in exchange for these benefits and then report that it is missing, in order to have a new one issued instead. Certain SNAP participants have outdone it by simply listing their EBTs on eBay and Craigslist[\[5\]](#_ftn5). In other cases, retailers are actively participating in the fraud. In those cases they usually charge the EBT with a certain amount in return for a discounted cash amount, or just overcharge the participant that is looking to purchase unapproved items.

According to the recent SNAP State Activity Report[\[6\]](#_ftn6), $592.7 Million were determined by investigations as “Fraud Dollars” in 2016. One may assume that the amount suspected as fraud, though not “determined by investigations”, was higher. Thes “Fraud Dollars” stand for 0.8% of the overall cost of SNAP that year. While it may be debatable whether 0.8% of fraud is high or not, $592.7 Million of taxpayers money is a lot.

This poses a double problem. First and foremost, families in need, especially those with children, or disabled or elderly participants, are deprived of the nutritional assistance they were intended to receive. Secondly, this malfunction motivates fraudulent activities on the expense of the federal aid funds.

### Is Fraud the Real Problem with US Social Programs?

It seems that SNAP fraud is frequently highlighted in the media, usually, in response to government campaigns warning against it and trying to stop it. Still, is fraud the _real_ problem of US welfare programs?

There are various federal and state social programs in the US. Each serves a unique purpose for meeting different basic needs, _e.g._ housing (Section 8 Housing), healthcare (Medicaid), nutrition (SNAP), cash assistance (TANF) and others. Different executive departments are responsible for different programs, with no single entity overlooking national welfare as a whole. This results in at least two undesired outcomes:

- **Bureaucratic overhead:** Each program has to support its own administration. While it is difficult to determine to what extent each program’s administration overlaps with the others, it would be safe to assume that merging at least some of the overlapping divisions within these administrations under the responsibility of a single entity would improve overall efficiency.
- **Suboptimal national welfare assistance:** Each program sets its own eligibility requirements. In order to receive the benefits of different programs, individuals are required to apply _separately_ for each program. Multiple studies[\[7\]](#_ftn7)[\[8\]](#_ftn8)[\[9\]](#_ftn9)[\[10\]](#_ftn10) suggest that this results in _eligible_ individuals not applying for welfare due to the red tape involved, thus not getting the full support they should have. The result is a national welfare program that is not as efficient as it could and should be.

It might be overly optimistic to assume that such an entity will be established any time soon in the US. However, a first step towards improving overall efficiency should be sharing some information across social programs and relevant executive departments. It can both decrease some of the bureaucratic overlap by improving data transparency and make it a lot easier for individuals to apply for different programs under this unified database.

### Outlines for a Blockchain-based Solution

In a nutshell, blockchain technology allows safe interactions between parties who do not necessarily trust each other. An example for such interaction is selective sharing of relevant information across multiple participating entities in the network. With regard to US welfare programs, this allows each participant in social program(s) to create her own digital identity (containing all her relevant personal details) combined with a cryptographic digital wallet, and share this information selectively with different programs, only as required. Naturally, this calls for the highest standards of data privacy, which will be discussed later on in this post.

#### The platform works as follows:

- John Smith plans on applying for a certain social program. For that purpose, he generates a digital ID and securely uploads all required documents. In addition, a set of digital wallet addresses is generated for John’s future use.
- The application process is straightforward and requires John to provide a secure access to his digital ID to the program administration.
- The program administration then determines whether he is eligible or not for the benefits. Upon his approval as eligible, one of his digital addresses is automatically assigned for receiving the benefits.
- In addition, the approval means that his digital ID (_e_ the documents he uploaded) is authenticated by a social program and can later be used for an easy application to any other social programs.
- An _automated_ process updates John from time to time on his eligibility for additional programs. Upon a match, John can simply apply for other program, by simply sharing his _already_ authenticated digital ID.

Given that certain programs already provide benefits through EBT, the transition to a cryptographic digital wallet will be simplified. In fact, the participants will not notice any difference in their day-to-day use of EBT. Having said that, in order to maximize overall efficiency, more (and eventually all) programs should use the new cryptographic EBT with time. There are several advantages for the cryptographic wallet:

- It allows generating multiple addresses, all under the same master wallet, each for a different social program, if required
- As additional programs use EBT, its importance increases for the participants. As a direct result, it is less likely that those individuals will tend to illegally exchange them for cash, thus a positive externality may be reduced SNAP trafficking
- Lastly, as far-fetched as it may be right now, these cryptographic EBT wallets may possible serve as alternative bank accounts for individuals receiving social benefits and who are considered as “unbankable”

Naturally, this is merely a general concept at a very preliminary phase.

### User Privacy

The cornerstone of this conceptual platform is the guarantee of user privacy. Consequently, certain aspects in our suggested platform require special attention. Both aspects are mandatory for providing sufficient privacy:

- User identity - no documents will be stored on the platform, only their hashes will. This allows unequivocal authentication and user identification, without exposing _any_ of the participant’s personal details. We will not go into the technicalities of hash functions herein.
- Transaction anonymity - this part is a bit more complicated. We identify two types of users:
  - Program administrations, who must get access to transaction details of their participants, in order to transfer benefits and enforce policy, _g._ which food items can or cannot be purchased, which retailers are part of the program or not, etc.
  - All other users, who should not get any type of other participants’ transaction data

This can be carried out using certain privacy protocols that mask the participant’s transaction in a way that only certain users can track it.

Another aspect that we will not delve into at this point, but also requires attention, is improving EBT and digital ID access security. Obviously, the card itself along with the PIN code are not secure enough and as more programs use the new EBT, additional measures will be required to ensure they are not hacked. We have some concepts for overcoming this, and will further discuss them in future posts.

## Conclusion

There is no doubt that SNAP fraud is a hot topic that provokes a wider debate on US welfare program. In my opinion, a more interesting debate should focus on whether this is the _main_ problem of the US welfare program. Either way, while the concept of a new blockchain-based solution might seem at first groundbreaking, in many key aspects it is based on upgrading current infrastructure (EBT) combined with new concepts (Digital ID). We consider it as another example in which blockchain technology inspires us to think outside the box about new solutions to old problems. In this particular case it may even kill two birds with one stone - both improving US welfare and curtailing fraud.

...

Hexa Foundation is a non-profit organization focused on using blockchain to create social impact. Part of the Orbs Group, Israel’s largest blockchain group, Hexa Foundation aims to use blockchain for social impact, harnessing the technology to help solve the region’s – and the world’s – most pressing humanitarian problems. **To learn more visit [www.hexa.org.](https://www.hexa.org/)**

...

#### References

[\[1\]](#_ftnref1) [https://www.usda.gov/oig/webdocs/IGtestimony180926.pdf](https://www.usda.gov/oig/webdocs/IGtestimony180926.pdf)

[\[2\]](#_ftnref2) [https://www.fns.usda.gov/pd/supplemental-nutrition-assistance-program-snap](https://www.fns.usda.gov/pd/supplemental-nutrition-assistance-program-snap)

[\[3\]](#_ftnref3) [https://www.census.gov/data/tables/time-series/demo/families/households.html](https://www.census.gov/data/tables/time-series/demo/families/households.html)

[\[4\]](#_ftnref4) Other analyses suggest that “only” 9.2% of all US households participated in SNAP in 2018. See [https://econofact.org/snap-benefits-and-the-government-shutdown](https://econofact.org/snap-benefits-and-the-government-shutdown)

[\[5\]](#_ftnref5)[https://www.washingtontimes.com/news/2012/may/24/govt-taking-new-steps-combat-food-stamp-fraud/](https://www.washingtontimes.com/news/2012/may/24/govt-taking-new-steps-combat-food-stamp-fraud/)

[\[6\]](#_ftnref6) [https://fns-prod.azureedge.net/sites/default/files/snap/FY16-State-Activity-Report.pdf](https://fns-prod.azureedge.net/sites/default/files/snap/FY16-State-Activity-Report.pdf)

[\[7\]](#_ftnref7) [https://academic.oup.com/jpart/article-abstract/20/4/827/1000431](https://academic.oup.com/jpart/article-abstract/20/4/827/1000431)

[\[8\]](#_ftnref8)[https://www.povertyactionlab.org/sites/default/files/publications/3874_The-Effect-of-Info-and-Application-Assistance-onTake-Up_SNAP_February2018.pdf](https://www.povertyactionlab.org/sites/default/files/publications/3874_The-Effect-of-Info-and-Application-Assistance-onTake-Up_SNAP_February2018.pdf)

[\[9\]](#_ftnref9) [https://www.aeaweb.org/articles?id=10.1257/pol.3.1.54](https://www.aeaweb.org/articles?id=10.1257/pol.3.1.54)

[\[10\]](#_ftnref10) [https://www.nber.org/papers/w10488](https://www.nber.org/papers/w10488)
