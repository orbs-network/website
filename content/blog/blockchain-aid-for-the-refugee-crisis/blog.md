---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/blockchain-aid-for-the-refugee-crisis/bg.jpg
blogUrl: blockchain-aid-for-the-refugee-crisis
date: 2019-06-04
title: Blockchain Aid for the Refugee Crisis
author:
  - ../common/authors/NettaKorin.md
type:
short_description: Can blockchain technology help alleviate the strain of the global refugee crisis on both refugees and host countries? I think so.
---

**Can blockchain technology help alleviate the strain of the global refugee crisis on both refugees and host countries? I think so.**

At the Hexa Foundation, our focus is using blockchain for social impact. One example of this impact is using the technology to create a platform that will help countries and refugees alike. According to the UN Refugee Agency (UNHCR), by the end of 2017, there were 71.4m refugees worldwide, compared to 21.1m at the end of 2005. This crisis is a major concern for governments and NGOs alike, not only from a humanitarian perspective but also from economic and geopolitical perspectives. Recent refugee crises, such as the ones in Syria (6.3M), Afghanistan (2.6M), South Sudan (2.4M), Myanmar (1.2M), and Somalia (1.0M) have gained public attention calling governments to respond. The United States is facing unprecedented numbers of migrants from Central America.  This past April close to 99,000 people crossed the southwest border of Texas.  This has resulted in a crisis situation whereby the government is overwhelmed and unable to even process the number of migrants crossing at their point of entry.

### **This global refugee crisis encapsulates the following key challenges:**

- Difficulties in tracking and sharing refugee migration data among governments and NGOs - an issue for example since governments and aid organizations do not always know which country the refugee has entered before arriving in their jurisdiction, or if/from whom they have received aid prior to entering the country
- Lack of valid identity documents (IDs) of refugees - this leads to the inability to track aid funds, and also the inability to help refugees function within their society

There are global initiatives led by the UN, such as Migration Data Portal and Global Compact for Migration (GCM), and the Internal Displacement Monitoring Center (IDMC). Both of these initiatives are collecting data in order to build a global database to help tackle the crisis. However, while the former is still in its very early stages, the latter focuses on internally displaced persons only, not on the broader definition of refugees (refugees, asylum-seekers, internally displaced persons, returnees, or stateless persons). Still, we believe that both platforms’ main hindrance is that they are both centralized systems. As such, aid organizations are not incentivized to share information. This results in a fragmented solution in which each organization only trusts itself, and the overall aid is far from optimal. What if a blockchain-based solution could tackle the challenges mentioned above and provide a transparent infrastructure that governments and NGOs alike could easily adopt and share? Imagine a biometric platform deployed as a permissioned/consortium blockchain, meaning that there are certain restrictions on joining as a node and accessing data, in order to tackle privacy concerns. The nodes may be national immigration services, border checkpoints or aid organizations. They will be the ones that carry out the enrollment and identification process, including writing new identities on the blockchain as a proof of registration and authentication. The nodes are also users on the blockchain, meaning that they interact with the refugee in the form of transactions. The proposed platform would entail the following steps for refugees declaring themselves at a border checkpoint:

1. **Enrollment** - regardless of whether the person obtains an official ID or not, she enrolls in the biometric identity platform, _i.e._ a new biometric ID is generated on the spot along with a cryptographic wallet. This wallet stores the new ID and all other relevant metadata, e.g. location, time, additional documents provided by the refugee, relatives, etc.
2. **Identification** - once the biometric ID is available, the checkpoint tries to identify the individual, to verify whether there are no other matching IDs on the ledger
3. **Data transmission** - the individual makes her first transaction on the blockchain, in which she sends all that info to the checkpoint. The data is encrypted so that only both sides can read it. All other nodes will only be able to verify that there has been a transaction between user X to node Y at time Z. They know where node Y is located, and they are able to extract from this transaction the cryptographic digest of the biometric identity. This allows them to look for a match when they generate a new biometric identity for a refugee

Once all three steps are done, the refugee may be referred to the next steps of the “standard” procedure, according to the receiving state’s immigration policy. There are many benefits to this platform, stemming from core features of blockchain:

- Efficient end-to-end process
- Refugees get a new immutable digital ID proving their existence and documenting their asylum request
- Multi-purpose new ID with immediate use and additional uses down the road, e.g. cryptographic wallet
- Secure platform providing refugees with the maximal level of privacy
- Information is easily shared **_only_** among nodes on border checkpoints and humanitarian aid organizations. Therefore, in special situations, e.g. locating lost family members, the process is fast, simple and easy location of lost family members at the receiving state
- Each checkpoint can easily track the number of refugees it has assisted. In that manner, national immigration services can easily aggregate accurate data from all checkpoints, in real-time
- Receiving states and aid organizations can better track and monitor refugees influx and improve cooperation

The most basic feature of this platform concerns the access level to individuals’ private data. Obviously, privacy is a difficult subject to navigate, however, It could be argued that it is only reasonable that once an individual arrives at a checkpoint asking for asylum, that checkpoint (and the immigration service that it represents) is entitled to maintain full access to her personal data. Furthermore, in order to provide the refugee the opportunity for a fresh start at the receiving state, it _has_ to hold her biometric identifying data, as it does for its residents. Still, checkpoints from other countries are most definitely not entitled to access that data, for privacy considerations. They will only gain access to the “public” data, _i.e._ individuals’ arrival at different checkpoints (nodes) at certain times. Modern cryptography is fully capable of providing this kind of data access differentiation. This suggested platform will run over a permissioned blockchain, in which nodes must be approved prior to joining the network. Only government agencies or recognized aid organizations could become nodes, thus making sure that private information does not fall into the wrong hands. On the transaction level, the data is encrypted and can only be accessed using a private key, which is held by the individual only. This means that nodes have full info only on the transactions (_i.e._ refugees) that they were part of. Consequently, each checkpoint does not know the identities of refugees who went through a neighboring checkpoint, **they only know that they were there**. This solution prevents data breaches, as even if someone manages to imposter as a legitimate node, all they get access to is a ledger of encrypted transactions. The data is encrypted by so many different entities, and each has access to only a small portion of it.

...

Of all the potential positives that blockchain can enable, improving the efficiency of government-related services is among the most prominent. A blockchain-based global database could be a forward thinking and innovative approach towards helping the global effort to manage the refugee crisis. It has great potential to aid multiple governments, while also making the day to day lives of documented and undocumented refugees logistically more comfortable. Furthermore, this platform can be a key strategic element to solving a global humanitarian problem and improving the lives of the weakest individuals in our society. It may not be perfect, but as they say:  the enemy of the good is the perfect. At the Hexa Foundation, our aim is to use blockchain technology to create social impact.

**To learn more visit [www.hexa.org](https://www.hexa.org)**
